import Navbar from "../components/navbar";
import Footer from "./footer";
import Reason from "../components/about/reason";
import {
  AboutLanding,
  OurStory,
  UserTestimonials,
} from "../components/about/aboutLanding";
import Manifesto from "../components/about/manifesto";
import ReactLenis from "lenis/react";
const about = () => {
  return (
    <ReactLenis root>
      <div className="overflow-x-hidden">
        <Navbar />
        <AboutLanding />
        <Manifesto />
        <OurStory />
        <Reason />
        <UserTestimonials />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default about;
// You need to import all the pages here.
