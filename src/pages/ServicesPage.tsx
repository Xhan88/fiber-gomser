import ServicesCapabilities from "../components/ServicesPage/ServicesCapabilities"
import ServicesCTA from "../components/ServicesPage/ServicesCTA"
import ServicesHero from "../components/ServicesPage/ServicesHero"
import ServicesIndustries from "../components/ServicesPage/ServicesIndustries"
import ServicesProcess from "../components/ServicesPage/ServicesProcess"
import UltrasonicHighlight from "../components/ServicesPage/UltrasonicHighlight"

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <UltrasonicHighlight />
      <ServicesCapabilities />
      <ServicesProcess />
      <ServicesIndustries />
      <ServicesCTA />
    </>
  )
}

export default ServicesPage
