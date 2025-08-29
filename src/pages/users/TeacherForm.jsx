import { useState } from "react";
import { User, Mail, Lock, BookOpen, MapPin, Phone } from "lucide-react";

export default function TeacherForm({ onSubmit }) {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    department: "",
    designation: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const departments = [
    "Computer Science",
    "Electronics",
    "Mechanical",
    "Civil",
    "Electrical",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Management",
  ];

  const designations = ["Assistant Professor", "Associate Professor", "Professor", "Lecturer"];

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-blue-100 max-w-lg mx-auto"
    >
      <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Add Teacher</h3>

      {/* Full Name */}
      <div className="relative">
        <label htmlFor="fullname" className="block text-sm font-medium text-blue-700 mb-1">
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={form.fullname}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg bg-blue-50/50 text-gray-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="relative">
        <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg bg-blue-50/50 text-gray-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            required
          />
        </div>
      </div>

      {/* Password */}
      <div className="relative">
        <label htmlFor="password" className="block text-sm font-medium text-blue-700 mb-1">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg bg-blue-50/50 text-gray-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            required
          />
        </div>
      </div>

      {/* Department */}
      <div className="relative">
        <label htmlFor="department" className="block text-sm font-medium text-blue-700 mb-1">
          Department
        </label>
        <div className="relative">
          <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
          <select
            name="department"
            id="department"
            value={form.department}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg bg-blue-50/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 appearance-none"
            required
          >
            <option value="" disabled>
              Select department
            </option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Designation */}
      <div className="relative">
        <label htmlFor="designation" className="block text-sm font-medium text-blue-700 mb-1">
          Designation
        </label>
        <div className="relative">
          <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
          <select
            name="designation"
            id="designation"
            value={form.designation}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg bg-blue-50/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 appearance-none"
            required
          >
            <option value="" disabled>
              Select designation
            </option>
            {designations.map((desig) => (
              <option key={desig} value={desig}>
                {desig}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Address */}
      <div className="relative">
        <label htmlFor="address" className="block text-sm font-medium text-blue-700 mb-1">
          Address
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
          <input
            type="text"
            name="address"
            id="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter address"
            className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg bg-blue-50/50 text-gray-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
        </div>
      </div>

      {/* Phone */}
      <div className="relative">
        <label htmlFor="phone" className="block text-sm font-medium text-blue-700 mb-1">
          Phone
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
          <input
            type="tel"
            name="phone"
            id="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg bg-blue-50/50 text-gray-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 font-medium"
      >
        Add Teacher
      </button>
    </form>
  );
}
