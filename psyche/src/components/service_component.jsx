import React from "react";
import imageStrip from "../assets/imageStrip.png";
import numberOneImage from "../assets/numberOneImage.png";


const service_component = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="relative w-full mt-[35vw] h-[45vh] lg:h-[17vw] lg:mt-[10vw]">
                {/* Background image */}
                <img
                    src={imageStrip}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                {/* Green blur overlay applied over the image */}
                <div className="absolute inset-0 bg-[#3F6F67] bg-opacity-60 backdrop-blur-0"></div>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white lg:text-center  font-merriweather px-[16vw]">
                    <h1 className="text-[9vw] lg:text-[3vw] font-bold ">Our Services</h1>
                    <p className="text-sm lg:text-[1.3vw] lg:mt-[0.5vw] px-6 lg:px-[10vw]">
                        Psyche offers a range of mental health services designed to support individuals in their
                        journey to better mental health. Discover the right service for you below.
                    </p>
                </div>
            </div>

            {/* Psychiatry Consultations Section */}
            <div className="flex flex-col lg:flex-row items-start px-[15vw] lg:px-[7vw] lg:py-[5vw]  py-[15vw] font-merriweather">
                {/* Number 1 Image */}
                <div className="mx-auto lg:px-[4vw] mb-[5vw] pr-[45vw]">
                    <img src={numberOneImage} alt="Number 1" className="w-24 lg:w-[17vw]" />
                </div>
                {/* Text Content */}
                <div className="mx-auto  lg:mx-[5vw] ">
                    <h2 className="text-xl lg:text-[2.5vw] font-semibold text-[#745343]">
                        Psychiatry Consultations
                    </h2>
                    <p className="text-sm lg:text-[1.45vw] lg:leading-[1.6.5vw]  mt-2 lg:mt-[1vw] text-[#745343]">
                        Our licensed psychiatrists provide professional consultations to diagnose and treat
                        various mental health conditions, including anxiety, depression, mood disorders, and more.
                    </p>
                    <button className="mt-4  px-4 py-2 text-sm  font-medium border border-[#745343] text-[#745343] hover:bg-[#4f3f2f] hover:text-[#f4e1c1] transition">
                        Service Details
                    </button>
                </div>
            </div>
        </div>
    );
};
export default service_component;
