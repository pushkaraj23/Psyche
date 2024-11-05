// src/components/about/aboutLanding.jsx
import React from 'react';
import aboutBg from '../../assets/aboutbg.png'; // Correct path to your image

const AboutLanding = () => {
    return (
        <div className="h-screen flex flex-col items-center bg-gray-100 py-[7.5vw]">
            {/* Page Title */}
            <h1 className="text-[3vw] font-bold text-[#3F6F67] mb-[1vw]">About Psyche</h1>

            {/* Content Container */}
            <div className="relative rounded-[4vw] overflow-hidden w-[60vw] h-[95vw]">
                {/* Background Image */}
                <img
                    src={aboutBg}
                    alt="Scenic background"
                    className="w-full h-[25vw] object-cover"
                />

                {/* Blurred Teal Section */}
                <div className="absolute bottom-0 left-0 w-full h-[13vw] bg-[#3F6F67]/60 backdrop-blur rounded-[4vw]"></div>

                {/* Two-Column Text Content */}
                <div className="absolute bottom-0 w-full py-[1.5vw] px-[1.5vw] text-white flex">
                    {/* Column 1: Heading */}
                    <div className="w-[45%] pr-[1vw] text-center py-[2vw]">
                        <h2 className="text-[2.3vw] font-semibold font-merriweather">
                            Empowering Minds, Building Resilience.
                        </h2>
                    </div>

                    {/* Column 2: Passage */}
                    <div className="w-[55%] text-start">
                        <p className="text-[1vw] font-merriweather pt-[2.3vw]">
                            Psyche is committed to enhancing mental health awareness and providing compassionate,
                            professional psychiatric care. Learn more about our journey, values, and the team behind our mission.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutLanding;

