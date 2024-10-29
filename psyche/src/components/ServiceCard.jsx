// src/components/ServiceCard.jsx

import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="w-full sm:w-[22vw] h-auto bg-white border border-[#d2d4a4] flex flex-col p-[6vw] sm:p-[3vw] justify-between items-center shadow-md">
      <img
        className="w-[95%] sm:w-[17.5vw] object-cover mb-[3vw] sm:mb-0"
        src={props.imageUrl}
        alt={props.title}
      />
      <h3 className="w-full text-[#8D8F69] text-[4vw] sm:text-[1.31vw] font-bold font-merriweather text-start">
        {props.title}
      </h3>
      <p className="w-full text-[#8D8F69] text-[3vw] sm:text-[1vw] text-opacity-75 font-merriweather text-start my-[2vw] sm:my-0">
        {props.description}
      </p>
      <button className="bg-[#8D8F69] italic py-[4%] px-4 text-[3vw] sm:text-[1vw] font-merriweather text-white rounded-sm hover:bg-white hover:text-[#8D8F69] border border-[#8D8F69] transition-colors duration-300 text-left self-start mt-[1vw]">
        <a href={props.link} className="flex justify-center">
          Learn More →
        </a>
      </button>
    </div>
  );
};

export default ServiceCard;

