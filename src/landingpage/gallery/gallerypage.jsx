
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Gallery from "./gallery";
export default function Gallerypage( { homeToggle,aboutToggle,serviceToggle,galleryToggle,contactToggle})
{ 
    
    return(<>
    <Navbar hometog={homeToggle} abouttog={aboutToggle} servicetog={serviceToggle} gallerytog={galleryToggle} contecttog={contactToggle} />
    <Gallery/>
    <Footer/>
    
    </>)
}