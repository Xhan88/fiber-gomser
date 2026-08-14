import Hero from "../components/Hero/Hero";
import TrustBar from "../components/TrustBar/TrustBar";
import ProductsSection from "../components/Products/ProductsSection";
import UltrasonicService from "../components/UltrasonicService/UltrasonicService";
import IndustriesSection from "../components/Industries/IndustriesSection";
import ProcessSection from "../components/Process/ProcessSection";
import AboutSection from "../components/About/AboutSection";
import GallerySection from "../components/Gallery/GallerySection";
import QuoteFormSection from "../components/QuoteForm/QuoteFormSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProductsSection />
      <UltrasonicService />
      <IndustriesSection />
      <ProcessSection />
      <AboutSection />
      <GallerySection />
      <QuoteFormSection />
    </>
  );
};

export default HomePage;