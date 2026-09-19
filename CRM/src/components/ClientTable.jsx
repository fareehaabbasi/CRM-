import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

const ClientTable = ({
  clients,
  onViewClient,
  onEditClient,
  onDeleteClient,
}) => {
  if (clients.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
        <h3 className="text-lg font-semibold text-slate-700">
          No clients yet
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Add your first client to start tracking your outreach.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Client
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Company
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Service
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Channel
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Follow-up
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {clients.map((client) => (
              <tr
                key={client.id}
                className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-800">
                    {client.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {client.email || "No email"}
                  </p>
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {client.company || "-"}
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {client.service || "-"}
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {client.channel || "-"}
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                    {client.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {client.followUpDate || "-"}
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onViewClient(client)}
                      title="View"
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-indigo-600"
                    >
                      <Eye size={17} />
                    </button>

                    <button
                      onClick={() => onEditClient(client)}
                      title="Edit"
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-indigo-600"
                    >
                      <Pencil size={17} />
                    </button>

                    <button
                      onClick={() => onDeleteClient(client.id)}
                      title="Delete"
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-rose-50 hover:text-rose-600"
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
  );
};

export default ClientTable;