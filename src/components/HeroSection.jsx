import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToBooking = () => {
    navigate('/booking');
  };

  const scrollToBook = () => {
    const el = document.getElementById('book');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-bg-gradient" />
      <div className="container hero-container">
        <div className="hero-copy">
          <p className="hero-eyebrow">Find your path to transformation</p>
          <h1 className="hero-heading">Welcome to Spiritual Dealer</h1>
          <p className="hero-intro">
            A sanctuary created by Pamela Shore for those seeking deeper healing, insight, and gentle
            guidance through movement, nervous-system-based work, and intuitive practices.
          </p>
          <div className="hero-actions">
            <button type="button" className="hero-btn primary" onClick={scrollToBooking}>
              Book a Session
            </button>
            <button type="button" className="hero-btn ghost" onClick={scrollToBook}>
              Explore the Book
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

