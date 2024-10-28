import React from "react";
import image from "../assets/image.png";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    return (
        <div className="relative w-full h-[30vw] flex items-center justify-between px-[10vw] py-[5vw]">
            <div className="absolute inset-0 bg-cover blur-[0.3vw] before:absolute before:inset-0 before:bg-[#717253] before:opacity-65"
                style={{
                    backgroundImage: `url(${image})`,
                    zIndex: -2,
                }}
            ></div>

            {/* Title Section */}
            <div className=" flex-1 justify-center m-[13vw] ">
                <h1 className="text-white w-[17vw] text-[3.5vw] font-black leading-[4vw] font-merriweather p-[3vw]">
                    ONE MIND AT A TIME
                </h1>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col items-start gap-[1vw] text-[#FFFFFF] font-light text-[1vw] font-merriweather px-[5vw]">
                <h2 className="font-bold text-white text-[1.3vw] mb-[1vw]">Quick Links</h2>
                <a href="#home" className="underline">Home</a>
                <a href="#services" className="underline">Services</a>
                <a href="#awareness" className="underline">Awareness Programs</a>
                <a href="#knowledge" className="underline">Knowledge Base</a>
                <a href="#partnerships" className="underline">Partnerships</a>
                <a href="#contact" className="underline">Contact Us</a>
            </div>

            {/* Contact Information Section */}
            <div className="flex-col items-start gap-[1vw] text-[#ffffff] text-[1vw] pb-[9.5vw]">
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
