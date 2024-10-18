// src/components/ServiceCard.jsx

import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="w-[24vw] h-[37vw] bg-white border border-[#d2d4a4] flex flex-col p-[3vw] justify-between items-center">
      <img className="w-[17.5vw]" src={props.imageUrl} alt={props.title} />

      <h3 className="w-[17.5vw] text-[#8D8F69] text-[1.35vw] font-bold font-merriweather">
        {props.title}
      </h3>
      <p
        className="w-[17.5vw] text-[#8D8F69] text-[1vw] text-opacity-75 font-merriweather"
      >
        {props.description}
      </p>

      <a href="https://www.youtube.com/" className="w-[17.5vw]">
        <button className="bg-[#8D8F69] italic p-[1vw] text-[1vw] font-merriweather text-white rounded-sm hover:bg-white hover:text-[#8D8F69] border border-[#8D8F69] transition-colors duration-300">
          Learn More →
        </button>
      </a>
    </div>
  );
};

export default ServiceCard;
