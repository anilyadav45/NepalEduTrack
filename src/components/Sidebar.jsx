// components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { 
  Home, 
  Users, 
  BookOpen, 
  BarChart3, 
  MessageSquare, 
  Settings,
  ClipboardList
} from "lucide-react";
//components import
import UsersPage from "../pages/users/UsersPage";
export default function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();

  // Admin menu items
  const adminMenu = [
    { to: "/dashboard", label: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { to: "/dashboard/admin/users", label: "Users", icon: <Users className="h-5 w-5" /> },
    { to: "/dashboard/courses", label: "Courses", icon: <BookOpen className="h-5 w-5" /> },
    { to: "/dashboard/analytics", label: "Analytics", icon: <BarChart3 className="h-5 w-5" /> },
    { to: "/dashboard/communications", label: "Communications", icon: <MessageSquare className="h-5 w-5" /> },
    { to: "/dashboard/settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
  ];

  // Teacher menu items
  const teacherMenu = [
    { to: "/dashboard", label: "Overview", icon: <Home className="h-5 w-5" /> },
    { to: "/dashboard/classes", label: "My Classes", icon: <BookOpen className="h-5 w-5" /> },
    { to: "/dashboard/students", label: "Students", icon: <Users className="h-5 w-5" /> },
    { to: "/dashboard/assignments", label: "Assignments", icon: <ClipboardList className="h-5 w-5" /> },
  ];

  const menuItems = user?.role === "admin" ? adminMenu : teacherMenu;

  return (
    //sidebar only visible on large screen
    <div className="hidden lg:flex lg:flex-col w-64 bg-gray-900 text-white min-h-screen fixed left-0  overflow-y-auto">
      
      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`flex items-center px-3 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-cyan-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* Profile bottom */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-semibold">
            {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">{user?.name || 'User'}</p>
            <p className="text-xs text-gray-400 capitalize">{user?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
