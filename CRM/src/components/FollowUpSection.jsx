import React from "react";
import {
  CalendarDays,
  Clock,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const FollowUpSection = ({ clients, onViewClient }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const getFollowUpDate = (date) => {
    if (!date) return null;

    const followUp = new Date(date + "T00:00:00");
    followUp.setHours(0, 0, 0, 0);

    return followUp;
  };

  // Only show active leads in follow-ups
  const activeClients = clients.filter(
    (client) =>
      client.status !== "Not Interested" &&
      client.status !== "Client",
  );

  const overdueClients = activeClients.filter((client) => {
    const date = getFollowUpDate(client.followUpDate);
    return date && date < today;
  });

  const todayClients = activeClients.filter((client) => {
    const date = getFollowUpDate(client.followUpDate);
    return date && date.getTime() === today.getTime();
  });

  const tomorrowClients = activeClients.filter((client) => {
    const date = getFollowUpDate(client.followUpDate);
    return date && date.getTime() === tomorrow.getTime();
  });

  const renderClient = (client) => (
    <button
      key={client.id}
      onClick={() => onViewClient(client)}
      className="flex w-full items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-left transition hover:border-indigo-200 hover:bg-indigo-50"
    >
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-slate-800">
          {client.name}
        </p>

        <p className="mt-1 truncate text-xs text-slate-500">
          {client.company || "No company"}
        </p>
      </div>

      <span className="ml-4 shrink-0 text-xs font-medium text-indigo-600">
        {client.followUpDate}
      </span>
    </button>
  );

  const renderEmpty = (message) => (
    <div className="flex min-h-[100px] items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4">
      <p className="text-sm text-slate-400">{message}</p>
    </div>
  );

  return (
    <section className="mt-10">
      {/* Section Header */}
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-slate-800">
          Follow-ups
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Stay on top of your upcoming and overdue conversations.
        </p>
      </div>

      {/* Follow-up Cards */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Overdue */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle size={18} className="text-red-500" />

              <h3 className="font-medium text-slate-800">
                Overdue
              </h3>
            </div>

            <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-600">
              {overdueClients.length}
            </span>
          </div>

          <div className="space-y-2">
            {overdueClients.length > 0
              ? overdueClients.map(renderClient)
              : renderEmpty("No overdue follow-ups")}
          </div>
        </div>

        {/* Today */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarDays size={18} className="text-indigo-500" />

              <h3 className="font-medium text-slate-800">
                Today
              </h3>
            </div>

            <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600">
              {todayClients.length}
            </span>
          </div>

          <div className="space-y-2">
            {todayClients.length > 0
              ? todayClients.map(renderClient)
              : renderEmpty("No follow-ups today")}
          </div>
        </div>

        {/* Tomorrow */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-amber-500" />

              <h3 className="font-medium text-slate-800">
                Tomorrow
              </h3>
            </div>

            <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-600">
              {tomorrowClients.length}
            </span>
          </div>

          <div className="space-y-2">
            {tomorrowClients.length > 0
              ? tomorrowClients.map(renderClient)
              : renderEmpty("No follow-ups tomorrow")}
          </div>
        </div>
      </div>

      {/* No Follow-ups At All */}
      {overdueClients.length === 0 &&
        todayClients.length === 0 &&
        tomorrowClients.length === 0 && (
          <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-3">
            <CheckCircle2 size={16} className="text-slate-400" />

            <p className="text-xs text-slate-400">
              You're all caught up. No follow-ups need your attention.
            </p>
          </div>
        )}
    </section>
  );
};

export default FollowUpSection;