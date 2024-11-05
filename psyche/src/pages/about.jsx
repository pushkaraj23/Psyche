import React from "react";
import Navbar from "../components/navbar";
import Footer from './footer';
import { AboutLanding, OurStory, Reason } from '../components/about/aboutLanding'

const about = () => {
  return (
    <div>
      <Navbar />
      <AboutLanding />
      <OurStory />
      <Reason />
      <Footer />

    </div>
  );
};

export default about;
// You need to import all the pages here.
