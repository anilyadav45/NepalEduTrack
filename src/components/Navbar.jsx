import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, getDashboardPath } from "../context/AuthContext";
import { GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageOff } from "lucide-react";

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

  //use shadow effect on scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-gray-900 text-white px-4 py-3 min-h-20 transition-all duration-300 ${
        isScrolled ? "shadow-lg shadow-black/50" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-white-900"
        >
          <GraduationCap className="w-8 h-8" />
          SmartEduX
        </Link>

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
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="hover:underline"
          >
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
