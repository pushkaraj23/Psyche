import React from "react";
import Navbar from "../components/navbar";
import ServicesLanding from "./services_landing";
import ContactUs from "../components/home/ContactUs";
import Community from "../components/home/Community";
import PhotoGallery from "./photoGallery";
import Landing from "./landing";
import FAQs from "../components/home/FAQs";
import Footer from './footer';
import Welcome from './Welcome';

const Home = () => {
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

export default Home;
