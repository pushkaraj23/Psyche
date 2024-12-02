import Navbar from "../components/navbar";
import Footer from "./footer";
import Service_Component from "../components/service_component";
import ReactLenis from "lenis/react";

const services = () => {
  return (
    <ReactLenis root>
      <div className="overflow-x-hidden">
        <Navbar />
        <Service_Component />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default services;
