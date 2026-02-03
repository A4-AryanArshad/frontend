import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import './BookPage.css';

const BookPage = () => {
  const sessions = [
    {
      name: 'Gyrotonic® or Pilates Session',
      tagline: 'Fluid, intentional movement sessions.',
      description:
        'Fluid, intentional movement sessions focused on nervous-system regulation, strength, mobility, and embodied awareness.',
      format: 'In person'
    },
    {
      name: 'InnerDialogue™ Session',
      tagline: 'Clarity through deep listening.',
      description:
        'A non-directive process that works beneath conscious thought to reveal and integrate internal patterns influencing perception, behavior, and direction.',
      format: 'Live or Zoom'
    },
    {
      name: 'BeingHuman Constellation Card Reading',
      tagline: 'Seeing the pattern you are living inside of.',
      description:
        'A structured process using cards to reveal patterns, emotional states, and higher-orientation insights.',
      format: 'Live or Zoom'
    },
    {
      name: 'Integrated Neuro-Somatic & Movement Session',
      tagline: 'Where insight becomes embodied change.',
      description:
        'A holistic session combining movement, nervous-system awareness, and pattern recognition to support deeper change.',
      format: 'Live / In person only'
    }
  ];

  return (
    <div className="App" id="top">
      <HeaderNav />
      
      {/* Hero Section */}
      <section className="book-hero">
        <div className="book-hero-gradient" />
        <div className="container">
          <div className="book-hero-content">
            <h1 className="book-hero-title">Spiritual Dealer</h1>
            <p className="book-hero-subtitle">
              A personal journey through alternative and metaphysical healing — and the story that inspired a community.
            </p>
            <p className="book-hero-author">
              When traditional paths fail to bring relief, a different kind of healing journey begins.
            </p>
          </div>
        </div>
      </section>

      {/* About the Author (Short) */}
      <section className="book-about-pamela">
        <div className="container">
          <div className="book-about-content">
            <div className="book-about-image-wrapper">
              <img
                src="/Founder.jpeg"
                alt="Pamela Shore"
                className="book-about-image"
              />
            </div>
            <div className="book-about-text">
              <h2 className="book-section-title">About the Author</h2>
              <p>
                <em>Spiritual Dealer</em> is written by Pamela Shore, a practitioner and healer whose own journey through pain,
                grief, and unanswered questions led her beyond conventional approaches.
              </p>
              <p>
                This book is not theory. It is lived experience — a story shaped by searching, surrender, and discovering
                unexpected paths to healing.
              </p>
              <div className="book-about-link">
                <Link to="/pamelashore" className="book-author-button">
                  Visit Pamela Shore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Book Section */}
      <section className="book-about-book">
        <div className="book-section-gradient" />
        <div className="container">
          <div className="book-about-book-content">
            <h2 className="book-section-title">About the Book</h2>
            <div className="book-cover-wrapper">
              <img
                src="/Rbook.png"
                alt="Spiritual Dealer book cover by Pamela Shore"
                className="book-cover-image"
              />
            </div>
            <div className="book-about-text-content">
              <p className="book-intro-large">
                Many of us move through life with a quiet sense that something is &quot;off.&quot;
              </p>
              <p>
                It may appear as physical pain no doctor can fully explain, emotional weight that never seems to lift, or a
                feeling of disconnection even when surrounded by others. You try everything you&apos;re told should work —
                medication, therapy, self-help — yet something still feels unresolved.
              </p>
              <p>
                I know this place intimately. I&apos;ve lived it.
              </p>
              <p className="book-empowerment">
                When everything I tried seemed to fail, I turned toward alternative and metaphysical healing methods — not
                because I was searching for something magical, but because I was searching for truth. What I discovered opened
                a path I didn&apos;t believe was possible.
              </p>
              <p>
                In <em>Spiritual Dealer</em>, I share my personal journey through these healing modalities — what worked, what
                didn&apos;t, and what ultimately led to real transformation.
              </p>
              <p>
                This book is an honest exploration of surrender, self-inquiry, and the courage it takes to listen to the body,
                the nervous system, and the wisdom beneath conscious awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="book-story">
        <div className="container">
          <h2 className="book-section-title">The Journey</h2>
          <p className="book-story-intro">
            Healing is not a straight line.
          </p>
          <div className="book-journey-text">
            <p>
              The journey moves through uncertainty, resistance, grief, and eventually clarity. Along the way, I encountered
              gifted healers, intuitive practitioners, and alternative approaches that helped me reconnect with myself in ways
              traditional systems could not.
            </p>
            <p>
              There are no quick fixes here — only truth, presence, and the understanding that healing unfolds when we stop
              trying to force it and begin to listen.
            </p>
            <p>
              Step by step, this journey revealed something essential: We are not broken — we are remembering.
            </p>
          </div>
        </div>
      </section>

      {/* How Book Led to Spiritual Dealer */}
      <section className="book-to-community">
        <div className="book-section-gradient" />
        <div className="container">
          <div className="book-to-community-content">
            <h2 className="book-section-title">From Book to Community</h2>
            <div className="book-to-community-text">
              <p>
                Through this journey, I had the privilege of working with exceptional intuitive healers — individuals who helped
                me access my own healing and discover my unique gifts.
              </p>
              <p>
                That experience became the foundation for Spiritual Dealer.
              </p>
              <p>
                Spiritual Dealer was created as a community to support others on their healing journeys — bringing together many
                of the gifted practitioners who offered guidance, insight, and healing along my own path.
              </p>
              <p className="book-to-community-cta">
                This book is the doorway. The community is the continuation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sessions Section */}
      <section className="book-sessions">
        <div className="container">
          <h2 className="book-section-title">Sessions &amp; Offerings</h2>
          <p className="book-sessions-intro">
            For those who feel called to explore healing more deeply, sessions inspired by this work are available.
          </p>
          
          <div className="book-sessions-list">
            {sessions.map((session, index) => (
              <div key={index} className="book-session-item">
                <div className="book-session-header">
                  <h3 className="book-session-name">{session.name}</h3>
                  <span className="book-session-format">{session.format}</span>
                </div>
                <p className="book-session-tagline">{session.tagline}</p>
                <p className="book-session-description">{session.description}</p>
              </div>
            ))}
          </div>

          <div className="book-sessions-cta">
            <Link to="/booking" className="book-cta-button">
              Book a Session
            </Link>
            <Link to="/pamelashore" className="book-cta-button-secondary">
              Visit Pamela Shore
            </Link>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="book-closing">
        <div className="container">
          <div className="book-closing-inner">
            <p>
              Healing is not about fixing what is broken. It is about remembering who you are.
            </p>
            <p>
              There are no shortcuts — but the journey is possible, meaningful, and worth taking.
            </p>
            <p className="book-closing-emphasis">You are not alone.</p>
            <p className="book-closing-emphasis">And your healing is possible.</p>
          </div>

          <div className="book-footer-cta">
            <Link to="/" className="book-footer-link">
              Explore the Spiritual Dealer Community
            </Link>
            <Link to="/pamelashore" className="book-footer-link-secondary">
              Visit Pamela Shore
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookPage;


