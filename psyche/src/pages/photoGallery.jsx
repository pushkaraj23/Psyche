import React from 'react'
import testImg from '../assets/test.png'


const GalleryImage = ({ imageUrl, text }) => {
  return (
    <>
    <div className="relative w-[23vw] h-[50vh] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6B7775]/75 z-10" />
      <img 
        className="w-full h-full object-cover rounded-lg shadow-md z-0" 
        src={imageUrl} 
        alt="Gallery" 
      />
      {/* Overlay Text and Button */}
      <div className="absolute bottom-2 left-4 p-4 z-20">
        <h2 className="text-white text-md font-medium font-merriweather ">{text}</h2>
        <button className="mt-2 bg-transparent border border-white text-white px-6 py-2 rounded-lg shadow hover:bg-white hover:text-[#6B7775] transition-colors duration-300 text-xs">
          Open 
        </button>
      </div>

    </div>
    </>
  );
};


const PhotoGallery = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#6B7775] overflow-hidden relative">
      <div className="flex flex-col items-start justify-start ml-[10vw] mt-[10vh]">
        <h1 className="text-white text-[6vw] sm:text-[4vw] lg:text-[2.5vw] font-merriweather font-bold">
          Photo Gallery
        </h1>
        <p className="text-white/50 text-[4vw] sm:text-[2.5vw] lg:text-[1.3vw] font-merriweather mt-[1vw]">
        Dive visually into the glimpses of our fun environment
        </p>
      </div>
      <div className="flex flex-wrap justify-start ml-[10vw] mt-[5vh] gap-[6vw]">
        <GalleryImage  imageUrl={testImg} text={'Mindful living Techniques to Manage Stress '} />
        <GalleryImage  imageUrl={testImg} text={'Mindful living Techniques to Manage Stress '} />
        <GalleryImage  imageUrl={testImg} text={'Mindful living Techniques to Manage Stress '} />

        {/* You can add more <GalleryImage /> components here */}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-transparent border border-white text-white w-[14vw] h-[10vh] shadow hover:bg-white hover:text-[#6B7775] transition-colors duration-300 text-xs">
          View More
        </button>
      </div>
    </div>
  )
}

export default PhotoGallery
