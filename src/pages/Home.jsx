import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-700 text-white px-6">
      <div className="max-w-3xl text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-xl">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-300 drop-shadow">
          SmartEdu Nepal
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-200">
          A unified portal for <span className="font-semibold text-cyan-200">Admins</span>,{" "}
          <span className="font-semibold text-cyan-200">Teachers</span>, and{" "}
          <span className="font-semibold text-cyan-200">Students</span>.
        </p>

        {/* CTA */}
        <Link
          to="/login"
          className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
