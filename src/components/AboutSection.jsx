import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <h2 className="about-heading">
            Our <span className="about-heading-accent">Mission</span>
          </h2>

          <div className="about-text">
            <div className="about-block">
              <p>
                At Spiritual Dealer, we believe the answers you&apos;ve been seeking already exist — you just haven&apos;t been shown the right path yet.
              </p>
            </div>
            <div className="about-block">
              <p>
                Many of us move through life with a quiet sense that something is &quot;off.&quot; It may appear as physical discomfort no doctor can fully explain, emotional weight that won&apos;t lift, or a feeling of disconnection even when surrounded by others. Traditional approaches don&apos;t always reach the root of what we&apos;re experiencing.
              </p>
            </div>
            <div className="about-empowerment">
              <p><strong>You are not broken.</strong></p>
              <p><strong>You are not alone.</strong></p>
              <p><strong>And your healing is possible.</strong></p>
            </div>
          </div>

          <div className="about-divider" />

          <h3 className="about-subheading">
            It Takes a <span className="about-heading-accent">Village</span>
          </h3>
          <div className="about-text about-village">
            <p>
              No single approach works for everyone. Healing is deeply personal and shaped by lived experience, trauma, lineage, and the nervous system. Spiritual Dealer is a community space that brings together movement-based, somatic, and intuitive healing modalities to support the whole person — body, mind, and spirit.
            </p>
            <p>
              Rather than prescribing one belief system or method, this space invites exploration, discernment, and trust in your own inner authority.
            </p>
          </div>
          
          <div className="about-links">
            <button 
              type="button" 
              className="about-link-btn"
              onClick={() => scrollToSection('modalities')}
            >
              Explore Modalities
            </button>
            <button 
              type="button" 
              className="about-link-btn"
              onClick={() => scrollToSection('founder')}
            >
              Meet Pamela Shore
            </button>
            <button 
              type="button" 
              className="about-link-btn"
              onClick={() => scrollToSection('book')}
            >
              The Book
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

