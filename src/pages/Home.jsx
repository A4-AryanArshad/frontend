import React from 'react';
import HeaderNav from '../components/HeaderNav';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ModalitiesSection from '../components/ModalitiesSection';
import ModalitiesWithImages from '../components/ModalitiesWithImages';
import BookLaunchSection from '../components/BookLaunchSection';
import FounderSection from '../components/FounderSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="App" id="top">
      <HeaderNav />
      <HeroSection />
      <ModalitiesSection />
      <AboutSection />
      <ModalitiesWithImages />
      <BookLaunchSection />
      <FounderSection />
      <Footer />
    </div>
  );
};

export default Home;



