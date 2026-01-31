import React from 'react';
import { GiLotus, GiMuscleUp, GiSpiralThrust, GiStarsStack } from 'react-icons/gi';
import './ModalitiesSection.css';

const ModalitiesSection = () => {
  // Card section with icons
  const modalityCards = [
    {
      id: 1,
      name: 'Yoga',
      description: 'Connect breath, body, and spirit through mindful movement. Release tension, build strength, and return to balance.',
      icon: <GiLotus style={{ color: '#3b82f6', fontSize: '48px' }} />
    },
    {
      id: 2,
      name: 'Pilates',
      description: 'Strengthen from the inside out with intentional, controlled movement. Improve posture, alignment, and embodied awareness.',
      icon: <GiMuscleUp style={{ color: '#3b82f6', fontSize: '48px' }} />
    },
    {
      id: 3,
      name: 'GYROTONIC®',
      description: 'Experience fluid, three-dimensional movement for deep healing. Restore spinal health, mobility, and energetic flow.',
      icon: <GiSpiralThrust style={{ color: '#3b82f6', fontSize: '48px' }} />
    },
    {
      id: 4,
      name: 'Astrology',
      description: 'Gain clarity through cosmic insight and soul-level guidance. Understand your purpose, patterns, and timing.',
      icon: <GiStarsStack style={{ color: '#3b82f6', fontSize: '48px' }} />
    }
  ];

  const handleModalityClick = (modality) => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="modalities-section" id="modalities">
      <div className="container">
        <h2 className="section-title">Your Healing Starts Here</h2>
        <p className="section-subtitle">
          Explore the ways you can work with Pamela through movement, nervous-system-based work, and constellation
          practices.
        </p>
        
        {/* Card section with icons */}
        <div className="modalities-cards">
          {modalityCards.map((modality) => (
            <div 
              key={modality.id} 
              className="modality-card"
              onClick={() => handleModalityClick(modality)}
            >
              <div className="modality-icon-wrapper">
                <div className="modality-icon">{modality.icon}</div>
              </div>
              <h3 className="modality-card-title">{modality.name}</h3>
              <p className="modality-card-description">{modality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalitiesSection;

