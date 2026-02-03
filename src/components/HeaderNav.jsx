import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = () => {
  const location = useLocation();
  const isBookingPage = location.pathname === '/booking';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/pamelashore"
            className={location.pathname === '/pamelashore' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Pamela Shore
          </Link>
          <Link
            to="/services"
            className={location.pathname === '/services' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link 
            to="/book" 
            className={location.pathname === '/book' ? 'active' : ''} 
            onClick={handleLinkClick}
          >
            The Book
          </Link>
          <button
            type="button"
            className="header-coming-soon"
            onClick={handleLinkClick}
            title="Coming Soon"
            aria-label="Community (Coming Soon)"
          >
            Community
          </button>
          <Link to="/booking" className={isBookingPage ? 'active' : ''} onClick={handleLinkClick}>
            Book a Session
          </Link>
          <Link to="/admin/login" className="header-admin-link" onClick={handleLinkClick}>
            Admin Login
          </Link>
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
