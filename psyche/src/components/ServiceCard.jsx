// src/components/ServiceCard.jsx

import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="w-full sm:w-[22vw] h-auto bg-white border border-[#d2d4a4] flex flex-col p-[3vw] justify-between items-center rounded-lg shadow-md">
      <img
        className="w-[50%] sm:w-[17.5vw] object-cover"
        src={props.imageUrl}
        alt={props.title}
      />
      <h3 className="w-full text-[#8D8F69] text-[3vw] sm:text-[1.31vw] font-bold font-merriweather text-center">
        {props.title}
      </h3>
      <p className="w-full text-[#8D8F69] text-[2.5vw] sm:text-[1vw] text-opacity-75 font-merriweather text-center">
        {props.description}
      </p>

      <a href={props.link} className="w-full">
        <button className="bg-[#8D8F69] italic p-[2.5%] text-[2.5vw] sm:text-[1vw] font-merriweather text-white rounded-sm hover:bg-white hover:text-[#8D8F69] border border-[#8D8F69] transition-colors duration-300 w-full text-center">
          Learn More →
        </button>
      </a>
    </div>
  );
};

export default ServiceCard;
