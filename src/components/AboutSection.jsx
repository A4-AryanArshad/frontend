import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
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
                Many of us move through life with a quiet sense that something is &quot;off.&quot; It may show up as physical discomfort no doctor can fully explain, emotional weight that won&apos;t lift, or a feeling of disconnection even when surrounded by others. You&apos;ve tried conventional solutions — medications, therapy, self-help — yet something still feels unresolved.
              </p>
            </div>
            <div className="about-block">
              <p>
                We know this journey intimately because we&apos;ve walked it ourselves. Spiritual Dealer exists to bridge the gap between traditional and alternative healing — bringing together movement, energy work, subconscious healing, and spiritual insight under one roof. There is no one-size-fits-all approach to healing. Your journey is unique, and it deserves to be honored.
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
              No single approach works for everyone.
            </p>
            <p>
              Healing is deeply personal, shaped by lived experience, trauma, lineage, and the nervous system. Spiritual Dealer brings together a curated range of somatic, metaphysical, and movement-based modalities to support the whole person — body, mind, and spirit.
            </p>
            <p>
              Rather than prescribing one belief system or method, this space invites exploration, discernment, and trust in your own inner authority.
            </p>
            <p>
              Our practitioners don&apos;t just practice their craft — they live it. Each has been personally selected for their integrity, lived experience, and commitment to supporting others on their healing journeys.
            </p>
          </div>
          
          <p className="about-transition">
            Explore the modalities that support your whole being.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

