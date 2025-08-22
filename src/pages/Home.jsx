import { Link } from "react-router-dom";
export default function Home() {
  return (
    <section className="max-w-4xl mx-auto text-center py-14">
      <h1 className="text-3xl md:text-4xl font-bold">SmartEdu Nepal</h1>
      <p className="text-white-600 mt-2">Unified portal for admins, teachers, and students.</p>
      <Link
        to="/login"
        className="inline-block mt-6 bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-700"
      >
        Get Started
      </Link>
    </section>
  );
}
