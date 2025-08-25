import { useState } from "react";

export default function StudentForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rollNo: "",
    course: "",
    year: "",
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
        name="rollNo"
        value={form.rollNo}
        onChange={handleChange}
        placeholder="Roll Number"
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        name="course"
        value={form.course}
        onChange={handleChange}
        placeholder="Course"
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        name="year"
        value={form.year}
        onChange={handleChange}
        placeholder="Year"
        className="w-full border px-3 py-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Student
      </button>
    </form>
  );
}
