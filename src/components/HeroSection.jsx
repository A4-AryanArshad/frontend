import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToModalities = () => {
    const el = document.getElementById('modalities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBooking = () => {
    navigate('/booking');
  };

  return (
    <section className="hero-section">
      <div className="hero-bg-gradient" />
      <div className="container hero-container">
        <div className="hero-copy">
          <p className="hero-eyebrow">Find your path to transformation</p>
          <h1 className="hero-heading">Welcome to Spiritual Dealer</h1>
          <p className="hero-intro">
            Life is a journey of healing, growth, and discovery. Whether you&apos;re experiencing physical pain, emotional turbulence, or simply seeking deeper connection, Spiritual Dealer is your sanctuary for transformation.
          </p>
          <div className="hero-actions">
            <button type="button" className="hero-btn primary" onClick={scrollToModalities}>
              Explore Our Modalities
            </button>
            <button type="button" className="hero-btn ghost" onClick={scrollToBooking}>
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

