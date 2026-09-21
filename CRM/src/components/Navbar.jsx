import React from "react";
import { LogOut } from "lucide-react";
import { supabase } from "../Lib/supabase";

const Navbar = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    window.location.href = "/login";
  };

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-lg font-bold text-slate-800">
            Client Outreach Tracker
          </h1>

          <p className="text-xs text-slate-500">
            Manage your freelance outreach
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-800"
        >
          <LogOut size={17} />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;