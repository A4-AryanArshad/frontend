import React from 'react';
import './ModalitiesSection.css';

const ModalitiesWithImages = () => {
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
    <section className="modalities-section modalities-images-section">
      <div className="container">
        <div className="modalities-list">
          {modalities.map((modality, index) => (
            <div 
              key={modality.id} 
              className={`modality-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
              onClick={() => handleModalityClick(modality)}
            >
              <div className="modality-image-wrapper">
                <img src={modality.image} alt={modality.name} className="modality-image" />
              </div>
              <div className="modality-content">
                <div className="modality-type-badge">{modality.type}</div>
                <h3 className="modality-name">{modality.name}</h3>
                <p className="modality-description">{modality.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalitiesWithImages;

