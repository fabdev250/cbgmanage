import React, { useState } from 'react';

const DashboardContent = ({ activeSection }) => {
  const [students] = useState({
    total: 10,
    oLevel: 1,
    aLevel: 9,
    staff: 12
  });

  const terms = [
    { id: 1, name: 'Term 1', status: 'completed' },
    { id: 2, name: 'Term 2', status: 'active', current: true },
    { id: 3, name: 'Term 3', status: 'upcoming' }
  ];

  const actions = [
    { id: 1, label: 'Soza Igitondo Gikora', completed: false },
    { id: 2, label: 'Subiza Inyuma Igikorwa Ghienska', completed: true }
  ];

  // Render different content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Intamo rv'lgine cy'Amashuri
              </h1>
              <p className="text-gray-600">
                Intamo umwaka w'amashuri n'igliembwe kugira ngo urebe kandi ucunge amakuru.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Academic Year Section */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Umwaka w'Amashuri
                  </h2>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
                      <span className="font-medium text-blue-800">2026-2027</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Active
                      </span>
                    </div>
                  </div>

                  {/* Terms Section */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-700 mb-3">
                      Stylraino Term 2' nk'igliora
                    </h3>
                    
                    <div className="space-y-3">
                      {terms.map((term) => (
                        <div
                          key={term.id}
                          className={`p-4 rounded-lg border-2 ${
                            term.current
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-700">
                              2026-2027 - {term.name}
                            </span>
                            {term.current && (
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Section */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-3">
                      Soza Igilre gikora nt:
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Guscoa ikĭ gliembwe bizahita bitangiza ikindi, cyangwa guscoa umwaka niba ari lgliembwe cya 3.
                    </p>
                    
                    <div className="space-y-2">
                      {actions.map((action) => (
                        <div key={action.id} className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={action.completed}
                            readOnly
                            className="h-5 w-5 text-blue-600 rounded"
                          />
                          <span className={action.completed ? 'line-through text-gray-500' : 'text-gray-700'}>
                            {action.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Welcome Section */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Ikaze, dev fab
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Hano hari incamake y'ibiri mu kigo mu gliembwe cystoranijwe.
                  </p>
                </div>

                {/* Statistics Section */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Abanyeshuri Bose
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-800">{students.total}</div>
                      <div className="text-blue-600">Total Students</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-xl font-bold text-green-800">{students.oLevel}</div>
                        <div className="text-green-600 text-sm">O-Level</div>
                      </div>
                      
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-xl font-bold text-purple-800">{students.aLevel}</div>
                        <div className="text-purple-600 text-sm">A-Level</div>
                      </div>
                    </div>
                    
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="text-xl font-bold text-orange-800">{students.staff}</div>
                      <div className="text-orange-600 text-sm">Staff Members</div>
                    </div>
                  </div>
                </div>

                {/* Add Student Section */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Ongeramo Ununiyashuri Mushya
                  </h3>
                  
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Izina ry'umunyeshuri"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Hitamo level</option>
                      <option value="o-level">O-Level</option>
                      <option value="a-level">A-Level</option>
                    </select>
                    
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                      Ongeramo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'students':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Abanyeshuri</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-800">{students.total}</div>
                <div className="text-blue-600">Abanyeshuri Bose</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-800">{students.oLevel}</div>
                <div className="text-green-600">O-Level</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-800">{students.aLevel}</div>
                <div className="text-purple-600">A-Level</div>
              </div>
            </div>
            {/* Add student list table here */}
          </div>
        );

      case 'staff':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Abakora</h1>
            <div className="bg-orange-50 p-6 rounded-lg inline-block">
              <div className="text-2xl font-bold text-orange-800">{students.staff}</div>
              <div className="text-orange-600">Abakora Bose</div>
            </div>
            {/* Add staff list table here */}
          </div>
        );

      case 'academic':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Amashuri</h1>
            <p className="text-gray-600">Academic settings and configurations.</p>
            {/* Add academic content here */}
          </div>
        );

      case 'terms':
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Igliembwe</h1>
            <div className="space-y-4">
              {terms.map(term => (
                <div key={term.id} className="p-4 border rounded-lg">
                  <h3 className="font-semibold">{term.name}</h3>
                  <p className="text-gray-600">Status: {term.status}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">{activeSection}</h1>
            <p className="text-gray-600">Content for {activeSection} section.</p>
          </div>
        );
    }
  };

  return (
    <div className="ml-64 p-6">
      {renderContent()}
    </div>
  );
};

export default DashboardContent;