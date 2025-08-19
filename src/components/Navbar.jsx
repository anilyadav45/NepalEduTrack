import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">SmartEduNepal</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
          <Link to="/login" className="hover:text-gray-200">Login</Link>
          <Link to="/register" className="hover:text-gray-200">Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col mt-2 gap-3 bg-blue-700 p-3 rounded-lg">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
          <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
          <Link to="/register" onClick={() => setOpen(false)}>Register</Link>
        </div>
      )}
    </nav>
  );
}
