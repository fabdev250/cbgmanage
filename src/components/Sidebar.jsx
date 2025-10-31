import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { id: 'imboneza', label: 'Imboneza', icon: '🏠', path: '/' },
    { id: 'abanyeshuri', label: 'Abanyeshuri', icon: '👨‍🎓', path: '/abanyeshuri' },
    { id: 'impushya', label: 'Impushya', icon: '🆕', path: '/impushya' },
    { id: 'amacumbi', label: 'Amacumbi', icon: '🏢', path: '/amacumbi' },
    { id: 'porogaramu', label: 'Porogaramu', icon: '📚', path: '/porogaramu' },
    { id: 'raporu', label: 'Raporu', icon: '📊', path: '/raporu' },
    { id: 'imyicarire', label: 'Imyicarire', icon: '⭐', path: '/imyicarire' },
    { id: 'ibikorwa', label: 'Ibikorwa', icon: '📅', path: '/ibikorwa' },
    { id: 'amatangazo', label: 'Amatangazo', icon: '📢', path: '/amatangazo' },
    { id: 'abakoresha', label: 'Abakoresha', icon: '👥', path: '/abakoresha' },
    { id: 'igenamiterere', label: 'Igenamiterere', icon: '⚙️', path: '/igenamiterere' },
    { id: 'amabwiriza', label: 'Amabwiriza', icon: '📋', path: '/amabwiriza' },
    { id: 'shyiraho-porogaramu', label: 'Shyiraho Porogaramu', icon: '🛠️', path: '/shyiraho-porogaramu' },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    // navigate('/login'); // Uncomment to redirect to login page
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">
          BOARDING SCHOOL MANAGER
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          BSM v1.0
        </p>
      </div>

      {/* Navigation Menu with Scroll */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition duration-200 ${
                  isActive(item.path)
                    ? 'bg-blue-100 text-blue-700 border-r-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium text-left flex-1">{item.label}</span>
              </Link>
            </li>
          ))}
          
          {/* Logout Button */}
          <li className="mt-4 border-t border-gray-200 pt-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition duration-200 text-gray-700 hover:bg-red-50 hover:text-red-700"
            >
              <span className="text-lg">🚪</span>
              <span className="font-medium text-left flex-1">Sohoka</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Current Term Info */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="text-sm text-blue-800 font-medium">
            Igliembwe Gikora
          </div>
          <div className="text-xs text-blue-600 mt-1">
            Term 2 - 2026/2027
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;