import React from "react";
import Navbar from "../components/navbar";
import Footer from './footer';
import Reason from "../components/about/reason";
import { AboutLanding, OurStory, UserTestimonials } from '../components/about/aboutLanding'
import Manifesto from "../components/about/manifesto";
const services = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Footer />

        </div>
    );
};

export default services;