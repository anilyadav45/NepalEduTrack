<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link,useNavigate} from "react-router-dom";
>>>>>>> de25af6 (routing and styles of login reg)

export default function Home() {
  const navigate = useNavigate();
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

<<<<<<< HEAD
        {/* CTA */}
        <Link
          to="/login"
          className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg transition"
        >
          Get Started
        </Link>
=======
      {/* Call-to-Action */}
      <div className="mt-8 flex gap-4">
        <Link to="/login" >
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition">
          Get Started
        </button></Link>
        <Link to="learn-more">
        <button className="bg-white/10 border border-cyan-300/30 hover:bg-white/20 text-cyan-200 font-semibold py-2 px-6 rounded-lg shadow-lg transition">
          Learn More
        </button></Link>
>>>>>>> de25af6 (routing and styles of login reg)
      </div>
    </section>
  );
}
