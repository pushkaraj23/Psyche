// this is a prop component to handle contact and join community simultaniously

import React from "react";
import PropTypes from "prop-types";

const ContactSection = ({ title, description, buttonText }) => {
  return (
    <div className="bg-[#F4F1EC] py-16 text-center px-4 md:px-8 lg:px-16">
      <h2 className="text-[#333] text-[6vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] font-bold font-merriweather mb-4">
        {title}
      </h2>
      <p className="text-[#555] font-merriweather text-[4vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.3vw] mb-8">
        {description}
      </p>
      <a href="/contact" className="inline-block">
        <button className="border border-[#333] text-[#333] font-semibold px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 hover:bg-[#333] hover:text-white transition-colors duration-300">
          {buttonText}
        </button>
      </a>
    </div>
  );
};

ContactSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ContactSection;
