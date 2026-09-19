import React, { useState } from "react";
import { Plus, Users, Send, MessageCircle, Heart } from "lucide-react";
import ClientModal from "../components/ClientModal";
import ClientTable from "../components/ClientTable";
import ClientDetails from "../components/ClientDetails";
import SearchFilter from "../components/SearchFilter";
import FollowUpSection from "../components/FollowUpSection";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [editingClient, setEditingClient] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const [channelFilter, setChannelFilter] = useState("");

  const handleAddClient = (clientData, clientId) => {
    if (clientId) {
      setClients((prev) =>
        prev.map((client) =>
          client.id === clientId ? { ...client, ...clientData } : client,
        ),
      );
    } else {
      const newClient = {
        id: Date.now(),
        ...clientData,
      };

      setClients((prev) => [...prev, newClient]);
    }
  };

  const handleViewClient = (client) => {
    setSelectedClient(client);
  };

  const handleEditClient = (client) => {
    setEditingClient(client);
    setShowModal(true);
  };

  const handleDeleteClient = (clientId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this client?",
    );

    if (!confirmed) return;

    setClients((prev) => prev.filter((client) => client.id !== clientId));
  };

  const filteredClients = clients.filter((client) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      client.name?.toLowerCase().includes(search) ||
      client.company?.toLowerCase().includes(search) ||
      client.email?.toLowerCase().includes(search);

    const matchesStatus = !statusFilter || client.status === statusFilter;

    const matchesService = !serviceFilter || client.service === serviceFilter;

    const matchesChannel = !channelFilter || client.channel === channelFilter;

    return matchesSearch && matchesStatus && matchesService && matchesChannel;
  });

  const totalClients = clients.length;

  const contactedClients = clients.filter(
    (client) => client.status === "Contacted",
  ).length;

  const repliedClients = clients.filter(
    (client) => client.status === "Replied",
  ).length;

  const interestedClients = clients.filter(
    (client) => client.status === "Interested",
  ).length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Client Outreach
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Keep track of your leads and follow-ups.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-600"
          >
            <Plus size={18} />
            Add Client
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Total Clients</p>
                <h2 className="mt-2 text-3xl font-semibold">{totalClients}</h2>
              </div>

              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-500">
                <Users size={21} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Contacted</p>
                <h2 className="mt-2 text-3xl font-semibold">
                  {contactedClients}
                </h2>
              </div>

              <div className="rounded-xl bg-blue-50 p-3 text-blue-500">
                <Send size={21} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Replied</p>
                <h2 className="mt-2 text-3xl font-semibold">
                  {repliedClients}
                </h2>
              </div>

              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-500">
                <MessageCircle size={21} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Interested</p>
                <h2 className="mt-2 text-3xl font-semibold">
                  {interestedClients}
                </h2>
              </div>

              <div className="rounded-xl bg-rose-50 p-3 text-rose-500">
                <Heart size={21} />
              </div>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="mt-8">
          <SearchFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            serviceFilter={serviceFilter}
            setServiceFilter={setServiceFilter}
            channelFilter={channelFilter}
            setChannelFilter={setChannelFilter}
          />

          <ClientTable
            clients={filteredClients}
            onViewClient={handleViewClient}
            onEditClient={handleEditClient}
            onDeleteClient={handleDeleteClient}
          />

          <FollowUpSection clients={clients} onViewClient={handleViewClient} />

          {clients.length === 0 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowModal(true)}
                className="rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-600"
              >
                Add Your First Client
              </button>
            </div>
          )}
        </div>
      </main>
      {showModal && (
        <ClientModal
          onClose={() => {
            setShowModal(false);
            setEditingClient(null);
          }}
          onAddClient={handleAddClient}
          editingClient={editingClient}
        />
      )}
      {selectedClient && (
        <ClientDetails
          client={selectedClient}
          onClose={() => setSelectedClient(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;
