export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-700 via-blue-800 to-cyan-900 text-white px-6">
      {/* App Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
        Welcome to <span className="text-cyan-300">SmartEduNepal</span>
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-blue-100 max-w-xl text-center">
        Your all-in-one <span className="font-semibold text-cyan-200">digital learning companion</span>  
        — designed to help students stay ahead in their academic journey 🚀
      </p>

      {/* Call-to-Action */}
      <div className="mt-8 flex gap-4">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition">
          Get Started
        </button>
        <button className="bg-white/10 border border-cyan-300/30 hover:bg-white/20 text-cyan-200 font-semibold py-2 px-6 rounded-lg shadow-lg transition">
          Learn More
        </button>
      </div>
    </div>
  );
}
