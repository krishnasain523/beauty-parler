import { useState } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Hero from "./hero";

export default function Homepage({aboutToggle,serviceToggle,galleryToggle,contactToggle})
{ const[togle,settogle]=useState(false)
    
    return(<>
    <Navbar abouttog={aboutToggle} servicetog={serviceToggle} gallerytog={galleryToggle} contecttog={contactToggle}/>
    <Hero gallerytog={galleryToggle}/>
    <Footer/>
    
    </>)
}
 <section className=" min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-10 scroll smooth" id='main'>
            {/* Text */}
            <div className="md:w-1/2  pl-0 md:pl-50 mb-0 md:mb-30 text-center md:text-left space-y-3 slide-up ">
                <h1 className="text-5xl font-bold font-serif text-white">About-us</h1>
                <p className="text-md text-white max-w-md mx-auto md:mx-0">
                    At She Beauty Parlor, we believe every woman deserves to feel confident and beautiful. Located in Shamli, our salon offers a perfect blend of tradition and trend with services tailored to your unique style. Whether it’s your wedding day or a casual glam-up, we ensure you walk out glowing.

                </p>
                
                <p className="text-md text-black max-w-md mx-auto md:mx-0">
                    Our expert team is trained in the latest beauty trends and hair techniques, providing you with premium services in a warm, relaxing space.

                </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 mt-4 md:mt-0 mb-30 md:mb-20 flex justify-center slide-up">
                <img src="/images/cut.jpg" alt="Salon" className="w-60 md:w-80 rounded-xl hover:shadow-lg shadow-black transition-shadow duration-600" />
            </div>
        </section>