import React from 'react';
import image1 from '/assets/image_1.png';
import image2 from '/assets/image_2.png';

const ContactForm = () => {
    return (
        <div className="relative bg-[#f9f5f0] h-screen lg:h-[70vw] flex lg:items-center justify-center">
            {/* Decorative Images */}
            <img src={image1} alt="Decorative" className="absolute left-0 bottom-[-0.01vw] w-[60vw] lg:w-[30vw]" />
            <img src={image2} alt="Decorative" className="absolute right-0 lg:top-[15vw] top-[50vw] w-[40vw] lg:w-[20vw]" />

            {/* Form Section */}
            <div className="lg:w-[60vw] text-center lg:p-[3vw] p-[20vw] mt-[10vw] lg:mt-[0vw] font-merriweather">
                <div className='pb-[3vw]'>
                    <h2 className="text-[8vw] lg:text-[3vw] font-bold text-[#3F6F67]">Contact Us</h2>
                    <p className="text-[#3F6F67] text-[3.5vw] lg:text-[1.4vw] mt-[1vw] italic">
                        Have a question or need more information about our services? Fill out the form below, and our team will get back to you shortly.
                    </p>
                </div>
                <form className="mt-[2vw] lg:mt-[3vw] space-y-[1.2vw] ">
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name*"
                            className="w-[65vw] lg:w-[35vw] border-b-2 border-[#745343] bg-transparent focus:outline-none lg:text-[1vw] text-[3vw] p-[4vw] lg:p-[0.5vw] lg:mt-[0.5vw] placeholder:text-[rgb(116,83,67)]"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email*"
                            className="w-[65vw] lg:w-[35vw] border-b-2 border-[#745343] bg-transparent focus:outline-none lg:text-[1vw] text-[3vw] p-[4vw] lg:p-[0.5vw] lg:mt-[0.5vw] placeholder:text-[rgb(116,83,67)]"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Phone No.*"
                            className="w-[65vw] lg:w-[35vw] border-b-2 border-[#745343] bg-transparent focus:outline-none lg:text-[1vw] text-[3vw] p-[4vw] lg:p-[0.5vw] lg:mt-[0.5vw] placeholder:text-[rgb(116,83,67)]"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Reason for Enquiry*"
                            className="w-[65vw] lg:w-[35vw] border-b-2 border-[#745343] bg-transparent focus:outline-none lg:text-[1vw] text-[3vw] p-[4vw] lg:p-[0.5vw] lg:mt-[0.5vw] placeholder:text-[rgb(116,83,67)]"
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Description*"
                            className="w-[65vw] lg:w-[35vw] border-b-2 border-[#745343] bg-transparent focus:outline-none lg:text-[1vw] text-[3vw] p-[4vw] lg:p-[0.5vw] lg:mt-[0.5vw] placeholder:text-[rgb(116,83,67)]"
                        ></input>
                    </div>
                    <div>
                        <button className="w-[45vw] lg:w-[20vw] lg:mt-[4vw] mt-[10vw]  lg:py-[0.8vw] py-[2.5vw] text-[3.5vw] lg:text-[1.5vw]  font-medium border border-[#745343] text-[#745343] hover:bg-[#4f3f2f] hover:text-[#efe4d2] transition">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
