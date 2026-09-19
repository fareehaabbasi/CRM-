import React from "react";
import { Search } from "lucide-react";

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
    return (
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                {/* Search */}
                <div className="relative">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        type="text"
                        placeholder="Search clients..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    />
                </div>

                {/* Status */}
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                >
                    <option value="">All Statuses</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Replied">Replied</option>
                    <option value="Interested">Interested</option>
                    <option value="Client">Client</option>
                    <option value="Not Interested">Not Interested</option>
                </select>

                {/* Service */}
                <select
                    value={serviceFilter}
                    onChange={(e) => setServiceFilter(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                >
                    <option value="">All Services</option>
                    <option value="Website Design">Website Design</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="MERN Development">MERN Development</option>
                    <option value="Other">Other</option>
                </select>

                {/* Channel */}
                <select
                    value={channelFilter}
                    onChange={(e) => setChannelFilter(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                >
                    <option value="">All Channels</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Email">Email</option>
                </select>

            </div>
        </div>
    );
};

export default SearchFilter;