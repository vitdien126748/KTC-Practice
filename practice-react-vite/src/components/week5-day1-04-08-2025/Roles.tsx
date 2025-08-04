import { useEffect, useState } from "react";
import api from "./apiClient";

interface Role {
  id: string | number;
  name: string;
  description?: string;
  permissions?: string[];
}

export default function Roles() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await api.get("/roles");
        setRoles(response.data);
      } catch (err) {
        const error = err as { response?: { status?: number } };
        if (error.response?.status === 403) {
          setError("Forbidden - Admin role required to view roles");
        } else if (error.response?.status === 401) {
          setError("Unauthorized - Please login to continue");
        } else {
          setError("Failed to fetch roles. Please try again.");
        }
        console.error("Roles error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
    window.location.href = "/login";
  };

  const getRoleColor = (roleName: string) => {
    switch (roleName?.toLowerCase()) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "moderator":
        return "bg-yellow-100 text-yellow-800";
      case "user":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Roles Management
              </h1>
              <p className="text-sm text-gray-600">
                Manage system roles and permissions
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => (window.location.href = "/dashboard")}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm font-medium"
              >
                Back to Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Roles Section */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">All Roles</h2>
            <p className="text-sm text-gray-600">
              List of all system roles and their permissions
            </p>
          </div>

          <div className="px-6 py-4">
            {loading && (
              <div className="text-center py-8">
                <div className="inline-flex items-center">
                  <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full mr-3"></div>
                  <span className="text-gray-600">Loading roles...</span>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Error</h3>
                    <p className="text-sm text-red-700 mt-1">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {!loading && !error && roles.length === 0 && (
              <div className="text-center py-8">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No roles found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  There are no roles configured in the system yet.
                </p>
              </div>
            )}

            {!loading && !error && roles.length > 0 && (
              <div className="overflow-hidden">
                {/* Desktop Table View */}
                <div className="hidden sm:block">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Permissions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {roles.map((role, index) => (
                        <tr
                          key={role.id}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            #{role.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-8 w-8">
                                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                                  <span className="text-sm font-medium text-purple-800">
                                    {role.name?.charAt(0)?.toUpperCase() || "R"}
                                  </span>
                                </div>
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">
                                  {role.name}
                                </div>
                                <span
                                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(
                                    role.name
                                  )}`}
                                >
                                  {role.name}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            <div className="max-w-xs truncate">
                              {role.description || "No description"}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {role.permissions && role.permissions.length > 0 ? (
                              <div className="flex flex-wrap gap-1">
                                {role.permissions
                                  .slice(0, 3)
                                  .map((permission, idx) => (
                                    <span
                                      key={idx}
                                      className="inline-flex px-2 py-1 text-xs rounded bg-blue-100 text-blue-800"
                                    >
                                      {permission}
                                    </span>
                                  ))}
                                {role.permissions.length > 3 && (
                                  <span className="text-xs text-gray-500">
                                    +{role.permissions.length - 3} more
                                  </span>
                                )}
                              </div>
                            ) : (
                              <span className="text-gray-400 text-xs">
                                No permissions
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="sm:hidden space-y-3">
                  {roles.map((role) => (
                    <div
                      key={role.id}
                      className="bg-white border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-sm font-medium text-purple-800">
                              {role.name?.charAt(0)?.toUpperCase() || "R"}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {role.name}
                            </p>
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(
                                role.name
                              )}`}
                            >
                              {role.name}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mb-2">
                            ID: #{role.id}
                          </p>
                          {role.description && (
                            <p className="text-sm text-gray-700 mb-2">
                              {role.description}
                            </p>
                          )}
                          {role.permissions && role.permissions.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {role.permissions.map((permission, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex px-2 py-1 text-xs rounded bg-blue-100 text-blue-800"
                                >
                                  {permission}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 text-sm text-gray-600">
                  Total roles:{" "}
                  <span className="font-medium text-gray-900">
                    {roles.length}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
