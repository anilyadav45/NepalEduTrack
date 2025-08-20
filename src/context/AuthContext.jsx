import { createContext, useContext, useEffect, useMemo, useState } from "react";

// 🔹 Fake users for test the role bsed rendering to dashboard
const FAKE_USERS = [
  {
    fullname: "Admin",
    email: "admin@school.com",
    password: "admin123",
    role: "admin",
    schoolId: "schoolid",
  },
  {
    fullname: "Teacher",
    email: "teacher@school.com",
    password: "teach123",
    role: "teacher",
    schoolId: "schoolid",
  },
  {
    fullname: "Student",
    email: "student@school.com",
    password: "stud123",
    role: "student",
    schoolId: "schoolid",
  },
];

// 🔹 Map role to dashboard path
export const getDashboardPath = (role) => {
  switch (role) {
    case "admin":
      return "/dashboard/admin";
    case "teacher":
      return "/dashboard/teacher";
    case "student":
      return "/dashboard/student";
    default:
      return "/login";
  }
};

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {fullname,email,role,schoolId}

  // persist across refresh
  useEffect(() => {
    const saved = localStorage.getItem("authUser");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = async (email, password) => {
    // simulate API call
    const found = FAKE_USERS.find(
      (u) =>
        u.email.toLowerCase() === String(email).toLowerCase() &&
        u.password === password
    );
    if (!found) throw new Error("Invalid email or password");
    const { password: _pw, ...publicUser } = found;
    setUser(publicUser);
    localStorage.setItem("authUser", JSON.stringify(publicUser));
    return publicUser; // contains role
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  const value = useMemo(
    () => ({ user, login, logout, isAuthenticated: !!user }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
