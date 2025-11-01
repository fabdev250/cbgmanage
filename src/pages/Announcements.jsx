import React, { useState } from 'react';
import { 
  Megaphone,
  Bell,
  Pin,
  Calendar,
  Clock,
  User,
  Plus,
  Search,
  X,
  Filter,
  AlertCircle,
  Info,
  Eye,
  Edit,
  Trash2,
  Save
} from 'lucide-react';

// Mock data for announcements
const initialAnnouncementsData = [
  {
    id: 1,
    title: 'School Reopening Date Confirmed',
    content: 'The school will reopen on November 15th, 2024. All students are expected to return on this date. Please ensure all fees are cleared before resumption.',
    category: 'Important',
    date: '2024-10-30',
    time: '09:30 AM',
    author: 'Admin Office',
    isPinned: true,
    views: 245,
    priority: 'high'
  },
  {
    id: 2,
    title: 'Parent-Teacher Conference Schedule',
    content: 'Parent-teacher conferences will be held from November 5-7. Please check your email for your scheduled appointment time.',
    category: 'Events',
    date: '2024-10-28',
    time: '02:15 PM',
    author: 'Academic Coordinator',
    isPinned: true,
    views: 189,
    priority: 'high'
  },
  {
    id: 3,
    title: 'New Library Books Available',
    content: 'We have added 150 new books to our library collection. Students can now borrow these books during library hours.',
    category: 'General',
    date: '2024-10-27',
    time: '11:00 AM',
    author: 'Library Department',
    isPinned: false,
    views: 124,
    priority: 'normal'
  },
  {
    id: 4,
    title: 'Sports Day Registration Open',
    content: 'Annual Sports Day is scheduled for December 10th. Registration is now open for all athletic events. Deadline: November 20th.',
    category: 'Sports',
    date: '2024-10-26',
    time: '08:45 AM',
    author: 'Sports Department',
    isPinned: false,
    views: 312,
    priority: 'normal'
  },
  {
    id: 5,
    title: 'Midterm Exam Schedule Released',
    content: 'The midterm examination schedule has been published. Exams will commence on November 18th. Check the notice board for detailed timetable.',
    category: 'Academic',
    date: '2024-10-25',
    time: '03:30 PM',
    author: 'Examination Office',
    isPinned: true,
    views: 456,
    priority: 'high'
  }
];

const categories = ['All', 'Important', 'Academic', 'Events', 'Sports', 'General', 'Transport', 'Health'];

export default function Announcements() {
  const [announcements, setAnnouncements] = useState(initialAnnouncementsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'General',
    author: '',
    priority: 'normal',
    isPinned: false
  });

  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesSearch = searchQuery === '' || 
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || announcement.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const pinnedAnnouncements = filteredAnnouncements.filter(a => a.isPinned);
  const regularAnnouncements = filteredAnnouncements.filter(a => !a.isPinned);

  const handleCreateAnnouncement = (e) => {
    e.preventDefault();
    
    const now = new Date();
    const newAnnouncement = {
      id: announcements.length + 1,
      ...formData,
      date: now.toISOString().split('T')[0],
      time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      views: 0
    };

    setAnnouncements([newAnnouncement, ...announcements]);
    
    // Reset form
    setFormData({
      title: '',
      content: '',
      category: 'General',
      author: '',
      priority: 'normal',
      isPinned: false
    });
    
    setShowCreateModal(false);
  };

  const handleDeleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter(a => a.id !== id));
  };

  const getPriorityIcon = (priority) => {
    if (priority === 'high') return AlertCircle;
    return Info;
  };

  const getPriorityColor = (priority) => {
    if (priority === 'high') return 'text-red-600';
    return 'text-blue-600';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Important': 'bg-red-100 text-red-700 border-red-200',
      'Academic': 'bg-blue-100 text-blue-700 border-blue-200',
      'Events': 'bg-purple-100 text-purple-700 border-purple-200',
      'Sports': 'bg-green-100 text-green-700 border-green-200',
      'General': 'bg-slate-100 text-slate-700 border-slate-200',
      'Transport': 'bg-orange-100 text-orange-700 border-orange-200',
      'Health': 'bg-teal-100 text-teal-700 border-teal-200'
    };
    return colors[category] || colors['General'];
  };

  const AnnouncementCard = ({ announcement }) => {
    const PriorityIcon = getPriorityIcon(announcement.priority);
    const priorityColor = getPriorityColor(announcement.priority);

    return (
      <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-slate-200 hover:shadow-md transition-all">
        {announcement.isPinned && (
          <div className="flex items-center gap-2 mb-3">
            <Pin className="w-4 h-4 text-blue-600 fill-blue-600" />
            <span className="text-xs font-bold text-blue-600 uppercase">Pinned</span>
          </div>
        )}

        <div className="flex items-start gap-3 mb-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
            announcement.priority === 'high' ? 'bg-red-100' : 'bg-blue-100'
          }`}>
            <PriorityIcon className={`w-5 h-5 ${priorityColor}`} />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer">
                {announcement.title}
              </h3>
            </div>
            
            <p className="text-sm text-slate-600 mb-3 line-clamp-2">
              {announcement.content}
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`px-2 py-1 rounded-lg text-xs font-semibold border ${getCategoryColor(announcement.category)}`}>
                {announcement.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <Calendar className="w-3 h-3" />
                {new Date(announcement.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <Clock className="w-3 h-3" />
                {announcement.time}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <User className="w-3 h-3" />
                {announcement.author}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <Eye className="w-3 h-3" />
                {announcement.views} views
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors">
                <Eye className="w-3.5 h-3.5" />
                Read More
              </button>
              <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors">
                <Edit className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleDeleteAnnouncement(announcement.id)}
                className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 flex items-center gap-2">
                <Megaphone className="w-7 h-7 sm:w-8 sm:h-8" />
                Announcements
              </h1>
              <p className="text-xs sm:text-sm text-slate-600">Stay updated with important notices and events</p>
            </div>
            <button 
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-sm"
            >
              <Plus className="w-4 h-4" />
              <span className="font-medium">New Announcement</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 sm:mb-6">
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center gap-2 mb-1">
                <Bell className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-medium text-slate-600">Total</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-slate-900">{announcements.length}</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center gap-2 mb-1">
                <Pin className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-medium text-slate-600">Pinned</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-slate-900">{announcements.filter(a => a.isPinned).length}</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-medium text-slate-600">This Week</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-slate-900">5</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center gap-2 mb-1">
                <Eye className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-medium text-slate-600">Total Views</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-slate-900">
                {announcements.reduce((sum, a) => sum + a.views, 0)}
              </p>
            </div>
          </div>

          {/* Search and Controls */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-3">
            <div className="flex-1 min-w-full sm:min-w-64 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
              <input
                type="text"
                placeholder="Search announcements..."
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
        {filteredAnnouncements.length === 0 ? (
          <div className="bg-white rounded-xl p-8 sm:p-12 text-center border border-slate-200">
            <Megaphone className="w-12 h-12 sm:w-16 sm:h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-slate-700 mb-2">No announcements found</h3>
            <p className="text-sm text-slate-500">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Pinned Announcements */}
            {pinnedAnnouncements.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Pin className="w-5 h-5 text-blue-600" />
                  Pinned Announcements
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {pinnedAnnouncements.map(announcement => (
                    <AnnouncementCard key={announcement.id} announcement={announcement} />
                  ))}
                </div>
              </div>
            )}

            {/* Regular Announcements */}
            {regularAnnouncements.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3">Recent Announcements</h2>
                <div className="grid grid-cols-1 gap-4">
                  {regularAnnouncements.map(announcement => (
                    <AnnouncementCard key={announcement.id} announcement={announcement} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Create Announcement Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Plus className="w-6 h-6 text-blue-600" />
                Create New Announcement
              </h2>
              <button 
                onClick={() => setShowCreateModal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleCreateAnnouncement} className="p-6 space-y-5">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Announcement Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="Enter announcement title"
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Content *
                </label>
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  placeholder="Enter announcement details"
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
                />
              </div>

              {/* Category and Priority */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  >
                    {categories.filter(c => c !== 'All').map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Priority *
                  </label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData({...formData, priority: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  >
                    <option value="normal">Normal</option>
                    <option value="high">High Priority</option>
                  </select>
                </div>
              </div>

              {/* Author */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Author/Department *
                </label>
                <input
                  type="text"
                  required
                  value={formData.author}
                  onChange={(e) => setFormData({...formData, author: e.target.value})}
                  placeholder="e.g., Admin Office, Academic Coordinator"
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              {/* Pin Option */}
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <input
                  type="checkbox"
                  id="isPinned"
                  checked={formData.isPinned}
                  onChange={(e) => setFormData({...formData, isPinned: e.target.checked})}
                  className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="isPinned" className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
                  <Pin className="w-4 h-4 text-blue-600" />
                  Pin this announcement to the top
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
                >
                  <Save className="w-4 h-4" />
                  Create Announcement
                </button>
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-semibold text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

