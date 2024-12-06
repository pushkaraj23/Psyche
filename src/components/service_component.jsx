import React from "react";
import imageStrip from "/assets/imageStrip.png";
import numberOneImage from "/assets/numberOneImage.png";
import numberTwoImage from "/assets/numberTwoImage.png";
import numberThreeImage from "/assets/numberThreeImage.png";

const service_component = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="relative w-full mt-[35vw] h-[45vh] lg:h-[17vw] lg:mt-[10vw] bg-[#F4F1EC]">
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
            <div className="flex flex-col lg:flex-row items-start px-[15vw] py-[15vw] lg:px-[7vw] lg:py-[5vw] font-merriweather">
                {/* Number 1 Image */}
                <div className="lg:px-[4vw] mb-[5vw]">
                    <img src={numberOneImage} alt="Number 1" className="w-24 lg:w-[22vw]" />
                </div>
                {/* Text Content */}
                <div className="lg:mx-[5vw] text-[#745343] ">
                    <h2 className="text-[7vw] lg:text-[2.5vw] font-semibold ">
                        Psychiatry Consultations
                    </h2>
                    <p className="text-[5vw] lg:text-[1.45vw] lg:leading-[1.75vw] mb-[5vw] lg:mb-[2vw] mt-[1.5vw] lg:mt-[1.7vw] ">
                        Our licensed psychiatrists provide professional consultations to diagnose and treat
                        various mental health conditions, including anxiety, depression, mood disorders, and more.
                    </p>
                    <button className="px-[5vw] py-[3vw] lg: lg:px-[3vw] lg:py-[1vw] text-[5vw] lg:text-[1.3vw]  font-medium border border-[#745343] text-[#745343] hover:bg-[#4f3f2f] hover:text-[#f4e1c1] transition">
                        Service Details
                    </button>
                </div>
            </div>
            {/* Psychiatry Consultations Section for Number 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-start px-[15vw] py-[15vw] lg:px-[7vw] lg:py-[5vw] font-merriweather">
                <div className="lg:px-[4vw] mb-[5vw]">
                    <img src={numberTwoImage} alt="Number 2" className="w-24 lg:w-[22vw]" />
                </div>
                <div className="lg:mx-[5vw] text-[#745343] ">
                    <h2 className="text-[7vw] lg:text-[2.5vw] font-semibold ">
                        Counseling Sessions
                    </h2>
                    <p className="text-[5vw] lg:text-[1.45vw] lg:leading-[1.75vw] mb-[5vw] lg:mb-[2vw] mt-[1.5vw] lg:mt-[1.7vw]">
                        Professional counseling services to help manage life challenges and develop coping strategies for better well-being.
                    </p>
                    <button className="px-[5vw] py-[3vw] lg: lg:px-[3vw] lg:py-[1vw] text-[5vw] lg:text-[1.3vw]  font-medium border border-[#745343] text-[#745343] hover:bg-[#4f3f2f] hover:text-[#f4e1c1] transition">
                        Service Details
                    </button>
                </div>
            </div>

            {/* Psychiatry Consultations Section for Number 3 */}
            <div className="flex flex-col lg:flex-row items-start px-[15vw] py-[15vw] lg:px-[7vw] lg:py-[5vw] font-merriweather">
                <div className="lg:px-[4vw] mb-[5vw]">
                    <img src={numberThreeImage} alt="Number 3" className="w-24 lg:w-[17vw]" />
                </div>
                <div className="lg:mx-[5vw] text-[#745343] ">
                    <h2 className="text-[7vw] lg:text-[2.5vw] font-semibold">
                        Group Therapy
                    </h2>
                    <p className="text-[5vw] lg:text-[1.45vw] lg:leading-[1.75vw] mb-[5vw] lg:mb-[2vw] mt-[1.5vw] lg:mt-[1.7vw]">
                        Join group therapy sessions to share experiences and build support networks in a safe environment.
                    </p>
                    <button className="px-[5vw] py-[3vw] lg: lg:px-[3vw] lg:py-[1vw] text-[5vw] lg:text-[1.3vw]  font-medium border border-[#745343] text-[#745343] hover:bg-[#4f3f2f] hover:text-[#f4e1c1] transition">
                        Service Details
                    </button>
                </div>
            </div>




            <div className="flex flex-col items-center p-[5vw] mb-[3vw]">
                {/* Title */}
                <h1 className="text-[#87885B] text-[5vw] lg:text-[2.5vw] font-bold mb-[5vw] text-center font-merriweather leading-tight">
                    Specialized Help <br className="block lg:hidden" /> for Your Mental Health
                </h1>

                {/* Grid of items */}
                <div className="grid grid-cols-4 gap-[3vw] text-center font-merriweather text-[#87885B] font-[2vw]">
                    {[
                        "Stress",
                        "Anxiety",
                        "Depression",
                        "Grief & Loss",
                        "Trauma",
                        "Psychosis",
                        "Couple Therapy",
                        "LGBTQ Friendly",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="  border border-[#87885B] text-[2.25vw] lg:text-[1.3vw]  rounded-full flex items-center justify-center 
                            py-[2.9vw] px-[1vw] lg:py-[1.5vw] lg:px-[2vw] shadow-[0.5vw_0.5vw_0vw_#87885B]"
                        >
                            {item}
                        </div>
                    ))}
                    {/* Custom row for the last two boxes */}
                    <div className="col-span-4 flex justify-center gap-[2vw] font-merriweather">
                        <div
                            className=" text-[#87885B] border border-[#87885B]  text-[2.25vw] lg:text-[1.3vw] rounded-full flex items-center justify-center py-[3vw] px-[1.5vw] lg:py-[1.5vw] lg:px-[2vw] shadow-[0.5vw_0.5vw_0vw_#87885B]"
                        >
                            ADHD & Teenage Issues
                        </div>
                        <div
                            className=" text-[#87885B] border border-[#87885B]  text-[2.25vw] lg:text-[1.3vw]  rounded-full flex items-center justify-center  py-[3vw] px-[6vw] lg:py-[1.5vw] lg:px-[2vw] shadow-[0.5vw_0.5vw_0vw_#87885B]"
                        >
                            OCD
                        </div>
                    </div>
                </div>
                {/* Button */}
                <button className="mt-[8vw] font-merriweather px-[10vw] py-[3vw] lg:px-[3vw] lg:py-[1vw] text-[3.5vw] lg:text-[1.3vw] font-medium border border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#f4e1c1] transition">
                    Book A Consultation
                </button>
            </div>
        </div>
    );
};
export default service_component;
