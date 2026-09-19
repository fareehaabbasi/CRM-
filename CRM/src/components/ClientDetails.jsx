import React from "react";
import { X } from "lucide-react";

const ClientDetails = ({ client, onClose }) => {
  if (!client) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 px-4 py-6 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">
              Client Details
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Complete information about this client.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Details */}
        <div className="grid gap-5 px-6 py-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium text-slate-400">Name</p>
            <p className="mt-1 text-sm font-medium text-slate-800">
              {client.name || "-"}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">Company</p>
            <p className="mt-1 text-sm text-slate-700">
              {client.company || "-"}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">Email</p>
            <a
              href={`mailto:${client.email}`}
              className="mt-1 block text-sm text-indigo-600 hover:underline"
            >
              {client.email || "-"}
            </a>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">WhatsApp</p>
            <a
              href={`https://wa.me/${client.whatsapp?.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-indigo-600 hover:underline"
            >
              {client.whatsapp || "-"}
            </a>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">Website</p>
            <a
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block break-all text-sm text-indigo-600 hover:underline"
            >
              {client.website || "-"}
            </a>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">Business Type</p>
            <p className="mt-1 text-sm text-slate-700">
              {client.businessType || "-"}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">Location</p>
            <p className="mt-1 text-sm text-slate-700">
              {client.location || "-"}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">Service</p>
            <p className="mt-1 text-sm text-slate-700">
              {client.service || "-"}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">
              Outreach Channel
            </p>
            <p className="mt-1 text-sm text-slate-700">
              {client.channel || "-"}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">Status</p>

            <span className="mt-1 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
              {client.status || "New"}
            </span>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">Follow-up Date</p>
            <p className="mt-1 text-sm text-slate-700">
              {client.followUpDate || "-"}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">LinkedIn</p>
            <a
              href={client.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block break-all text-sm text-indigo-600 hover:underline"
            >
              {client.linkedin || "-"}
            </a>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">Instagram</p>
            <a
              href={client.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block break-all text-sm text-indigo-600 hover:underline"
            >
              {client.instagram || "-"}
            </a>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">Facebook</p>
            <a
              href={client.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block break-all text-sm text-indigo-600 hover:underline"
            >
              {client.facebook || "-"}
            </a>
          </div>

          {/* Notes */}
          <div className="sm:col-span-2">
            <p className="text-xs font-medium text-slate-400">Notes</p>

            <p className="mt-2 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
              {client.notes || "No notes added."}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-slate-100 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
