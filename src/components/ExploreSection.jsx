import React from 'react';
import './ExploreSection.css';

const ExploreSection = () => {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const exploreItems = [
    {
      id: 1,
      title: 'Pamela Shore',
      description: 'Personal healing work, practitioner sessions, and embodied guidance.',
      linkText: 'Visit Pamela Shore',
      sectionId: 'founder'
    },
    {
      id: 2,
      title: 'The Book',
      description: 'Pamela Shore\'s personal journey through healing and transformation — and how Spiritual Dealer was born.',
      linkText: 'Explore the Book',
      sectionId: 'book'
    },
    {
      id: 3,
      title: 'Modalities',
      description: 'Discover movement, somatic, subconscious, and intuitive healing practices.',
      linkText: 'View Modalities',
      sectionId: 'modalities'
    }
  ];

  return (
    <section className="explore-section">
      <div className="container">
        <h2 className="explore-heading">
          Explore the <span className="explore-heading-accent">Spiritual Dealer Experience</span>
        </h2>
        <div className="explore-grid">
          {exploreItems.map((item) => (
            <div key={item.id} className="explore-card">
              <h3 className="explore-card-title">{item.title}</h3>
              <p className="explore-card-description">{item.description}</p>
              <button
                type="button"
                className="explore-card-link"
                onClick={() => scrollToSection(item.sectionId)}
              >
                {item.linkText}
                <span className="explore-arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;



