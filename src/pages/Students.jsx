import React, { useState, useMemo } from 'react';
import { 
  Users,
  ChevronDown,
  ChevronRight,
  Search,
  Filter,
  Download,
  UserPlus,
  Grid,
  List,
  X,
  User,
  UserCircle,
  UserCheck,
  UserCog,
  UserSquare,
  FileText
} from 'lucide-react';

// Mock data grouped by class
const studentsByClass = {
  'L5': [
    { id: 1, studentId: 'STU2026001', firstName: 'Alice', lastName: 'Johnson', status: 'Active', gender: 'Female', age: 17 },
    { id: 2, studentId: 'STU2026002', firstName: 'David', lastName: 'Smith', status: 'Active', gender: 'Male', age: 17 },
    { id: 3, studentId: 'STU2026003', firstName: 'Michael', lastName: 'Brown', status: 'Active', gender: 'Male', age: 16 }
  ],
  'L4': [
    { id: 4, studentId: 'STU2026004', firstName: 'Sarah', lastName: 'Davis', status: 'Active', gender: 'Female', age: 16 },
    { id: 5, studentId: 'STU2026005', firstName: 'James', lastName: 'Wilson', status: 'Active', gender: 'Male', age: 15 },
    { id: 6, studentId: 'STU2026006', firstName: 'Emma', lastName: 'Taylor', status: 'Active', gender: 'Female', age: 15 }
  ],
  'L3': [
    { id: 7, studentId: 'STU2026007', firstName: 'Daniel', lastName: 'Anderson', status: 'Active', gender: 'Male', age: 15 },
    { id: 8, studentId: 'STU2026008', firstName: 'Olivia', lastName: 'Thomas', status: 'Inactive', gender: 'Female', age: 14 }
  ],
  'S6': [
    { id: 9, studentId: 'STU2026009', firstName: 'William', lastName: 'Jackson', status: 'Active', gender: 'Male', age: 18 },
    { id: 10, studentId: 'STU2026010', firstName: 'Sophia', lastName: 'White', status: 'Active', gender: 'Female', age: 17 }
  ],
  'S5': [
    { id: 11, studentId: 'STU2026011', firstName: 'Benjamin', lastName: 'Harris', status: 'Active', gender: 'Male', age: 17 },
    { id: 12, studentId: 'STU2026012', firstName: 'Charlotte', lastName: 'Martin', status: 'Active', gender: 'Female', age: 16 }
  ],
  'S4': [
    { id: 13, studentId: 'STU2026013', firstName: 'Henry', lastName: 'Thompson', status: 'Active', gender: 'Male', age: 16 },
    { id: 14, studentId: 'STU2026014', firstName: 'Amelia', lastName: 'Garcia', status: 'Active', gender: 'Female', age: 15 }
  ],
  'S3': [
    { id: 15, studentId: 'STU2026015', firstName: 'Lucas', lastName: 'Martinez', status: 'Active', gender: 'Male', age: 15 },
    { id: 16, studentId: 'STU2026016', firstName: 'Mia', lastName: 'Robinson', status: 'Active', gender: 'Female', age: 14 }
  ],
  'S2': [
    { id: 17, studentId: 'STU2026017', firstName: 'Alexander', lastName: 'Clark', status: 'Active', gender: 'Male', age: 14 },
    { id: 18, studentId: 'STU2026018', firstName: 'Evelyn', lastName: 'Rodriguez', status: 'Inactive', gender: 'Female', age: 13 }
  ],
  'S1': [
    { id: 19, studentId: 'STU2026019', firstName: 'Daniel', lastName: 'Lewis', status: 'Active', gender: 'Male', age: 13 },
    { id: 20, studentId: 'STU2026020', firstName: 'Harper', lastName: 'Lee', status: 'Active', gender: 'Female', age: 12 }
  ]
};

function Students() {
  const [expandedClasses, setExpandedClasses] = useState({
    'L5': true, 'L4': false, 'L3': false, 
    'S6': false, 'S5': false, 'S4': false, 
    'S3': false, 'S2': false, 'S1': false
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [viewMode, setViewMode] = useState('list');
  const [showFilters, setShowFilters] = useState(false);

  const toggleClass = (className) => {
    setExpandedClasses(prev => ({
      ...prev,
      [className]: !prev[className]
    }));
  };

  const expandAll = () => {
    const allExpanded = {};
    Object.keys(studentsByClass).forEach(className => {
      allExpanded[className] = true;
    });
    setExpandedClasses(allExpanded);
  };

  const collapseAll = () => {
    const allCollapsed = {};
    Object.keys(studentsByClass).forEach(className => {
      allCollapsed[className] = false;
    });
    setExpandedClasses(allCollapsed);
  };

  const classOrder = ['L5', 'L4', 'L3', 'S6', 'S5', 'S4', 'S3', 'S2', 'S1'];

  // Icons and colors for each class - using people/user icons
  const classConfig = {
    'L5': { 
      icon: UserCheck, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600'
    },
    'L4': { 
      icon: UserCheck, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600'
    },
    'L3': { 
      icon: UserCheck, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600'
    },
    'S6': { 
      icon: UserCheck, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600'
    },
    'S5': { 
      icon: UserCheck, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600'
    },
    'S4': { 
      icon: UserCheck, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600'
    },
    'S3': { 
      icon: UserCheck, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600'
    },
    'S2': { 
      icon: UserCheck, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600'
    },
    'S1': { 
      icon: UserCheck, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600'
    }
  };

  const filteredData = useMemo(() => {
    let filtered = {};
    
    classOrder.forEach(className => {
      const students = studentsByClass[className] || [];
      const filteredStudents = students.filter(student => {
        const matchesSearch = searchQuery === '' || 
          student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.studentId.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesStatus = statusFilter === 'All' || student.status === statusFilter;
        
        return matchesSearch && matchesStatus;
      });
      
      if (filteredStudents.length > 0) {
        filtered[className] = filteredStudents;
      }
    });
    
    return filtered;
  }, [searchQuery, statusFilter]);

  const totalStudents = Object.values(filteredData).flat().length;
  const activeStudents = Object.values(filteredData).flat().filter(s => s.status === 'Active').length;
  const allStudentsCount = Object.values(studentsByClass).flat().length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">Reports & Analytics</h1>
              <p className="text-xs sm:text-sm text-slate-500">Generate and download institutional reports</p>
            </div>
            <button className="flex items-center gap-2 bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-slate-900 transition-colors text-sm">
              <FileText className="w-4 h-4 " />
              <span className="font-medium">Generate Report</span>
            </button>
          </div>


          {/* Search and Controls */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-3">
            <div className="flex-1 min-w-full sm:min-w-64 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
              <input
                type="text"
                placeholder="Search by name or student ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-sm rounded-lg border transition-colors ${
                showFilters ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filters</span>
            </button>

            <div className="flex items-center gap-1 bg-white border border-slate-300 rounded-lg p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
            </div>

            <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-sm bg-purple-600 text-white border-2 border-purple-600 rounded-lg hover:bg-purple-700 transition-colors shadow-sm">
              <Download className="w-4 h-4" />
              <span className="font-medium hidden sm:inline">Export</span>
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <div className="flex-1 min-w-full sm:min-w-0">
                  <label className="block text-xs font-medium text-slate-600 mb-1">STATUS</label>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full sm:w-auto px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="All">All Students</option>
                    <option value="Active">Active Only</option>
                    <option value="Inactive">Inactive Only</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={expandAll}
                    className="flex-1 sm:flex-none px-3 py-2 text-xs sm:text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Expand All
                  </button>
                  <button
                    onClick={collapseAll}
                    className="flex-1 sm:flex-none px-3 py-2 text-xs sm:text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Collapse All
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6">
        {Object.keys(filteredData).length === 0 ? (
          <div className="bg-white rounded-xl p-8 sm:p-12 text-center border border-slate-200">
            <Users className="w-12 h-12 sm:w-16 sm:h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-slate-700 mb-2">No students found</h3>
            <p className="text-sm text-slate-500">Try adjusting your search or filters</p>
          </div>
        ) : viewMode === 'list' ? (
          <div className="space-y-3 sm:space-y-4">
            {classOrder.map(className => {
              if (!filteredData[className]) return null;
              const students = filteredData[className];
              const isExpanded = expandedClasses[className];
              const config = classConfig[className];
              const ClassIcon = config.icon;
              
              return (
                <div key={className} className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm border border-slate-200">
                  {/* Class Header */}
                  <div 
                    className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-100"
                    onClick={() => toggleClass(className)}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${config.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm`}>
                        <ClassIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900">Class {className}</h2>
                        <p className="text-xs sm:text-sm text-slate-600">
                          {students.length} student{students.length !== 1 ? 's' : ''} enrolled
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="text-right hidden sm:block">
                        <p className="text-xs text-slate-500">Active</p>
                        <p className="text-base sm:text-lg font-bold text-green-600">
                          {students.filter(s => s.status === 'Active').length}
                        </p>
                      </div>
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 ${config.bgColor} rounded-lg flex items-center justify-center ${config.borderColor} border`}>
                        {isExpanded ? (
                          <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 ${config.textColor}`} />
                        ) : (
                          <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 ${config.textColor}`} />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Students Table */}
                  {isExpanded && (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-200">
                          <tr>
                            <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Student</th>
                            <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider hidden md:table-cell">Student ID</th>
                            <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider hidden lg:table-cell">Gender</th>
                            <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider hidden sm:table-cell">Age</th>
                            <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {students.map(student => (
                            <tr 
                              key={student.id}
                              className="hover:bg-blue-50 transition-colors cursor-pointer"
                            >
                              <td className="px-4 sm:px-6 py-3 sm:py-4">
                                <div className="flex items-center gap-2 sm:gap-3">
                                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-xs sm:text-sm font-bold text-slate-700">
                                      {student.firstName[0]}{student.lastName[0]}
                                    </span>
                                  </div>
                                  <div className="min-w-0">
                                    <p className="font-semibold text-slate-900 text-sm sm:text-base truncate">
                                      {student.firstName} {student.lastName}
                                    </p>
                                    <p className="text-xs font-mono text-slate-500 md:hidden">{student.studentId}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 sm:px-6 py-3 sm:py-4 hidden md:table-cell">
                                <span className="text-xs sm:text-sm font-mono text-slate-600">{student.studentId}</span>
                              </td>
                              <td className="px-4 sm:px-6 py-3 sm:py-4 hidden lg:table-cell">
                                <span className="text-xs sm:text-sm text-slate-600">{student.gender}</span>
                              </td>
                              <td className="px-4 sm:px-6 py-3 sm:py-4 hidden sm:table-cell">
                                <span className="text-xs sm:text-sm text-slate-600">{student.age} yrs</span>
                              </td>
                              <td className="px-4 sm:px-6 py-3 sm:py-4">
                                <span className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                                  student.status === 'Active' 
                                    ? 'bg-green-100 text-green-800 border border-green-200' 
                                    : 'bg-red-100 text-red-800 border border-red-200'
                                }`}>
                                  {student.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {Object.entries(filteredData).flatMap(([className, students]) => {
              const config = classConfig[className];
              const ClassIcon = config.icon;
              
              return students.map(student => (
                <div key={student.id} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${config.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm`}>
                      <span className="text-lg sm:text-xl font-bold text-white">
                        {student.firstName[0]}{student.lastName[0]}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                      student.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {student.status}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 truncate">
                    {student.firstName} {student.lastName}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-slate-500 mb-3">{student.studentId}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 ${config.bgColor} rounded-lg flex items-center justify-center ${config.borderColor} border`}>
                        <ClassIcon className={`w-3 h-3 sm:w-4 sm:h-4 ${config.textColor}`} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-700">Class {className}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-slate-600">{student.age} yrs</span>
                  </div>
                </div>
              ));
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Students;