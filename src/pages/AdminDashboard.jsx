export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 mt-8 text-white">
      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-300 drop-shadow">
        Admin Dashboard
      </h1>

      {/* Subtitle */}
      <p className="text-blue-100 mt-2">
        Manage users, classes, and reports efficiently.
      </p>

      {/* Placeholder for future sections */}
      <div className="mt-6 border-t border-white/20 pt-4">
        <p className="text-sm text-cyan-200/80 italic">
          (Features coming soon: Add User form, School settings, Reports, etc.)
        </p>
      </div>
    </div>
  );
}
