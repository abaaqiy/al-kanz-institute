import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../types";

interface AuthState {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
  hasRole: (roles: User["role"][]) => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      signIn: (user) => set({ user }),
      signOut: () => set({ user: null }),
      hasRole: (roles) => {
        const u = get().user;
        return !!u && roles.includes(u.role);
      },
    }),
    { name: "alkanz-auth" }
  )
);