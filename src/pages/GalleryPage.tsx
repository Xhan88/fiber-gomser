import GalleryCTA from "../components/GalleryPage/GalleryCTA"
import GalleryGrid from "../components/GalleryPage/GalleryGrid"
import GalleryHero from "../components/GalleryPage/GalleryHero"
import GalleryStats from "../components/GalleryPage/GalleryStats"

const GalleryPage = () => {
  return (
    <>
     <GalleryHero /> 
     <GalleryStats />
     <GalleryGrid />
     <GalleryCTA />
    </>
  )
}

export default GalleryPage
