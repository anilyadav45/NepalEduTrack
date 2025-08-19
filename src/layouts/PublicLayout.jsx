import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <Navbar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <footer className="bg-blue-800 text-white text-center py-3">
        © 2025 SmartEdu Nepal
      </footer>
    </div>
  );
}
