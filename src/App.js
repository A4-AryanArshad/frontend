import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

const isAdminAuthed = () => localStorage.getItem('sd_admin_authed') === 'true';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route
          path="/admin"
          element={isAdminAuthed() ? <AdminDashboard /> : <Navigate to="/admin/login" replace />}
        />
        <Route
          path="/admin/login"
          element={isAdminAuthed() ? <Navigate to="/admin" replace /> : <AdminLogin />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

