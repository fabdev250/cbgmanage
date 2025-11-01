import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { User } from 'lucide-react';
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
import Settings from './pages/Configuration';
import Announcements from './pages/Announcements';
import Rooms from './pages/Rooms';
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
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/programs" element={<Program />} />
                <Route path="/seating" element={<Refectory />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/imyicarire" element={<GenericPage title="Behavior" />} />
                <Route path="/ibikorwa" element={<GenericPage title="Activities" />} />
                <Route path="/Announcements" element={<Announcements />} />
                <Route path="/users" element={<Users />} />
                <Route path="/settings" element={<Settings />} />
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
