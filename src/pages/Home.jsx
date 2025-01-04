import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <Contact />
    </>
  );
}

export default Home;