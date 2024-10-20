import React from 'react';
import HeroSection from '../components/HeroSection'; // Ensure the path is correct
 // Ensure the path is correct
import Qualities from '../components/Qualities'; // Ensure the path is correct
import Menu from '../components/Menu'; // Ensure the path is correct
import WhoAreWe from '../components/WhoAreWe'; // Ensure the path is correct
import Team from '../components/Team'; // Ensure the path is correct
import Reservation from '../components/Reservation'; // Ensure the path is correct
import Footer from '../components/Footer'; // Ensure the path is correct
import About from '../components/About.';

const Home = () => {
  return (
    <>
      <HeroSection />
     <About/>
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservation />
      <Footer />
    </>
  );
};

export default Home;
