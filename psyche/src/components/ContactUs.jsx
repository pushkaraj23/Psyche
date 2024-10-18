import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-[#F4F1EC] py-16 text-center">
            <h2 className="text-[#333] text-[2.5vw] md:text-[2vw] lg:text-[2vw] font-bold font-merriweather mb-4">
                Still have questions?
            </h2>
            <p className="text-[#555] font-merriweather text-[1.5vw] md:text-[1.2vw] lg:text-[1.3vw] mb-8">
                If you don’t find your question here, feel free to reach out to us via our Contact page.<br/>
                We’re always here to help.
            </p>
            <a href="/contact" className="inline-block">
                <button
                    className="border border-[#333] text-[#333] font-semibold px-[4vw] py-[2vw] sm:px-[4vw] sm:py-[2vw] hover:bg-[#333] hover:text-white transition-colors duration-300"
                >
                    Contact Us
                </button>
            </a>
                
        </div>
    );
};

export default ContactUs;
