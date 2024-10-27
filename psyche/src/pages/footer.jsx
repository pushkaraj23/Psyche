import React from "react";
// import Logo from "../assets/logo2.svg";
import image from "../assets/image.png";
import { EnvelopeIcon } from '@heroicons/react';

const Footer = () => {
    return (
        <div className="relative w-full h-[30vw] flex items-center justify-between px-[10vw] py-[5vw]">
            {/* Blurred Background Image */}
            <div
                className="absolute inset-0 bg-cover"
                style={{
                    backgroundImage: `url(${image})`,
                    filter: "blur(0.3vw)",
                    zIndex: -2,
                }}
            ></div>

            {/* Green Hue Overlay */}
            <div className="absolute inset-0 bg-[#717253] opacity-65 z-[-1]"></div>

            {/* Title Section */}
            <div className="relative z-10 flex-1 flex justify-center p-[10vw]">
                <h1 className="text-white w-[17vw] text-[3.5vw] font-black leading-[4vw] font-merriweather">
                    ONE MIND AT A TIME
                </h1>
            </div>

            {/* Quick Links Section */}
            <div className="relative z-10 flex-2 flex flex-col items-start gap-[1vw] text-[#FFFFFF] font-light text-[1vw] font-merriweather px-[5vw]">
                <h2 className="font-bold text-white text-[1.3vw] mb-[1vw]">Quick Links</h2>
                <a href="#home" className="underline">Home</a>
                <a href="#services" className="underline">Services</a>
                <a href="#awareness" className="underline">Awareness Programs</a>
                <a href="#knowledge" className="underline">Knowledge Base</a>
                <a href="#partnerships" className="underline">Partnerships</a>
                <a href="#contact" className="underline">Contact Us</a>
            </div>

            {/* Contact Information Section */}
            <div className="relative z-10 flex-2 flex flex-col items-start gap-[1vw] text-[#ffffff] text-[1vw] pb-[7.5vw]">
                <h2 className="font-bold text-white text-[1.3vw] mb-[1vw] font-merriweather">Contact Information</h2>
                <p class="flex items-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>Hadapsar, Pune - 412201</p>
                <p class="flex items-center text-white">
                    <svg class="w-6 h-6 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                    </svg>+91 1234390822</p>
                <p class="flex items-start text-white">
                    <EnvelopeIcon className="w-6 h-6 mr-2" />
                    info@psyche.com
                </p>

                
            </div>
        </div>

    );
};

export default Footer;
