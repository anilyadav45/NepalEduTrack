import { Outlet, Navigate } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

export default function PrivateLayout() {
  const isAuthenticated = true; // Replace with actual auth logic

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
