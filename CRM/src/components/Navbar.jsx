import React, { useState } from "react";
import { LogOut, Menu, X, LayoutDashboard } from "lucide-react";
import { supabase } from "../Lib/supabase";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      return;
    }

    window.location.href = "/login";
  };

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-indigo-50 p-2 text-indigo-600">
            <LayoutDashboard size={18} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-800">
              Outreach Tracker
            </p>

            <p className="hidden text-xs text-slate-400 sm:block">
              Client management
            </p>
          </div>
        </div>

        {/* Desktop Logout */}
        <button
          onClick={handleLogout}
          className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-red-50 hover:text-red-600 sm:flex"
        >
          <LogOut size={17} />
          Logout
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 sm:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-100 px-6 py-3 sm:hidden">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;