import { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RoleSelectionModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSelect = (role) => {
    onClose(); // close modal
    if (role === "student") navigate("/dashboard/admin/add-student");
    if (role === "teacher") navigate("/dashboard/admin/add-teacher");
  };

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-2xl p-8 w-96 max-w-full mx-4 shadow-xl border border-blue-100 transform transition-all duration-300 scale-100 hover:scale-105">
        <button
          className="absolute top-4 right-4 text-blue-500 hover:text-blue-700 transition-colors duration-200"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Select User Role</h2>
        <div className="flex flex-col gap-4">
          <button
            className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 font-medium"
            onClick={() => handleSelect("student")}
          >
            Student
          </button>
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium"
            onClick={() => handleSelect("teacher")}
          >
            Teacher
          </button>
        </div>
      </div>
    </div>
  );
}