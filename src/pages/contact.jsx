import React from "react";
import Navbar from "../components/navbar";
import Footer from './footer';
import ContactForm from "../components/contact_form";


const contact = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <ContactForm/>
            <Footer />

        </div>
    );
};

export default contact;