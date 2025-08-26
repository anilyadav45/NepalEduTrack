import { useState } from "react";
import { User, Mail, Lock, BookOpen, MapPin, Phone, Calendar, LayoutList } from "lucide-react";

export default function StudentForm({ onSubmit }) {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    program: "",
    branch: "",
    address: "",
    phone: "",
    year: "",
    section: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      // Reset branch if program changes
      ...(name === "program" ? { branch: "" } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  // Program and branch options
  const programs = [
    { value: "B.Tech", label: "B.Tech" },
    { value: "BCA", label: "BCA" },
    { value: "MCA", label: "MCA" },
    { value: "BBA", label: "BBA" },
    { value: "B.Sc", label: "B.Sc" },
    { value: "M.Sc", label: "M.Sc" },
    { value: "B.Com", label: "B.Com" },
    { value: "M.Tech", label: "M.Tech" },
    { value: "MBA", label: "MBA" },
    { value: "B.Arch", label: "B.Arch" },
  ];

  const branches = {
    "B.Tech": [
      "CSE",
      "CSE-AIML",
      "CSE-DS",
      "CSE-IT",
      "ECE",
      "EEE",
      "Civil",
      "Mechanical",
      "Chemical",
      "Biotechnology",
    ],
    BCA: ["General"],
    MCA: ["General", "Data Science", "Cybersecurity", "Software Development"],
    BBA: ["General", "Marketing", "Finance", "Human Resource Management"],
    "B.Sc": ["Physics", "Chemistry", "Mathematics", "Computer Science", "Biotechnology"],
    "M.Sc": ["Physics", "Chemistry", "Mathematics", "Computer Science", "Biotechnology"],
    "B.Com": ["General", "Accounting and Finance", "Taxation"],
    "M.Tech": ["CSE", "VLSI Design", "Structural Engineering", "Thermal Engineering"],
    MBA: ["Marketing", "Finance", "Human Resource Management", "Operations Management"],
    "B.Arch": ["General"],
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-blue-100 max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Add Student</h3>

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

      {/* Program */}
      <div className="relative">
        <label htmlFor="program" className="block text-sm font-medium text-blue-700 mb-1">
          Program
        </label>
        <div className="relative">
          <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
          <select
            name="program"
            id="program"
            value={form.program}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg bg-blue-50/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 appearance-none"
            required
          >
            <option value="" disabled>
              Select program
            </option>
            {programs.map((prog) => (
              <option key={prog.value} value={prog.value}>
                {prog.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Branch (Conditional) */}
      {form.program && (
        <div className="relative">
          <label htmlFor="branch" className="block text-sm font-medium text-blue-700 mb-1">
            Branch
          </label>
          <div className="relative">
            <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
            <select
              name="branch"
              id="branch"
              value={form.branch}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg bg-blue-50/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 appearance-none"
              required
            >
              <option value="" disabled>
                Select branch
              </option>
              {branches[form.program]?.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

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

      {/* Year */}
      <div className="relative">
        <label htmlFor="year" className="block text-sm font-medium text-blue-700 mb-1">
          Year
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
          <input
            type="text"
            name="year"
            id="year"
            value={form.year}
            onChange={handleChange}
            placeholder="Enter year (e.g., 1st, 2nd)"
            className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg bg-blue-50/50 text-gray-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
        </div>
      </div>

      {/* Section */}
      <div className="relative">
        <label htmlFor="section" className="block text-sm font-medium text-blue-700 mb-1">
          Section
        </label>
        <div className="relative">
          <LayoutList className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
          <select
            name="section"
            id="section"
            value={form.section}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg bg-blue-50/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 appearance-none"
            required
          >
            <option value="" disabled>
              Select section
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 font-medium"
      >
        Add Student
      </button>
    </form>
  );
}