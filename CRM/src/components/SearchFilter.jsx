import React from "react";
import { Search, RotateCcw } from "lucide-react";

const SearchFilter = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  serviceFilter,
  setServiceFilter,
  channelFilter,
  setChannelFilter,
}) => {
  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("");
    setServiceFilter("");
    setChannelFilter("");
  };

  const hasFilters =
    searchTerm ||
    statusFilter ||
    serviceFilter ||
    channelFilter;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* Search */}
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, company or email..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      {/* Filters */}
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-600 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
        >
          <option value="">All Statuses</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Replied">Replied</option>
          <option value="Interested">Interested</option>
          <option value="Client">Client</option>
          <option value="Not Interested">Not Interested</option>
        </select>

        <select
          value={serviceFilter}
          onChange={(e) => setServiceFilter(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-600 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
        >
          <option value="">All Services</option>
          <option value="Website Design">Website Design</option>
          <option value="Website Redesign">Website Redesign</option>
          <option value="Landing Page">Landing Page</option>
          <option value="E-commerce">E-commerce</option>
          <option value="MERN Development">MERN Development</option>
          <option value="Other">Other</option>
        </select>

        <select
          value={channelFilter}
          onChange={(e) => setChannelFilter(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-600 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
        >
          <option value="">All Channels</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="Email">Email</option>
        </select>

        <button
          type="button"
          onClick={clearFilters}
          disabled={!hasFilters}
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <RotateCcw size={16} />
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;