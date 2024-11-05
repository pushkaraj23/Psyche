import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="w-full h-[100vh] bg-[#5f7d7d] flex items-center justify-center">
      <div className="w-[80vw] h-[60vh] flex">
        {/* Left Image */}
        <div className="w-[50%] h-full">
          <img 
            src="/src/image/image.welcome.png" 
            alt="Holding hands" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Content */}
        <div className="w-[50%] h-full flex flex-col justify-center pl-8">
          <h1 className="text-4xl font-merriweather text-white mb-4">
            Welcome to Psyche
          </h1>
          <p className="text-lg font-poppins text-white mb-6">
            At Psyche, we believe in the power of mental well-being. Our team of experienced 
            psychiatrists and mental health professionals is dedicated to providing personalized care, 
            helping individuals and communities overcome mental health challenges. Whether you’re 
            seeking professional consultation or looking to engage in awareness programs, we are here 
            to support your journey toward a healthier mind.
          </p>
          <button className="border-2 border-white text-white font-poppins py-2 px-6">
            Discover Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;