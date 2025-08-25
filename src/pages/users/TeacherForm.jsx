import { useState } from "react";

export default function TeacherForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    employeeId: "",
    department: "",
    specialization: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        type="text"
        name="employeeId"
        value={form.employeeId}
        onChange={handleChange}
        placeholder="Employee ID"
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        name="department"
        value={form.department}
        onChange={handleChange}
        placeholder="Department"
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        name="specialization"
        value={form.specialization}
        onChange={handleChange}
        placeholder="Specialization"
        className="w-full border px-3 py-2 rounded"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Teacher
      </button>
    </form>
  );
}
