import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, User, Settings, LogOut, Menu, ChevronRight, Home, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TopBar = () => {
  const location = useLocation();
  const { language, changeLanguage, t } = useLanguage();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const languageRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'rw', name: 'Kinyarwanda', flag: '🇷🇼' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  // Breadcrumb mapping
  const breadcrumbMap = {
    '/': [{ name: 'Dashboard', path: '/' }],
    '/students': [
      { name: 'Dashboard', path: '/' },
      { name: 'Students', path: '/students' }
    ],
    '/admission': [
      { name: 'Dashboard', path: '/' },
      { name: 'Students', path: '/students' },
      { name: 'New Admission', path: '/admission' }
    ],
    '/rooms': [
      { name: 'Dashboard', path: '/' },
      { name: 'Rooms', path: '/rooms' }
    ],
    '/programs': [
      { name: 'Dashboard', path: '/' },
      { name: 'Programs', path: '/programs' }
    ],
    '/refectory': [
      { name: 'Dashboard', path: '/' },
      { name: 'Refectory', path: '/refectory' }
    ],
    '/raporu': [
      { name: 'Dashboard', path: '/' },
      { name: 'Reports', path: '/raporu' }
    ],
    '/imyicarire': [
      { name: 'Dashboard', path: '/' },
      { name: 'Behavior', path: '/imyicarire' }
    ],
    '/ibikorwa': [
      { name: 'Dashboard', path: '/' },
      { name: 'Activities', path: '/ibikorwa' }
    ],
    '/amatangazo': [
      { name: 'Dashboard', path: '/' },
      { name: 'Announcements', path: '/amatangazo' }
    ],
    '/abakoresha': [
      { name: 'Dashboard', path: '/' },
      { name: 'Users', path: '/abakoresha' }
    ],
    '/igenamiterere': [
      { name: 'Dashboard', path: '/' },
      { name: 'Configuration', path: '/igenamiterere' }
    ],
    '/amabwiriza': [
      { name: 'Dashboard', path: '/' },
      { name: 'Guidelines', path: '/amabwiriza' }
    ],
    '/shyiraho-porogaramu': [
      { name: 'Dashboard', path: '/' },
      { name: 'Programs', path: '/programs' },
      { name: 'Setup Program', path: '/shyiraho-porogaramu' }
    ]
  };

  const notifications = [
    {
      id: 1,
      title: 'New Admission Request',
      message: 'John Doe submitted admission form',
      time: '5 min ago',
      unread: true,
      type: 'admission'
    },
    {
      id: 2,
      title: 'Fee Payment Due',
      message: 'Monthly fee payment due for 15 students',
      time: '1 hour ago',
      unread: true,
      type: 'payment'
    },
    {
      id: 3,
      title: 'Room Assignment',
      message: 'Room 201 needs maintenance',
      time: '2 hours ago',
      unread: false,
      type: 'maintenance'
    },
    {
      id: 4,
      title: 'Academic Update',
      message: 'Term 2 results are now available',
      time: '1 day ago',
      unread: false,
      type: 'academic'
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;
  const breadcrumbs = breadcrumbMap[location.pathname] || [{ name: 'Dashboard', path: '/' }];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    console.log('Logging out...');
    alert('Logout functionality would be implemented here!');
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'admission': return '🎓';
      case 'payment': return '💰';
      case 'maintenance': return '🔧';
      case 'academic': return '📚';
      default: return '🔔';
    }
  };

  return (
    <div className="fixed top-0 left-64 right-0 h-16 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-6 z-40">
      {/* Left Section - Breadcrumb Navigation */}
      <div className="flex items-center space-x-4">
        <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition duration-200">
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="flex items-center space-x-2">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.path} className="flex items-center space-x-2">
              {index === 0 ? (
                <Home className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
              
              {index === breadcrumbs.length - 1 ? (
                <span className="text-sm font-medium text-gray-800">
                  {breadcrumb.name}
                </span>
              ) : (
                <a
                  href={breadcrumb.path}
                  className="text-sm text-gray-600 hover:text-blue-600 transition duration-200"
                >
                  {breadcrumb.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Language, Notifications and Profile */}
      <div className="flex items-center space-x-4">
        {/* Language Switcher */}
        <div className="relative" ref={languageRef}>
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition duration-200"
          >
            <Globe className="w-5 h-5 text-gray-600" />
            <span className="hidden md:block text-sm font-medium text-gray-700">
              {languages.find(lang => lang.code === language)?.flag}
            </span>
          </button>

          {/* Language Dropdown Menu */}
          {isLanguageOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition duration-200 ${
                      language === lang.code
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                    {language === lang.code && (
                      <span className="ml-auto text-blue-600">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Notifications Dropdown */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition duration-200"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown Menu */}
          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">Notifications</h3>
                  <span className="text-sm text-blue-600 cursor-pointer hover:text-blue-700">
                    Mark all as read
                  </span>
                </div>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                      notification.unread ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-lg">{getNotificationIcon(notification.type)}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-gray-800 text-sm">
                            {notification.title}
                          </h4>
                          {notification.unread && (
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mt-1">
                          {notification.message}
                        </p>
                        <span className="text-xs text-gray-500 mt-1 block">
                          {notification.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <button className="w-full text-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All Notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition duration-200"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-gray-800">Admin User</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </button>

          {/* Profile Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-4 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-800">Admin User</p>
                <p className="text-xs text-gray-500">admin@school.edu</p>
              </div>
              
              <div className="p-2">
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition duration-200">
                  <User className="w-4 h-4" />
                  <span>My Profile</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition duration-200">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </button>
              </div>
              
              <div className="p-2 border-t border-gray-200">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;