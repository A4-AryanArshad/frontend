import React from 'react';
import './FounderSection.css';

const FounderSection = () => {
  return (
    <section className="founder-section" id="founder">
      <div className="container">
        <div className="founder-content">
          <div className="founder-image-wrapper">
            <div className="founder-image-container">
              <img
                src="/Founder.jpeg"
                alt="Pamela Shore, Founder of Spiritual Dealer"
                className="founder-image"
              />
            </div>
          </div>
          <div className="founder-text">
            <h2 className="founder-section-title">Meet the Founder</h2>
            <p className="founder-quote">
              After years of searching for answers through countless healing modalities, I created the space I wish I had found during my own healing journey — one that honors the body&apos;s intelligence, the nervous system, and the deeper patterns shaping our lives.
            </p>
            <p className="founder-quote">
              My work is rooted in embodied, nervous-system-based processes that support regulation, clarity, and lasting change. Healing is not linear, and awareness alone is not enough — the body must be included for true integration to occur.
            </p>
            <p className="founder-quote">
              Spiritual Dealer is a meeting place where ancient wisdom and modern practice intersect, allowing each person&apos;s unique path to healing to unfold.
            </p>
            <div className="founder-info">
              <div className="founder-profile">
                <div className="founder-name">PAMELA SHORE</div>
                <div className="founder-title">Neuro-Somatic Movement Practitioner & Founder</div>
              </div>
              <div className="founder-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

