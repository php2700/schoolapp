import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { MdEmail } from "react-icons/md";


import { FaPhoneAlt,  } from "react-icons/fa";

import Shriram from '../src/assets/home/shriramconnect.png';
import Enducare from '../src/assets/home/educator.png';
import Theshri from '../src/assets/home/thesriram.png';
import Facebook from '../src/assets/home/facebook.png';
import Whatsapps from '../src/assets/home/whatsapp.png';
import Instagram from '../src/assets/home/instagram.png';
import Arrow from '../src/assets/home/arrow.png';
import Logo from '../src/assets/home/logo.png';
import Vector1 from '../src/assets/home/vector1.png'
import Hero from '../src/assets/home/hero.png'





export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className="w-full shadow-md">
      {/* Top bar */}
      <div className="bg-white text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-3 border-b border-[#DDDDDD] gap-3 md:gap-0">
        <div className="flex flex-wrap items-center gap-3 md:gap-5 justify-center md:justify-start">
          <span className="flex items-center gap-1">
            <FaPhoneAlt className="text-[#474747]" />
            <span className="font-medium text-sm md:text-[16px] text-[#474747]">
              +91-9878787825
            </span>
          </span>
          <span className="flex items-center gap-1 text-[16px]">
            <MdEmail className="text-[#474747] w-5 h-5" />
            <span className="font-medium text-sm md:text-[16px] text-[#474747]">
              info@tsusludhiana.com
            </span>
          </span>
          <div className="flex gap-2">
            <img src={Instagram} alt="Instagram" className="h-6 md:h-7" />
            <img src={Facebook} alt="Facebook" className="h-6 md:h-7" />
            <img src={Whatsapps} alt="Whatsapp" className="h-6 md:h-7" />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 md:gap-14 justify-center md:justify-end">
          <img src={Shriram} alt="Shriram" className="h-6 md:h-8" />
          <img src={Enducare} alt="Enducare" className="h-6 md:h-8" />
          <img src={Theshri} alt="Theshri" className="h-6 md:h-8" />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className=" bg-white flex items-center justify-between px-4 md:px-8 py-4 relative z-30">
        {/* Logo */}
            <a href="/" className="flex items-center gap-3"> {/* लोगो को होम लिंक बनाएं */}
              <img src={Logo} alt="School Logo" className="h-12 w-12 rounded-full" />
              <div>
                <h1 className="text-blue-800 font-bold leading-tight">
                  The Shri Ram <br /> Universal School
                </h1>
                <p className="text-xs text-gray-500">Igniting Curiosity, Shaping Creativity</p>
              </div>
            </a>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="w-8 h-8 text-gray-700" />
            ) : (
              <HiMenu className="w-8 h-8 text-gray-700" />
            )}
          </button>
        </div>

        {/* Links */}
        <ul
          className={`md:flex gap-6 lg:gap-18 text-gray-700 font-medium items-center absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 md:left-auto top-full md:top-auto transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 py-4" : "max-h-0"
          } md:max-h-full flex-col md:flex-row`}
        >
          <li className="flex items-center gap-2 px-4 md:px-0 py-2 md:py-0 hover:text-blue-600 cursor-pointer">
            About Us <img src={Arrow} alt="dropdown icon" className="w-2 h-2" />
          </li>
          <li className="flex items-center gap-2 px-4 md:px-0 py-2 md:py-0 hover:text-blue-600 cursor-pointer">
            The Shri Way{" "}
            <img src={Arrow} alt="dropdown icon" className="w-2 h-2" />
          </li>
          <li className="flex items-center gap-2 px-4 md:px-0 py-2 md:py-0 hover:text-blue-600 cursor-pointer">
            Learning <img src={Arrow} alt="dropdown icon" className="w-2 h-2" />
          </li>
          <li className="px-4 md:px-0 py-2 md:py-0 hover:text-blue-600 cursor-pointer">
            Facilities
          </li>
          <li className="flex items-center gap-2 px-4 md:px-0 py-2 md:py-0 hover:text-blue-600 cursor-pointer">
            Admission <img src={Arrow} alt="dropdown icon" className="w-2 h-2" />
          </li>
          <li className="px-4 md:px-0 py-2 md:py-0 hover:text-blue-600 cursor-pointer">
            Gallery
          </li>
          <li className="px-4 md:px-0 py-2 md:py-0">
            <button className="bg-blue-800 text-white px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-blue-900 w-full md:w-auto">
              Contact us
            </button>
          </li>
        </ul>
      </nav>
    </header>
          <section className="relative w-full h-[0px] ">
            {/* Top Vector */}
            <img
              src={Vector1}
              alt="vector"
              className="absolute -top-[72px] left-0 w-full z-20"
            />
    
            {/* Background Hero Image */}

    
            {/* Overlay Content */}
 
          </section>
    </>
    
  );
}
