
import Navbar from './components/navbar'
import './App.css'
import Homepage from './landingpage/home/homepage'
import Aboutpage from './landingpage/about/aboutpage'
  import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Servicepage from './landingpage/service/servicepage';
import Gallerypage from './landingpage/gallery/gallerypage';
import Contectpage from './landingpage/contectus/contectpage';
import Footer from './components/footer';

function App() {


useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true, // Only animate once
  });
}, []);

const [activePage, setActivePage] = useState('home');
console.log(activePage);
  return (
    <>
 {activePage === 'home' && (
        <Homepage
          homeToggle={()=> setActivePage('home')}
          aboutToggle={() => setActivePage('about')}
          serviceToggle={() => setActivePage('service')}
          galleryToggle={() => setActivePage('gallery')}
          contactToggle={() => setActivePage('contact')}
        />
      )}
      {activePage === 'about' &&( <Aboutpage homeToggle={()=> setActivePage('home')} aboutToggle={() => setActivePage('about')} serviceToggle={() => setActivePage('service')}
          galleryToggle={() => setActivePage('gallery')}
          contactToggle={() => setActivePage('contact')}/>)}
      {activePage === 'service' && (<Servicepage homeToggle={()=> setActivePage('home')}  aboutToggle={() => setActivePage('about')}
          serviceToggle={() => setActivePage('service')}
          galleryToggle={() => setActivePage('gallery')}
          contactToggle={() => setActivePage('contact')}/>)}
      {activePage === 'gallery' && (<Gallerypage  homeToggle={()=> setActivePage('home')} aboutToggle={() => setActivePage('about')}
          serviceToggle={() => setActivePage('service')}
          galleryToggle={() => setActivePage('gallery')}
          contactToggle={() => setActivePage('contact')} />)}
      {activePage === 'contact' &&( <Contectpage  homeToggle={()=> setActivePage('home')} aboutToggle={() => setActivePage('about')}
          serviceToggle={() => setActivePage('service')}
          galleryToggle={() => setActivePage('gallery')}
          contactToggle={() => setActivePage('contact')}/>)}

    </>
  )
}

export default App
