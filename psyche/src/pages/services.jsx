import React from 'react';
import ServiceCard from '../components/ServiceCard.jsx';
import consultation from '../assets/consultation.png'
import group_activity from '../assets/group_activity.png';
import therapy from '../assets/therapy.png';

const Services = () => {
  const servicesData = [
    {
      title: "Psychiatry Consultations",
      description: "Personalized psychiatric consultations to diagnose and treat mental health conditions.",
      imageUrl: consultation,
      link: "#",
    },
    {
      title: "Therapy Services",
      description: "Offering cognitive behavioral therapy, talk therapy, and more.",
      imageUrl: therapy,
      link: "#",
    },
    {
      title: "Mental Health Workshops",
      description: "Participate in our educational workshops aimed at improving community mental well-being.",
      imageUrl: group_activity,
      link: "#",
    }
  ];

  return (
    <div className="py-[4vh] bg-[#F4F1EC]">
      <h1 className="text-[#717253] text-[4vw] lg:text-[3vw] sm:text-[4vw] font-bold font-merriweather text-center">Our Core Services</h1>
      <h2 className="text-[#ABAD7C] text-[3vw] lg:text-[2vw] sm:text-[2.5vw] font-merriweather text-center mb-[2vw]">A glimpse at the core services we provide</h2>
      <div className="flex flex-wrap justify-center gap-[5vw]">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
//This page will be handled by Shashank