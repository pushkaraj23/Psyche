import React, { useState } from "react";

const FAQs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      question: "How can I book a consultation?",
      answer:
        "Below are answers to some of the most common inquiries we receive. If you have any further questions, feel free to contact us.",
    },
    {
      question: "What services do you offer?",
      answer: "We offer a variety of services including...",
    },
    {
      question: "How does the consultation process work?",
      answer: "Our consultation process is designed to...",
    },
    {
      question: "What are the payment options?",
      answer: "We accept multiple payment options including...",
    },
    {
      question: "How can I contact support?",
      answer: "You can contact us through email or phone...",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="w-full bg-[#ECDBD3] overflow-hidden flex flex-col items-center px-5 sm:px-10 md:px-[10vw] py-[5vh] md:py-[8vh]">
      <div className="flex justify-center w-full text-center">
        <div className="text-center max-w-[90vw] md:max-w-[55vw]">
          <h1 className="text-[#8C7165] text-[6vw] sm:text-[4vw] md:text-[3vw] font-merriweather font-bold">
            Frequently Asked Questions
          </h1>

          <p className="text-[#8C7165]/75 text-[3.5vw] sm:text-[2.5vw] md:text-[1.4vw] font-merriweather mt-[2vw] mb-[5vh]">
            Below are answers to some of the most common inquiries we receive.
            If you have any further questions, feel free to contact us.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[90vw] md:max-w-[81vw] pt-[3vh] md:pt-[5vh]">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? "border-t border-b" : "border-b"
            } border-[#8C7165]/30`}
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left text-[#8C7165] text-[4vw] sm:text-[2vw] md:text-[1.15vw] my-2 mx-2 sm:mx-5 font-bold font-merriweather flex justify-between items-center"
            >
              {faq.question}
              <span className="text-[#8C7165] text-[6vw] sm:text-[4vw] md:text-[3vw] font-bold font-merriweather">
                {openQuestion === index ? "−" : "+"}
              </span>
            </button>
            {openQuestion === index && (
              <p className="text-[#8C7165]/75 text-[3.5vw] sm:text-[2vw] md:text-[1.1vw] font-merriweather my-2 mx-2 sm:mx-5 transition-all duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
