import React, { useState } from 'react';
import '../admin/Admin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const validEmail = 'admin1234@gmail.com';
    const validPassword = 'admin1234';

    // Trim whitespace from inputs
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedEmail === validEmail && trimmedPassword === validPassword) {
      // Set authentication flag
      localStorage.setItem('sd_admin_authed', 'true');
      
      // Force immediate redirect - this ensures route protection re-evaluates
      window.location.href = '/admin';
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="admin-shell">
      <div className="admin-card">
        <h1 className="admin-title">Admin Login</h1>
        <p className="admin-subtitle">For Pamela and the Spiritual Dealer team.</p>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="admin-form-group">
            <label htmlFor="admin-email">Email</label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="admin-form-group">
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="admin-error">{error}</div>}

          <button type="submit" className="admin-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;


