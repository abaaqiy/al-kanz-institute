import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useAuthStore } from "../../stores/authStore";
import type { Role } from "../../types";

const ROLES: { key: Role; label: string }[] = [
  { key: "student", label: "Student" },
  { key: "parent", label: "Parent" },
  { key: "tutor", label: "Tutor" },
  { key: "admin", label: "Admin" },
];

export default function SignInPage() {
  const [role, setRole] = useState<Role>("student");
  const navigate = useNavigate();
  const signIn = useAuthStore((s) => s.signIn);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo sign-in — replace with real API later
    signIn({
      id: "1",
      name: role === "student" ? "Aisha H." : "Demo User",
      email: "demo@alkanz.com",
      role,
      avatarInitials: "AH",
    });
    navigate(`/app/${role}`);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-emerald-forest to-emerald-deep text-white p-12">
        <div>
          <p className="arabic text-2xl text-gold mb-4">
            خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
          </p>
          <p className="text-sm text-white/80 max-w-sm">
            "The best of you are those who learn the Qur'an and teach it." — Sahih al-Bukhari
          </p>
        </div>
        <small className="text-xs tracking-widest text-white/60">AL-KANZ ONLINE INSTITUTE</small>
      </div>

      <div className="flex items-center justify-center p-8 bg-white">
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <h1 className="text-2xl font-semibold text-emerald-deep mb-1">Welcome back</h1>
          <p className="text-sm text-slate mb-6">Sign in to continue your Qur'an journey.</p>

          <div className="flex gap-1 mb-6 bg-sage p-1 rounded-input">
            {ROLES.map((r) => (
              <button
                key={r.key}
                type="button"
                onClick={() => setRole(r.key)}
                className={`flex-1 py-2 text-xs font-semibold rounded-md transition ${
                  role === r.key ? "bg-white text-emerald-deep shadow-sm" : "text-slate"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <label className="block text-sm font-medium mb-1.5">Email</label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-3.5 py-3 border border-sage rounded-input mb-4 focus:outline-none focus:border-emerald-forest focus:ring-2 focus:ring-emerald-forest/15"
          />

          <label className="block text-sm font-medium mb-1.5">Password</label>
          <input
            type="password"
            required
            placeholder="••••••••"
            className="w-full px-3.5 py-3 border border-sage rounded-input mb-5 focus:outline-none focus:border-emerald-forest focus:ring-2 focus:ring-emerald-forest/15"
          />

          <Button type="submit" className="w-full justify-center">Sign In</Button>
        </form>
      </div>
    </div>
  );
}