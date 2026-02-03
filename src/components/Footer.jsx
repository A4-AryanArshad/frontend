import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = `/#${targetId}`;
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/Rlogo.png" alt="Spiritual Dealer Logo" className="footer-logo-image" />
          <p className="footer-brand-text">Spiritual Dealer</p>
        </div>
        <div className="footer-divider" />
        <nav className="footer-nav">
          <a href={location.pathname !== '/' ? "/#top" : "#top"} onClick={(e) => location.pathname === '/' && handleScroll(e, 'top')} className="footer-nav-link">
            Home
          </a>
          <Link to="/pamelashore" className="footer-nav-link">Pamela Shore</Link>
          <Link to="/book" className="footer-nav-link">The Book</Link>
          <Link to="/services" className="footer-nav-link">Modalities</Link>
          <button
            type="button"
            className="footer-nav-link footer-coming-soon"
            onClick={(e) => e.preventDefault()}
            title="Coming Soon"
            aria-label="Community (Coming Soon)"
          >
            Community
          </button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

