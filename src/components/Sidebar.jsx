import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, GraduationCap, UserPlus, Bed, CalendarDays, BarChart3, 
  Utensils, Activity, Megaphone, UsersRound, Sliders, BookMarked, 
  Building2, LogOut,
  Settings2,
  SettingsIcon
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/' },
    { id: 'students', label: 'Students', icon: GraduationCap, path: '/students' },
    { id: 'new-admission', label: 'New Admission', icon: UserPlus, path: '/admission' },
    { id: 'rooms', label: 'Rooms', icon: Bed, path: '/rooms' },
    { id: 'programs', label: 'Programs', icon: CalendarDays, path: '/programs' },
    { id: 'reports', label: 'Reports', icon: BarChart3, path: '/reports' },
    { id: 'seating', label: 'Seating', icon: Utensils, path: '/seating' },
    { id: 'activities', label: 'Activities', icon: Activity, path: '/activities' },
    { id: 'announcements', label: 'Announcements', icon: Megaphone, path: '/announcements' },
    { id: 'users', label: 'Users', icon: UsersRound, path: '/users' },
    { id: 'Settings', label: 'Settings', icon: SettingsIcon, path: '/settings' },
    { id: 'guidelines', label: 'Guidelines', icon: BookMarked, path: '/guidelines' }
  ];

  const handleLogout = () => {
    console.log('Logging out...');
    // Add your logout logic here
    // navigate('/login');
    alert('Logout functionality would be implemented here!');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-800 shadow-2xl h-screen fixed left-0 top-0 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-blue-500/30">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">
              BMS
            </h1>
            <p className="text-xs text-blue-200">
              Management System
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Menu with hidden scrollbar */}
      <nav className="flex-1 overflow-y-auto p-4" style={{ 
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none' 
      }}>
        <style>{`
          nav::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-white text-blue-700 shadow-lg transform scale-105'
                      : 'text-blue-100 hover:bg-blue-700/50 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-left flex-1 text-sm">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-blue-500/30">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-blue-100 hover:bg-red-500 hover:text-white group"
        >
          <LogOut className="w-5 h-5 group-hover:animate-pulse" />
          <span className="font-medium text-left flex-1 text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;