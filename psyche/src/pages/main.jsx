import React from "react";
import Navbar from "../components/navbar";
import Services from "./services";
import ContactUs from "../components/main/ContactUs";
import Community from "../components/main/Community";
import PhotoGallery from "./photoGallery";
import Landing from "./landing";
import FAQs from "./FAQs";
import Footer from './footer';
import Welcome from './Welcome';

const main = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Welcome />
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
