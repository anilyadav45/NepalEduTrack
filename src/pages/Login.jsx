import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400">
      <form className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl p-8 rounded-2xl w-[22rem] text-center">
        {/* Title */}
        <h2 className="text-3xl font-extrabold mb-2 text-white drop-shadow">Welcome Back</h2>
        <p className="text-sm text-gray-200 mb-6">Login to continue your journey</p>

        <div className="space-y-4">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-200" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white/20 text-white placeholder-gray-200 border border-white/30 pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-200" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white/20 text-white placeholder-gray-200 border border-white/30 pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-500/80 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center">
            Login <span className="ml-2">&rarr;</span>
          </button>

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <a href="#" className="text-sm text-cyan-200 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-white/40"></div>
            <span className="px-3 text-gray-200 text-sm">OR</span>
            <div className="flex-grow border-t border-white/40"></div>
          </div>

          {/* Google Login */}
          <button className="w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 flex items-center justify-center border border-white/30">
            <FcGoogle className="mr-2" size={18} /> Sign In with Google
          </button>
        </div>
      </form>
    </div>
  );
}
