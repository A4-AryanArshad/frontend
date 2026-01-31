import React from 'react';
import './BookLaunchSection.css';

const BookLaunchSection = () => {
  const bookPoints = [
    {
      number: '01',
      title: 'Through Silence',
      description: 'Explore the power of inner stillness and how silence becomes a gateway to deeper understanding and healing. Learn to listen to the body\'s wisdom when the mind grows quiet.'
    },
    {
      number: '02',
      title: 'The Body Remembers',
      description: 'Discover how trauma, patterns, and ancestral wisdom are held in the body and nervous system. Understand how somatic awareness leads to true integration and lasting transformation.'
    },
    {
      number: '03',
      title: 'Through Cards',
      description: 'Experience intuitive guidance through symbolic imagery and constellation practices. Learn to read the deeper patterns and dynamics that shape your healing journey.'
    }
  ];

  return (
    <section className="book-section" id="book">
      <div className="container">
        <div className="book-content">
          <div className="book-text">
            <h2 className="book-heading">Pamela Shore – Your Intuitive Healing Guide</h2>
            <p className="book-intro">
              Many of us move through life with a quiet sense that something is &quot;off.&quot;
              <em>Spiritual Dealer</em> is Pamela Shore&apos;s personal journey through alternative and metaphysical healing — an honest, grounded exploration of what worked, what didn&apos;t, and what ultimately led to real transformation.
            </p>
            <div className="book-points-list">
              {bookPoints.map((point, index) => (
                <div key={index} className="book-point-item">
                  <div className="book-point-number">{point.number}</div>
                  <div className="book-point-content">
                    <h3 className="book-point-title">{point.title}</h3>
                    <p className="book-point-description">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="book-cover-wrapper">
            <div className="book-cover-container">
              <img
                src="/Picture.png"
                alt="Spiritual Dealer book cover by Pamela Shore"
                className="book-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookLaunchSection;

