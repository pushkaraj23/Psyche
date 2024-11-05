import React from "react";
import ContactSection from "./JoinContact";

const ContactUs = () => {
  const title = "Still have questions?";
  const description =
    "If you don’t find your question here, feel free to reach out to us via our Contact page. We’re always here to help.";
  const buttonText = "Contact Us";

  return (
    <ContactSection
      title={title}
      description={description}
      buttonText={buttonText}
    />
  );
};

export default ContactUs;
