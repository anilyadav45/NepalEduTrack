import { Navigate, Outlet } from "react-router-dom";
import { useAuth, getDashboardPath } from "../context/AuthContext";

export default function ProtectedRoute({ allow = [] }) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (allow.length > 0 && user && !allow.includes(user.role)) {
    // logged in but wrong role so send to their owon page
    return <Navigate to={getDashboardPath(user.role)} replace />;
  }

  return <Outlet />;
}
