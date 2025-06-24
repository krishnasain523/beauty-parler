
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Aboutus from "./aboutus";
export default function Aboutpage({homeToggle,aboutToggle,serviceToggle,galleryToggle,contactToggle})
{ 
    
    return(<>
    <Navbar hometog={homeToggle} abouttog={aboutToggle} servicetog={serviceToggle} gallerytog={galleryToggle} contecttog={contactToggle}/>
    <Aboutus/>
    <Footer/>
    
    </>)
}