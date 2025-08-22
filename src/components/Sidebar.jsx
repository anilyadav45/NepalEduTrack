import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-transparent-100 p-4 h-screen shadow-md hidden md:block">
      <h2 className="text-lg font-bold mb-6">Dashboard Menu</h2>
      <ul className="flex flex-col gap-4">
        <li><Link to="/dashboard">Overview</Link></li>
        <li><Link to="/dashboard/teachers">Teachers</Link></li>
        <li><Link to="/dashboard/students">Students</Link></li>
        <li><Link to="/dashboard/settings">Settings</Link></li>
      </ul>
    </aside>
  );
}
