import AdminLayout from "../../layouts/AdminLayout";
import UserTable from "./UsersTable";
import { PlusCircle } from "lucide-react";
import RoleSelectionModal from "./RoleSelectorModal";
//to open modal for role selection which one to add
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UsersPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <AdminLayout>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-black">Users</h1>
        <button
          onClick={() => setIsRoleModalOpen(true)}
          className="flex items-center justify-center bg-cyan-600 text-white px-4 py-3 rounded-lg hover:bg-cyan-700 transition w-full md:w-auto"
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          Add New User
        </button>

        {/* Role Selection Modal */}
        <RoleSelectionModal
          isOpen={isRoleModalOpen}
          onClose={() => setIsRoleModalOpen(false)}
          onSelectRole={(role) => {
            setIsRoleModalOpen(false);
            if (role === "student") navigate("/dashboard/admin/add-student");
            if (role === "teacher") navigate("/dashboard/admin/add-teacher");
          }}
        />
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow p-4 text-gray-800">
        <UserTable />
      </div>
    </AdminLayout>
  );
}
