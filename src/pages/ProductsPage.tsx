import ProductsBenefitsBar from "../components/ProductsPage/ProductsBenefitsBar"
import ProductsCatalogSection from "../components/ProductsPage/ProductsCatalogSection"
import ProductsCustomCTA from "../components/ProductsPage/ProductsCustomCTA"
import ProductsHero from "../components/ProductsPage/ProductsHero"

const ProductsPage = () => {
  return (
    <>
      <ProductsHero />
      <ProductsBenefitsBar />
      <ProductsCatalogSection />
      <ProductsCustomCTA />
    </>
  )
}

export default ProductsPage
