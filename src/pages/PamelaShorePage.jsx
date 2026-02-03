import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import './PamelaShorePage.css';

const PamelaShorePage = () => {
  const services = [
    {
      name: 'Gyrotonic® or Pilates Session',
      tagline: 'Fluid movement. Strength with ease.',
      description: 'In-person movement sessions focused on improving mobility, coordination, strength, and ease. Using Gyrotonic or classical Pilates, sessions support spinal articulation, joint space, posture, and efficient movement without force.',
      format: 'In person'
    },
    {
      name: 'InnerDialogue™ Session',
      tagline: 'Clarity through deep listening.',
      description: 'A non-directive session that works beneath conscious thought to reveal and integrate internal patterns influencing perception, behavior, and life direction. InnerDialogue supports recognition and resolution without analysis or reliving past experiences.',
      format: 'Live or Zoom'
    },
    {
      name: 'BeingHuman Constellation Card Reading',
      tagline: 'Seeing the pattern you are living inside of.',
      description: 'A structured card-based constellation process developed by Solihin Thom that reveals how different aspects of a person\'s experience are organized in the present moment. The cards reflect internal positions across multiple levels—such as inherited patterns, emotional states, instinctual responses, and higher orientation—offering clear insight into what is active and what is asking to shift.',
      format: 'Live or Zoom'
    },
    {
      name: 'Integrated Neuro-Somatic & Movement Session',
      tagline: 'Where insight becomes embodied change.',
      description: 'A fully integrated, in-person session combining InnerDialogue, neuro-somatic awareness, and movement through Gyrotonic® or Pilates. This approach supports recognition and release of deeply held patterns while allowing those shifts to be physically integrated through precise, supportive movement.',
      format: 'Live / In person only'
    }
  ];

  return (
    <div className="App" id="top">
      <HeaderNav />
      
      {/* Hero Section */}
      <section className="pamela-hero">
        <div className="pamela-hero-gradient" />
        <div className="container">
          <div className="pamela-hero-content">
            <h1 className="pamela-hero-title">Pamela Shore</h1>
            <p className="pamela-hero-subtitle">Neuro-Somatic Movement Practitioner & Founder</p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="pamela-bio-section">
        <div className="container">
          <div className="pamela-bio-content">
            <div className="pamela-bio-image-wrapper">
              <img
                src="/Founder.jpeg"
                alt="Pamela Shore, Founder of Spiritual Dealer"
                className="pamela-bio-image"
              />
            </div>
            <div className="pamela-bio-text">
              <div className="pamela-bio-block">
                <p>
                  After years of searching for answers through countless healing modalities, I created the space I wish I had found during my own healing journey — one that honors the body&apos;s intelligence, the nervous system, and the deeper patterns shaping our lives.
                </p>
              </div>
              <div className="pamela-bio-block">
                <p>
                  My work is rooted in embodied, nervous-system-based processes that support regulation, clarity, and lasting change. Healing is not linear, and awareness alone is not enough — the body must be included for true integration to occur.
                </p>
              </div>
              <div className="pamela-bio-block">
                <p>
                  This work led me to create Spiritual Dealer, a space where these modalities can be explored together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modalities Explanation Section */}
      <section className="pamela-modalities-section" id="modalities">
        <div className="pamela-section-gradient" />
        <div className="container">
          <h2 className="pamela-section-title">My Modalities</h2>
          
          <div className="pamela-modality-detail">
            <div className="pamela-modality-content">
              <h3 className="pamela-modality-name">InnerDialogue™</h3>
              <p className="pamela-modality-description">
                InnerDialogue is a non-directive process that works beneath conscious thought to reveal and integrate internal patterns influencing perception, behavior, and life direction. Unlike traditional therapy, InnerDialogue doesn&apos;t require you to relive past experiences or engage in analysis. Instead, it supports recognition and resolution at a deeper level, allowing understanding to emerge naturally.
              </p>
              <p className="pamela-modality-description">
                This modality has been transformative in my own healing journey and continues to be a cornerstone of my practice. It offers a way to access and shift patterns that may have felt inaccessible through other approaches.
              </p>
            </div>
          </div>

          <div className="pamela-modality-detail">
            <div className="pamela-modality-content">
              <h3 className="pamela-modality-name">GYROTONIC®</h3>
              <p className="pamela-modality-description">
                GYROTONIC® is a movement system that emphasizes fluid, three-dimensional movement patterns. Unlike linear exercise approaches, GYROTONIC® works with the body&apos;s natural spiraling and circular movements, supporting spinal articulation, joint space, and overall mobility.
              </p>
              <p className="pamela-modality-description">
                This practice has been essential in my understanding of how movement can support nervous system regulation and how physical patterns are connected to emotional and energetic patterns. The equipment-based sessions allow for precise, supportive movement that adapts to each person&apos;s unique needs and limitations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="pamela-services-section">
        <div className="container">
          <h2 className="pamela-section-title">Services</h2>
          <p className="pamela-services-intro">
            I offer individual sessions and integrated approaches. Each session is tailored to your unique needs and goals.
          </p>
          
          <div className="pamela-services-list">
            {services.map((service, index) => (
              <div key={index} className="pamela-service-item">
                <div className="pamela-service-header">
                  <h3 className="pamela-service-name">{service.name}</h3>
                  <span className="pamela-service-format">{service.format}</span>
                </div>
                <p className="pamela-service-tagline">{service.tagline}</p>
                <p className="pamela-service-description">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="pamela-services-cta">
            <Link to="/booking" className="pamela-cta-button">
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="pamela-credentials-section">
        <div className="pamela-section-gradient" />
        <div className="container">
          <div className="pamela-credentials-content">
            <h2 className="pamela-section-title">Credentials & Training</h2>
            <div className="pamela-credentials-list">
              <div className="pamela-credential-item">
                <h4 className="pamela-credential-title">Neuro-Somatic Movement Practitioner</h4>
                <p className="pamela-credential-description">
                  Certified in nervous-system-based movement and somatic practices
                </p>
              </div>
              <div className="pamela-credential-item">
                <h4 className="pamela-credential-title">InnerDialogue™ Practitioner</h4>
                <p className="pamela-credential-description">
                  Trained in non-directive processes that reveal and integrate internal patterns
                </p>
              </div>
              <div className="pamela-credential-item">
                <h4 className="pamela-credential-title">GYROTONIC® & Pilates Instructor</h4>
                <p className="pamela-credential-description">
                  Certified in movement modalities that support spinal articulation and efficient movement
                </p>
              </div>
              <div className="pamela-credential-item">
                <h4 className="pamela-credential-title">BeingHuman Constellation Facilitator</h4>
                <p className="pamela-credential-description">
                  Trained in constellation work that addresses spiritual, energetic, and existential dimensions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pamela-cta-section">
        <div className="pamela-section-gradient" />
        <div className="container">
          <div className="pamela-cta-content">
            <h2 className="pamela-cta-title">Ready to Begin Your Healing Journey?</h2>
            <p className="pamela-cta-text">
              Book a session to explore how these modalities can support your unique path to transformation.
            </p>
            <Link to="/booking" className="pamela-cta-button">
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PamelaShorePage;
