import React, { useState } from "react";
import testImg from "../assets/test.png";

const GalleryImage = ({ imageUrl, text }) => {
  return (
    <div className="relative w-[80vw] h-[40vh] sm:w-[45vw] sm:h-[45vh] md:w-[30vw] md:h-[40vh] lg:w-[23vw] lg:h-[50vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6B7775]/75 z-10" />
      <img
        className="w-full h-full object-cover rounded-lg shadow-md z-0"
        src={imageUrl}
        alt="Gallery"
      />
      <div className="absolute bottom-2 left-4 p-4 z-20">
        <h2 className="text-white text-xl md:text-xl font-medium font-merriweather">
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
  const [showAll, setShowAll] = useState(false);

  const images = [
    { imageUrl: testImg, text: "Mindful living Techniques to Manage Stress" },
    { imageUrl: testImg, text: "Mindful living Techniques to Manage Stress" },
    { imageUrl: testImg, text: "Mindful living Techniques to Manage Stress" },
    { imageUrl: testImg, text: "Mindful living Techniques to Manage Stress" },
    { imageUrl: testImg, text: "Mindful living Techniques to Manage Stress" },
  ];

  const visibleImages = showAll ? images : images.slice(0, 3);

  return (
    <div className="w-full h-full min-h-screen bg-[#6B7775] overflow-hidden relative">
        <div className="flex flex-col items-center lg:items-start justify-start px-5 sm:px-[8vw] md:px-[10vw] mt-[10vh] sm:mt-[6vh] lg:mt-[8vh]">
          <h1 className="text-white text-[9vw] sm:text-[6vw] text-center md:text-[4vw] lg:text-[2.5vw] font-merriweather mt-2 sm:mt-[1vw]">
            Photo Gallery
          </h1>
          <p className="text-white/50 text-[4vw] sm:text-[3vw] text-center md:text-[2vw] lg:text-[1.3vw] font-merriweather mt-2 sm:mt-[1vw]">
            Dive visually into the glimpses of our fun environment
          </p>
        </div>
      <div className="flex flex-wrap justify-center lg:justify-start gap-[4vw] px-5 sm:px-[8vw] md:px-[10vw] mt-[4vh] sm:mt-[6vh]">
        {visibleImages.map((image, index) => (
          <GalleryImage key={index} imageUrl={image.imageUrl} text={image.text} />
        ))}
      </div>

      <div className="flex justify-center mt-8 sm:mt-10 pb-12 sm:pb-20">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="bg-transparent border border-white text-white w-[40vw] h-[10vw] sm:w-[30vw] sm:h-[8vh] md:w-[18vw] lg:w-[14vw] lg:h-[8vh] shadow hover:bg-white hover:text-[#6B7775] transition-colors duration-300 text-xs sm:text-sm"
        >
          {showAll ? "Show Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
