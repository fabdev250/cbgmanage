import React, { useState } from 'react';
import { Users, Calendar, Clock, UserCheck, ArrowLeft, Plus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Program = () => {
  const { t } = useLanguage();
  const [view, setView] = useState('selection'); // 'selection' or 'detail'
  const [selectedGender, setSelectedGender] = useState(null);

  // Define class groups
  const classGroups = {
    boys: ['S1-S3', 'S4-S6', 'A-Level'],
    girls: ['S1-S3', 'S4-S6', 'A-Level']
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const sessions = ['Morning', 'Evening'];

  // Mock data - Each day has different classes per shift (2 shifts only)
  const programData = {
    boys: {
      Monday: { 
        morning: { class: 'S1-S3', students: ['John Doe', 'Peter Smith', 'Michael Brown', 'James Wilson'] },
        evening: { class: 'S4-S6', students: ['David Lee', 'Robert Taylor', 'Daniel Moore', 'Joseph Martin'] }
      },
      Tuesday: { 
        morning: { class: 'S4-S6', students: ['William Lewis', 'Richard Walker', 'Charles Hall', 'Kevin Allen'] },
        evening: { class: 'A-Level', students: ['Brian Young', 'Steven King', 'George Wright', 'Kenneth Lopez'] }
      },
      Wednesday: { 
        morning: { class: 'A-Level', students: ['Ryan Baker', 'Eric Nelson', 'Jacob Carter', 'Alexander Mitchell'] },
        evening: { class: 'S1-S3', students: ['Nathan Perez', 'Tyler Roberts', 'Aaron Turner', 'Sean Phillips'] }
      },
      Thursday: { 
        morning: { class: 'S1-S3', students: ['Marcus Collins', 'Victor Stewart', 'Luis Morris', 'Dylan Rogers'] },
        evening: { class: 'S4-S6', students: ['Kyle Reed', 'Austin Cook', 'Gerald Morgan', 'Raymond Bell'] }
      },
      Friday: { 
        morning: { class: 'S4-S6', students: ['Ralph Richardson', 'Henry Cox', 'Eugene Howard', 'Philip Ward'] },
        evening: { class: 'A-Level', students: ['Russell Torres', 'Jerry Peterson', 'Douglas Gray', 'Lawrence Ramirez'] }
      }
    },
    girls: {
      Monday: { 
        morning: { class: 'S1-S3', students: ['Emma Johnson', 'Olivia Williams', 'Ava Jones', 'Sophia Brown'] },
        evening: { class: 'S4-S6', students: ['Isabella Davis', 'Mia Miller', 'Charlotte Wilson', 'Amelia Moore'] }
      },
      Tuesday: { 
        morning: { class: 'S4-S6', students: ['Elizabeth White', 'Mila Harris', 'Ella Martin', 'Avery Thompson'] },
        evening: { class: 'A-Level', students: ['Sofia Garcia', 'Camila Martinez', 'Aria Robinson', 'Scarlett Clark'] }
      },
      Wednesday: { 
        morning: { class: 'A-Level', students: ['Chloe Hall', 'Penelope Allen', 'Riley Young', 'Layla King'] },
        evening: { class: 'S1-S3', students: ['Lillian Wright', 'Nora Lopez', 'Zoey Hill', 'Mila Scott'] }
      },
      Thursday: { 
        morning: { class: 'S1-S3', students: ['Eleanor Carter', 'Natalie Mitchell', 'Lucy Perez', 'Audrey Roberts'] },
        evening: { class: 'S4-S6', students: ['Brooklyn Turner', 'Bella Phillips', 'Claire Campbell', 'Skylar Parker'] }
      },
      Friday: { 
        morning: { class: 'S4-S6', students: ['Madelyn Morris', 'Aaliyah Rogers', 'Gabriella Reed', 'Kaylee Cook'] },
        evening: { class: 'A-Level', students: ['Anna Morgan', 'Sarah Bell', 'Hailey Murphy', 'Allison Bailey'] }
      }
    }
  };

  if (view === 'selection') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Work Programs Overview</h1>
            <p className="text-gray-600">Select work program for students by gender</p>
          </div>

          {/* Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Boys Program Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Boys Work Program</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Work sessions in the morning and evening. Programs designed for boys throughout the week.
                  </p>
                  <p className="text-sm text-gray-700">
                    Boys participate in work programs twice daily throughout the week. Designed for character building through labor and responsibility.
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedGender('boys');
                  setView('detail');
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                View Boys Program
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Girls Program Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Girls Work Program</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Work sessions in the morning only. Programs designed for girls with 10 students per session.
                  </p>
                  <p className="text-sm text-gray-700">
                    Girls participate in morning work programs only. Skills development and responsibility training through structured work.
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedGender('girls');
                  setView('detail');
                }}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                View Girls Program
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Detail View
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header with Back Button */}
        <div className="mb-6">
          <button
            onClick={() => setView('selection')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Programs
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {selectedGender === 'boys' ? 'Boys Work Program' : 'Girls Work Program'}
              </h1>
              <p className="text-gray-600">
                Select shift to view student work program by class
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Manage Program
            </button>
          </div>
        </div>

        {/* Active Program Info */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Current Active Program</h2>
          <p className="text-sm text-gray-600">
            Active work program related to 4 students of classes
          </p>
        </div>

        {/* Day-by-Day Schedule */}
        <div className="space-y-6">
          {days.map((day) => {
            const dayData = programData[selectedGender][day];
            
            return (
              <div key={day} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{day}</h3>
                    <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-300">
                      2 Shifts
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Morning Shift */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
                      <div className="relative border-2 border-orange-300 rounded-xl p-5 bg-gradient-to-br from-orange-50 to-white hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                            <span className="text-xl">☀️</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Morning</h4>
                            <p className="text-xs text-orange-600">7:00 AM - 12:00 PM</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg p-3 border border-orange-200">
                            <p className="text-xs text-gray-500 mb-1">Class Group</p>
                            <p className="font-bold text-orange-900">{dayData.morning.class}</p>
                          </div>
                          
                          <div className="bg-white rounded-lg p-3 border border-orange-200">
                            <p className="text-xs text-gray-500 mb-2">Students ({dayData.morning.students.length})</p>
                            <div className="space-y-1.5">
                              {dayData.morning.students.map((student, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm">
                                  <span className="w-5 h-5 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                                    {idx + 1}
                                  </span>
                                  <span className="text-gray-700">{student}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Afternoon Shift */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
                      <div className="relative border-2 border-blue-300 rounded-xl p-5 bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                            <span className="text-xl">🌤️</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Afternoon</h4>
                            <p className="text-xs text-blue-600">12:00 PM - 5:00 PM</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg p-3 border border-blue-200">
                            <p className="text-xs text-gray-500 mb-1">Class Group</p>
                            <p className="font-bold text-blue-900">{dayData.afternoon.class}</p>
                          </div>
                          
                          <div className="bg-white rounded-lg p-3 border border-blue-200">
                            <p className="text-xs text-gray-500 mb-2">Students ({dayData.afternoon.students.length})</p>
                            <div className="space-y-1.5">
                              {dayData.afternoon.students.map((student, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm">
                                  <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                                    {idx + 1}
                                  </span>
                                  <span className="text-gray-700">{student}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Evening Shift */}
                    <div className="relative group md:col-span-2 lg:col-span-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
                      <div className="relative border-2 border-indigo-300 rounded-xl p-5 bg-gradient-to-br from-indigo-50 to-white hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                            <span className="text-xl">🌙</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Evening</h4>
                            <p className="text-xs text-indigo-600">5:00 PM - 8:00 PM</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg p-3 border border-indigo-200">
                            <p className="text-xs text-gray-500 mb-1">Class Group</p>
                            <p className="font-bold text-indigo-900">{dayData.evening.class}</p>
                          </div>
                          
                          <div className="bg-white rounded-lg p-3 border border-indigo-200">
                            <p className="text-xs text-gray-500 mb-2">Students ({dayData.evening.students.length})</p>
                            <div className="space-y-1.5">
                              {dayData.evening.students.map((student, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm">
                                  <span className="w-5 h-5 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                                    {idx + 1}
                                  </span>
                                  <span className="text-gray-700">{student}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Program;
