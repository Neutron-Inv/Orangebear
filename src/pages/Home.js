import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Mission from '../components/Mission';
import LogoCarousel from '../components/LogoCarousel';
import React from 'react';

function Home() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Services />
    <Contact />
    <Mission />
    <LogoCarousel />
      <Footer />
    </div>
  );
}

export default Home;