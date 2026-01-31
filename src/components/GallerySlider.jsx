import React, { useState, useEffect, useRef } from 'react';
import './GallerySlider.css';

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Using images 1-5 from public folder
  const galleryImages = [
    {
      id: 1,
      src: '/1.png',
      alt: 'Healing practice and movement'
    },
    {
      id: 2,
      src: '/2.png',
      alt: 'Somatic movement and healing'
    },
    {
      id: 3,
      src: '/3.png',
      alt: 'Group healing session'
    },
    {
      id: 4,
      src: '/4.png',
      alt: 'Individual healing practice'
    },
    {
      id: 5,
      src: '/5.png',
      alt: 'Pilates and movement therapy'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    // Reset auto-play timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    // Reset auto-play timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Reset auto-play timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
  };

  return (
    <section className="gallery-slider-section">
      <div className="container">
        <div className="gallery-header">
          <h3 className="gallery-title">InnerDialogue & Constellation Work</h3>
          <button className="gallery-view-all-btn">
            View All
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="gallery-slider-wrapper">
          <button className="gallery-nav-btn gallery-nav-prev" onClick={prevSlide} aria-label="Previous image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="gallery-slider">
            <div className="gallery-slider-track">
              {galleryImages.map((image, index) => {
                const offset = index - currentIndex;
                const isActive = index === currentIndex;
                return (
                  <div 
                    key={image.id} 
                    className={`gallery-slide ${isActive ? 'active' : ''}`}
                    style={{ 
                      transform: `translateX(${offset * 180}px) scale(${isActive ? 1 : 0.9})`,
                      zIndex: galleryImages.length - Math.abs(offset),
                      opacity: Math.abs(offset) > 2 ? 0 : 1
                    }}
                  >
                    <img src={image.src} alt={image.alt} className="gallery-image" />
                  </div>
                );
              })}
            </div>
          </div>

          <button className="gallery-nav-btn gallery-nav-next" onClick={nextSlide} aria-label="Next image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="gallery-dots">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;

