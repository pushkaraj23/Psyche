import React from 'react';
import image1 from '../assets/image_1.png';
import image2 from '../assets/image_2.png';

const ContactForm = () => {
    return (
        <div className="relative bg-[#f9f5f0] h-[60vw] flex items-center justify-center">
            {/* Decorative Images */}
            <img src={image1} alt="Decorative" className="absolute left-0 bottom-[-0.01vw] w-[30vw]" />
            <img src={image2} alt="Decorative" className="absolute right-0 top-0 w-[20vw]" />

            {/* Form Section */}
            <div className="w-[50vw] text-center  font-merriweather">
                <div className='pb-[3vw]'>
                    <h2 className="text-[3vw] font-bold text-[#3F6F67]">Contact Us</h2>
                    <p className="text-[#3F6F67] text-[1.4vw] mt-[1vw] italic">
                        Have a question or need more information about our services? Fill out the form below, and our team will get back to you shortly.
                    </p>
                </div>
                <form className="mt-[3vw] space-y-[1.2vw] ">
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name*"
                            className="w-[35vw] border-b-2 border-[#745343] bg-transparent focus:outline-none text-[1vw] p-[0.5vw] mt-[0.5vw] placeholder:text-[#745343]"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email*"
                            className="w-[35vw] border-b-2  border-[#745343] bg-transparent focus:outline-none text-[1vw] p-[0.5vw] mt-[0.5vw] placeholder:text-[#745343]"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Phone No.*"
                            className="w-[35vw] border-b-2 border-[#745343] bg-transparent focus:outline-none text-[1vw] p-[0.5vw] mt-[0.5vw] placeholder:text-[#745343]"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Reason for Enquiry*"
                            className="w-[35vw] border-b-2 border-[#745343] bg-transparent focus:outline-none text-[1vw] p-[0.5vw] mt-[0.5vw] placeholder:text-[#745343]"
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Description*"
                            className="w-[35vw] border-b-2 border-[#745343] bg-transparent focus:outline-none text-[1vw] p-[0.5vw] mt-[0.5vw] placeholder:text-[#745343]"
                        ></input>
                    </div>
                    <div>
                        <button className="   w-[15vw] mt-[4vw]  py-[1vw] text-sm  font-medium border border-[#745343] text-[#745343] hover:bg-[#4f3f2f] hover:text-[#efe4d2] transition">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
