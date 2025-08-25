// pages/AdminDashboard.jsx
import AdminLayout from "../layouts/AdminLayout";
import {
  Users,
  BookOpen,
  BarChart3,
  TrendingUp,
  CheckCircle,
  XCircle,
  Edit3,
  PlusCircle,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
import { useState } from "react";
import AddUser from "./AddUser";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage users, courses, and reports efficiently.
          </p>
        </div>

        {/* Admin Actions - Add User and Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          {/* Add User Button */}
          <Route path="/dashboard/admin/add-user" element={<AddUser />}>
          <button className="flex items-center justify-center bg-cyan-600 text-white px-4 py-3 rounded-lg hover:bg-cyan-700 transition w-full md:w-auto">
            <PlusCircle className="h-5 w-5 mr-2" />
            Add New User
          </button></Route>

          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-2/3">
            {/* Filter Toggle Button */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 w-full sm:w-auto"
            >
              <Filter className="h-4 w-4" />
              Filters
              {isFilterOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {/* Filter Options - Only visible when isFilterOpen is true */}
            {isFilterOpen && (
              <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-700">Filters</h3>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-black">
                  <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm">
                    <option value="">All Branches</option>
                    <option value="cse">Computer Science</option>
                    <option value="ece">Electronics</option>
                    <option value="mech">Mechanical</option>
                    <option value="civil">Civil</option>
                  </select>

                  <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm">
                    <option value="">All Years</option>
                    <option value="1">Year 1</option>
                    <option value="2">Year 2</option>
                    <option value="3">Year 3</option>
                    <option value="4">Year 4</option>
                  </select>

                  <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm">
                    <option value="">All Classes</option>
                    <option value="A">Class A</option>
                    <option value="B">Class B</option>
                    <option value="C">Class C</option>
                    <option value="D">Class D</option>
                  </select>

                  <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm">
                    <option value="">All Sections</option>
                    <option value="1">Section 1</option>
                    <option value="2">Section 2</option>
                    <option value="3">Section 3</option>
                  </select>
                </div>
              </div>
            )}

            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              {" "}
              {/* made width medium */}
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search users or courses..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black"
              />
            </div>

            {/* Search button near filter */}
            <button className="ml-2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">
              Search
            </button>
          </div>
        </div>

        {/* Stats Grid -- come from db later for now it is dummy for styling*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Students"
            value="2390"
            icon={<Users className="h-6 w-6 text-blue-500" />}
            trend={{ value: "+17%", positive: true }}
          />
          <StatCard
            title="Total Teachers"
            value="250"
            icon={<Users className="h-6 w-6 text-blue-500" />}
            trend={{ value: "+2%", positive: true }}
          />
          <StatCard
            title="Active Courses"
            value="23"
            icon={<BookOpen className="h-6 w-6 text-green-500" />}
            trend={{ value: "+3", positive: true }}
          />
          <StatCard
            title="Average Completion"
            value="72%"
            icon={<BarChart3 className="h-6 w-6 text-yellow-500" />}
            trend={{ value: "+5%", positive: true }}
          />
        </div>

       

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <ActivityItem
              icon={<PlusCircle className="h-5 w-5 text-blue-500" />}
              user="Anil Yadav"
              action="enrolled in"
              target="Machine Learrning"
              time="3 hours ago"
            />
            <ActivityItem
              icon={<CheckCircle className="h-5 w-5 text-green-500" />}
              user="Radha Sharma"
              action="completed"
              target="Advanced Javascript"
              time="Yesterday"
            />
            <ActivityItem
              icon={<PlusCircle className="h-5 w-5 text-purple-500" />}
              user="Mohit kumar"
              action="created a new course"
              target="Data Science 101"
              time="2 days ago"
            />
         
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

// Stat Card Component
function StatCard({ title, value, icon, trend }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-1">{value}</h3>
        </div>
        <div className="p-2 rounded-lg bg-gray-100">{icon}</div>
      </div>
      {trend && (
        <p
          className={`text-sm mt-2 ${
            trend.positive ? "text-green-600" : "text-red-600"
          }`}
        >
          {trend.positive ? "↑" : "↓"} {trend.value} from last month
        </p>
      )}
    </div>
  );
}

// Activity Item Component
function ActivityItem({ icon, user, action, target, time }) {
  return (
    <div className="flex items-start">
      <div className="p-2 rounded-full bg-gray-100 mr-3">{icon}</div>
      <div className="flex-1">
        <p className="text-gray-800">
          <span className="font-medium">{user}</span> {action}{" "}
          <span className="font-medium">"{target}"</span>
        </p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </div>
  );
}
