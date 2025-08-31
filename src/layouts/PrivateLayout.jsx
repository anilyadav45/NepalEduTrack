import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PrivateLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-700 via-gray-800 to-cyan-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1  text-white">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray/40 backdrop-blur-md text-cyan-200 text-center py-3 text-sm">
        © 2025 SmartEdu Nepal
      </footer>
    </div>
  );
}
