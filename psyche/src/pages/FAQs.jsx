import React, { useState } from 'react';

const FAQs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    { question: "How can I book a consultation?", answer: "Below are answers to some of the most common inquiries we receive. If you have any further questions, feel free to contact us..Below are answers to some of the most common inquiries we receive. If you have any further questions, feel free to contact us.." },
    { question: "How can I book a consultation?", answer: "We offer a variety of services including..." },
    { question: "How can I book a consultation?", answer: "We offer a variety of services including.." },
    { question: "How can I book a consultation?", answer: "We offer a variety of services including..." },
    { question: "How can I book a consultation?", answer: "We offer a variety of services including..." },

  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="w-[100vw] min-h-[100vh]  bg-[#ECDBD3] overflow-hidden relative flex flex-col items-start px-[10vw] py-[8vh]">{/* used min height because the content inside wasnt fitting properly */}
        <div className="flex justify-center w-full text-center">
        <div className="text-center max-w-[55vw]">
            <h1 className="text-[#8C7165] text-[3vw] font-merriweather font-bold">
            Frequently Asked Questions
            </h1>
            
            <p className="text-[#8C7165]/75 text-[1.4vw] font-merriweather mt-[1vw] mb-[5vh]">
            Below are answers to some of the most common inquiries we receive. If you have any further questions, feel free to contact us..
            </p>
        </div>
        </div>     

      <div className="w-full max-w-[81vw] pt-[5vh]">
        {faqData.map((faq, index) => (
          <div key={index} className={`${ index === 0 ? 'border-t border-b' : 'border-b' } border-[#8C7165]/30`}>{/*only the first question in the accordion has a top border and a bottom border rest of them only have a bottom border.*/}
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left text-[#8C7165] text-[1.15vw] my-2 mx-5 font-bold font-merriweather flex justify-between items-center"
            >
              {faq.question}{/* question */}
              <span className="text-[#8C7165] text-[3vw] font-bold font-merriweather">
                {openQuestion === index ? '−' : '+'}
              </span>
            </button>
            {openQuestion === index && (
              <p className="text-[#8C7165]/75 text-[1.1vw]   font-merriweather my-2 mx-5 transition-all duration-300">
                {faq.answer}{/* answer */}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
