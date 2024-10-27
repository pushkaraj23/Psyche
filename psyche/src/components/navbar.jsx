import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setScrolled(false);
        setShowNavbar(true);
      } else {
        setScrolled(true);
        if (currentScrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-screen h-[10vh] border-b border-[#3F6F67] flex items-center justify-between px-[5vw] transition-all duration-300 z-50 
        ${scrolled ? "bg-[#3F6F67]/20 backdrop-blur-md" : "bg-transparent"}
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Link to="/" className="font-merriweather text-[2.5vh] text-[#3F6F67]">
        Psyche.
      </Link>

      <div className="flex items-center gap-[3vw]">
        <Link
          to="/"
          className="font-poppins text-[1.8vh] text-[#3F6F67] hover:text-[#3F6F67]/80 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-poppins text-[1.8vh] text-[#3F6F67] hover:text-[#3F6F67]/80 transition-colors"
        >
          About
        </Link>
        <Link
          to="/services"
          className="font-poppins text-[1.8vh] text-[#3F6F67] hover:text-[#3F6F67]/80 transition-colors"
        >
          Services
        </Link>
        <Link
          to="/awareness"
          className="font-poppins text-[1.8vh] text-[#3F6F67] hover:text-[#3F6F67]/80 transition-colors"
        >
          Awareness Programs
        </Link>
        <Link
          to="/contact"
          className="font-poppins text-[1.8vh] text-white bg-[#3F6F67] px-[2vw] py-[1vh] rounded-md 
            hover:bg-[#3F6F67]/90 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
