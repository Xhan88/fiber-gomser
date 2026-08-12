import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import ProductsSection from "./components/Products/ProductsSection"
import TrustBar from "./components/TrustBar/TrustBar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustBar />
      <ProductsSection />
    </div>
  )
}

export default App
