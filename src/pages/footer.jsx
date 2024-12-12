import image from "/assets/image.png";
import Logo from "/assets/logo-main.svg";
import { FaEnvelope, FaPhoneAlt, FaMapPin } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="w-full h-[30vw] max-sm:h-[100vh]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full flex items-center justify-between bg-[#717253]/75 text-white max-sm:flex-col-reverse max-sm:justify-end max-sm:gap-[10vw]">
        {/* Title and Logo Section */}
        <div className="flex gap-[3vw] min-w-[50vw] justify-center items-center max-sm:flex-col max-sm:gap-[7vw] max-sm:mt-4">
          <img
            src={Logo}
            alt="logo"
            className="h-[40vh] m-[2vw] max-sm:h-[70vw] max-sm:m-0"
          />
          <h1 className="text-white w-[17vw] text-[3.5vw] font-black leading-[4vw] my-[2vw] font-merriweather max-sm:text-center max-sm:text-[10vw] max-sm:leading-[12vw] max-sm:w-4/5">
            ONE MIND AT A TIME
          </h1>
        </div>

        {/* Quick Links Section */}
        <div className="flex w-[50vw] justify-evenly max-sm:flex-col max-sm:w-full max-sm:items-center max-sm:pt-[12vw]">
          <h2 className="font-merriweather font-bold text-[4.5vw] hidden max-sm:block mb-[3vw]">
            Quick Links
          </h2>
          <div className="flex flex-col text-[1.2vw] gap-[.5vw] max-sm:text-[3.5vw] max-sm:h-[12vh] max-sm:flex-wrap max-sm:gap-[2vw]">
            <h2 className="font-bold font-merriweather text-white text-[1.4vw] max-sm:hidden">
              Quick Links
            </h2>
            <a
              href="#home"
              className="hover:underline text-white/75 ml-1 mx-[5vw] mb-1 max-sm:w-[17vw] max-sm:leading-[3.8vw]"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:underline text-white/75 ml-1 mx-[5vw] mb-1 max-sm:w-[17vw] max-sm:leading-[3.8vw]"
            >
              Services
            </a>
            <a
              href="#awareness"
              className="hover:underline text-white/75 ml-1 mx-[5vw] mb-1 max-sm:w-[17vw] max-sm:leading-[3.8vw]"
            >
              Awareness Programs
            </a>
            <a
              href="#knowledge"
              className="hover:underline text-white/75 ml-1 mx-[5vw] mb-1 max-sm:w-[17vw] max-sm:leading-[3.8vw]"
            >
              Knowledge Base
            </a>
            <a
              href="#partnerships"
              className="hover:underline text-white/75 ml-1 mx-[5vw] mb-1 max-sm:w-[17vw] max-sm:leading-[3.8vw]"
            >
              Partnerships
            </a>
            <a
              href="#contact"
              className="hover:underline text-white/75 ml-1 mx-[5vw] mb-1 max-sm:w-[17vw] max-sm:leading-[3.8vw]"
            >
              Contact Us
            </a>
          </div>
          <div className="flex flex-col text-[1.2vw] gap-[.5vw] max-sm:items-center max-sm:text-[3.5vw]">
            <h2 className="font-bold text-white text-[1.4vw] font-merriweather max-sm:text-[4.5vw] max-sm:mt-[5vw] max-sm:text-center">
              Contact Information
            </h2>
            <p className="flex text-white/75 max-sm:my-[2vw]">
              <FaMapPin className="w-6 h-6 mr-2" />
              Hadapsar, Pune - 412201
            </p>
            <p className="flex text-white/75 max-sm:mb-[2vw]">
              <FaPhoneAlt className="w-6 h-6 mr-2" />
              +1 234 567 890
            </p>
            <p className="flex text-white/75">
              <FaEnvelope className="w-6 h-6 mr-2" />
              info@psyche.com
            </p>
          </div>
        </div>
      </div>
      <p className="absolute w-full text-[1vw] text-white/75 h-[2vw] translate-y-[-4.5vh] text-center max-sm:text-[3vw]">
        info@psyche.com
      </p>
    </div>
  );
};

export default Footer;
