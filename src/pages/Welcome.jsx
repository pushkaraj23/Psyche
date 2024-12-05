import React from 'react';
import Welcome from "../assets/welcome.png"

const WelcomeSection = () => {
  return (
    <section className="w-full h-[100vh] bg-[#F4F1EC] flex md:items-center justify-center p-[10vw] md:p-[5vw]">
      <div className="w-[85vw] h-[100vw] md:h-[43vw] flex flex-col md:flex-row">
        {/* Left Image */}
        <div className="w-full md:w-[50vw] h-full md:h-full p-[3vw] md:pr-[5vw]">
          <img
            src={Welcome}
            alt="Holding hands"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[50vw] md:h-full flex flex-col justify-center pl-0 md:pl-[5vw] mt-[4vw] md:mt-0">
          <h1 className="text-[6.7vw] md:text-[3.5vw] font-extrabold font-merriweather text-black mb-[3.5vw] md:mb-[1vw] text-center md:text-left">
            Welcome to Psyche
          </h1>
          <p className="text-[4.2vw] md:text-[1.5vw] font-merriweather text-black mb-[4vw] md:mb-6 text-center md:text-left">
            At Psyche, we believe in the power of mental well-being. Our team of experienced
            psychiatrists and mental health professionals is dedicated to providing personalized care,
            helping individuals and communities overcome mental health challenges. Whether you’re
            seeking professional consultation or looking to engage in awareness programs, we are here
            to support your journey toward a healthier mind.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="border-2 border-black text-black text-[4vw] md:text-[1.3vw] font-merriweather w-[60vw] md:w-[25vw] py-[3.7vw] md:py-[1.4vw]">
              Discover Our Services
            </button>
          </div>
        </div>
      </div>
    </section>

  );
};

export default WelcomeSection;