import React, { useState } from 'react';
import { UserPlus, Search, MoreVertical, Mail, Shield, Edit, Trash2, Lock, UserCheck, Crown, Filter, Grid3x3, LayoutGrid, List, AlignJustify } from 'lucide-react';
import { useToast } from '../components/Toast';

const Users = () => {
  const { showSuccess, showError, showWarning, showInfo } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [openMenu, setOpenMenu] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // list, grid, card, large, medium, small

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

  // Handler functions with toast notifications
  const handleAddUser = () => {
    showInfo('Add user functionality coming soon!');
  };

  const handleEditUser = (userName) => {
    setOpenMenu(null);
    showInfo(`Edit user: ${userName}`);
  };

  const handleResetPassword = (userName) => {
    setOpenMenu(null);
    showWarning(`Password reset requested for ${userName}`);
  };

  const handleDeleteUser = (userName) => {
    setOpenMenu(null);
    showError(`Delete confirmation required for ${userName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Simplified Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
              <p className="text-sm text-gray-600 mt-1">Manage user accounts and permissions</p>
            </div>
            <button 
              onClick={handleAddUser}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              <UserPlus className="w-5 h-5" />
              Add User
            </button>
          </div>

          {/* Search, Filter and View Options */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="all">All Roles</option>
              <option value="administrator">Administrators</option>
              <option value="patron">Patrons</option>
            </select>
            
            {/* View Mode Toggles */}
            <div className="flex items-center gap-1 border border-gray-300 rounded-lg p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                title="List View"
              >
                <AlignJustify className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                title="Grid View"
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('card')}
                className={`p-2 rounded transition-colors ${viewMode === 'card' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                title="Card View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('large')}
                className={`p-2 rounded transition-colors ${viewMode === 'large' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                title="Large Icons"
              >
                <span className="text-lg font-bold">L</span>
              </button>
              <button
                onClick={() => setViewMode('medium')}
                className={`p-2 rounded transition-colors ${viewMode === 'medium' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                title="Medium Icons"
              >
                <span className="text-sm font-bold">M</span>
              </button>
              <button
                onClick={() => setViewMode('small')}
                className={`p-2 rounded transition-colors ${viewMode === 'small' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                title="Small Icons"
              >
                <span className="text-xs font-bold">S</span>
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{roleStats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Administrators</p>
                <p className="text-2xl font-bold text-gray-900">{roleStats.administrators}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Patrons</p>
                <p className="text-2xl font-bold text-gray-900">{roleStats.patrons}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Users Display - Changes based on view mode */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Users ({filteredUsers.length})</h2>
            </div>
          </div>

          {filteredUsers.length === 0 ? (
            <div className="p-12 text-center">
              <UserCheck className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">No Users Found</h3>
              <p className="text-gray-500 mb-4">No users match your search criteria.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRole('all');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              {/* List View */}
              {viewMode === 'list' && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">User</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Role</th>
                        <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 ${user.bgColor} rounded-lg flex items-center justify-center`}>
                                <span className="text-white font-bold">{user.initials}</span>
                              </div>
                              <span className="text-sm font-medium text-gray-900">{user.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              user.role === 'administrator' 
                                ? 'bg-red-100 text-red-700' 
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {user.role === 'administrator' ? 'Administrator' : 'Patron'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <button
                              onClick={() => setOpenMenu(openMenu === user.id ? null : user.id)}
                              className="p-2 hover:bg-gray-100 rounded-lg"
                            >
                              <MoreVertical className="w-5 h-5 text-gray-600" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Grid View */}
              {viewMode === 'grid' && (
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredUsers.map((user) => (
                    <div key={user.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-12 h-12 ${user.bgColor} rounded-lg flex items-center justify-center`}>
                          <span className="text-white font-bold">{user.initials}</span>
                        </div>
                        <button
                          onClick={() => setOpenMenu(openMenu === user.id ? null : user.id)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <MoreVertical className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1">{user.name}</h3>
                      <p className="text-sm text-gray-600 mb-2 truncate">{user.email}</p>
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        user.role === 'administrator' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {user.role === 'administrator' ? 'Admin' : 'Patron'}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Card View */}
              {viewMode === 'card' && (
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredUsers.map((user) => (
                    <div key={user.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-16 h-16 ${user.bgColor} rounded-xl flex items-center justify-center`}>
                            <span className="text-white font-bold text-xl">{user.initials}</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{user.name}</h3>
                            <p className="text-xs text-gray-500">ID: #{user.id}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setOpenMenu(openMenu === user.id ? null : user.id)}
                          className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                          <MoreVertical className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="truncate">{user.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-gray-400" />
                          <span className={`text-xs font-medium px-2 py-1 rounded ${
                            user.role === 'administrator' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {user.role === 'administrator' ? 'Administrator' : 'Patron'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Large Icon View */}
              {viewMode === 'large' && (
                <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {filteredUsers.map((user) => (
                    <div key={user.id} className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className={`w-20 h-20 ${user.bgColor} rounded-2xl flex items-center justify-center mb-2`}>
                        <span className="text-white font-bold text-2xl">{user.initials}</span>
                      </div>
                      <p className="text-sm font-medium text-gray-900 text-center truncate w-full">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.role === 'administrator' ? 'Admin' : 'Patron'}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Medium Icon View */}
              {viewMode === 'medium' && (
                <div className="p-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                  {filteredUsers.map((user) => (
                    <div key={user.id} className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className={`w-14 h-14 ${user.bgColor} rounded-xl flex items-center justify-center mb-2`}>
                        <span className="text-white font-bold text-lg">{user.initials}</span>
                      </div>
                      <p className="text-xs font-medium text-gray-900 text-center truncate w-full">{user.name}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Small Icon View */}
              {viewMode === 'small' && (
                <div className="p-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
                  {filteredUsers.map((user) => (
                    <div key={user.id} className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors" title={user.name}>
                      <div className={`w-10 h-10 ${user.bgColor} rounded-lg flex items-center justify-center mb-1`}>
                        <span className="text-white font-bold text-sm">{user.initials}</span>
                      </div>
                      <p className="text-xs text-gray-900 text-center truncate w-full">{user.name.split(' ')[0]}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{filteredUsers.length}</span> of{' '}
                    <span className="font-medium">{users.length}</span> users
                  </p>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-white">
                      Previous
                    </button>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                      1
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-white">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
