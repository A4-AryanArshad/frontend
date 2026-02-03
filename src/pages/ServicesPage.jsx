import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import './ServicesPage.css';

const ServicesPage = () => {
  const groups = [
    {
      id: 'movement',
      label: 'Movement Sessions',
      items: [
        {
          name: 'GYROTONIC® Session (In-person)',
          tagline: 'Fluid, intentional movement sessions.',
          description:
            'Focused on nervous-system regulation, strength, mobility, spinal articulation, and embodied awareness. These sessions support deep release, coordination, and sustainable movement patterns.',
          bestFor: 'chronic tension, pain, postural imbalance, nervous-system support',
          format: 'In person',
          image: '/1.png',
          imageAlt: 'Client receiving GYROTONIC® movement support',
        },
        {
          name: 'Pilates Session (In-person)',
          tagline: 'Core strength with mindful control.',
          description:
            'Pilates sessions emphasize alignment, breath, and precision to build strength while supporting balance and functional movement.',
          bestFor: 'strength, stability, injury recovery, body awareness',
          format: 'In person',
          image: '/3.png',
          imageAlt: 'Pilates equipment and mindful core-strengthening work',
        },
      ],
    },
    {
      id: 'neuro-somatic',
      label: 'Neuro-Somatic & Healing Sessions',
      items: [
        {
          name: 'InnerDialogue™ Session (Live or Zoom)',
          tagline: 'Clarity through deep listening.',
          description:
            'A non-directive process that works beneath conscious thought to reveal and integrate internal patterns influencing perception, behavior, and direction.',
          bestFor: 'emotional patterns, physical symptoms with no clear cause, deeper self-awareness',
          format: 'Live or Zoom',
          image: '/2.png',
          imageAlt: 'Calm, reflective InnerDialogue™ session space',
        },
        {
          name: 'Integrated Neuro-Somatic & Movement Session (Live / In-person)',
          tagline: 'Where insight becomes embodied change.',
          description:
            'A holistic session combining movement, nervous-system awareness, and pattern recognition to support deeper integration and lasting transformation.',
          bestFor: 'integration after emotional work, nervous-system regulation, embodied healing',
          format: 'Live / In-person',
          image: '/5.png',
          imageAlt: 'Integrated neuro-somatic and movement work in the studio',
        },
      ],
    },
    {
      id: 'intuitive',
      label: 'Intuitive & Card-Based Work',
      items: [
        {
          name: 'BeingHuman Constellation Card Reading (Live or Zoom)',
          tagline: 'Seeing the pattern you are living inside of.',
          description:
            'A structured process using cards to reveal emotional states, relational dynamics, internal responses, and higher-orientation insights.',
          bestFor: 'clarity, life transitions, repeating patterns',
          format: 'Live or Zoom',
          image: '/4.png',
          imageAlt: 'BeingHuman constellation card layout on a table',
        },
      ],
    },
  ];

  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* Hero / Intro */}
      <section className="services-hero">
        <div className="services-hero-gradient" />
        <div className="container">
          <div className="services-hero-content">
            <p className="services-kicker">Services</p>
            <h1 className="services-title">Book a Session</h1>
            <p className="services-intro">
              Clear, intentional offerings designed to support your healing journey.
              <br />
              Each session is guided with care and tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Groups */}
      <section className="services-groups">
        <div className="container">
          {groups.map((group) => (
            <div key={group.id} className="services-group">
              <h2 className="services-group-title">{group.label}</h2>
              <div className="services-list">
                {group.items.map((item) => (
                  <article key={item.name} className="service-card">
                    <div className="service-card-layout">
                      {item.image && (
                        <div className="service-image-wrapper">
                          <div className="service-image-inner">
                            <img
                              src={item.image}
                              alt={item.imageAlt || item.name}
                              className="service-image"
                            />
                          </div>
                        </div>
                      )}
                      <div className="service-content">
                        <header className="service-card-header">
                          <h3 className="service-name">{item.name}</h3>
                          <span className="service-format">{item.format}</span>
                        </header>
                        <p className="service-tagline">{item.tagline}</p>
                        <p className="service-description">{item.description}</p>
                        <p className="service-best-for">
                          <span>Best for:</span> {item.bestFor}
                        </p>
                        <div className="service-cta-row">
                          <Link to="/booking" className="service-cta-button">
                            Book a Session
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Not sure where to start */}
      <section className="services-not-sure">
        <div className="container">
          <div className="services-not-sure-inner">
            <h2 className="services-not-sure-title">Not sure where to start?</h2>
            <p>
              You don&apos;t need to know exactly what you need. If you feel unsure which session is right for you, begin
              where you feel called — clarity unfolds through the process.
            </p>
            <div className="services-not-sure-actions">
              <Link to="/booking" className="service-cta-button primary">
                Book a Session
              </Link>
              <Link to="/pamelashore" className="service-cta-button secondary">
                Visit Pamela Shore
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;


