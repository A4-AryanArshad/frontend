import React from 'react';
import './HeroSection.css';

const HeroSection = () => {

  const scrollToModalities = () => {
    const el = document.getElementById('modalities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFounder = () => {
    const el = document.getElementById('founder');
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
            Life is a journey of healing, growth, and discovery. Whether you&apos;re experiencing physical pain, emotional turbulence, or a sense that something is missing, Spiritual Dealer exists to help you find your path to transformation.
          </p>
          <div className="hero-actions">
            <button type="button" className="hero-btn primary" onClick={scrollToModalities}>
              Explore Modalities
            </button>
            <button type="button" className="hero-btn ghost" onClick={scrollToFounder}>
              Pamela Shore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

