import React from "react";
import { Eye, Pencil, Trash2, Building2, CalendarDays } from "lucide-react";

const ClientCard = ({ client, onViewClient, onEditClient, onDeleteClient }) => {
  const getStatusClasses = (status) => {
    switch (status) {
      case "New":
        return "bg-slate-100 text-slate-600";

      case "Contacted":
        return "bg-sky-50 text-sky-600";

      case "Replied":
        return "bg-indigo-50 text-indigo-600";

      case "Interested":
        return "bg-amber-50 text-amber-600";

      case "Client":
        return "bg-emerald-50 text-emerald-600";

      case "Not Interested":
        return "bg-red-50 text-red-600";

      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* Client Info */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-slate-800">
            {client.name}
          </h3>

          <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
            <Building2 size={14} />
            <span className="truncate">{client.company || "No company"}</span>
          </div>
        </div>

        {/* Status */}
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${getStatusClasses(
            client.status,
          )}`}
        >
          {client.status}
        </span>
      </div>

      {/* Details */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs text-slate-400">Service</p>
          <p className="mt-1 text-sm font-medium text-slate-700">
            {client.service || "—"}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-400">Channel</p>
          <p className="mt-1 text-sm font-medium text-slate-700">
            {client.channel || "—"}
          </p>
        </div>
      </div>

      {/* Follow-up */}
      {client.followUpDate && (
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5">
          <CalendarDays size={15} className="text-indigo-500" />

          <div>
            <p className="text-xs text-slate-400">Follow-up</p>
            <p className="text-sm font-medium text-slate-700">
              {client.followUpDate}
            </p>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4">
        <button
          onClick={() => onViewClient(client)}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
        >
          <Eye size={16} />
          View
        </button>

        <button
          onClick={() => onEditClient(client)}
          className="flex items-center justify-center rounded-xl bg-slate-50 p-2.5 text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
          aria-label="Edit client"
        >
          <Pencil size={16} />
        </button>

        <button
          onClick={() => onDeleteClient(client.id)}
          className="flex items-center justify-center rounded-xl bg-slate-50 p-2.5 text-slate-600 transition hover:bg-red-50 hover:text-red-600"
          aria-label="Delete client"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default ClientCard;
