import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto text-center py-14 px-4">
      {/* Brand Logo */}
      <div className="flex justify-center mb-6">
        <GraduationCap className="w-16 h-16 text-white-900" />
      </div>

      {/* Main Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
        Welcome to <span className="text-blue-200">SmartEduX</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 mt-3 text-lg">
        Unified portal for <span className="font-semibold">admins</span>,{" "}
        <span className="font-semibold">teachers</span>, and{" "}
        <span className="font-semibold">students</span> to collaborate and grow.
      </p>

      {/* Illustration */}
      <div className="mt-8 flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          alt="Education Illustration"
          className="w-52"
        />
      </div>

      {/* Call to Action */}
      <Link
        to="/login"
        className="inline-block mt-8 bg-blue-800  text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition"
      >
        Get Started ➔
      </Link>
    </section>
  );
}
