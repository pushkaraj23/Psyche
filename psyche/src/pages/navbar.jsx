import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-screen h-[10vh] flex items-center justify-between px-[5vw] transition-all duration-300 z-50 
      ${scrolled ? 'bg-sage-green/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <Link to="/" className="font-merriweather text-[2.5vh] text-sage-green">
        Psyche.
      </Link>
      
      <div className="flex items-center gap-[3vw]">
        <Link to="/" className="font-poppins text-[1.8vh] text-sage-green hover:text-sage-green/80 transition-colors">
          Home
        </Link>
        <Link to="/about" className="font-poppins text-[1.8vh] text-sage-green hover:text-sage-green/80 transition-colors">
          About
        </Link>
        <Link to="/services" className="font-poppins text-[1.8vh] text-sage-green hover:text-sage-green/80 transition-colors">
          Services
        </Link>
        <Link to="/awareness" className="font-poppins text-[1.8vh] text-sage-green hover:text-sage-green/80 transition-colors">
          Awareness Programs
        </Link>
        <Link to="/contact" 
          className="font-poppins text-[1.8vh] text-white bg-sage-green px-[2vw] py-[1vh] rounded-md 
            hover:bg-sage-green/90 transition-colors">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;