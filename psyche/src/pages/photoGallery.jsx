import React from "react";
import testImg from "../assets/test.png";

const GalleryImage = ({ imageUrl, text }) => {
  return (
    <div className="relative w-[80vw] h-[40vh] sm:w-[45vw] md:w-[30vw] lg:w-[23vw] lg:h-[50vh] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6B7775]/75 z-10" />
      <img
        className="w-full h-full object-cover rounded-lg shadow-md z-0"
        src={imageUrl}
        alt="Gallery"
      />
      {/* Overlay Text and Button */}
      <div className="absolute bottom-2 left-4 p-4 z-20">
        <h2 className="text-white text-sm md:text-md font-medium font-merriweather">
          {text}
        </h2>
        <button className="mt-2 bg-transparent border border-white text-white px-4 py-2 md:px-6 md:py-2 rounded-lg shadow hover:bg-white hover:text-[#6B7775] transition-colors duration-300 text-xs">
          Open
        </button>
      </div>
    </div>
  );
};

const PhotoGallery = () => {
  return (
    <div className="w-full h-full min-h-screen bg-[#6B7775] overflow-hidden relative">
      <div className="flex flex-col items-start justify-start px-5 sm:px-[10vw] py-[5vh] sm:py-[10vh]">
        <h1 className="text-white text-[6vw] sm:text-[4vw] md:text-[2.5vw] font-merriweather font-bold">
          Photo Gallery
        </h1>
        <p className="text-white/50 text-[4vw] sm:text-[2.5vw] md:text-[1.3vw] font-merriweather mt-2 sm:mt-[1vw]">
          Dive visually into the glimpses of our fun environment
        </p>
      </div>

      <div className="flex flex-wrap justify-start gap-[5vw] px-5 sm:ml-[10vw] mt-[5vh]">
        <GalleryImage
          imageUrl={testImg}
          text="Mindful living Techniques to Manage Stress"
        />
        <GalleryImage
          imageUrl={testImg}
          text="Mindful living Techniques to Manage Stress"
        />
        <GalleryImage
          imageUrl={testImg}
          text="Mindful living Techniques to Manage Stress"
        />

        {/* You can add more <GalleryImage /> components here */}
      </div>

      <div className="flex justify-center mt-10 pb-20">
        <button className="bg-transparent border border-white text-white w-[40vw] sm:w-[25vw] md:w-[18vw] lg:w-[14vw] h-[8vh] sm:h-[10vh] shadow hover:bg-white hover:text-[#6B7775] transition-colors duration-300 text-xs sm:text-sm">
          View More
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
