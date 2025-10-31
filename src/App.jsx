import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import GenericPage from './pages/GenericPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar />
        <main className="ml-64 flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/abanyeshuri" element={<Students />} />
            <Route path="/impushya" element={<GenericPage title="Impushya" />} />
            <Route path="/amacumbi" element={<GenericPage title="Amacumbi" />} />
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
        </main>
      </div>
    </Router>
  );
}

export default App;