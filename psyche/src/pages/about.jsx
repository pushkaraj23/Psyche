import React from "react";
import Navbar from "../components/navbar";
import Footer from './footer';
import Reason from "../components/about/reason";
import { AboutLanding, OurStory, UserTestimonials } from '../components/about/aboutLanding'

const about = () => {
  return (
    <div>
      <Navbar />
      <AboutLanding />
      <OurStory />
      <Reason />
      <UserTestimonials />
      <Footer />

    </div>
  );
};

export default about;
// You need to import all the pages here.
