import IndustriesAdvantages from "../components/IndustriesPage/IndustriesAdvantages"
import IndustriesGrid from "../components/IndustriesPage/IndustriesGrid"
import IndustriesHero from "../components/IndustriesPage/IndustriesHero"
import ProductsCustomCTA from "../components/ProductsPage/ProductsCustomCTA"

const IndustriesPage = () => {
  return (
    <>
     <IndustriesHero />
     <IndustriesGrid />
     <IndustriesAdvantages />
     <ProductsCustomCTA />
    </>
  )
}

export default IndustriesPage
