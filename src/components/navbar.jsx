import React, { useState } from "react";
import '../styles/navbar.css'
const Navbar = ({ hometog,abouttog,gallerytog,servicetog,contecttog}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-[#ffd0d2] px-8 py-4 relative">
      {/* Logo */}
      <div className="ml-0 sm:ml-10" id="logoimg" onClick={hometog}>
        <img
          className="h-25"
          src="/images/logo-2.png" // remove `/public` from path
          alt="Logo"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-10 mr-10 text-lg">
       <button onClick={hometog}>Home</button>
       <button onClick={abouttog}>About us</button>
        <button onClick={servicetog}>Services</button>
        <button onClick={gallerytog}>Gallery</button>
        <button onClick={contecttog}>Contact us</button>
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden mr-6 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {/* Simple Hamburger SVG */}
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute z-10 top-[100%] left-0 bg-[#ffd0d2] w-full flex flex-col items-start gap-5 px-15 py-10 text-lg transform transition-transform duration-400 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={hometog}>Home</button>
        <button onClick={abouttog}>About us</button>
        <button onClick={servicetog}>Services</button>
        <button onClick={gallerytog}>Gallery</button>
        <button onClick={contecttog}>Contact us</button>
      </div>
    </nav>
  );
};

export default Navbar;
