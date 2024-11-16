import React from "react";
import ServiceCard from "../components/main/ServiceCard.jsx";
import consultation from "../assets/consultation.png";
import group_activity from "../assets/group_activity.png";
import therapy from "../assets/therapy.png";

const Services_landing = () => {
  const servicesData = [
    {
      title: "Psychiatry Consultations",
      description:
        "Personalized psychiatric consultations to diagnose and treat mental health conditions.",
      imageUrl: consultation,
      link: "#",
    },
    {
      title: "Therapy Services",
      description:
        "Offering cognitive behavioral therapy, talk therapy, and more.",
      imageUrl: therapy,
      link: "#",
    },
    {
      title: "Mental Health Workshops",
      description:
        "Participate in our educational workshops aimed at improving community mental well-being.",
      imageUrl: group_activity,
      link: "#",
    },
  ];

  return (
    <div className="py-[10vh] bg-[#F4F1EC] px-5 md:px-[10vw]">
      <h1 className="text-[#717253] text-[6vw] sm:text-[4vw] md:text-[3vw] font-bold font-merriweather text-center">
        Our Core Services
      </h1>
      <h2 className="text-[#ABAD7C] text-[4vw] sm:text-[3vw] md:text-[2vw] font-merriweather text-center mb-[4vh]">
        A glimpse at the core services we provide
      </h2>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-y-[5vh] gap-x-[4vw]">
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

export default Services_landing;
