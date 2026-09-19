import React, {useState} from "react";
import { Plus, Users, Send, MessageCircle, Heart } from "lucide-react";
import ClientModal from "../components/ClientModal";

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
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
                                <h2 className="mt-2 text-3xl font-semibold">0</h2>
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
                                <h2 className="mt-2 text-3xl font-semibold">0</h2>
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
                                <h2 className="mt-2 text-3xl font-semibold">0</h2>
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
                                <h2 className="mt-2 text-3xl font-semibold">0</h2>
                            </div>

                            <div className="rounded-xl bg-rose-50 p-3 text-rose-500">
                                <Heart size={21} />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Empty State */}
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-500">
                        <Users size={25} />
                    </div>

                    <h2 className="mt-5 text-lg font-semibold">
                        No clients yet
                    </h2>

                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                        Start building your outreach list by adding your first potential
                        client.
                    </p>

                    <button
                        onClick={() => setShowModal(true)}
                    className="mt-6 rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-600">
                        Add Your First Client
                    </button>
                </div>

            </main>
            {showModal && (
                <ClientModal onClose={() => setShowModal(false)} />
            )}
        </div>
    );
};

export default Dashboard;