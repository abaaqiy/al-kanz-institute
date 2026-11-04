import { create } from "zustand";

type Theme = "light" | "dark";

interface UIState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// Check local storage or system preference for initial theme
const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("alkanz-theme") as Theme;
    if (stored === "light" || stored === "dark") return stored;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  }
  return "light";
};

export const useUIStore = create<UIState>((set) => ({
  theme: getInitialTheme(),
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("alkanz-theme", newTheme);
      return { theme: newTheme };
    }),
  setTheme: (theme) => {
    localStorage.setItem("alkanz-theme", theme);
    set({ theme });
  },
}));