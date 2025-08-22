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
    <div className="flex items-center justify-center min-h-screen  to-black p-4">
      {/* Single Transparent Login Box */}
      <div className="w-full max-w-md  bg-transparent   p-10 text-white">
        {/* Branding */}
       <div className="login-desc mb-10">
         <h1 className="text-4xl font-extrabold text-center text-cyan-400 mb-2 tracking-wide mb-4">
          NepEduX
        </h1>
        <p className="text-center text-gray-300 mb-6 text-sm">
          Enter login credentials provided by College or School
        </p>
       </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={onSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full bg-cyan-900/20 text-white placeholder-gray-400 border border-cyan-400/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            value={form.email}
            onChange={onChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full bg-cyan-900/20 text-white placeholder-gray-400 border border-cyan-400/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            value={form.password}
            onChange={onChange}
            required
          />

          {/* Error */}
          {err && <p className="text-red-400 text-sm">{err}</p>}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg shadow-md transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Links */}
          <div className="flex justify-between text-sm mt-3">
            <a href="/report-login" className="text-cyan-200 hover:underline">
              Trouble logging in?
            </a>
            <a href="/forgot-password" className="text-cyan-200 hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
