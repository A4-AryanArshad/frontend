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

  // Original modalities with images
  const modalities = [
    {
      id: 1,
      name: 'Somatic Movement & GYROTONIC®',
      description: 'Nervous-system-based movement sessions integrating GYROTONIC® and Classical Pilates to restore balance and release long-held tension.',
      type: 'In Person',
      image: '/1.png'
    },
    {
      id: 2,
      name: 'InnerDialogue™ Sessions',
      description:
        "A neuro-somatic process that reveals subconscious, ancestral, and in-utero patterns held in the nervous system, allowing the soul's story to emerge.",
      type: 'In Person or Via Zoom',
      image: '/2.png'
    },
    {
      id: 3,
      name: 'BeingHuman Constellation Sessions',
      description: 'Explores deeper orders of connection beyond traditional Family Constellations, addressing spiritual, energetic, and existential dimensions.',
      type: 'In Person or Via Zoom',
      image: '/3.png'
    },
    {
      id: 4,
      name: 'BeingHuman Constellation Card Readings',
      description: 'A gentle, intuitive entry into the BeingHuman Constellation field using symbolic imagery to reveal hidden dynamics and soul themes.',
      type: 'In Person or Via Zoom',
      image: '/4.png'
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

