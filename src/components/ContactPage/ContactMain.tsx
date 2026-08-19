import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactMain = () => {
  return (
    <section data-aos="fade-up" className="bg-white px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[54%_46%] lg:gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactMain;