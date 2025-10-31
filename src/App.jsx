import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ToastProvider } from './components/Toast';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import DashboardOverview from './pages/DashboardOverview';
import Students from './pages/Students';
import GenericPage from './pages/GenericPage';
import Admission from './pages/Admission';
import Reports from './pages/Reports';
import Program from './pages/Program';
import Refectory from './pages/Refectory';
import Activities from './pages/Activities';
import Users from './pages/Users';

function App() {
  return (
    <LanguageProvider>
      <ToastProvider>
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
                <Route path="/rooms" element={<GenericPage title="Rooms" />} />
                <Route path="/programs" element={<Program />} />
                <Route path="/seating" element={<Refectory />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/imyicarire" element={<GenericPage title="Behavior" />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/amatangazo" element={<GenericPage title="Announcements" />} />
                <Route path="/users" element={<Users />} />
                <Route path="/igenamiterere" element={<GenericPage title="Configuration" />} />
                <Route path="/amabwiriza" element={<GenericPage title="Guidelines" />} />
                <Route path="/shyiraho-porogaramu" element={<GenericPage title="Setup Program" />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
      </ToastProvider>
    </LanguageProvider>
  );
}

export default App;
