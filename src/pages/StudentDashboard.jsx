import StudentLayout from "../layouts/StudentLayout";
import { BookOpen, ClipboardCheck, CalendarDays } from "lucide-react";
import {Link} from "react-router-dom";


export default function StudentDashboard() {
  return (
    <StudentLayout>
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-700 p-6 rounded-xl text-white shadow-lg">
        <h1 className="text-2xl font-bold">Welcome back, Nitesh Yadav 👋</h1>
        <p className="mt-1 text-blue-100">
          Here’s what’s happening with your courses today.
        </p>
        <hr className="my-4 border-blue-300/40" />

        <Link
          to="/schedule"
          className="w-full flex items-center justify-between text-white font-medium hover:text-blue-100 transition cursor-pointer"
        >
          <span>View Schedule</span>
          <span className="text-xl">➔</span>
        </Link>
      </div>
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-green-900/70 backdrop-blur-xl border border-blue-300/20 rounded-xl p-5 text-white shadow-md">
          <div className="flex items-center space-x-3">
            <BookOpen className="text-cyan-300" size={28} />
            <h2 className="text-lg font-semibold">Courses</h2>
          </div>
          <p className="mt-2 text-2xl font-bold">5</p>
          <p className="text-sm text-blue-200">Active this semester</p>
        </div>

        <div className="bg-yellow-900/70 backdrop-blur-xl border border-blue-300/20 rounded-xl p-5 text-white shadow-md">
          <div className="flex items-center space-x-3">
            <ClipboardCheck className="text-green-300" size={28} />
            <h2 className="text-lg font-semibold">Assignments</h2>
          </div>
          <p className="mt-2 text-2xl font-bold">3</p>
          <p className="text-sm text-blue-200">Due this week</p>
        </div>

        <div className="bg-pink-900/70 backdrop-blur-xl border border-blue-300/20 rounded-xl p-5 text-white shadow-md">
          <div className="flex items-center space-x-3">
            <CalendarDays className="text-yellow-300" size={28} />
            <h2 className="text-lg font-semibold">Attendance</h2>
          </div>
          <p className="mt-2 text-2xl font-bold">92%</p>
          <p className="text-sm text-blue-200">Great consistency!</p>
        </div>
      </div>
      {/* Recent Activity */}
      <div className="mt-8 bg-blue-900/70 backdrop-blur-xl border border-blue-300/20 p-6 rounded-xl shadow-md text-white">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <ul className="space-y-3 text-sm text-blue-100">
          <li>
            📘 You enrolled in{" "}
            <span className="font-semibold text-white">Data Structures</span>
          </li>
          <li>
            📝 Submitted{" "}
            <span className="font-semibold text-white">AI Assignment 1</span>
          </li>
          <li>
            📅 Upcoming class:{" "}
            <span className="font-semibold text-white">Database Systems</span>{" "}
            at 10:00 AM
          </li>
        </ul>
      </div>
    </StudentLayout>
  );
}
