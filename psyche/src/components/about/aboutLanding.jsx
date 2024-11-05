// src/components/about/aboutLanding.jsx
import React from 'react';
import aboutBg from '../../assets/aboutbg.png'; // Correct path to your image
import ourstory_1 from '../../assets/ourstory_1.png';
import ourstory_2 from '../../assets/ourstory_2.png';

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

const OurStory = () => {
    return (
        // Main container for a side-by-side layout
        <div className="flex flex-row justify-center items-start w-screen bg-[#f8f6f3] py-[7vw] px-[13vw] gap-[1vw]">

            {/* Left section with the title and images */}
            <div className="flex flex-col w-[40vw] gap-[2vw]">

                {/* Row with title and first image */}
                <div className="flex flex-row items-start gap-[2.6vw]">
                    {/* Title "Our Story" */}
                    <div>
                        <h1 className="text-[3.5vw] font-bold text-[#745343] font-merriweather mb-[-1vw]">Our</h1>
                        <h1 className="text-[4.5vw] font-bold text-[#745343] font-merriweather">Story</h1>
                    </div>
                    {/* First Image */}
                    <div className="">
                        <img src={ourstory_1} alt="Story Image 1" className="rounded-[2vw] w-[15vw] h-auto" />
                    </div>
                </div>

                {/* Second Image */}
                <div className="">
                    <img src={ourstory_2} alt="Story Image 2" className="rounded-[2vw] w-[30vw] h-auto" />
                </div>
            </div>

            {/* Right section for text content */}
            <div className="w-[50vw] h-[38vw] p-[5vw] bg-[#DDBEA9] rounded-[2vw] text-justify ">
                <p className="text-[1.25vw] text-[#71432B] leading-relaxed italic font-merriweather">
                    “Founded in [Year], Psyche was established to address the growing need for compassionate, accessible mental health care.Over the years, we have expanded our services from individual consultations to community-wide awareness programs,always guided by a commitment to empathy and excellence.
                </p>
                <p className="text-[1.25vw] text-[#71432B] leading-relaxed italic font-merriweather mt-[1vw]">
                    Our journey began when our founder[Founder's Name], recognized a lack of accessible mental health resources in the community. Driven by the goal of creating an inclusive mental health resource, Psyche was born, aiming to offer professional psychiatric support and foster a more open conversation around mental health.”
                </p>
            </div>
        </div>
    );
};

export { AboutLanding, OurStory };

