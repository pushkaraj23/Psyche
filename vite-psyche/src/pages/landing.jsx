import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/image.png')" }}
    >
      <div className="absolute inset-0 bg-[#e0f7ef] opacity-70"></div>

      <div className="relative h-screen flex flex-col justify-center  text-left text-[#3F6F67] font-merriweather p-6 md:p-20 space-y-4 md:space-y-6 ">
        <h1 className="text-4xl md:text-7xl font-bold flex flex-col text-left ">
          Promoting Mental Well-being <span>One Mind at a Time</span>
        </h1>
        <p className="text-lg md:text-xl max-w-lg ">
          Expert Psychiatry Consultations and Mental <br />
          <span> Health Awareness Programs.</span>
          <button className="items-center text-[#3F6F67] hover:underline gap-1 ml-2 group">
            <div className="flex flex-row items-center gap-2">
              <span className="text-lg font-bold">Learn More</span>
              <FaArrowRightLong className="text-sm transition-transform duration-300 ease-in-out group-[hover]:rotate-45" />
            </div>
          </button>
        </p>
        <button className="bg-[#2f4f4f] text-white font-semibold italic px-6 py-3 w-60 rounded-md hover:bg-opacity-90">
          Book a consultation
        </button>
      </div>
    </div>
  );
};

export default Landing;
