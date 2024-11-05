import React from "react";
import Navbar from "../components/navbar";
import Footer from './footer';
import AboutLanding from "../components/about/aboutLanding";
import Reason from "../components/about/reason";

const about = () => {
  return (
    <div>
      <Navbar />
 
      <AboutLanding/>
      <Reason />
      <Footer />
    </div>
  );
};

export default about;
// You need to import all the pages here.
