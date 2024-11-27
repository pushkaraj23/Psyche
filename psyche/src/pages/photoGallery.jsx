import React, { useState } from "react";
import testImg from "../assets/test.png"; // Default image for cards
import test2 from "../assets/test2.png"; // New image for the popup

const GalleryImage = ({ imageUrl, text, onOpen }) => {
  return (
    <div className="relative w-[80vw] h-[40vh] sm:w-[45vw] sm:h-[45vh] md:w-[30vw] md:h-[40vh] lg:w-[23vw] lg:h-[50vh] overflow-hidden">
      {/* Image with Rounded Corners */}
      <img
        className="w-full h-full object-cover rounded-[2vw] shadow-md z-0"
        src={imageUrl}
        alt="Gallery"
      />
      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6B7775] z-10 rounded-[1.5vw]" />

      <div className="absolute bottom-2 left-4 p-4 z-20">
        <h2 className="text-white text-xl md:text-xl font-medium font-merriweather">
          {text}
        </h2>
        <button
          className="mt-2 bg-transparent border border-white text-white px-4 py-2 md:px-6 md:py-2 rounded-lg shadow hover:bg-white hover:text-[#6B7775] transition-colors duration-300 text-xs"
          onClick={onOpen} // Trigger the modal on button click
        >
          Open
        </button>
      </div>
    </div>


  );
};

const Modal = ({ activeCard, images, onClose, onNext, onPrev }) => {
  return (
    <div className="fixed inset-0 z-50  backdrop-blur-[0.2vw] flex justify-center items-center">
      <div className="relative bg-black bg-opacity-75 rounded-[4vw] p-[10vw] lg:p-[5vw] w-[95vw] h-[95vh] flex flex-col">
        {/* Close Button */}
        <button
          className="absolute top-[4vw] lg:top-[1vw] right-[4vw] lg:right-[2vw] text-white lg:text-[2vw] font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Top Section (Heading and Image Row) */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-[5vw]">
          {/* Heading (Left Side) */}
          <div className="lg:w-[30vw]">
            <h2 className=" text-[8vw] lg:text-[3.5vw] font-semibold text-left text-white font-merriweather py-[5vw]">
              {images[activeCard].text}
            </h2>
          </div>

          {/* Image and Navigation (Right Side) */}
          <div className="relative w-[40vw] h-full flex items-center justify-center ">
            {/* Navigation Arrow (Left) */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[3vw] font-bold text-white z-10"
              onClick={onPrev}
            >
              &lt;
            </button>

            {/* Image */}
            <img
              src={test2} // Always use test2 for all popups
              alt="Gallery Modal"
              className="w-[80%] h-auto object-cover rounded-[3vw]"
            />

            {/* Navigation Arrow (Right) */}
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[3vw] font-bold text-white z-10"
              onClick={onNext}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Bottom Section (Description Text) */}
        <div className="mt-[6vw] px-[5vw]">
          <p className="text-white text-[1.3vw] italic text-start">
            "Our mission at Psyche is to break down the stigma surrounding mental
            health and provide accessible, high-quality mental health care to
            individuals and communities. We aim to foster a society where mental
            well-being is prioritized, and every individual feels empowered to
            seek support."
          </p>
        </div>
      </div>
    </div>


  );
};

const PhotoGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  const images = [
    { imageUrl: testImg, text: "Mindful Techniques to Manage Stress" },
    { imageUrl: testImg, text: "Mindful Techniques to Manage Stress" },
    { imageUrl: testImg, text: "Mindful Techniques to Manage Stress" },
    { imageUrl: testImg, text: "Mindful Techniques to Manage Stress" },
    { imageUrl: testImg, text: "Mindful Techniques to Manage Stress" },
  ];

  const visibleImages = showAll ? images : images.slice(0, 3);

  // Handlers
  const openModal = (index) => {
    setActiveCard(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % images.length);
  };

  const prevCard = () => {
    setActiveCard((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full h-full bg-[#F4F1EC] overflow-hidden relative">
      <div className="flex flex-col lg:flex-row items-center px-[10vw] sm:px-[8vw] md:px-[10vw] mt-[10vh] sm:mt-[6vh] lg:mt-[8vh]">
        <h1 className="text-[#6B7775] font-bold text-[9vw] sm:text-[6vw] text-start md:text-[4vw] lg:text-[2.5vw] font-merriweather lg:px-[2vw]">
          Photo Gallery
        </h1>
        <p className="text-[#6B7775] text-[4vw] sm:text-[3vw] text-left md:text-[2vw] lg:text-[1.3vw] font-merriweather lg:mt-[1vw]">
          Dive visually into the glimpses of our fun environment
        </p>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-center gap-[10vw] lg:gap-[3vw] px-5 sm:px-[8vw] md:px-[10vw] mt-[4vh] sm:mt-[6vh]">
        {visibleImages.map((image, index) => (
          <GalleryImage
            key={index}
            imageUrl={image.imageUrl}
            text={image.text}
            onOpen={() => openModal(index)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-[10vw] sm:mt-10 pb-12 sm:pb-20">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="bg-transparent border border-black text-black w-[45vw] h-[15vw] sm:w-[30vw] sm:h-[8vh] md:w-[18vw] lg:w-[15vw] lg:h-[8vh] shadow hover:bg-black hover:text-white transition-colors duration-300 text-[5vw] lg:text-[1.3vw]"
        >
          {showAll ? "Show Less" : "View More"}
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          activeCard={activeCard}
          images={images}
          onClose={closeModal}
          onNext={nextCard}
          onPrev={prevCard}
        />
      )}
    </div>
  );
};

export default PhotoGallery;

