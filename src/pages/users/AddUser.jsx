import { useState } from "react";

export default function AddUser() {
  const [selectedRole, setSelectedRole] = useState("");
  const [confirmedRole, setConfirmedRole] = useState("");

  // Handle role selection from dropdown
  const handleRoleSelect = (event) => {
    setSelectedRole(event.target.value);
  };

  // Confirm role and proceed to form
  const handleConfirm = () => {
    if (selectedRole) {
      setConfirmedRole(selectedRole);
    }
  };

  // Reset to role selection
  const handleBack = () => {
    setSelectedRole("");
    setConfirmedRole("");
  };

  return (
    <div className="p-6 bg-blue/40 backdrop-blur-md rounded-lg shadow-md max-w-xl mx-auto text-gray-800">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Add User</h2>

      {/* Step 1: Choose Role */}
      {!confirmedRole && (
        <div className="flex flex-col items-center gap-4">
          <select
            value={selectedRole}
            onChange={handleRoleSelect}
            className="w-full max-w-xs p-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          <button
            onClick={handleConfirm}
            disabled={!selectedRole}
            className={`w-full max-w-xs py-2 rounded-lg shadow transition-colors ${
              selectedRole
                ? "bg-cyan-600 text-white hover:bg-cyan-700"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      )}

      {/* Step 2: Student Form */}
      {confirmedRole === "student" && (
        <form className="space-y-4 mt-6">
          <h3 className="text-xl font-medium text-blue-600">Student Details</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Enrollment Number"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Course / Program"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            placeholder="Year / Semester"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Student
            </button>
          </div>
        </form>
      )}

      {/* Step 2: Teacher Form */}
      {confirmedRole === "teacher" && (
        <form className="space-y-4 mt-6">
          <h3 className="text-xl font-medium text-green-600">Teacher Details</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="text"
            placeholder="Department / Subject"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="number"
            placeholder="Experience (years)"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Teacher
            </button>
          </div>
        </form>
      )}
    </div>
  );
}