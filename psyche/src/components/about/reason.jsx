import React from "react";

const Reason = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-100  flex flex-col justify-start items-center px-[6vw] py-[4vh]">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-merriweather text-[#ABAD7C] mb-[5vh] text-center">
        Why Choose Psyche?
      </h1>
      
      <div className="w-full max-w-[95vw] sm:max-w-[85vw] lg:max-w-[70vw] bg-[#ABAD7C] px-[6vw] py-[4.5vw] rounded-3xl shadow-lg border-[0.75vw] border-[#d8ccb4] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-[5vw] bg-white rounded-[50px] shadow-lg text-center">
            <h2 className="text-xl sm:text-2xl font-bold font-merriweather mb-3 italic font-extrabold">
              Experienced Professionals
            </h2>
            <p className="text-gray-700 font-merriweather text-sm sm:text-base">
              Our team of licensed psychiatrists, therapists, and counselors is dedicated to helping you achieve mental wellness.
            </p>
          </div>

          <div className="p-[5vw] bg-white rounded-[50px] shadow-lg text-center">
            <h2 className="text-xl sm:text-2xl font-bold font-merriweather mb-3 italic font-extrabold">
              Personalized Approach
            </h2>
            <p className="text-gray-700 font-merriweather text-sm sm:text-base">
              We provide individualized treatment plans tailored to each client's unique needs.
            </p>
          </div>

          <div className="p-[5vw] bg-white rounded-[50px] shadow-lg text-center">
            <h2 className="text-xl sm:text-2xl font-bold font-merriweather mb-3 italic font-extrabold">
              Comprehensive Services
            </h2>
            <p className="text-gray-700 font-merriweather text-sm sm:text-base">
              From consultations to workshops, we cover all aspects of mental well-being, ensuring holistic support.
            </p>
          </div>

          <div className="p-[5vw] bg-white rounded-[50px] shadow-lg text-center">
            <h2 className="text-xl sm:text-2xl font-bold font-merriweather mb-3 italic font-extrabold">
              Confidential & Compassionate Care
            </h2>
            <p className="text-gray-700 font-merriweather text-sm sm:text-base">
              At Psyche, we prioritize your privacy and offer a supportive, non-judgmental environment for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
