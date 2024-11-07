// src/components/about/aboutLanding.jsx
import React from 'react';
import aboutBg from '../../assets/aboutbg.png'; // Correct path to your image
import ourstory_1 from '../../assets/ourstory_1.png';
import ourstory_2 from '../../assets/ourstory_2.png';
import speechFrame from '../../assets/speech_frame.png';

const AboutLanding = () => {
    return (
        <div className="h-screen flex flex-col items-center w-screen py-[7vw]">
            {/* Page Title */}
            <h1 className="text-[6.5vw] p-[20vw] pb-[7vw] md:pt-[0vw] md:text-[3vw] font-bold text-[#3F6F67] md:pb-[2.5vw]">
                About Psyche
            </h1>

            {/* Content Container with Background Image and Blurred Overlay */}
            <div className="relative rounded-[17vw] md:rounded-[4vw] overflow-hidden w-[80vw] md:w-[85vw] h-[140vw] md:h-[100vw]">
                <img src={aboutBg} alt="Scenic background" className="w-full h-[90vw] md:h-[22vw] object-cover" />

                {/* Blurred Teal Section with Text */}
                <div className="absolute bottom-0 left-0 w-full h-[97vw] md:h-[13vw] p-[5vw] md:p-[2vw] bg-[#3F6F67]/60 backdrop-blur rounded-[17vw] md:rounded-[4vw] text-white flex flex-col md:flex-row justify-between items-center">
                    <h2 className="w-[60vw] md:w-[43vw] text-[7.5vw] md:text-[3vw] font-semibold font-merriweather p-[1vw] md:mb-0">
                        Empowering Minds, Building Resilience.
                    </h2>
                    <p className="w-[60vw] md:w-[58vw] text-[3.5vw] md:text-[1.4vw] font-merriweather text-start md:mt-[1vw] mb-[1vw]">
                        Psyche is committed to enhancing mental health awareness and providing compassionate,
                        professional psychiatric care. Learn more about our journey, values, and the team behind our mission.
                    </p>
                </div>
            </div>
        </div>
    );
};



const OurStory = () => {
    return (
        <div className="flex flex-col md:flex-row h-auto md:h-screen w-screen bg-[#f8f6f3] p-[10vw] md:py-[7vw] md:px-[13vw] gap-[5vw] md:gap-[0vw]">
            {/* Left section with title and images */}
            <div className="flex flex-col w-full md:w-[50vw] gap-[5vw] md:gap-[2vw]">
                {/* Title and first image row */}
                <div className="flex gap-[5vw] md:gap-[2.6vw]">
                    <div className="flex flex-col items-start">
                        <h1 className="text-[10vw] md:text-[3.5vw] font-bold text-[#745343] font-merriweather">Our</h1>
                        <h1 className="text-[12vw] md:text-[4.5vw] font-bold text-[#745343] font-merriweather">Story</h1>
                    </div>
                    <img src={ourstory_1} alt="Story Image 1" className="rounded-[3vw] w-[42vw] md:w-[15vw] h-auto" />
                </div>
                {/* Second image */}
                <img src={ourstory_2} alt="Story Image 2" className="rounded-[3vw] w-full md:w-[30vw] h-auto" />
            </div>

            {/* Right section for text content */}
            <div className="w-full md:w-[50vw] h-auto md:h-[38vw] p-[7vw] md:p-[3vw] bg-[#DDBEA9] rounded-[3vw] md:rounded-[2vw] text-justify text-[4vw] md:text-[1.3vw] text-[#71432B] leading-relaxed italic font-merriweather">
                <p>
                    “Founded in [Year], Psyche was established to address the growing need for compassionate, accessible mental health care. Over the years, we have expanded our services from individual consultations to community-wide awareness programs, always guided by a commitment to empathy and excellence.
                </p>
                <p className="mt-[4vw] md:mt-[1vw]">
                    Our journey began when our founder [Founder's Name] recognized a lack of accessible mental health resources in the community. Driven by the goal of creating an inclusive mental health resource, Psyche was born, aiming to offer professional psychiatric support and foster a more open conversation around mental health.”
                </p>
            </div>
        </div>
    );
};




const testimonials = [
    '"Psyche has been a life-changing resource for me. Their team is caring, understanding, and professional."',
    '"Psyche has been a life-changing resource for me. Their team is caring, understanding, and professional."',
    '"Psyche has been a life-changing resource for me. Their team is caring, understanding, and professional."',
    '"Psyche has been a life-changing resource for me. Their team is caring, understanding, and professional."',
    '"Psyche has been a life-changing resource for me. Their team is caring, understanding, and professional."',
    '"Psyche has been a life-changing resource for me. Their team is caring, understanding, and professional."',
    '"Psyche has been a life-changing resource for me. Their team is caring, understanding, and professional."'
];

const authors = [
    "Pushkaraj S.",
    "Aditi M.",
    "Rahul K.",
    "Sophia L.",
    "John D.",
    "Emily R.",
    "Michael T."
];

const UserTestimonials = () => {
    return (
        <div className="flex flex-col items-center bg-[#f8f6f3] w-screen">
            {/* Title */}
            <h2 className="text-[3vw] font-bold text-[#6B7775] m-[2.5vw]">User Testimonials</h2>

            {/* Testimonials Grid */}
            <div className="grid gap-[2vw] w-[87vw] ">
                {/* Top Row with Four Testimonials */}
                <div className="grid grid-cols-4 gap-[2vw] mb-[2vw]">
                    {testimonials.slice(0, 4).map((testimonial, index) => (
                        <div key={index} className="relative flex flex-col items-center p-[2vw] text-[#4a4a4a]">
                            {/* Testimonial Box */}
                            <div className="bg-[#6B7775]/30 rounded-[1.5vw] w-[18vw] h-[22vw] pt-[4vw] pl-[4vw] pr-[1vw]">
                                <p className="italic text-[1vw] text-start font-merriweather">{testimonial}</p>
                                <p className="mt-[1vw] pr-[1vw] text-[1vw] text-end font-semibold text-[#6B7775]">- {authors[index]}</p>
                            </div>
                            {/* Frame Overlay */}
                            <img src={speechFrame} alt="Speech bubble frame" className="absolute inset-[3.3vw] w-[17vw] h-[25vw]" />
                        </div>
                    ))}
                </div>

                {/* Bottom Row with Three Centered Testimonials */}
                <div className="flex justify-center w-full mb-[2vw]">
                    <div className="grid grid-cols-3 gap-[2vw] w-[70vw]">
                        {testimonials.slice(4).map((testimonial, index) => (
                            <div key={index + 4} className="relative flex flex-col items-center p-[2vw] text-[#4a4a4a]">
                                {/* Testimonial Box */}
                                <div className="bg-[#6B7775]/30 rounded-[1.5vw] w-[18vw] h-[22vw] pt-[4vw] pl-[4vw] pr-[1vw]">
                                    <p className="italic text-[1vw] text-start font-merriweather">{testimonial}</p>
                                    <p className="mt-[1vw] pr-[1vw] text-[1vw] text-end font-semibold text-[#6B7775]">- {authors[index + 4]}</p>
                                </div>
                                {/* Frame Overlay */}
                                <img src={speechFrame} alt="Speech bubble frame" className="absolute inset-[4vw] w-[17.5vw] h-[24vw]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Button */}
            <button className="m-[7vw] px-[3vw] py-[1.5vw] bg-[#F4F1EC] text-[#000000] text-[1.5vw] font-merriweather border-[0.2vw] border-[#000000] hover:bg-[#000000] hover:text-[#F4F1EC] transition-colors duration-300">
                Book A Consultation
            </button>

        </div>
    );
};


export { AboutLanding, OurStory, UserTestimonials };

