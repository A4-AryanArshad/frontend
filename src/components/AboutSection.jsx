import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <h2 className="about-heading">
            My <span className="about-heading-accent">Approach</span>
          </h2>

          <div className="about-text">
            <p>
              I am a neuro-somatic movement practitioner, ontologist, and the founder of Spiritual Dealer.
            </p>
            <p>
              After years of searching for answers through countless healing modalities, I created the space I wish I had found during my own healing journey — one that honors the body&apos;s intelligence, the nervous system, and the deeper patterns shaping our lives.
            </p>
            <p>
              My work is rooted in embodied, nervous-system-based processes that support regulation, clarity, and lasting change. Healing is not linear, and awareness alone is not enough — the body must be included for true integration to occur.
            </p>
            <p>
              Spiritual Dealer is a meeting place where ancient wisdom and modern practice intersect, where the physical intertwines with the spiritual, and where your unique path to healing can unfold.
            </p>
          </div>

          <div className="about-divider" />

          <h3 className="about-subheading">
            It Takes a <span className="about-heading-accent">Village</span>
          </h3>
          <div className="about-text about-village">
            <p>
              No single approach works for everyone.
            </p>
            <p>
              Healing is deeply personal, shaped by lived experience, trauma, lineage, and the nervous system. Spiritual Dealer brings together a curated range of somatic, metaphysical, and movement-based modalities to support the whole person — body, mind, and spirit.
            </p>
            <p>
              Rather than prescribing one belief system or method, this space invites exploration, discernment, and trust in your own inner authority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

