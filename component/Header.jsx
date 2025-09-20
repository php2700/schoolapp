import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Shriram from '../src/assets/home/shriramconnect.png';
import Enducare from '../src/assets/home/educator.png';
import Theshri from '../src/assets/home/thesriram.png';
import Facebook from '../src/assets/home/facebook.png';
import Whatsapps from '../src/assets/home/whatsapp.png';
import Instagram from '../src/assets/home/instagram.png';
import Arrow from '../src/assets/home/arrow.png';
import Logo from '../src/assets/home/logo.png';
import Vector1 from '../src/assets/home/vector1.png';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Resize handler to reset states on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMainMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleMouseEnter = (dropdownName) => {
    console.log("Mouse Enter:", dropdownName); // Debugging
    if (window.innerWidth >= 768) {
      setActiveDropdown(dropdownName);
    }
  };

  const handleMouseLeave = () => {
    console.log("Mouse Leave"); // Debugging
    if (window.innerWidth >= 768) {
      setActiveDropdown(null);
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <header className="w-full shadow-md">
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

        <nav className="bg-white flex items-center justify-between px-4 md:px-8 py-4 relative z-30">
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="School Logo" className="h-12 w-12 rounded-full" />
            <div>
              <h1 className="text-blue-800 font-bold leading-tight">
                The Shri Ram <br /> Universal School
              </h1>
              <p className="text-xs text-gray-500">Igniting Curiosity, Shaping Creativity</p>
            </div>
          </Link>

          <div className="md:hidden">
            <button onClick={toggleMainMenu}>
              {isOpen ? (
                <HiX className="w-8 h-8 text-gray-700" />
              ) : (
                <HiMenu className="w-8 h-8 text-gray-700" />
              )}
            </button>
          </div>

          <ul
            className={`md:flex gap-6 lg:gap-18 text-gray-700 font-medium items-center absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 md:left-auto top-full md:top-auto transition-all duration-300 ${isOpen ? "max-h-screen py-4 overflow-y-auto" : "max-h-0 overflow-hidden"
              } md:max-h-full md:overflow-visible flex-col md:flex-row`}
          >
            <li
              className="relative px-4 md:px-0 py-2 md:py-0"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("about")}
                className="flex items-center gap-2 hover:text-blue-600 cursor-pointer w-full text-left"
              >
                About Us <img src={Arrow} alt="dropdown icon" className={`w-2 h-2 transition-transform ${activeDropdown === "about" ? 'rotate-180' : ''}`} />
              </button>
              <ul
                className={`md:absolute md:bg-white md:shadow-lg md:rounded-md mt-2 md:mt-0 md:w-56 overflow-hidden transition-all duration-300 z-50 ${activeDropdown === "about"
                  ? "max-h-96 opacity-100 py-2 md:max-h-fit md:opacity-100"
                  : "max-h-0 opacity-0 md:max-h-0 md:opacity-0"
                  }`}
              >
                <li>
                  <Link
                    to="/about/tsus-ludhiana"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    About TSUS Ludhiana
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/leadership-team"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    The Leadership Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/principals-message"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    Principal's Message
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/vision-mission"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    Vision & Mission
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/core-values"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    Core Values
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/what-makes-us-different"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    What Makes Us Different From Others
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/blog"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/mandats"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    Mandatory Public Disclosure
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className="relative px-4 md:px-0 py-2 md:py-0"
              onMouseEnter={() => handleMouseEnter("shriWay")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("shriWay")}
                className="flex items-center gap-2 hover:text-blue-600 cursor-pointer w-full text-left"
              >
                The Shri Way <img src={Arrow} alt="dropdown icon" className={`w-2 h-2 transition-transform ${activeDropdown === "shriWay" ? 'rotate-180' : ''}`} />
              </button>
              <ul
                className={`md:absolute md:bg-white md:shadow-lg md:rounded-md mt-2 md:mt-0 md:w-56 overflow-hidden transition-all duration-300 z-50 ${activeDropdown === "shriWay"
                  ? "max-h-96 opacity-100 py-2 md:max-h-fit md:opacity-100"
                  : "max-h-0 opacity-0 md:max-h-0 md:opacity-0"
                  }`}
              >
                <li>
                  <Link
                    to="/shriWay"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    Meanning of shri
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shriWay/legacy"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    SHRI Educare Legacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shriWay/philosophy"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    SHRI Philosophy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shriWay/differentiators"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    SHRI Differentiators
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shriWay/educators"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    SHRI Educator
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className="relative px-4 md:px-0 py-2 md:py-0"
              onMouseEnter={() => handleMouseEnter("learning")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("learning")}
                className="flex items-center gap-2 hover:text-blue-600 cursor-pointer w-full text-left"
              >
                Learning <img src={Arrow} alt="dropdown icon" className={`w-2 h-2 transition-transform ${activeDropdown === "learning" ? 'rotate-180' : ''}`} />
              </button>
              <ul
                className={`md:absolute md:bg-white md:shadow-lg md:rounded-md mt-2 md:mt-0 md:w-56 overflow-hidden transition-all duration-300 z-50 ${activeDropdown === "learning"
                  ? "max-h-96 opacity-100 py-2 md:max-h-fit md:opacity-100"
                  : "max-h-0 opacity-0 md:max-h-0 md:opacity-0"
                  }`}
              >
                <li>
                  <Link
                    to="/learning/pedagogy"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    CBSE School Curriculum and Pedagogy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/learning/curriculum"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    Co-Curriculum Pursuit
                  </Link>
                </li>
                <li>
                  <Link
                    to="/learning/Art"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    Art and Visual Art
                  </Link>
                </li>
                <li>
                  <Link
                    to="/learning/Society"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                     TSUS Societies And Clubs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/learning/Sports"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    Sports
                  </Link>
                </li>
                <li>
                  <Link
                    to="/learning/Classroom"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                   Beyond the Classroom
                  </Link>
                </li>
                <li>
                  <Link
                    to="/learning/Environment"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    Environment Initiatives
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li
              className="relative px-4 md:px-0 py-2 md:py-0"
              onMouseEnter={() => handleMouseEnter("learning")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("learning")}
                className="flex items-center gap-2 hover:text-blue-600 cursor-pointer w-full text-left"
              >
                Learning{" "}
                <img
                  src={Arrow}
                  alt="dropdown icon"
                  className={`w-2 h-2 transition-transform ${activeDropdown === "learning" ? "rotate-180" : ""
                    }`}
                />
              </button>

              
              <ul
                className={`md:absolute md:bg-white md:shadow-lg md:rounded-md mt-2 md:mt-0 md:w-56 overflow-hidden transition-all duration-300 z-50 ${activeDropdown === "learning"
                    ? "max-h-96 opacity-100 py-2 md:max-h-fit md:opacity-100"
                    : "max-h-0 opacity-0 md:max-h-0 md:opacity-0"
                  }`}
              >
             
                <li>
                  <Link
                    to="/learning/curriculum"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    CBSE School Curriculum and Pedagogy
                  </Link>
                </li>

                
                <li
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter("co-curriculum")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => toggleDropdown("co-curriculum")}
                    className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    Co-Curriculum Pursuit
                    <img
                      src={Arrow}
                      alt="dropdown icon"
                      className={`w-2 h-2 transition-transform ${activeDropdown === "co-curriculum" ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                 
                  
                  <ul
                    className={`md:absolute md:left-full md:top-0 md:bg-white md:shadow-lg md:rounded-md md:w-56 overflow-hidden transition-all duration-300 ${activeDropdown === "co-curriculum"
                        ? "max-h-96 opacity-100 py-2 md:max-h-fit md:opacity-100"
                        : "max-h-0 opacity-0 md:max-h-0 md:opacity-0"
                      }`}
                  >
                    <li>
                      <Link
                        to="/learning/music"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                      >
                        Music & Arts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/learning/sports"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                      >
                        Sports & Fitness
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/learning/activities"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                      >
                        Clubs & Activities
                      </Link>
                    </li>
                  </ul>

                </li>
              </ul>
            </li> */}


            <li className="px-4 md:px-0 py-2 md:py-0 hover:text-blue-600 cursor-pointer">
              <Link to="/facilities" onClick={handleLinkClick}>Facilities</Link>
            </li>

            <li
              className="relative px-4 md:px-0 py-2 md:py-0"
              onMouseEnter={() => handleMouseEnter("admission")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("admission")}
                className="flex items-center gap-2 hover:text-blue-600 cursor-pointer w-full text-left md:w-auto"
              >
                Admission <img src={Arrow} alt="dropdown icon" className={`w-2 h-2 transition-transform ${activeDropdown === "admission" ? 'rotate-180' : ''}`} />
              </button>
              <ul
                className={`md:absolute md:bg-white md:shadow-lg md:rounded-md mt-2 md:mt-0 md:w-56 overflow-hidden transition-all duration-300 z-50 ${activeDropdown === "admission"
                  ? "max-h-96 opacity-100 py-2 md:max-h-fit md:opacity-100"
                  : "max-h-0 opacity-0 md:max-h-0 md:opacity-0"
                  }`}
              >
                <li>
                  <Link
                    to="/admission/info"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    Admission Process
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admission/info"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    Application Form
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admission/info"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    Schedule a Visit
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admission/info"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 md:text-blue-900"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>

            <li className="px-4 md:px-0 py-2 md:py-0 hover:text-blue-600 cursor-pointer">
              <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
            </li>

            <li className="px-4 md:px-0 py-2 md:py-0">
              <Link
                to="/contact-us"
                onClick={handleLinkClick}
                className="bg-blue-800 text-white px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-blue-900 w-full md:w-auto inline-block text-center cursor-pointer"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="relative w-full h-[0px]">
        <img
          src={Vector1}
          alt="vector"
          className="absolute -top-[72px] left-0 w-full z-20"
        />
      </section>
    </>
  );
}