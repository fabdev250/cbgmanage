import React, { useState } from 'react';
import { UserPlus, Search, MoreVertical, Mail, Shield, Edit, Trash2, Lock, UserCheck, Crown, Filter } from 'lucide-react';

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [openMenu, setOpenMenu] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Mock users data
  const users = [
    {
      id: 1,
      name: 'dev fab',
      email: 'devfab@gmail.com',
      role: 'patron',
      initials: 'DF',
      bgColor: 'bg-blue-500',
      status: 'active'
    },
    {
      id: 2,
      name: 'admin',
      email: 'psaimwe479@gmail.com',
      role: 'patron',
      initials: 'AD',
      bgColor: 'bg-indigo-500',
      status: 'active'
    },
    {
      id: 3,
      name: 'Nziza Jules',
      email: 'nzizadev@gmail.com',
      role: 'administrator',
      initials: 'NJ',
      bgColor: 'bg-teal-500',
      status: 'active'
    },
    {
      id: 4,
      name: 'prince dev',
      email: 'ishimweprince990@gmail.com',
      role: 'patron',
      initials: 'PD',
      bgColor: 'bg-blue-600',
      status: 'active'
    },
    {
      id: 5,
      name: 'N/A',
      email: 'dos@gmail.com',
      role: 'administrator',
      initials: 'DO',
      bgColor: 'bg-cyan-500',
      status: 'active'
    },
    {
      id: 6,
      name: 'adminer',
      email: 'adminer@gmail.com',
      role: 'administrator',
      initials: 'AD',
      bgColor: 'bg-green-600',
      status: 'active'
    },
    {
      id: 7,
      name: 'N/A',
      email: 'admin@gmail.com',
      role: 'administrator',
      initials: 'AD',
      bgColor: 'bg-blue-400',
      status: 'active'
    }
  ];

  // Filter users
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const roleStats = {
    total: users.length,
    administrators: users.filter(u => u.role === 'administrator').length,
    patrons: users.filter(u => u.role === 'patron').length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                  User Management
                </h1>
                <p className="text-sm text-gray-600 mt-1">Manage user accounts, roles and permissions</p>
              </div>
            </div>
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <UserPlus className="w-5 h-5" />
              Add New User
            </button>
          </div>

          {/* Enhanced Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search users by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="pl-12 pr-8 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white transition-all min-w-[200px]"
              >
                <option value="all">All Roles</option>
                <option value="administrator">Administrators</option>
                <option value="patron">Patrons</option>
              </select>
            </div>
          </div>
        </div>

        {/* Enhanced Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <UserCheck className="w-7 h-7 text-white" />
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-100">Total Users</p>
                <p className="text-4xl font-bold">{roleStats.total}</p>
              </div>
            </div>
            <div className="h-1 bg-white/20 rounded-full">
              <div className="h-1 bg-white rounded-full w-full"></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <div className="text-right">
                <p className="text-sm text-red-100">Administrators</p>
                <p className="text-4xl font-bold">{roleStats.administrators}</p>
              </div>
            </div>
            <div className="h-1 bg-white/20 rounded-full">
              <div className="h-1 bg-white rounded-full" style={{width: `${(roleStats.administrators / roleStats.total) * 100}%`}}></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="text-right">
                <p className="text-sm text-green-100">Patrons</p>
                <p className="text-4xl font-bold">{roleStats.patrons}</p>
              </div>
            </div>
            <div className="h-1 bg-white/20 rounded-full">
              <div className="h-1 bg-white rounded-full" style={{width: `${(roleStats.patrons / roleStats.total) * 100}%`}}></div>
            </div>
          </div>
        </div>

        {/* Enhanced Users List */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-blue-600" />
                  Registered Users
                </h2>
                <p className="text-sm text-gray-600 mt-1">Manage all system users and their permissions</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">{filteredUsers.length}</p>
                <p className="text-xs text-gray-500">Active Users</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    User Profile
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Email Address
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Role & Status
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsers.map((user, index) => (
                  <tr key={user.id} className="hover:bg-blue-50/50 transition-all group">
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${user.bgColor} rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform`}>
                          <span className="text-white font-bold text-lg">{user.initials}</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-500">User ID: #{user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Mail className="w-4 h-4 text-gray-600" />
                        </div>
                        <span className="text-sm text-gray-700">{user.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      {user.role === 'administrator' ? (
                        <span className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md">
                          <Crown className="w-3.5 h-3.5 mr-1.5" />
                          Administrator
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md">
                          <Shield className="w-3.5 h-3.5 mr-1.5" />
                          Patron
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setOpenMenu(openMenu === user.id ? null : user.id)}
                          className="p-2 hover:bg-blue-100 rounded-xl transition-colors relative"
                        >
                          <MoreVertical className="w-5 h-5 text-gray-600" />
                        </button>

                        {openMenu === user.id && (
                          <div className="absolute right-8 mt-32 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 z-20 overflow-hidden">
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 transition-colors">
                              <Edit className="w-4 h-4 text-blue-600" />
                              Edit User
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 transition-colors border-t border-gray-100">
                              <Lock className="w-4 h-4 text-orange-600" />
                              Reset Password
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100">
                              <Trash2 className="w-4 h-4" />
                              Delete User
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="p-16 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Users Found</h3>
              <p className="text-gray-500 mb-6">No users match your search criteria. Try adjusting your filters.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRole('all');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Enhanced Footer */}
          {filteredUsers.length > 0 && (
            <div className="px-6 py-4 border-t-2 border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-bold text-blue-600">{filteredUsers.length}</span> of{' '}
                  <span className="font-bold text-blue-600">{users.length}</span> users
                </p>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 border-2 border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-white hover:border-blue-500 transition-all">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-medium shadow-md">
                    1
                  </button>
                  <button className="px-4 py-2 border-2 border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-white hover:border-blue-500 transition-all">
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
