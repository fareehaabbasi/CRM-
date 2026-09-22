import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import ClientCard from "./ClientCard";

const ClientTable = ({
  clients,
  onViewClient,
  onEditClient,
  onDeleteClient,
}) => {
  if (clients.length === 0) {
    return (
      <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center">
        <p className="text-sm font-medium text-slate-600">No clients found</p>

        <p className="mt-1 text-sm text-slate-400">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

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
    <div className="mt-6">
      {/* Mobile Cards */}
      <div className="space-y-3 md:hidden">
        {clients.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
            onViewClient={onViewClient}
            onEditClient={onEditClient}
            onDeleteClient={onDeleteClient}
          />
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Client
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Company
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Service
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Channel
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Follow-up
                </th>

                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {clients.map((client) => (
                <tr key={client.id} className="transition hover:bg-slate-50">
                  {/* Client */}
                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-slate-800">
                      {client.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {client.email || "No email"}
                    </p>
                  </td>

                  {/* Company */}
                  <td className="px-5 py-4 text-sm text-slate-600">
                    {client.company || "—"}
                  </td>

                  {/* Service */}
                  <td className="px-5 py-4 text-sm text-slate-600">
                    {client.service || "—"}
                  </td>

                  {/* Channel */}
                  <td className="px-5 py-4 text-sm text-slate-600">
                    {client.channel || "—"}
                  </td>

                  {/* Status */}
                  <td
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${getStatusClasses(
                      client.status,
                    )}`}
                  >
                    {client.status}
                  </td>

                  {/* Follow-up */}
                  <td className="px-5 py-4 text-sm text-slate-600">
                    {client.followUpDate || "—"}
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-1">
                      <button
                        onClick={() => onViewClient(client)}
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600"
                        aria-label="View client"
                      >
                        <Eye size={17} />
                      </button>

                      <button
                        onClick={() => onEditClient(client)}
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600"
                        aria-label="Edit client"
                      >
                        <Pencil size={17} />
                      </button>

                      <button
                        onClick={() => onDeleteClient(client.id)}
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                        aria-label="Delete client"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientTable;
