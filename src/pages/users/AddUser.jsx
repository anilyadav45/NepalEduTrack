import { useState } from "react";

export default function AddUser() {
  const [selectedRole, setSelectedRole] = useState("");
  const [confirmedRole, setConfirmedRole] = useState("");

  // Step 1: Select Role
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  // Step 2: Confirm Selection
  const handleConfirm = () => {
    if (selectedRole) setConfirmedRole(selectedRole);
  };

  // Reset back
  const handleBack = () => {
    setSelectedRole("");
    setConfirmedRole("");
  };

  return (
    <div className="p-6 bg-white/40 backdrop-blur-md rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add User</h2>

      {/* Step 1: Choose Role */}
      {!confirmedRole && (
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <button
              onClick={() => handleRoleSelect("student")}
              className={`px-4 py-2 rounded-lg shadow transition 
                ${selectedRole === "student" ? "bg-blue-700 text-white" : "bg-blue-100 text-blue-700 hover:bg-blue-200"}`}
            >
              Student
            </button>
            <button
              onClick={() => handleRoleSelect("teacher")}
              className={`px-4 py-2 rounded-lg shadow transition 
                ${selectedRole === "teacher" ? "bg-green-700 text-white" : "bg-green-100 text-green-700 hover:bg-green-200"}`}
            >
              Teacher
            </button>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleConfirm}
            disabled={!selectedRole}
            className={`mt-4 px-5 py-2 rounded-lg shadow 
              ${selectedRole ? "bg-cyan-600 text-white hover:bg-cyan-700" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}
          >
            Continue
          </button>
        </div>
      )}

      {/* Step 2: Student Form */}
      {confirmedRole === "student" && (
        <form className="space-y-4 mt-6">
          <h3 className="text-xl font-medium text-blue-600">Student Details</h3>
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" required />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Enrollment Number" className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Course / Program" className="w-full border p-2 rounded" required />
          <input type="number" placeholder="Year / Semester" className="w-full border p-2 rounded" required />

          <div className="flex justify-between mt-4">
            <button type="button" onClick={handleBack} className="px-4 py-2 bg-gray-300 rounded">
              Back
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Add Student
            </button>
          </div>
        </form>
      )}

      {/* Step 2: Teacher Form */}
      {confirmedRole === "teacher" && (
        <form className="space-y-4 mt-6">
          <h3 className="text-xl font-medium text-green-600">Teacher Details</h3>
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" required />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Department / Subject" className="w-full border p-2 rounded" required />
          <input type="number" placeholder="Experience (years)" className="w-full border p-2 rounded" required />

          <div className="flex justify-between mt-4">
            <button type="button" onClick={handleBack} className="px-4 py-2 bg-gray-300 rounded">
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
