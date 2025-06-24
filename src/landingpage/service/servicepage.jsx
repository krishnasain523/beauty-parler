
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Services from "./services";
export default function Servicepage({homeToggle,aboutToggle,serviceToggle,galleryToggle,contactToggle})
{ 
    
    return(<>
    <Navbar hometog={homeToggle} abouttog={aboutToggle} servicetog={serviceToggle} gallerytog={galleryToggle} contecttog={contactToggle}/>
    <Services/>
    <Footer/>
    
    </>)
}