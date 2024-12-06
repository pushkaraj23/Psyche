import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-[100vw] left-0 h-[10vh] border-b border-[#3F6F67] flex items-center justify-between px-[5vw] transition-all duration-300 z-50 
        ${scrolled ? "bg-white/60 backdrop-blur-md" : "bg-transparent"}
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Link to="/" className="font-merriweather text-[2.5vh] text-[#3F6F67]">
        Psyche.
      </Link>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-[#3F6F67] focus:outline-none"
        >
          {menuOpen ? (
            <span className="text-2xl">
              <IoIosClose />
            </span>
          ) : (
            <span className="text-2xl">
              <FiMenu />
            </span>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-[3vw]">
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center absolute top-[10vh] left-0 w-full bg-[#F4F1EC] md:hidden py-[2vh]">
          <Link
            to="/"
            className="font-poppins text-[1.8vh] text-[#3F6F67] hover:text-white hover:bg-[#3F6F67]/80 w-full transition-colors py-2 text-center"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-poppins text-[1.8vh] text-[#3F6F67] hover:text-white hover:bg-[#3F6F67]/80 w-full transition-colors py-2 text-center"
          >
            About
          </Link>
          <Link
            to="/services"
            className="font-poppins text-[1.8vh] text-[#3F6F67] hover:text-white hover:bg-[#3F6F67]/80 w-full transition-colors py-2 text-center"
          >
            Services
          </Link>
          <Link
            to="/awareness"
            className="font-poppins text-[1.8vh] text-[#3F6F67] hover:text-white hover:bg-[#3F6F67]/80 w-full transition-colors py-2 text-center"
          >
            Awareness Programs
          </Link>
          <Link
            to="/contact"
            className="font-poppins text-[1.8vh] text-white bg-[#3F6F67] px-[2vw] py-[1vh] m-2 rounded-md 
        hover:bg-[#3F6F67]/90 transition-colors text-center"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
