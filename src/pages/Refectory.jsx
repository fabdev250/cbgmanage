import React, { useState } from 'react';
import { Users, UserPlus, Download, Filter, Plus, Utensils } from 'lucide-react';

const Refectory = () => {
  const [selectedShift, setSelectedShift] = useState('morning'); // morning or evening
  const [selectedSerie, setSelectedSerie] = useState('serie1'); // serie1 or serie2
  const [showAddStudent, setShowAddStudent] = useState(false);

  // Table configuration based on shift and serie
  const getTableCount = () => {
    if (selectedShift === 'morning') {
      return selectedSerie === 'serie1' ? 28 : 11;
    } else {
      return selectedSerie === 'serie1' ? 28 : 8;
    }
  };

  // Mock data - In real app, this would come from API
  const [tables, setTables] = useState(() => {
    const tableCount = 28; // Initialize with morning serie1
    return Array.from({ length: tableCount }, (_, i) => ({
      id: i + 1,
      boys: [],
      girls: [],
      maxBoys: 3,
      maxGirls: 7
    }));
  });

  const currentTableCount = getTableCount();
  const currentTables = tables.slice(0, currentTableCount);

  // Calculate statistics
  const getTotalStudents = () => {
    return currentTables.reduce((sum, table) => sum + table.boys.length + table.girls.length, 0);
  };

  const getTotalBoys = () => {
    return currentTables.reduce((sum, table) => sum + table.boys.length, 0);
  };

  const getTotalGirls = () => {
    return currentTables.reduce((sum, table) => sum + table.girls.length, 0);
  };

  const getAvailableSeats = () => {
    return currentTables.reduce((sum, table) => {
      const boysSpace = table.maxBoys - table.boys.length;
      const girlsSpace = table.maxGirls - table.girls.length;
      return sum + boysSpace + girlsSpace;
    }, 0);
  };

  // Auto-assign student to appropriate table
  const assignStudentToTable = (student) => {
    const gender = student.gender;
    const updatedTables = [...tables];

    // Find first available table for this gender
    for (let i = 0; i < currentTableCount; i++) {
      const table = updatedTables[i];
      
      if (gender === 'male' && table.boys.length < table.maxBoys) {
        table.boys.push(student);
        setTables(updatedTables);
        return i + 1; // Return table number
      } else if (gender === 'female' && table.girls.length < table.maxGirls) {
        table.girls.push(student);
        setTables(updatedTables);
        return i + 1; // Return table number
      }
    }
    
    return null; // No available table
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Utensils className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Refectory Table Management</h1>
                <p className="text-sm text-gray-600">Manage seating arrangements for students in the dining hall</p>
              </div>
            </div>
            <button
              onClick={() => setShowAddStudent(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2"
            >
              <UserPlus className="w-5 h-5" />
              Add Student
            </button>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {/* Shift Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Meal Time</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedShift('morning')}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedShift === 'morning'
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  ☀️ Morning
                </button>
                <button
                  onClick={() => setSelectedShift('evening')}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedShift === 'evening'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  🌙 Evening
                </button>
              </div>
            </div>

            {/* Serie Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Serie</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedSerie('serie1')}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedSerie === 'serie1'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Serie 1
                </button>
                <button
                  onClick={() => setSelectedSerie('serie2')}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedSerie === 'serie2'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Serie 2
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Tables</p>
                <p className="text-2xl font-bold text-gray-900">{currentTableCount}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Utensils className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{getTotalStudents()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Boys / Girls</p>
                <p className="text-2xl font-bold text-gray-900">{getTotalBoys()} / {getTotalGirls()}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Available Seats</p>
                <p className="text-2xl font-bold text-gray-900">{getAvailableSeats()}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Filter className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs">ℹ️</span>
            </div>
            <div className="text-sm text-blue-900">
              <p className="font-semibold mb-1">Table Capacity Rules</p>
              <p>Each table accommodates exactly <span className="font-bold">3 boys</span> and <span className="font-bold">7 girls</span> (total 10 students). 
              Students are automatically assigned to the first available table based on their gender. Morning Serie 1 has 28 tables, Serie 2 has 11 tables. 
              Evening Serie 1 has 28 tables, Serie 2 has 8 tables.</p>
            </div>
          </div>
        </div>

        {/* Tables Grid */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Tables for {selectedSerie === 'serie1' ? 'Serie 1' : 'Serie 2'}
            </h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentTables.map((table) => (
              <div
                key={table.id}
                className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Table {table.id}</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {selectedSerie === 'serie1' ? 'Serie 1' : 'Serie 2'}
                  </span>
                </div>

                {/* Boys Section */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Boys</span>
                    <span className="text-sm font-bold text-blue-600">
                      {table.boys.length} / {table.maxBoys}
                    </span>
                  </div>
                  <div className="bg-blue-50 rounded p-2 min-h-[60px]">
                    {table.boys.length > 0 ? (
                      <div className="space-y-1">
                        {table.boys.map((boy, idx) => (
                          <div key={idx} className="text-xs text-gray-700 truncate">
                            • {boy.name}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-xs text-gray-400">
                        No students yet
                      </div>
                    )}
                  </div>
                </div>

                {/* Girls Section */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Girls</span>
                    <span className="text-sm font-bold text-pink-600">
                      {table.girls.length} / {table.maxGirls}
                    </span>
                  </div>
                  <div className="bg-pink-50 rounded p-2 min-h-[60px]">
                    {table.girls.length > 0 ? (
                      <div className="space-y-1">
                        {table.girls.map((girl, idx) => (
                          <div key={idx} className="text-xs text-gray-700 truncate">
                            • {girl.name}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-xs text-gray-400">
                        No students yet
                      </div>
                    )}
                  </div>
                </div>

                {/* Full indicator */}
                {table.boys.length === table.maxBoys && table.girls.length === table.maxGirls && (
                  <div className="mt-3 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded text-center">
                    ✓ Table Full
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refectory;
