import { Outlet, NavLink } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, Video, Brain, RefreshCw,
  ClipboardList, Library, Award, Bell, Settings, LogOut,
} from "lucide-react";
import { useAuthStore } from "../../stores/authStore";
import type { Role } from "../../types";

const NAV: Record<Role, { to: string; label: string; icon: React.ElementType }[]> = {
  student: [
    { to: "/app/student", label: "Dashboard", icon: LayoutDashboard },
    { to: "/app/student/courses", label: "My Courses", icon: BookOpen },
    { to: "/app/student/classes", label: "Live Classes", icon: Video },
    { to: "/app/student/memorisation", label: "Memorisation", icon: Brain },
    { to: "/app/student/revision", label: "Revision", icon: RefreshCw },
    { to: "/app/student/assessments", label: "Assessments", icon: ClipboardList },
    { to: "/app/student/resources", label: "Resources", icon: Library },
    { to: "/app/student/certificates", label: "Certificates", icon: Award },
    { to: "/app/student/announcements", label: "Announcements", icon: Bell },
    { to: "/app/student/settings", label: "Settings", icon: Settings },
  ],
  parent: [], tutor: [], coordinator: [], admin: [],
};

export default function DashboardShell({ role }: { role: Role }) {
  const { user, signOut } = useAuthStore();

  return (
    <div className="min-h-screen grid md:grid-cols-[240px_1fr] bg-ivory">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col bg-emerald-deep text-white p-5">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-[11px] bg-gold/15 text-gold grid place-items-center font-arabic text-xl font-bold">
            ك
          </div>
          <div className="leading-tight">
            <strong className="block text-sm">Al-Kanz</strong>
            <span className="text-[11px] uppercase tracking-wider text-white/55">
              {role} portal
            </span>
          </div>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {NAV[role].map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-[9px] text-[13.5px] transition ${
                  isActive
                    ? "bg-gold/15 text-white shadow-[inset_3px_0_0_#C7A45D]"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={signOut}
          className="flex items-center gap-2 text-white/60 hover:text-white text-xs pt-4 border-t border-white/10"
        >
          <LogOut size={14} /> Sign out
        </button>
      </aside>

      {/* Main */}
      <div className="flex flex-col">
        <header className="flex items-center justify-between px-6 py-4 border-b border-sage bg-ivory/90 backdrop-blur">
          <div>
            <p className="text-sm text-slate">Welcome back</p>
            <h2 className="text-lg font-semibold text-emerald-deep">{user?.name}</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-input border border-sage bg-white grid place-items-center text-slate">
              <Bell size={16} />
            </button>
            <div className="w-10 h-10 rounded-full bg-gold text-emerald-deep grid place-items-center font-bold text-xs">
              {user?.avatarInitials ?? "AK"}
            </div>
          </div>
        </header>

        <main className="p-6 md:p-8 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}