import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, getDashboardPath } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      const user = await login(form.email, form.password);
      navigate(getDashboardPath(user.role), { replace: true });
    } catch (e) {
      setErr(e.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 text-white">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-cyan-300 drop-shadow">
        Login
      </h2>

      {/* Form */}
      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={form.email}
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={form.password}
          onChange={onChange}
          required
        />

        {err && <p className="text-red-400 text-sm">{err}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg shadow-lg transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Demo creds */}
      <div className="mt-6 text-sm text-cyan-200">
        <p className="font-semibold mb-1">Demo Accounts:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Admin: admin@school.com / admin123</li>
          <li>Teacher: teacher@school.com / teach123</li>
          <li>Student: student@school.com / stud123</li>
        </ul>
      </div>
    </div>
  );
}
