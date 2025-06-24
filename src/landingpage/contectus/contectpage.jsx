
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
export default function Contactpage({homeToggle,aboutToggle,serviceToggle,galleryToggle,contactToggle})
{ 
    
    return(<>
    <Navbar hometog={homeToggle} abouttog={aboutToggle} servicetog={serviceToggle} gallerytog={galleryToggle} contecttog={contactToggle}/>
    <Footer/>
    
    </>)
}