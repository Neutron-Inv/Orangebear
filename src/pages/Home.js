import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import React from 'react';

function Home() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Services />
      <Footer />
    </div>
  );
}

export default Home;