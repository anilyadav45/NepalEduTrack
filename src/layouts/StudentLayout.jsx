
export default function StudentLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <main className="flex-1 p-6 text-white overflow-y-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-cyan-100 drop-shadow">
            Dashboard
          </h1>
          <p className="text-blue-100">Manage your learning journey effectively</p>
        </header>

        {/* Children contents cards and all */} 
        <section className=" p-4">
          {children}
        </section>
      </main>
    </div>
  );
}
