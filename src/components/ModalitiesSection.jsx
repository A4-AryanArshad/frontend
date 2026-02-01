import React from 'react';
import './ModalitiesSection.css';

const ModalitiesSection = () => {
  const services = [
    {
      id: 1,
      name: 'Gyrotonic®️ or Pilates Session',
      tagline: 'Fluid movement. Strength with ease.',
      description: 'In-person movement sessions focused on improving mobility, coordination, strength, and ease. Using Gyrotonic or classical Pilates, sessions support spinal articulation, joint space, posture, and efficient movement without force.',
      format: 'In person',
      image: '/1.png',
      imagePosition: 'right'
    },
    {
      id: 2,
      name: 'InnerDialogue™️ Session',
      tagline: 'Clarity through deep listening.',
      description: 'A non-directive session that works beneath conscious thought to reveal and integrate internal patterns influencing perception, behavior, and life direction. InnerDialogue supports recognition and resolution without analysis or reliving past experiences.',
      format: 'Live or Zoom',
      image: '/2.png',
      imagePosition: 'left'
    },
    {
      id: 3,
      name: 'BeingHuman Constellation Card Reading',
      tagline: 'Seeing the pattern you are living inside of.',
      description: 'A structured card-based constellation process developed by Solihin Thom that reveals how different aspects of a person\'s experience are organized in the present moment. The cards reflect internal positions across multiple levels - such as inherited patterns, emotional states, instinctual responses, and higher orientation - offering clear insight into what is active and what is asking to shift.\n\nThese readings provide orientation, clarity, and next steps without interpretation or advice, allowing understanding to emerge naturally.',
      format: 'Live or Zoom',
      image: '/4.png',
      imagePosition: 'right'
    },
    {
      id: 4,
      name: 'Integrated Neuro-Somatic & Movement Session',
      tagline: 'Where insight becomes embodied change.',
      description: 'A fully integrated, in-person session combining InnerDialogue, neuro-somatic awareness, and movement through Gyrotonic®️ or Pilates. This approach supports recognition and release of deeply held patterns while allowing those shifts to be physically integrated through precise, supportive movement.\n\nClients often experience improved coordination, reduced tension or pain patterns, greater ease, and a deeper sense of alignment and presence.',
      format: 'Live / In person only',
      image: '/5.png',
      imagePosition: 'left'
    }
  ];

  const handleServiceClick = (service) => {
    // Navigate to booking page
    window.location.href = '/booking';
  };

  return (
    <section className="modalities-section" id="modalities">
      <div className="container">
        <h2 className="section-title">Services</h2>
        
        <div className="modalities-list">
          {services.map((service, index) => (
            <React.Fragment key={service.id}>
              <div 
                className={`modality-item ${service.imagePosition === 'right' ? 'image-right' : 'image-left'}`}
                onClick={() => handleServiceClick(service)}
              >
                <div className="modality-image-wrapper">
                  <img src={service.image} alt={service.name} className="modality-image" />
                </div>
                <div className="modality-content">
                  <div className="modality-type-badge">{service.format}</div>
                  <h3 className="modality-name">{service.name}</h3>
                  <p className="modality-tagline">{service.tagline}</p>
                  <p className="modality-description">{service.description}</p>
                </div>
              </div>
              {index < services.length - 1 && (
                <div className="modality-divider">⸻</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalitiesSection;

