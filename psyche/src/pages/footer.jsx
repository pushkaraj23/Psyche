import React from "react";
// import Logo from "../assets/logo2.svg";
import image from "../assets/image.png";
import EnvelopeIcon from '@heroicons/react/24/outline/EnvelopeIcon';
import PhoneIcon from '@heroicons/react/24/outline/PhoneIcon';
import MapPinIcon from '@heroicons/react/24/outline/MapPinIcon';

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
            <div className="relative flex flex-col items-start gap-[1vw] text-[#ffffff] text-[1vw] pb-[6.8vw]">
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
