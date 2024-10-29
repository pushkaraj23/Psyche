import React from "react";
import image from "../assets/image.png";
import Logo from "../assets/Logo.png";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    return (
        <div className="relative w-full h-screen md:h-[30vw] flex flex-col md:flex-row justify-between px-[15vw] py-[15vw] md:px-[10vw] md:py-[7vw]">
            <div className="absolute inset-0 bg-cover blur-[0.3vw] before:absolute before:inset-0 before:bg-[#717253] before:opacity-65"
                style={{
                    backgroundImage: `url(${image})`,
                    zIndex: -2,
                }}
            ></div>

            {/* Title and Logo Section */}
            <div className="flex flex-col  gap-[3vw] items-center text-center md:flex-row md:items-start md:justify-start  md:text-left  md:gap-[3vw]">
                <img src={Logo} alt="logo" className="w-[35vw] md:w-[14vw] md:ml-[1vw] md:my-[4vw]" />
                <h1 className="text-white text-[7vw] md:text-[3.5vw] font-black leading-[9vw] md:leading-[4vw] my-[2vw] w-[60vw] md:w-[17vw] md:my-[4vw] font-merriweather">
                    ONE MIND AT A TIME
                </h1>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col items-center gap-[4vw] md:gap-[1vw] text-white font-light font-merriweather ">
                <h2 className="font-bold text-white text-[5.5vw] md:text-[1.3vw] md:ml-[4vw]">Quick Links</h2>
                <div className="grid grid-cols-2 gap-[2vw] text-[3.5vw] md:text-[1vw] md:flex md:flex-col md:gap-[1vw] ml-[12vw] mr-[5vw]">
                    <a href="#home" className="underline">Home</a>
                    <a href="#services" className="underline">Services</a>
                    <a href="#awareness" className="underline">Awareness Programs</a>
                    <a href="#knowledge" className="underline">Knowledge Base</a>
                    <a href="#partnerships" className="underline">Partnerships</a>
                    <a href="#contact" className="underline">Contact Us</a>
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="flex flex-col items-center md:items-start text-white text-[3vw] md:text-[1vw] mb-[10vw] leading-[4vw] md:leading-[2.5vw] font-merriweather gap-[1vw] py-[10vw] md:mt-[-10.5vw]">
                <h2 className="font-bold text-white text-[5.5vw] md:text-[1.3vw] mb-[3vw] md:mb-[0vw]">Contact Information</h2>
                <p className="flex items-center text-white mb-[2vw] md:mb-[0vw]">
                    <MapPinIcon className="w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw] mr-[1vw]" />
                    Hadapsar, Pune - 412201
                </p>
                <p className="flex items-center text-white mb-[2vw] md:mb-[0vw]">
                    <PhoneIcon className="w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw] mr-[1vw]" />
                    +1 234 567 890
                </p>
                <p className="flex items-center text-white mb-[2vw] md:mb-[0vw]">
                    <EnvelopeIcon className="w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw] mr-[1vw]" />
                    info@psyche.com
                </p>
            </div>
        </div>
    );
};

export default Footer;




