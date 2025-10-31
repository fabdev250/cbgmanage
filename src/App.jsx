import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import DashboardOverview from './pages/DashboardOverview';
import Students from './pages/Students';
import GenericPage from './pages/GenericPage';
import Admission from './pages/Admission';
import Program from './pages/Program';
import Rooms from './pages/Rooms';
import Refectory from './pages/Refectory';
import Settings from './pages/Configuration';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          {/* Fixed positioned components */}
          <Sidebar />
          <TopBar />
          
          {/* Main content with proper spacing */}
          <main className="ml-64 pt-16 min-h-screen">
            <div className="p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/students" element={<Students />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/programs" element={<Program />} />
                <Route path="/seating" element={<Refectory />} />
                <Route path="/raporu" element={<GenericPage title="Reports" />} />
                <Route path="/imyicarire" element={<GenericPage title="Behavior" />} />
                <Route path="/ibikorwa" element={<GenericPage title="Activities" />} />
                <Route path="/amatangazo" element={<GenericPage title="Announcements" />} />
                <Route path="/abakoresha" element={<GenericPage title="Users" />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/amabwiriza" element={<GenericPage title="Guidelines" />} />
                <Route path="/shyiraho-porogaramu" element={<GenericPage title="Setup Program" />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;