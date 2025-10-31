import React from 'react';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'imboneza', label: 'Imboneza', icon: '🏠' },
    { id: 'abanyeshuri', label: 'Abanyeshuri', icon: '👨‍🎓' },
    { id: 'impushya', label: 'Impushya', icon: '🆕' },
    { id: 'amacumbi', label: 'Amacumbi', icon: '🏢' },
    { id: 'porogaramu', label: 'Porogaramu', icon: '📚' },
    { id: 'raporu', label: 'Raporu', icon: '📊' },
    { id: 'imyicarire', label: 'Imyicarire', icon: '⭐' },
    { id: 'ibikorwa', label: 'Ibikorwa', icon: '📅' },
    { id: 'amatangazo', label: 'Amatangazo', icon: '📢' },
    { id: 'abakoresha', label: 'Abakoresha', icon: '👥' },
    { id: 'igenamiterere', label: 'Igenamiterere', icon: '⚙️' },
    { id: 'amabwiriza', label: 'Amabwiriza', icon: '📋' },
    { id: 'shyiraho-porogaramu', label: 'Shyiraho Porogaramu', icon: '🛠️' },
    { id: 'sohoka', label: 'Sohoka', icon: '🚪' }
  ];

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
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-700 border-r-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                } ${
                  item.id === 'sohoka' ? 'mt-4 border-t border-gray-200 pt-4' : ''
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium text-left flex-1">{item.label}</span>
              </button>
            </li>
          ))}
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