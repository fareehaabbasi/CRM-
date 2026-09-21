import React, { useState } from "react";
import { Plus, Users, Send, MessageCircle, Heart } from "lucide-react";
import ClientModal from "../components/ClientModal";
import ClientTable from "../components/ClientTable";
import ClientDetails from "../components/ClientDetails";
import SearchFilter from "../components/SearchFilter";
import FollowUpSection from "../components/FollowUpSection";
import useClients from "../hooks/useClients";
import { supabase } from "../Lib/supabase";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [editingClient, setEditingClient] = useState(null);
  const { clients, setClients, loading, error, fetchClients } = useClients();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const [channelFilter, setChannelFilter] = useState("");

  const handleAddClient = async (clientData, clientId) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("You are not logged in.");
      return;
    }

    if (clientId) {
      const { data, error } = await supabase
        .from("clients")
        .update({
          name: clientData.name,
          company: clientData.company,
          website: clientData.website,
          whatsapp: clientData.whatsapp,
          email: clientData.email,
          linkedin: clientData.linkedin,
          instagram: clientData.instagram,
          facebook: clientData.facebook,
          business_type: clientData.businessType,
          location: clientData.location,
          service: clientData.service,
          channel: clientData.channel,
          status: clientData.status,
          follow_up_date: clientData.followUpDate || null,
          notes: clientData.notes,
        })
        .eq("id", clientId)
        .eq("user_id", user.id)
        .select()
        .single();

      if (error) {
        console.error(error);
        alert(error.message);
        return;
      }

      setClients((prev) =>
        prev.map((client) =>
          client.id === clientId
            ? {
                ...client,
                ...clientData,
                id: data.id,
              }
            : client,
        ),
      );

      return;
    }

    const { data, error } = await supabase
      .from("clients")
      .insert({
        user_id: user.id,
        name: clientData.name,
        company: clientData.company,
        website: clientData.website,
        whatsapp: clientData.whatsapp,
        email: clientData.email,
        linkedin: clientData.linkedin,
        instagram: clientData.instagram,
        facebook: clientData.facebook,
        business_type: clientData.businessType,
        location: clientData.location,
        service: clientData.service,
        channel: clientData.channel,
        status: clientData.status,
        follow_up_date: clientData.followUpDate || null,
        notes: clientData.notes,
      })
      .select()
      .single();

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    const newClient = {
      id: data.id,
      userId: data.user_id,
      name: data.name,
      company: data.company || "",
      website: data.website || "",
      whatsapp: data.whatsapp || "",
      email: data.email || "",
      linkedin: data.linkedin || "",
      instagram: data.instagram || "",
      facebook: data.facebook || "",
      businessType: data.business_type || "",
      location: data.location || "",
      service: data.service || "",
      channel: data.channel || "",
      status: data.status || "New",
      followUpDate: data.follow_up_date || "",
      notes: data.notes || "",
      createdAt: data.created_at,
    };

    setClients((prev) => [newClient, ...prev]);
  };

  const handleViewClient = (client) => {
    setSelectedClient(client);
  };

  const handleEditClient = (client) => {
    setEditingClient(client);
    setShowModal(true);
  };

  const handleDeleteClient = async (clientId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this client?",
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("clients")
      .delete()
      .eq("id", clientId);

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

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

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-indigo-500" />

          <p className="mt-3 text-sm text-slate-500">Loading your clients...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
        <div className="w-full max-w-md rounded-2xl border border-red-100 bg-white p-6 text-center shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">
            Something went wrong
          </h2>

          <p className="mt-2 text-sm text-slate-500">{error}</p>

          <button
            onClick={fetchClients}
            className="mt-5 rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      {/* baqi Dashboard content */}

      {/* Header */}
      <header className="bg-slate-100">
        <div className="mx-auto flex max-w-7xl items-end justify-between px-6 pb-2 pt-8">
          <div>
            <p className="text-sm font-medium text-indigo-500">Overview</p>

            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-800">
              Client Outreach
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Keep track of your leads, conversations, and follow-ups.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-600"
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
