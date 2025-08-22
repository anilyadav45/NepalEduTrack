import Sidebar from "../components/Sidebar";
export default function AdminLayout() {
  return (
    <div className="p-6">
      <Sidebar/>
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <p>Welcome, Admin!</p>
    </div>
  );
}
