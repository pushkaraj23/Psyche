import ContactSection from "./JoinContact";

const ContactUs = () => {
  const title = "Join the Psyche Community";
  const description =
    "Stay informed with the latest mental health tips, news, and upcoming events.";
  const buttonText = "Sign Up For Our Newsletter";

  return (
    <ContactSection
      title={title}
      description={description}
      buttonText={buttonText}
    />
  );
};

export default ContactUs;
