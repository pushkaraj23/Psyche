import React from "react";

const Manifesto = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-100  flex flex-col justify-center items-center px-[5vw] py-[5vh]">
      <div className="w-full max-w-[600px] sm:max-w-[50vw] p-[5vw] sm:p-[4vw] text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#745343] font-merriweather mb-[2vh]">
          Our Mission
        </h2>
        <p className="text-base sm:text-lg italic text-[#745343]">
          “Our mission at Psyche is to break down the stigma surrounding mental
          health and provide accessible, high-quality mental health care to
          individuals and communities. We aim to foster a society where mental
          well-being is prioritized, and every individual feels empowered to
          seek support.”
        </p>
      </div>
      <div className="w-full max-w-[600px] sm:max-w-[50vw] p-[5vw] sm:p-[4vw] text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold font-merriweather text-[#745343] mb-[3vh]">
          Our Vision
        </h2>
        <p className="text-base sm:text-lg italic text-[#745343]">
          "Our vision is to create a mentally healthy world where everyone has
          the tools and resources they need to thrive. We strive to be a trusted
          leader in mental health care and awareness, bridging gaps between care
          and understanding."
        </p>
      </div>
    </div>
  );
};

export default Manifesto;