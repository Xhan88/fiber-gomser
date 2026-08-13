import Hero from "./components/Hero/Hero"
import IndustriesSection from "./components/Industries/IndustriesSection"
import Navbar from "./components/Navbar/Navbar"
import ProductsSection from "./components/Products/ProductsSection"
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
    </div>
  )
}

export default App
