import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../config/axios';
import '../admin/Admin.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await apiClient.get('/api/bookings');
      if (res.data?.success) {
        setBookings(res.data.bookings);
      } else {
        setError('Unable to load bookings.');
      }
    } catch (err) {
      setError('Unable to load bookings.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm('Delete this booking request?');
    if (!confirm) return;

    try {
      setDeletingId(id);
      await apiClient.delete(`/api/bookings/${id}`);
      setBookings((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      alert('Unable to delete booking right now.');
    } finally {
      setDeletingId(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('sd_admin_authed');
    navigate('/', { replace: true });
  };

  return (
    <div className="admin-shell admin-dashboard-shell">
      <div className="admin-dashboard-container">
        <div className="admin-topbar">
          <div>
            <h1 className="admin-title">Bookings Dashboard</h1>
            <p className="admin-subtitle">Review and manage session requests for Pamela.</p>
          </div>
          <button type="button" className="admin-link-button" onClick={handleLogout}>
            Log out
          </button>
        </div>

        <div className="admin-card admin-dashboard-card">
        {loading && <p>Loading bookings...</p>}
        {error && <p className="admin-error">{error}</p>}

        {!loading && !error && bookings.length === 0 && (
          <p className="admin-empty">No booking requests yet.</p>
        )}

        {!loading && bookings.length > 0 && (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Session Type</th>
                  <th>Date &amp; Time</th>
                  <th>Message</th>
                  <th>Submitted</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.sessionType}</td>
                    <td>
                      {booking.preferredDate} <br />
                      <span className="admin-table-muted">{booking.preferredTime}</span>
                    </td>
                    <td className="admin-table-message">
                      {booking.message || <span className="admin-table-muted">No message</span>}
                    </td>
                    <td className="admin-table-muted">
                      {booking.createdAt
                        ? new Date(booking.createdAt).toLocaleString()
                        : '—'}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="admin-delete-button"
                        onClick={() => handleDelete(booking._id)}
                        disabled={deletingId === booking._id}
                      >
                        {deletingId === booking._id ? 'Deleting...' : 'Delete'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;


