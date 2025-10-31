import React, { useState } from 'react';
import { 
  FileText,
  TrendingUp,
  Users,
  Calendar,
  Download,
  Filter,
  Search,
  X,
  ChevronRight,
  BarChart3,
  PieChart,
  LineChart,
  FileSpreadsheet,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye
} from 'lucide-react';

// Mock data for reports
const reportsData = [
  {
    id: 1,
    title: 'Student Attendance Report',
    category: 'Attendance',
    description: 'Monthly attendance summary for all students',
    date: '2024-10-28',
    type: 'PDF',
    size: '2.4 MB',
    status: 'Generated',
    icon: Users,
    color: 'blue'
  },
  {
    id: 2,
    title: 'Academic Performance Q3',
    category: 'Academic',
    description: 'Third quarter performance analysis by class',
    date: '2024-10-25',
    type: 'Excel',
    size: '1.8 MB',
    status: 'Generated',
    icon: TrendingUp,
    color: 'green'
  },
  {
    id: 3,
    title: 'Class L5 Progress Report',
    category: 'Academic',
    description: 'Detailed progress report for Class L5 students',
    date: '2024-10-22',
    type: 'PDF',
    size: '3.1 MB',
    status: 'Generated',
    icon: FileText,
    color: 'purple'
  },
  {
    id: 4,
    title: 'Financial Summary Report',
    category: 'Financial',
    description: 'Monthly financial summary and fee collection status',
    date: '2024-10-20',
    type: 'PDF',
    size: '1.5 MB',
    status: 'Generated',
    icon: BarChart3,
    color: 'orange'
  },
  {
    id: 5,
    title: 'Student Enrollment Statistics',
    category: 'Enrollment',
    description: 'Enrollment trends and statistics for 2024',
    date: '2024-10-18',
    type: 'Excel',
    size: '2.0 MB',
    status: 'Generated',
    icon: PieChart,
    color: 'cyan'
  },
  {
    id: 6,
    title: 'Teacher Performance Review',
    category: 'Staff',
    description: 'Quarterly performance review for teaching staff',
    date: '2024-10-15',
    type: 'PDF',
    size: '2.8 MB',
    status: 'Pending',
    icon: Users,
    color: 'indigo'
  },
  {
    id: 7,
    title: 'Exam Results Analysis',
    category: 'Academic',
    description: 'Comprehensive analysis of recent exam results',
    date: '2024-10-12',
    type: 'Excel',
    size: '3.5 MB',
    status: 'Generated',
    icon: LineChart,
    color: 'green'
  },
  {
    id: 8,
    title: 'Disciplinary Incidents Log',
    category: 'Discipline',
    description: 'Monthly log of disciplinary incidents and resolutions',
    date: '2024-10-10',
    type: 'PDF',
    size: '1.2 MB',
    status: 'Generated',
    icon: AlertCircle,
    color: 'red'
  }
];

const categories = ['All', 'Academic', 'Attendance', 'Financial', 'Enrollment', 'Staff', 'Discipline'];

const statsData = [
  { label: 'Total Reports', value: '156', icon: FileText, color: 'blue' },
  { label: 'This Month', value: '24', icon: Calendar, color: 'green' },
  { label: 'Pending', value: '8', icon: Clock, color: 'orange' },
  { label: 'Generated', value: '148', icon: CheckCircle, color: 'purple' }
];

function Reports() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredReports = reportsData.filter(report => {
    const matchesSearch = searchQuery === '' || 
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || report.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500',
        light: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600'
      },
      green: {
        bg: 'bg-green-500',
        light: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600'
      },
      purple: {
        bg: 'bg-purple-500',
        light: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600'
      },
      orange: {
        bg: 'bg-orange-500',
        light: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-600'
      },
      cyan: {
        bg: 'bg-cyan-500',
        light: 'bg-cyan-50',
        border: 'border-cyan-200',
        text: 'text-cyan-600'
      },
      indigo: {
        bg: 'bg-indigo-500',
        light: 'bg-indigo-50',
        border: 'border-indigo-200',
        text: 'text-indigo-600'
      },
      red: {
        bg: 'bg-red-500',
        light: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-600'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">Reports & Analytics</h1>
              <p className="text-xs sm:text-sm text-slate-600">Generate and download institutional reports</p>
            </div>
            <button className="flex items-center gap-2 bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-sm text-sm">
              <FileText className="w-4 h-4" />
              <span className="font-medium">Generate Report</span>
            </button>
          </div>

          

          {/* Search and Controls */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-3">
            <div className="flex-1 min-w-full sm:min-w-64 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
              <input
                type="text"
                placeholder="Search reports..."
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
              className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-sm rounded-lg border-2 transition-colors ${
                showFilters ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-blue-300 hover:bg-blue-50'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filters</span>
            </button>

            <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-sm bg-purple-600 text-white border-2 border-purple-600 rounded-lg hover:bg-purple-700 transition-colors shadow-sm">
              <Download className="w-4 h-4" />
              <span className="font-medium hidden sm:inline">Export All</span>
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex flex-col gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-2">CATEGORY</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                          selectedCategory === category
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6">
        {filteredReports.length === 0 ? (
          <div className="bg-white rounded-xl p-8 sm:p-12 text-center border border-slate-200">
            <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-slate-700 mb-2">No reports found</h3>
            <p className="text-sm text-slate-500">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredReports.map(report => {
              const colors = getColorClasses(report.color);
              const Icon = report.icon;
              
              return (
                <div 
                  key={report.id} 
                  className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-slate-200 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {report.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                          report.status === 'Generated' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {report.status}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-slate-600 mb-3">{report.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
                        <span className={`px-2 py-1 rounded ${colors.light} ${colors.text} font-medium`}>
                          {report.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(report.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileSpreadsheet className="w-3 h-3" />
                          {report.type}
                        </span>
                        <span>{report.size}</span>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors">
                          <Download className="w-3.5 h-3.5" />
                          Download
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg hover:bg-slate-200 transition-colors">
                          <Eye className="w-3.5 h-3.5" />
                          View
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-6 bg-white rounded-xl p-4 sm:p-6 border border-slate-200">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4">Quick Generate</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-blue-900">Attendance</p>
                <p className="text-xs text-blue-600">Generate now</p>
              </div>
            </button>
            
            <button className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-green-900">Performance</p>
                <p className="text-xs text-green-600">Generate now</p>
              </div>
            </button>
            
            <button className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-purple-900">Financial</p>
                <p className="text-xs text-purple-600">Generate now</p>
              </div>
            </button>
            
            <button className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <PieChart className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-orange-900">Enrollment</p>
                <p className="text-xs text-orange-600">Generate now</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;