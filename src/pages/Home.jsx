import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import TypingAnimation from '../components/TypingAnimation';
import './Home.css';

const Home = () => {
  const scrollToModalities = () => {
    const el = document.getElementById('modalities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App" id="top">
      <HeaderNav />
      
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-gradient" />
        <div className="container">
          <div className="home-hero-content">
            <h1 className="home-hero-title">Welcome to Spiritual Dealer</h1>
            <p className="home-hero-description">
              Healing, transformation, and community through alternative and metaphysical practices.
              Explore multiple paths to healing and discover what resonates with your unique journey.
            </p>
            <div className="home-hero-actions">
              <Link to="/pamelashore" className="home-hero-btn primary">
                Pamela Shore
              </Link>
              <button type="button" className="home-hero-btn secondary" onClick={scrollToModalities}>
                Explore Modalities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Spiritual Dealer Section */}
      <section className="home-what-is">
        <div className="container">
          <div className="home-what-is-content">
            <h2 className="home-section-title">What is Spiritual Dealer?</h2>
            <div className="home-what-is-text">
              <p>
                Spiritual Dealer is a curated healing community created to support transformation on physical, emotional, and spiritual levels.
              </p>
              <p>
                Born from lived healing experience, Spiritual Dealer brings together trusted practitioners and diverse modalities—offering pathways beyond conventional approaches and honoring that no two healing journeys are the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* It Takes a Village Section */}
      <section className="home-village">
        <div className="home-village-gradient" />
        <div className="container">
          <div className="home-village-content">
            <h2 className="home-section-title">It Takes a Village</h2>
            <div className="home-village-text">
              <p>
                Healing is not one-size-fits-all.
              </p>
              <p>
                Some paths move through the body.
                Others move through the nervous system, energy, memory, or intuition.
              </p>
              <p>
                Spiritual Dealer exists to hold space for many approaches—so you can find what truly supports your healing, growth, and self-discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore the Spiritual Dealer Experience */}
      <section className="home-explore" id="modalities">
        <div className="container">
          <h2 className="home-section-title">Explore the Spiritual Dealer Experience</h2>
          <div className="home-explore-grid">
            {/* Pamela Shore Card */}
            <Link to="/pamelashore" className="home-explore-card">
              <div className="home-explore-image-wrapper">
                <img src="/Founder.jpeg" alt="Pamela Shore" className="home-explore-image" />
              </div>
              <div className="home-explore-content">
                <h3 className="home-explore-title">Pamela Shore</h3>
                <p className="home-explore-subtitle">Founder, practitioner, and guide.</p>
                <p className="home-explore-description">
                  Explore Pamela&apos;s work, modalities, and services.
                </p>
                <span className="home-explore-link">Visit Pamela Shore →</span>
              </div>
            </Link>

            {/* The Book Card */}
            <Link to="/book" className="home-explore-card">
              <div className="home-explore-image-wrapper">
                <img src="/Picture.png" alt="Spiritual Dealer Book" className="home-explore-image" />
              </div>
              <div className="home-explore-content">
                <h3 className="home-explore-title">The Book</h3>
                <p className="home-explore-subtitle">The personal journey that inspired Spiritual Dealer.</p>
                <p className="home-explore-description">
                  Discover how healing, surrender, and alternative practices led to the creation of this community.
                </p>
                <span className="home-explore-link">Explore the Book →</span>
              </div>
            </Link>

            {/* Modalities Card */}
            <Link
              to="/pamelashore#modalities"
              className="home-explore-card"
            >
              <div className="home-explore-image-wrapper">
                <img
                  src="/3.png"
                  alt="Modalities and healing paths"
                  className="home-explore-image"
                />
              </div>
              <div className="home-explore-content">
                <h3 className="home-explore-title">Modalities</h3>
                <p className="home-explore-subtitle">
                  Movement, alternative therapies, astrology, and intuitive practices.
                </p>
                <p className="home-explore-description">
                  Explore the many healing paths available within the Spiritual Dealer community.
                </p>
                <span className="home-explore-link">View Modalities →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing Reassurance */}
      <section className="home-reassurance">
        <div className="home-reassurance-gradient" />
        <div className="container">
          <div className="home-reassurance-content">
            <TypingAnimation
              texts={[
                'You are not broken.',
                'You are not alone.',
                'Your healing is possible.'
              ]}
              speed={80}
              delay={800}
              className="typing-animation-container"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
