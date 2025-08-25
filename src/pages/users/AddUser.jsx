import { useState } from "react";

export default function AddUser() {
  const [selectedRole, setSelectedRole] = useState("");

  // Reset form when switching role
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add User</h2>

      {/* Step 1: Choose Role */}
      {!selectedRole && (
        <div className="flex justify-center gap-6">
          <button
            onClick={() => handleRoleSelect("student")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Add Student
          </button>
          <button
            onClick={() => handleRoleSelect("teacher")}
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            Add Teacher
          </button>
        </div>
      )}

      {/* Step 2: Student Form */}
      {selectedRole === "student" && (
        <form className="space-y-4 mt-6">
          <h3 className="text-xl font-medium text-blue-600">Student Details</h3>
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" required />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Enrollment Number" className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Course / Program" className="w-full border p-2 rounded" required />
          <input type="number" placeholder="Year / Semester" className="w-full border p-2 rounded" required />

          <div className="flex justify-between mt-4">
            <button type="button" onClick={() => setSelectedRole("")} className="px-4 py-2 bg-gray-300 rounded">
              Back
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Add Student
            </button>
          </div>
        </form>
      )}

      {/* Step 2: Teacher Form */}
      {selectedRole === "teacher" && (
        <form className="space-y-4 mt-6">
          <h3 className="text-xl font-medium text-green-600">Teacher Details</h3>
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" required />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Department / Subject" className="w-full border p-2 rounded" required />
          <input type="number" placeholder="Experience (years)" className="w-full border p-2 rounded" required />

          <div className="flex justify-between mt-4">
            <button type="button" onClick={() => setSelectedRole("")} className="px-4 py-2 bg-gray-300 rounded">
              Back
            </button>
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
              Add Teacher
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
