import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import DashboardOverview from './pages/DashboardOverview';
import Students from './pages/Students';
import GenericPage from './pages/GenericPage';
import Admission from './pages/Admission';

function App() {
  return (
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
              <Route path="/rooms" element={<GenericPage title="Amacumbi" />} />
              <Route path="/porogaramu" element={<GenericPage title="Porogaramu" />} />
              <Route path="/raporu" element={<GenericPage title="Raporu" />} />
              <Route path="/imyicarire" element={<GenericPage title="Imyicarire" />} />
              <Route path="/ibikorwa" element={<GenericPage title="Ibikorwa" />} />
              <Route path="/amatangazo" element={<GenericPage title="Amatangazo" />} />
              <Route path="/abakoresha" element={<GenericPage title="Abakoresha" />} />
              <Route path="/igenamiterere" element={<GenericPage title="Igenamiterere" />} />
              <Route path="/amabwiriza" element={<GenericPage title="Amabwiriza" />} />
              <Route path="/shyiraho-porogaramu" element={<GenericPage title="Shyiraho Porogaramu" />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;