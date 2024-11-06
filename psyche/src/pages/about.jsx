import React from "react";
import Navbar from "../components/navbar";
import Footer from './footer';
import { AboutLanding, OurStory, Reason, UserTestimonials } from '../components/about/aboutLanding'
import Manifesto from "../components/about/manifesto";
const about = () => {
  return (
    <div>
      <Navbar />
      <AboutLanding />
      <Manifesto />
      <OurStory />
      <Reason />
      <UserTestimonials />
      <Footer />

    </div>
  );
};

export default about;
// You need to import all the pages here.
