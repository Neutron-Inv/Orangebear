import React, { useState, useEffect } from 'react';
import '../index.css';
// Import your images
import Circum from "../images/circum.png";
import Fdigi from "../images/fdigi.png";
import Pine from "../images/pinetrips.png";
import Whizdom from "../images/we.png";
import Jev from "../images/jev.png";
import Suburban from "../images/suburban.png";

const LogoCarousel = () => {
    const images = [Whizdom, Circum, Fdigi, Suburban, Pine, Jev];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          setFade(true);
        }, 1000); // Duration of the fade-out effect
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);
  
    return (
      <div className="flex items-center justify-center w-full bg-gray-300 h-44">
        <img
          src={images[currentIndex]}
          alt="Logo"
          className={`h-32 object-contain ${fade ? 'fade' : 'hidden'} blend-overlay`}
        />
      </div>
    );
  };
  
  export default LogoCarousel;