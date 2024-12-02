import React from "react";
import Navbar from "../components/navbar";
import Footer from "./footer";
import Service_Component from "../components/service_component";

const services = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Service_Component />
      <Footer />
    </div>
  );
};

export default services;
