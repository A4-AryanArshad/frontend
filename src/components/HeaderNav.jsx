import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = () => {
  const location = useLocation();
  const isBookingPage = location.pathname === '/booking';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu when link is clicked
    if (location.pathname !== '/') {
      window.location.href = `/#${targetId}`;
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu when link is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-nav">
      <div className="container header-inner">
        <div className="header-logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/Rlogo.png" alt="Spiritual Dealer Logo" className="logo-image" />
          </Link>
        </div>
        <nav className={`header-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <a href={isBookingPage ? "/#top" : "#top"} onClick={(e) => {
            if (!isBookingPage) handleScroll(e, 'top');
            else handleLinkClick();
          }}>
            Home
          </a>
          <a href={isBookingPage ? "/#about" : "#about"} onClick={(e) => {
            if (!isBookingPage) handleScroll(e, 'about');
            else handleLinkClick();
          }}>
            About
          </a>
          <a href={isBookingPage ? "/#modalities" : "#modalities"} onClick={(e) => {
            if (!isBookingPage) handleScroll(e, 'modalities');
            else handleLinkClick();
          }}>
            Modalities
          </a>
          <a href={isBookingPage ? "/#book" : "#book"} onClick={(e) => {
            if (!isBookingPage) handleScroll(e, 'book');
            else handleLinkClick();
          }}>
            The Book
          </a>
          <Link to="/booking" className={isBookingPage ? 'active' : ''} onClick={handleLinkClick}>
            Book a Session
          </Link>
          <a href="/admin/login" className="header-admin-link" onClick={handleLinkClick}>
            Admin Login
          </a>
        </nav>
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default HeaderNav;
