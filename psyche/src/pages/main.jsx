<<<<<<< HEAD
import React from 'react'
import Services from './services'
import ContactUs from '../components/ContactUs'
import PhotoGallery from './photoGallery'
import Home from './footer'
import LandingHeader from './footer'
import Footer from './footer'
import Home2 from './footer'
=======
import React from "react";
import Navbar from "../components/navbar";
import Services from "./services";
import ContactUs from "../components/ContactUs";
import Community from "../components/Community";
import PhotoGallery from "./photoGallery";
import Landing from "./landing";
import FAQs from "./FAQs";
>>>>>>> bd091232286f58cab6961e5f0f2cb9831361d66d

const main = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Services />
      <PhotoGallery />
<<<<<<< HEAD
      <ContactUs />
      <Footer />
=======
      <Community />
      <FAQs />
      <ContactUs />
>>>>>>> bd091232286f58cab6961e5f0f2cb9831361d66d
    </div>
  );
};

export default main;
// You need to import all the pages here.
