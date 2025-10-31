import React, { useState } from 'react';
import { Calendar, User, FileText, Filter, Download, Search } from 'lucide-react';

const Activities = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock activities data - In real app, this would come from API
  const activities = [
    {
      id: 1,
      date: 'November 1st, 2025 12:45 AM',
      user: 'admin',
      type: 'student',
      description: 'admin added Student John Doe to S6 ACC A.',
      category: 'new'
    },
    {
      id: 2,
      date: 'November 1st, 2025 12:30 AM',
      user: 'admin',
      type: 'term',
      description: 'admin created Term 3 for academic year 2026-2027.',
      category: 'new'
    },
    {
      id: 3,
      date: 'October 31st, 2025 11:55 PM',
      user: 'admin',
      type: 'permission',
      description: 'admin granted permission to Teacher Mary Smith. Reason: New staff member.',
      category: 'modified'
    },
    {
      id: 4,
      date: 'October 31st, 2025 11:20 PM',
      user: 'admin@gmail.com',
      type: 'permission',
      description: 'admin@gmail.com revoked permission for Student Peter Johnson (marked as returned).',
      category: 'modified'
    },
    {
      id: 5,
      date: 'October 31st, 2025 11:20 PM',
      user: 'admin@gmail.com',
      type: 'permission',
      description: 'admin@gmail.com granted permission to Student Sarah Williams. Reason: Medical leave approved.',
      category: 'modified'
    },
    {
      id: 6,
      date: 'October 31st, 2025 10:18 PM',
      user: 'admin@gmail.com',
      type: 'student',
      description: 'admin@gmail.com added Student James Brown to L4 SCI A.',
      category: 'new'
    },
    {
      id: 7,
      date: 'October 31st, 2025 9:14 PM',
      user: 'admin@gmail.com',
      type: 'system',
      description: 'System cleared temporary cache for improved performance.',
      category: 'system'
    },
    {
      id: 8,
      date: 'October 31st, 2025 9:14 PM',
      user: 'admin@gmail.com',
      type: 'term',
      description: 'admin@gmail.com updated Term 3 dates for academic year 2026-2027.',
      category: 'modified'
    },
    {
      id: 9,
      date: 'October 31st, 2025 9:36 PM',
      user: 'admin',
      type: 'permission',
      description: 'admin revoked permission for Student Michael Davis (marked as returned).',
      category: 'modified'
    },
    {
      id: 10,
      date: 'October 27th, 2025 5:43 PM',
      user: 'dev fab',
      type: 'term',
      description: 'dev fab created Term 2 for academic year 2026-2027.',
      category: 'new'
    },
    {
      id: 11,
      date: 'October 27th, 2025 5:43 PM',
      user: 'dev fab',
      type: 'term',
      description: 'dev fab updated Term 2 dates for academic year 2026-2027.',
      category: 'modified'
    },
    {
      id: 12,
      date: 'October 27th, 2025 3:59 PM',
      user: 'dev fab',
      type: 'student',
      description: 'dev fab added Student Emma Wilson to S1 B.',
      category: 'new'
    },
    {
      id: 13,
      date: 'October 27th, 2025 3:47 PM',
      user: 'admin',
      type: 'system',
      description: 'System completed daily backup successfully.',
      category: 'system'
    },
    {
      id: 14,
      date: 'October 26th, 2025 4:22 PM',
      user: 'admin',
      type: 'user',
      description: 'admin created new user account for Teacher Robert Anderson.',
      category: 'users'
    },
    {
      id: 15,
      date: 'October 26th, 2025 3:15 PM',
      user: 'admin',
      type: 'report',
      description: 'admin generated monthly attendance report for October 2025.',
      category: 'reports'
    }
  ];

  const filters = [
    { id: 'all', label: 'All', count: activities.length },
    { id: 'new', label: 'New', count: activities.filter(a => a.category === 'new').length },
    { id: 'modified', label: 'Modified', count: activities.filter(a => a.category === 'modified').length },
    { id: 'users', label: 'Users', count: activities.filter(a => a.category === 'users').length },
    { id: 'system', label: 'System', count: activities.filter(a => a.category === 'system').length },
    { id: 'reports', label: 'Reports', count: activities.filter(a => a.category === 'reports').length }
  ];

  // Filter activities
  const filteredActivities = activities.filter(activity => {
    const matchesFilter = selectedFilter === 'all' || activity.category === selectedFilter;
    const matchesSearch = activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         activity.user.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Get icon based on activity type
  const getActivityIcon = (type) => {
    switch (type) {
      case 'student':
        return '👤';
      case 'term':
        return '📅';
      case 'permission':
        return '🔑';
      case 'system':
        return '⚙️';
      case 'user':
        return '👥';
      case 'report':
        return '📊';
      default:
        return '📄';
    }
  };

  // Get color based on category
  const getCategoryColor = (category) => {
    switch (category) {
      case 'new':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'modified':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'users':
        return 'text-purple-700 bg-purple-50 border-purple-200';
      case 'system':
        return 'text-gray-700 bg-gray-50 border-gray-200';
      case 'reports':
        return 'text-orange-700 bg-orange-50 border-orange-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Recent Activities</h1>
                <p className="text-sm text-gray-600">Track all activities happening in the system</p>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">
              <Download className="w-5 h-5" />
              Export
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  selectedFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Activities Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Activity Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredActivities.length > 0 ? (
                  filteredActivities.map((activity) => (
                    <tr key={activity.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-900">{activity.date}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-900">{activity.user}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-2">
                          <span className="text-lg">{getActivityIcon(activity.type)}</span>
                          <span className="text-sm text-gray-700">{activity.description}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(activity.category)}`}>
                          {activity.category.charAt(0).toUpperCase() + activity.category.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <FileText className="w-12 h-12 text-gray-400" />
                        <p className="text-gray-500">No activities found</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Info */}
          {filteredActivities.length > 0 && (
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-medium">{filteredActivities.length}</span> of{' '}
                  <span className="font-medium">{activities.length}</span> activities
                </p>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100">
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                    1
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100">
                    2
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100">
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

export default Activities;
