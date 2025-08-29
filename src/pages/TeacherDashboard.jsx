import TeacherLayout from "../layouts/TeacherLayout";

export default function TeacherDashboard() {
  return (
    <TeacherLayout>
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-8 mt-10 text-gray-800">
        {/* Title */}
        <h1 className="text-3xl font-bold text-cyan-600 drop-shadow-sm">
          Teacher Dashboard
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mt-2">
          Manage your classes, assignments, and attendance with ease.
        </p>

        {/* Dashboard Sections */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Classes */}
          <div className="border border-gray-200 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-cyan-700">My Classes</h2>
            <ul className="mt-3 space-y-2 text-gray-600 text-sm">
              <li>➤ BSc CSIT – Year 2</li>
              <li>➤ BCA – Year 1</li>
              <li>➤ BIT – Year 3</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
              View All
            </button>
          </div>

          {/* Assignments */}
          <div className="border border-gray-200 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-cyan-700">Assignments</h2>
            <ul className="mt-3 space-y-2 text-gray-600 text-sm">
              <li>➤ Ongoing: Data Structures Project</li>
              <li>➤ Pending: DBMS Case Study</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
              Manage
            </button>
          </div>

          {/* Attendance */}
          <div className="border border-gray-200 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-cyan-700">Attendance</h2>
            <p className="mt-3 text-gray-600 text-sm">
              Track student attendance and generate reports.
            </p>
            <button className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
              Mark Attendance
            </button>
          </div>
        </div>

        {/* Future Features Placeholder */}
        <div className="mt-10 border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-500 italic">
            (Upcoming: Class management tools, Assignment uploads, Attendance tracker with analytics)
          </p>
        </div>
      </div>
    </TeacherLayout>
  );
}
