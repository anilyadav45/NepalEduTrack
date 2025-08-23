// layouts/AdminLayout.jsx
import Sidebar from "../components/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar visible only on large screens */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Content Area */}
      <div className="flex-1 lg:ml-64 p-6">
        {children}
      </div>
    </div>
  );
}
