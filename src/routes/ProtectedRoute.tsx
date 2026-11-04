import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import type { Role } from "../types";

export default function ProtectedRoute({ allowed }: { allowed: Role[] }) {
  const { user } = useAuthStore();
  if (!user) return <Navigate to="/sign-in" replace />;
  if (!allowed.includes(user.role)) return <Navigate to="/app" replace />;
  return <Outlet />;
}