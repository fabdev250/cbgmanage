import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const DashboardOverview = () => {
  const { t } = useLanguage();
  
  // State for active selections
  const [selectedYear, setSelectedYear] = useState('2026-2027');
  const [selectedTerm, setSelectedTerm] = useState('Term 3');
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Mock data - replace with actual API data
  const academicYears = [
    { id: 1, year: '2023-2024', status: 'completed' },
    { id: 2, year: '2024-2025', status: 'completed' },
    { id: 3, year: '2025-2026', status: 'completed' },
    { id: 4, year: '2026-2027', status: 'active' }
  ];

  const terms = [
    { id: 1, name: 'Term 1', status: 'completed' },
    { id: 2, name: 'Term 2', status: 'completed' },
    { id: 3, name: 'Term 3', status: 'active' }
  ];

  // Quick view statistics
  const statistics = {
    totalStudents: 1,
    oLevelStudents: 0,
    aLevelStudents: 1,
    staffMembers: 12
  };

  // Chart data for student enrollment over terms
  const chartData = [
    { term: 'Term 1', boys: 0, girls: 0, label: 'T1' },
    { term: 'Term 2', boys: 0, girls: 1, label: 'T2' },
    { term: 'Term 3', boys: 0, girls: 1, label: 'T3' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'completed':
        return 'bg-gray-100 text-gray-600 border-gray-300';
      case 'upcoming':
        return 'bg-green-100 text-green-600 border-green-300';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow p-4 sm:p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-1">{t('dashboard.welcome')}</h2>
            <p className="text-sm sm:text-base text-blue-100">{t('dashboard.summary')}</p>
          </div>
          <button className="bg-blue-500 bg-opacity-20 hover:bg-opacity-30 px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200 whitespace-nowrap">
            {t('dashboard.addStudent')}
          </button>
        </div>

        {/* Quick View Statistics Section */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">{t('dashboard.quickStats')}</h3>

          {/* Main Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Total Students Card */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-gray-600 font-medium">{t('dashboard.totalStudents')}</div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{statistics.totalStudents}</div>
              <div className="text-xs text-gray-500">O abahungu, 1 abakobwa</div>
            </div>

            {/* O-Level Students Card */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-gray-600 font-medium">{t('dashboard.oLevelStudents')}</div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{statistics.oLevelStudents}</div>
              <div className="text-xs text-gray-500">Icyiciro Rusange</div>
            </div>

            {/* A-Level Students Card */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-gray-600 font-medium">{t('dashboard.aLevelStudents')}</div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{statistics.aLevelStudents}</div>
              <div className="text-xs text-gray-500">Amashami</div>
            </div>

            {/* Staff Members Card */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-gray-600 font-medium">{t('dashboard.staffMembers')}</div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{statistics.staffMembers}</div>
              <div className="text-xs text-gray-500">+2 kuva ukwezi gushize</div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Charts and Quick Links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Student Distribution Chart */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">{t('dashboard.studentDistribution')}</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">{t('dashboard.distributionDesc')}</p>
            
            {/* Interactive Line Graph */}
            <div className="relative h-56 sm:h-72 mt-4">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-2">
                <span className="font-medium">2</span>
                <span>1.5</span>
                <span>1</span>
                <span>0.5</span>
                <span>0</span>
              </div>
              
              {/* Chart area with gradient background */}
              <div className="ml-10 h-full relative">
                {/* Grid lines */}
                <div className="absolute inset-0">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="absolute w-full border-t border-gray-200"
                      style={{ top: `${i * 25}%` }}
                    ></div>
                  ))}
                </div>
                
                {/* SVG for interactive line graph */}
                <svg className="relative w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    {/* Gradient for boys line */}
                    <linearGradient id="boysGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 0.05 }} />
                    </linearGradient>
                    {/* Gradient for girls line */}
                    <linearGradient id="girlsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#FB923C', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: '#FB923C', stopOpacity: 0.05 }} />
                    </linearGradient>
                  </defs>
                  
                  {/* Area fill for girls (orange) */}
                  <path
                    d="M 0,100 L 0,100 L 50,50 L 100,50 L 100,100 Z"
                    fill="url(#girlsGradient)"
                  />
                  
                  {/* Area fill for boys (blue) - at bottom since 0 */}
                  <path
                    d="M 0,100 L 0,100 L 50,100 L 100,100 L 100,100 Z"
                    fill="url(#boysGradient)"
                  />
                  
                  {/* Girls line (orange) */}
                  <path
                    d="M 0,100 L 50,50 L 100,50"
                    fill="none"
                    stroke="#FB923C"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300"
                  />
                  
                  {/* Boys line (blue) - flat at bottom */}
                  <path
                    d="M 0,100 L 50,100 L 100,100"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300"
                  />
                </svg>
                
                {/* Interactive data points */}
                <div className="absolute inset-0">
                  {chartData.map((point, index) => {
                    const xPos = index * 50;
                    const girlsY = 100 - (point.girls * 50);
                    const boysY = 100 - (point.boys * 50);
                    
                    return (
                      <div key={index} style={{ position: 'absolute', left: `${xPos}%`, height: '100%' }}>
                        {/* Girls point */}
                        <div
                          className="absolute transform -translate-x-1/2 cursor-pointer group"
                          style={{ top: `${girlsY}%` }}
                          onMouseEnter={() => setHoveredPoint({ ...point, type: 'girls', index })}
                          onMouseLeave={() => setHoveredPoint(null)}
                        >
                          <div className="w-2.5 h-2.5 bg-orange-400 rounded-full border-2 border-white shadow-md group-hover:w-3.5 group-hover:h-3.5 transition-all duration-200"></div>
                          {hoveredPoint?.index === index && hoveredPoint?.type === 'girls' && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-10">
                              <div className="font-semibold">Abakobwa</div>
                              <div>{point.girls} student{point.girls !== 1 ? 's' : ''}</div>
                              <div className="text-gray-300 text-[10px]">{point.term}</div>
                            </div>
                          )}
                        </div>
                        
                        {/* Boys point */}
                        <div
                          className="absolute transform -translate-x-1/2 cursor-pointer group"
                          style={{ top: `${boysY}%` }}
                          onMouseEnter={() => setHoveredPoint({ ...point, type: 'boys', index })}
                          onMouseLeave={() => setHoveredPoint(null)}
                        >
                          <div className="w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white shadow-md group-hover:w-3.5 group-hover:h-3.5 transition-all duration-200"></div>
                          {hoveredPoint?.index === index && hoveredPoint?.type === 'boys' && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-10">
                              <div className="font-semibold">Abahungu</div>
                              <div>{point.boys} student{point.boys !== 1 ? 's' : ''}</div>
                              <div className="text-gray-300 text-[10px]">{point.term}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* X-axis labels */}
                <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs text-gray-600 font-medium">
                  {chartData.map((point, index) => (
                    <span key={index} className="transform -translate-x-1/2" style={{ left: `${index * 50}%`, position: 'absolute' }}>
                      {point.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Enhanced Legend with stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 sm:mt-12 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm group-hover:scale-110 transition-transform"></div>
                <span className="text-sm text-gray-700 font-medium">Abahungu</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">0</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-3 h-3 bg-orange-400 rounded-full shadow-sm group-hover:scale-110 transition-transform"></div>
                <span className="text-sm text-gray-700 font-medium">Abakobwa</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">1</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-bold text-gray-800">{t('dashboard.quickLinks')}</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">{t('dashboard.quickLinksDesc')}</p>
            
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <button className="px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors">
                  Abanyeshuri Bose
                </button>
                <button className="px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors">
                  Kora Raporu
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors">
                  Porogaramu
                </button>
                <button className="px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors">
                  Amacumbi
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors">
                  Imyicarire
                </button>
                <button className="px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors">
                  Ibikorwa Biheruka
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base sm:text-lg font-bold text-gray-800">{t('dashboard.recentActivities')}</h3>
            <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">{t('dashboard.viewAll')}</a>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">{t('dashboard.recentActivitiesDesc')}</p>
          
          <div className="space-y-4">
            {/* Activity Item 1 */}
            <div className="flex items-start space-x-3 pb-4 border-b border-gray-100">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm font-semibold">a</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">admin</span> added{' '}
                  <span className="font-semibold">Admin</span> to S6 ACC A.
                </p>
                <p className="text-xs text-gray-500 mt-1">5 minutes ago</p>
              </div>
            </div>

            {/* Activity Item 2 */}
            <div className="flex items-start space-x-3 pb-4 border-b border-gray-100">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm font-semibold">a</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">
                  Yasoje{' '}
                  <span className="font-semibold">Term 2</span> anatangiza{' '}
                  <span className="font-semibold">Term 3</span> cya 2026-2027.
                </p>
                <p className="text-xs text-gray-500 mt-1">about 1 hour ago</p>
              </div>
            </div>

            {/* Activity Item 3 */}
            <div className="flex items-start space-x-3 pb-4 border-b border-gray-100">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm font-semibold">a</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">admin</span> granted permission to{' '}
                  <span className="font-semibold">Munyamahoro Junior</span>. Reason: Aumya.
                </p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
            </div>

            {/* Activity Item 4 */}
            <div className="flex items-start space-x-3 pb-4 border-b border-gray-100">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm font-semibold">a</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">admin@gmail.com</span> revoked permission for{' '}
                  <span className="font-semibold">Iradukunda Yasin</span> (marked as returned).
                </p>
                <p className="text-xs text-gray-500 mt-1">4 days ago</p>
              </div>
            </div>

            {/* Activity Item 5 */}
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm font-semibold">a</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">admin@gmail.com</span> granted permission to{' '}
                  <span className="font-semibold">Iradukunda Yasin</span>.
                </p>
                <p className="text-xs text-gray-500 mt-1">5 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
