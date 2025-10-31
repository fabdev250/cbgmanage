import React, { useState } from 'react';

const DashboardOverview = () => {
  // State for active selections
  const [selectedYear, setSelectedYear] = useState('2026-2027');
  const [selectedTerm, setSelectedTerm] = useState('Term 3');

  // Mock data - replace with actual API data
  const academicYears = [
    { id: 1, year: '2023-2024', status: 'completed' },
    { id: 2, year: '2024-2025', status: 'completed' },
    { id: 3, year: '2025-2026', status: 'completed' },
    { id: 4, year: '2026-2027', status: 'active' }
  ];

  const terms = [
    { id: 1, name: 'Term 1', status: 'completed' },
    { id: 2, name: 'Term 2', status: 'completed' },
    { id: 3, name: 'Term 3', status: 'active' }
  ];

  // Quick view statistics
  const statistics = {
    totalStudents: 1,
    oLevelStudents: 0,
    aLevelStudents: 1,
    staffMembers: 12
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'completed':
        return 'bg-gray-100 text-gray-600 border-gray-300';
      case 'upcoming':
        return 'bg-green-100 text-green-600 border-green-300';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">Dashboard Overview</h1>
          <p className="text-blue-100 text-lg">Manage and monitor your school's academic performance</p>
        </div>

        {/* Academic Year and Term Selection Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg className="w-7 h-7 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Academic Year & Term Selection
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Academic Year Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Select Academic Year</h3>
              <div className="space-y-3">
                {academicYears.map((year) => (
                  <div
                    key={year.id}
                    onClick={() => setSelectedYear(year.year)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      selectedYear === year.year
                        ? 'border-blue-600 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                          selectedYear === year.year ? 'border-blue-600' : 'border-gray-300'
                        }`}>
                          {selectedYear === year.year && (
                            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                          )}
                        </div>
                        <span className="font-semibold text-gray-800 text-lg">{year.year}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(year.status)}`}>
                        {year.status.charAt(0).toUpperCase() + year.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Term Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Select Active Term</h3>
              <div className="space-y-3">
                {terms.map((term) => (
                  <div
                    key={term.id}
                    onClick={() => setSelectedTerm(term.name)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      selectedTerm === term.name
                        ? 'border-blue-600 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                          selectedTerm === term.name ? 'border-blue-600' : 'border-gray-300'
                        }`}>
                          {selectedTerm === term.name && (
                            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                          )}
                        </div>
                        <span className="font-semibold text-gray-800 text-lg">{term.name}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(term.status)}`}>
                        {term.status.charAt(0).toUpperCase() + term.status.slice(1)}
                      </span>
                    </div>
                    <div className="ml-8 text-sm text-gray-600">
                      <span className="font-medium">{term.startDate}</span> - <span className="font-medium">{term.endDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick View Statistics Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg className="w-7 h-7 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Quick View Statistics
            <span className="ml-3 text-sm font-normal text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {selectedYear} - {selectedTerm}
            </span>
          </h2>

          {/* Main Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Students Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold">{statistics.totalStudents}</div>
                </div>
              </div>
              <div className="text-blue-100 font-medium text-lg">Total Students</div>
              <div className="mt-2 text-sm text-blue-200">
                Active in {selectedTerm}
              </div>
            </div>

            {/* Male Students Card */}
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold">{statistics.maleStudents}</div>
                </div>
              </div>
              <div className="text-indigo-100 font-medium text-lg">Male Students</div>
              <div className="mt-2 text-sm text-indigo-200">
                {Math.round((statistics.maleStudents / statistics.totalStudents) * 100)}% of total
              </div>
            </div>

            {/* Female Students Card */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold">{statistics.femaleStudents}</div>
                </div>
              </div>
              <div className="text-purple-100 font-medium text-lg">Female Students</div>
              <div className="mt-2 text-sm text-purple-200">
                {Math.round((statistics.femaleStudents / statistics.totalStudents) * 100)}% of total
              </div>
            </div>

            {/* Total Dormitories Card */}
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold">{statistics.totalDormitories}</div>
                </div>
              </div>
              <div className="text-cyan-100 font-medium text-lg">Total Dormitories</div>
              <div className="mt-2 text-sm text-cyan-200">
                Capacity: {statistics.dormitoryCapacity} students
              </div>
            </div>
          </div>

          {/* Secondary Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Staff Statistics */}
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Staff Overview
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-blue-700">{statistics.staffMembers}</div>
                  <div className="text-gray-600 mt-1">Total Staff</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-blue-700">{statistics.teachers}</div>
                  <div className="text-gray-600 mt-1">Teachers</div>
                </div>
              </div>
            </div>

            {/* Dormitory Occupancy Overview */}
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Dormitory Statistics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-blue-700">
                    {dormitories.reduce((sum, d) => sum + d.occupied, 0)}
                  </div>
                  <div className="text-gray-600 mt-1">Occupied Beds</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-blue-700">
                    {statistics.dormitoryCapacity - dormitories.reduce((sum, d) => sum + d.occupied, 0)}
                  </div>
                  <div className="text-gray-600 mt-1">Available Beds</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Dormitory View */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg className="w-7 h-7 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dormitory Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dormitories.map((dorm) => {
              const occupancyRate = calculateOccupancyPercentage(dorm.occupied, dorm.capacity);
              const isNearCapacity = occupancyRate >= 90;
              
              return (
                <div
                  key={dorm.id}
                  className={`rounded-xl p-5 border-2 shadow-md hover:shadow-lg transition-all duration-200 ${
                    isNearCapacity 
                      ? 'border-orange-300 bg-orange-50' 
                      : 'border-blue-200 bg-blue-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-800 text-lg">{dorm.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      dorm.gender === 'Male' 
                        ? 'bg-blue-200 text-blue-800' 
                        : 'bg-pink-200 text-pink-800'
                    }`}>
                      {dorm.gender}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Occupied:</span>
                      <span className="font-semibold text-gray-800">{dorm.occupied}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Capacity:</span>
                      <span className="font-semibold text-gray-800">{dorm.capacity}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Available:</span>
                      <span className={`font-semibold ${
                        dorm.capacity - dorm.occupied <= 5 ? 'text-orange-600' : 'text-green-600'
                      }`}>
                        {dorm.capacity - dorm.occupied}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          occupancyRate >= 90 
                            ? 'bg-orange-500' 
                            : occupancyRate >= 70 
                            ? 'bg-blue-500' 
                            : 'bg-green-500'
                        }`}
                        style={{ width: `${occupancyRate}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className={`text-sm font-bold ${
                      isNearCapacity ? 'text-orange-700' : 'text-blue-700'
                    }`}>
                      {occupancyRate}% Occupied
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
