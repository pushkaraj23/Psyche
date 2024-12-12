import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import Logo from "/assets/logo-blue.svg";

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
      <Link
        to="/"
        className="font-merriweather text-[3vh] font-semibold text-[#3F6F67] flex gap-4 items-center max-sm:text-[2.4vh]"
      >
        <img src={Logo} alt="logo" className="h-[7vh]" />
        The Psyche Project
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
          className="font-merriweather text-[1.8vh] text-[#3F6F67] transition-all duration-200 group mt-1"
        >
          Home
          <div className="w-0 group-hover:w-full bg-[#3F6F67] h-[1px] duration-200" />
        </Link>
        <Link
          to="/about"
          className="font-merriweather text-[1.8vh] text-[#3F6F67] transition-all duration-200 group mt-1"
        >
          About
          <div className="w-0 group-hover:w-full bg-[#3F6F67] h-[1px] duration-200" />
        </Link>
        <Link
          to="/services"
          className="font-merriweather text-[1.8vh] text-[#3F6F67] transition-all duration-200 group mt-1"
        >
          Services
          <div className="w-0 group-hover:w-full bg-[#3F6F67] h-[1px] duration-200" />
        </Link>
        <Link
          to="/awareness"
          className="font-merriweather text-[1.8vh] text-[#3F6F67] transition-all duration-200 group mt-1"
        >
          Awareness Programs
          <div className="w-0 group-hover:w-full bg-[#3F6F67] h-[1px] duration-200" />
        </Link>
        <Link
          to="/contact"
          className="font-merriweather text-[1.6vh] text-white bg-[#3F6F67] px-[2vw] py-[1.7vh] italic font-light rounded-md 
            hover:bg-[#3F6F67]/90 transition-colors"
        >
          Contact Us
        </Link>
        <div
          className={`flex-col transition-all duration-200 overflow-x-hidden ${
            menuOpen ? "h-auto flex" : "h-0 hidden"
          } items-center absolute top-[10vh] left-0 w-full bg-[#F4F1EC] py-[2vh]`}
        >
          <Link
            to="/"
            className="font-merriweather text-[1.8vh] text-[#3F6F67] hover:text-white hover:bg-[#3F6F67]/80 w-full transition-colors py-2 text-center"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-merriweather text-[1.8vh] text-[#3F6F67] hover:text-white hover:bg-[#3F6F67]/80 w-full transition-colors py-2 text-center"
          >
            About
          </Link>
          <Link
            to="/services"
            className="font-merriweather text-[1.8vh] text-[#3F6F67] hover:text-white hover:bg-[#3F6F67]/80 w-full transition-colors py-2 text-center"
          >
            Services
          </Link>
          <Link
            to="/awareness"
            className="font-merriweather text-[1.8vh] text-[#3F6F67] hover:text-white hover:bg-[#3F6F67]/80 w-full transition-colors py-2 text-center"
          >
            Awareness Programs
          </Link>
          <Link
            to="/contact"
            className="font-merriweather text-[1.8vh] text-white bg-[#3F6F67] px-[2vw] py-[1vh] m-2 rounded-md 
        hover:bg-[#3F6F67]/90 transition-colors text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
    </nav>
  );
};

export default Navbar;
