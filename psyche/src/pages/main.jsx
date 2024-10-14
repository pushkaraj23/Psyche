import React from 'react'

const main = () => {
  return (
    <div className="bg-[#786a53] py-16 text-center">
      <h2 className="text-[#333] text-[2.5vw] md:text-[2vw] lg:text-[1.8vw] font-bold font-merriweather mb-4">
        Still have questions?
      </h2>
      <p className="text-[#555] text-[1.5vw] md:text-[1.2vw] lg:text-[1vw] mb-8">
        If you don’t find your question here, feel free to reach out to us via our Contact page.
        We’re always here to help.
      </p>
      <a href="/contact" className="inline-block border border-[#333] text-[#333] px-8 py-4 rounded hover:bg-[#333] hover:text-white transition-colors duration-300">
        Contact Us for More
      </a>
    </div>
  )
}

export default main
// You need to import all the pages here