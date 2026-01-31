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
          <a href={location.pathname !== '/' ? "/#about" : "#about"} onClick={(e) => location.pathname === '/' && handleScroll(e, 'about')} className="footer-nav-link">
            About
          </a>
          <a href={location.pathname !== '/' ? "/#modalities" : "#modalities"} onClick={(e) => location.pathname === '/' && handleScroll(e, 'modalities')} className="footer-nav-link">
            Modalities
          </a>
          <a href={location.pathname !== '/' ? "/#book" : "#book"} onClick={(e) => location.pathname === '/' && handleScroll(e, 'book')} className="footer-nav-link">
            The Book
          </a>
          <Link to="/booking" className="footer-nav-link">Book a Session</Link>
          <a
            href="https://www.spiritualdealer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-nav-link"
          >
            Visit SpiritualDealer.com
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

