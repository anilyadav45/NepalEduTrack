import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, getDashboardPath } from "../context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  // Hide navbar on login page
  const hideOn = ["/login"];
  if (hideOn.includes(location.pathname)) return null;

  return (
    <nav className="bg-transparent text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="font-bold text-lg">SmartEduX</Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/">Home</Link>

          {/* Only show dashboard if logged in */}
          {isAuthenticated && user && (
            <Link to={getDashboardPath(user.role)}>Dashboard</Link>
          )}

          {/* Show login if NOT logged in, else logout */}
          {!isAuthenticated ? (
            <Link to="/login">Login</Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          )}

          {/* Optional: show role */}
          {isAuthenticated && user && (
            <span className="text-sm opacity-90">({user.role})</span>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 bg-transparent text-white rounded-xl shadow-lg p-4 flex flex-col gap-3">
          <Link to="/" onClick={() => setOpen(false)} className="hover:underline">
            Home
          </Link>

          {isAuthenticated && user && (
            <Link
              to={getDashboardPath(user.role)}
              onClick={() => setOpen(false)}
              className="hover:underline"
            >
              Dashboard
            </Link>
          )}

          {!isAuthenticated ? (
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="hover:underline"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-left hover:underline cursor-pointer"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
