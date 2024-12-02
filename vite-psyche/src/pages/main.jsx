import React from "react";
import Navbar from "../components/navbar";
import ServicesLanding from "./services_landing";
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
      <ServicesLanding />
      <PhotoGallery />
      <Community />
      <FAQs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default main;
// Pushing to vercel
