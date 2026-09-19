import React from "react";
import { CalendarDays, Clock, AlertCircle } from "lucide-react";

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

    const overdueClients = clients.filter((client) => {
        const date = getFollowUpDate(client.followUpDate);
        return date && date < today;
    });

    const todayClients = clients.filter((client) => {
        const date = getFollowUpDate(client.followUpDate);
        return date && date.getTime() === today.getTime();
    });

    const tomorrowClients = clients.filter((client) => {
        const date = getFollowUpDate(client.followUpDate);
        return date && date.getTime() === tomorrow.getTime();
    });

    const renderClient = (client) => (
        <button
            key={client.id}
            onClick={() => onViewClient(client)}
            className="flex w-full items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-left transition hover:border-indigo-200 hover:bg-indigo-50"
        >
            <div>
                <p className="text-sm font-medium text-slate-800">
                    {client.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                    {client.company || "No company"}
                </p>
            </div>

            <span className="text-xs text-indigo-600">
                {client.followUpDate}
            </span>
        </button>
    );

    return (
        <div className="mt-8">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-slate-800">
                    Follow-ups
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Keep track of your upcoming and overdue follow-ups.
                </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">

                {/* Overdue */}
                <div className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-xl bg-rose-50 p-2.5 text-rose-500">
                            <AlertCircle size={19} />
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-800">
                                Overdue
                            </h3>

                            <p className="text-xs text-slate-500">
                                {overdueClients.length} follow-up
                                {overdueClients.length !== 1 && "s"}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {overdueClients.length > 0 ? (
                            overdueClients.map(renderClient)
                        ) : (
                            <p className="text-sm text-slate-400">
                                No overdue follow-ups.
                            </p>
                        )}
                    </div>
                </div>

                {/* Today */}
                <div className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-xl bg-indigo-50 p-2.5 text-indigo-500">
                            <CalendarDays size={19} />
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-800">
                                Today
                            </h3>

                            <p className="text-xs text-slate-500">
                                {todayClients.length} follow-up
                                {todayClients.length !== 1 && "s"}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {todayClients.length > 0 ? (
                            todayClients.map(renderClient)
                        ) : (
                            <p className="text-sm text-slate-400">
                                No follow-ups today.
                            </p>
                        )}
                    </div>
                </div>

                {/* Tomorrow */}
                <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-xl bg-blue-50 p-2.5 text-blue-500">
                            <Clock size={19} />
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-800">
                                Tomorrow
                            </h3>

                            <p className="text-xs text-slate-500">
                                {tomorrowClients.length} follow-up
                                {tomorrowClients.length !== 1 && "s"}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {tomorrowClients.length > 0 ? (
                            tomorrowClients.map(renderClient)
                        ) : (
                            <p className="text-sm text-slate-400">
                                No follow-ups tomorrow.
                            </p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FollowUpSection;