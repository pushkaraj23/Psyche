// src/components/ServiceCard.jsx

import React from 'react';

const ServiceCard = (props) => {
    return (
        <div className="w-[65vw] sm:w-[60vw] lg:w-[24vw] bg-white overflow-hidden border border-[#d2d4a4]">
            <div className='flex items-center justify-center h-[35vw] sm:h-[25vw] lg:h-[17vw] px-[2.2vw] py-[3.6vw] pt-[6vw]'>
                <img className="w-[57vw] h-[29vw] sm:h-[20vw] lg:h-[15vw] object-cover rounded-md shadow-sm" src={props.imageUrl} alt={props.title} />
            </div>

            <div className="p-[4vw] sm:p-[3vw] md:p-[2vw]">
                <h3 className="text-[#8D8F69] text-[3.5vw] sm:text-[2vw] lg:text-[1.5vw] font-bold font-merriweather mb-[1vw]">{props.title}</h3>
                <p className="text-[#8D8F69] text-[2.5vw]
                sm:text-[] lg:text-[1.26vw] text-opacity-75 font-merriweather mb-[1.5vw]">{props.description}</p>
                
                <a href="https://www.youtube.com/" className="inline-block">
                    <button
                        className="bg-[#8D8F69] font-merriweather text-white px-[2vw] py-[1vw] sm:px-[1vw] sm:py-[0.7vw] rounded-sm hover:bg-white hover:text-[#8D8F69] border border-[#8D8F69] transition-colors duration-300"
                    >
                        Learn More →
                    </button>
                </a>

            </div>
        </div>
    );
};

export default ServiceCard;
