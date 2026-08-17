import ContactBenefits from "../components/ContactPage/ContactBenefits"
import ContactHero from "../components/ContactPage/ContactHero"
import ContactLocation from "../components/ContactPage/ContactLocation"
import ContactMain from "../components/ContactPage/ContactMain"
import GalleryCTA from "../components/GalleryPage/GalleryCTA"

const ContactPage = () => {
  return (
    <>
     <ContactHero /> 
     <ContactBenefits />
     <ContactMain />
     <ContactLocation />
     <GalleryCTA />
    </>
  )
}

export default ContactPage
