import Navbar from "../components/navbar";
import Footer from "./footer";
import ContactForm from "../components/contact_form";
import ReactLenis from "lenis/react";

const contact = () => {
  return (
    <ReactLenis root>
      <div className="overflow-x-hidden">
        <Navbar />
        <ContactForm />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default contact;
