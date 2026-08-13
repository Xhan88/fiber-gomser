import AboutSection from "./components/About/AboutSection"
import Footer from "./components/Footer/Footer"
import GallerySection from "./components/Gallery/GallerySection"
import Hero from "./components/Hero/Hero"
import IndustriesSection from "./components/Industries/IndustriesSection"
import Navbar from "./components/Navbar/Navbar"
import ProcessSection from "./components/Process/ProcessSection"
import ProductsSection from "./components/Products/ProductsSection"
import QuoteFormSection from "./components/QuoteForm/QuoteFormSection"
import TrustBar from "./components/TrustBar/TrustBar"
import UltrasonicService from "./components/UltrasonicService/UltrasonicService"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustBar />
      <ProductsSection />
      <UltrasonicService />
      <IndustriesSection />
      <ProcessSection />
      <AboutSection />
      <GallerySection />
      <QuoteFormSection />
      <Footer />
    </div>
  )
}

export default App
