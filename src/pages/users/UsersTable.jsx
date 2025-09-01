export default function UserTable() {
  // dummy users data
  const users = [
    {
      id: 1,
      name: "Mahmoud Moussa",
      role: "Instructor",
      email: "mahmoud@email.com",
      joined: "January",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Student",
      email: "john.doe@example.co",
      joined: "February",
    },
    {
      id: 3,
      name: "Sarah Wilson",
      role: "Instructor",
      email: "sarahwilson@example",
      joined: "March",
    },
    {
      id: 4,
      name: "Emily Johnson",
      role: "Student",
      email: "emily.johnson@examp",
      joined: "April",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 font-medium text-gray-700">Name</th>
            <th className="px-6 py-3 font-medium text-gray-700">Role</th>
            <th className="px-6 py-3 font-medium text-gray-700">Email</th>
            <th className="px-6 py-3 font-medium text-gray-700">Joined</th>
            <th className="px-6 py-3 font-medium text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr
              key={user.id}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.joined}</td>
              <td className="px-6 py-4 text-blue-600 cursor-pointer hover:underline">
                {user.role === "Instructor" ? "Edit" : "Delete"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
