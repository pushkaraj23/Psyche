import React, { useState } from "react";
import testImg from "/assets/test.png"; // Default image for cards
import test2 from "/assets/test2.png"; // New image for the popup

const GalleryImage = ({ imageUrl, text, onOpen }) => {
  return (
    <div className="relative w-[80vw] lg:w-[23vw] overflow-hidden">
      {/* Card Container */}
      <div className="relative w-full h-[40vh] lg:h-[55vh]">
        {/* Image with Rounded Corners */}
        <img
          className="w-full h-full object-cover rounded-[3vw] lg:rounded-[1.5vw] rounded-b-[1vw] lg:rounded-b-[0.5vw]"
          src={imageUrl}
          alt="Gallery"
        />
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6B7775] rounded-[2vw] rounded-b-[0.5vw]" />

        {/* Content */}
        <div className="absolute bottom-[2vw] left-[1vw] p-[1.3vw] lg:px-[1.3vw] lg:py-[0vw] ">
          <h2 className="text-white text-xl lg:text-[1.45vw]  font-medium font-merriweather">
            {text}
          </h2>
          <button
            className="italic mt-[1vw] bg-transparent border border-white text-white px-4 py-2 lg:px-[2vw] rounded-lg shadow hover:bg-white hover:text-[#6B7775] transition-colors duration-300 text-xs"
            onClick={onOpen} // Trigger the modal on button click
          >
            Open
          </button>
        </div>
      </div>

      {/* Dark Bottom Border */}
      <div className="w-full h-[2vw] lg:h-[1vw] bg-[#ffffff] rounded-b-[3vw] lg:rounded-b-[2vw] shadow-xl"></div>
    </div>
  );
};

const Modal = ({ activeCard, images, onClose, onNext, onPrev }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 backdrop-blur-[0.15vw] bg-gradient-to-br from-[rgba(255,255,255,0.56)] to-[rgba(0,0,0,0.92)]"></div>

      <div className="relative bg-black bg-opacity-75 rounded-[4vw] lg:rounded-[1.5vw] p-[10vw] lg:p-[5vw] w-[95vw] h-[95vh] flex flex-col">
        {/* Close Button */}
        <button
          className="absolute top-[4vw] lg:top-[1vw] right-[4vw] lg:right-[2vw] text-white lg:text-[2vw] font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Top Section (Heading and Image Row) */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:pl-[6vw]">
          {/* Heading (Left Side) */}
          <div className="lg:w-[30vw] lg:mr-[4vw]">
            <h2 className="text-[8vw] lg:text-[3.5vw] font-bold text-left text-white font-merriweather py-[5vw]">
              {images[activeCard].text}
            </h2>
          </div>

          {/* Image and Navigation Section */}
          <div className="relative flex flex-col items-center justify-center w-full lg:w-[50vw]">
            {/* Image */}
            <img
              src={test2} // Always use test2 for all popups
              alt="Gallery Modal"
              className="w-[70vw] lg:w-[35vw] lg:h-[25vw] h-[80vw] object-cover rounded-[3vw] mb-[3vw] lg:mb-[-2vw] lg:ml-[3vw]"
            />

            {/* Navigation Arrows (Below Image for Mobile, Inline for Laptop) */}
            <div className="flex justify-between items-center w-full lg:w-auto lg:absolute lg:top-1/2 lg:transform lg:-translate-y-1/2">
              {/* Left Arrow */}
              <button
                className="text-[7vw] mt-[3vw] lg:text-[3vw] font-bold text-white absolute left-[25vw] lg:absolute lg:left-[-19.5vw]"
                onClick={onPrev}
              >
                &lt;
              </button>

              {/* Right Arrow */}
              <button
                className="text-[7vw] mt-[3vw] lg:text-[3vw] font-bold text-white absolute lg:absolute right-[25vw] lg:left-[20vw]"
                onClick={onNext}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section (Description Text) */}
        <div className="mt-[8vw] lg:mt-[7vw] px-[1vw] lg:px-[2.5vw]">
          <p className="text-white text-[4vw] lg:text-[1.5vw] italic text-start">
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
    { imageUrl: testImg, text: "Mindful living Techniques to Manage Stress" },
    { imageUrl: testImg, text: "Mindful living Techniques to Manage Stress" },
    { imageUrl: testImg, text: "Mindful living Techniques to Manage Stress" },
    { imageUrl: testImg, text: "Mindful living Techniques to Manage Stress" },
    { imageUrl: testImg, text: "Mindful living Techniques to Manage Stress" },
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
      <div className="flex flex-col lg:flex-row items-center px-[10vw] lg:px-[10vw] mt-[10vh] lg:mt-[4vw]">
        <h1 className="text-[#6B7775] font-bold text-[9vw] text-start lg:text-[2.5vw] font-merriweather pr-[18.5vw] lg:px-[2vw]">
          Photo Gallery
        </h1>
        <p className="text-[#6B7775] text-[4vw] text-left lg:text-[1.3vw] font-merriweather lg:mt-[1vw]">
          Dive visually into the glimpses of our fun environment
        </p>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-center gap-[10vw] lg:gap-[3vw] px-5 mt-[4vh] lg:mt-[4vw]">
        {visibleImages.map((image, index) => (
          <GalleryImage
            key={index}
            imageUrl={image.imageUrl}
            text={image.text}
            onOpen={() => openModal(index)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-[10vw] lg:mt-[3.5vw] pb-12 sm:pb-[5vw]">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="bg-transparent border border-black text-black w-[45vw] h-[15vw] lg:w-[15vw] lg:h-[8vh] shadow hover:bg-black hover:text-white transition-colors duration-300 text-[5vw] lg:text-[1.3vw]"
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

