import React from "react";
import Navbar from "../components/navbar";
import Services from "./services";
import ContactUs from "../components/ContactUs";
import Community from "../components/Community";
import PhotoGallery from "./photoGallery";
import Landing from "./landing";
import FAQs from "./FAQs";
import Footer from './footer';


const main = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Services />
      <PhotoGallery />
      <Community />
      <FAQs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default main;
// You need to import all the pages here.
