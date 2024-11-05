import React from 'react';

const JoinCommunity = () => {
  return (
    <section className="h-[50vh] flex flex-col justify-center items-center bg-[#f4f3ef]">
      <h2 className="text-4xl font-merriweather font-bold mb-4">
        Join the Psyche Community
      </h2>
      <p className="text-lg font-merriweather mb-8 text-center">
        Stay informed with the latest mental health tips, news, and upcoming events.
      </p>
      <button className="px-6 py-3 border-2 border-black text-black font-poppins hover:bg-gray-200">
        Sign Up For Our Newsletter
      </button>
    </section>
  );
};
export default JoinCommunity;