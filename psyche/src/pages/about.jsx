import React from "react";
import Navbar from "../components/navbar";
import Footer from './footer';
import AboutLanding from '../components/about/aboutLanding'


const about = () => {
  return (
    <div>
      <Navbar />
      <AboutLanding />
      <Footer />
    </div>
  );
};

export default about;
// You need to import all the pages here.
