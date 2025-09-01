import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthProvider, { useAuth, getDashboardPath } from "./context/AuthContext";
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import StudentForm from "./pages/users/StudentForm";
import TeacherForm from "./pages/users/TeacherForm";
import UsersPage from "./pages/users/UsersPage";

// Optional helper component to redirect based on user role
function DashboardIndex() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <Navigate to={getDashboardPath(user.role)} replace />;
}

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <Router>
        <AuthProvider>
          <Routes>
            {/* Public */}
            <Route element={<PublicLayout />}>
              <Route path="/login" element={<Login />} />
            </Route>

            {/* Private */}
            <Route element={<PrivateLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<DashboardIndex />} />

              {/* Role locked routes */}
              <Route element={<ProtectedRoute allow={["admin"]} />}>
                <Route path="/dashboard/admin" element={<AdminDashboard />} />
                {/* Remove the old AddUser route */}
                <Route
                  path="/dashboard/admin/add-student"
                  element={<StudentForm />}
                />
                <Route
                  path="/dashboard/admin/add-teacher"
                  element={<TeacherForm />}
                />
              </Route>

              <Route element={<ProtectedRoute allow={["teacher"]} />}>
                <Route
                  path="/dashboard/teacher"
                  element={<TeacherDashboard />}
                />
              </Route>

              <Route element={<ProtectedRoute allow={["student"]} />}>
                <Route
                  path="/dashboard/student"
                  element={<StudentDashboard />}
                />
              </Route>
              <Route path="/dashboard/admin/users" element={<UsersPage />}/>
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}
