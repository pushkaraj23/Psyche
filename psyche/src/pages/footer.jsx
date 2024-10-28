import React from "react";
import image from "../assets/image.png";
import Logo from "../assets/Logo.png";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    return (
        <div className="relative w-full h-[30vw] flex items-center justify-between px-[8vw] py-[5vw]">
            <div className="absolute inset-0 bg-cover blur-[0.3vw] before:absolute before:inset-0 before:bg-[#717253] before:opacity-65"
                style={{
                    backgroundImage: `url(${image})`,
                    zIndex: -2,
                }}
            ></div>

            {/* Title and Logo Section */}
            <div className="flex justify-center ">
                
                <img src={Logo} alt="logo" className="w-[14vw] m-[2vw]" />
                <h1 className="text-white w-[17vw] text-[3.5vw] font-black leading-[4vw] my-[2vw] font-merriweather">
                    ONE MIND AT A TIME
                </h1>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col items-start gap-[1vw] text-[#FFFFFF] font-light text-[1vw] font-merriweather ml-[15vw]">
                <h2 className="font-bold text-white text-[1.3vw] mb-[1vw]">Quick Links</h2>
                <a href="#home" className="underline">Home</a>
                <a href="#services" className="underline">Services</a>
                <a href="#awareness" className="underline">Awareness Programs</a>
                <a href="#knowledge" className="underline">Knowledge Base</a>
                <a href="#partnerships" className="underline">Partnerships</a>
                <a href="#contact" className="underline">Contact Us</a>
            </div>

            {/* Contact Information Section */}
            <div className="flex-col items-start text-[#ffffff] text-[1vw] mb-[9vw]">
                <h2 className="font-bold text-white text-[1.3vw] mb-[1vw] font-merriweather">Contact Information</h2>
                <p className="flex items-center text-white">
                    <MapPinIcon className="w-6 h-6 mr-2" />Hadapsar, Pune - 412201</p>
                <p className="flex items-center text-white">
                    <PhoneIcon className="w-6 h-6 mr-2" />
                    +1 234 567 890
                </p>
                <p className="flex items-center text-white">
                    <EnvelopeIcon className="w-6 h-6 mr-2" />
                    info@psyche.com
                </p>


            </div>
        </div>

    );
};

export default Footer;
