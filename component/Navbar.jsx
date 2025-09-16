// import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// export default function Navbar() {
//   return (
//     <header className="w-full shadow-md">
//       {/* Top bar */}
//       <div className="bg-white text-gray-600 text-sm flex justify-between items-center px-6 py-2 border-b">
//         <div className="flex items-center gap-4">
//           <span className="flex items-center gap-2">
//             <FaPhoneAlt className="text-blue-600" /> +91-9878787825
//           </span>
//           <span className="flex items-center gap-2">
//             <MdEmail className="text-blue-600" /> info@tsusludhiana.com
//           </span>
//         </div>
//         <div className="flex items-center gap-4 text-lg">
//           <FaFacebook className="cursor-pointer hover:text-blue-600" />
//           <FaInstagram className="cursor-pointer hover:text-pink-500" />
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="flex items-center justify-between px-8 py-4 bg-white">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img
//             src="/logo.png"
//             alt="School Logo"
//             className="h-12 w-12 rounded-full"
//           />
//           <div>
//             <h1 className="text-blue-800 font-bold">
//               The Shri Ram <br /> Universal School
//             </h1>
//             <p className="text-xs text-gray-500">
//               Igniting Curiosity, Shaping Creativity
//             </p>
//           </div>
//         </div>

//         {/* Links */}
//         <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
//           <li className="hover:text-blue-600 cursor-pointer">Home</li>
          
//           <li className="hover:text-blue-600 cursor-pointer">About Us</li>
//           <li className="hover:text-blue-600 cursor-pointer">The Shri Way</li>
//           <li className="hover:text-blue-600 cursor-pointer">Learning</li>
//           <li className="hover:text-blue-600 cursor-pointer">Facilities</li>
//           <li className="hover:text-blue-600 cursor-pointer">Admission</li>
//           <li className="hover:text-blue-600 cursor-pointer">Gallery</li>
//         </ul>

//         {/* CTA Button */}
//         <button className="bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-900">
//           Contact us
//         </button>
//       </nav>
//     </header>
//   );
// }

// import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { useState } from "react";

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

//   return (
//     <header className="w-full shadow-md">
//       {/* Top bar */}
//       <div className="bg-white text-gray-600 text-sm flex justify-between items-center px-6 py-2 border-b">
//         <div className="flex items-center gap-4">
//           <span className="flex items-center gap-2">
//             <FaPhoneAlt className="text-blue-600" /> +91-9878787825
//           </span>
//           <span className="flex items-center gap-2">
//             <MdEmail className="text-blue-600" /> info@tsusludhiana.com
//           </span>
//         </div>
//         <div className="flex items-center gap-4 text-lg">
//           <FaFacebook className="cursor-pointer hover:text-blue-600" />
//           <FaInstagram className="cursor-pointer hover:text-pink-500" />
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white relative">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img src="/logo.png" alt="School Logo" className="h-12 w-12 rounded-full" />
//           <div>
//             <h1 className="text-blue-800 font-bold leading-tight">
//               The Shri Ram <br /> Universal School
//             </h1>
//             <p className="text-xs text-gray-500">Igniting Curiosity, Shaping Creativity</p>
//           </div>
//         </div>

//         {/* Mobile hamburger */}
//         <button
//           className="md:hidden px-3 py-2 rounded-md border"
//           onClick={() => setMobileOpen((s) => !s)}
//           aria-expanded={mobileOpen}
//         >
//           {mobileOpen ? "Close" : "Menu"}
//         </button>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
//           <li className="hover:text-blue-600 cursor-pointer">Home</li>

//           {/* About Us Dropdown - desktop uses CSS group hover */}
//           <li className="relative group">
//             <button className="flex items-center gap-2 hover:text-blue-600">
//               <span>About Us</span>
//               <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
//                 <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
//               </svg>
//             </button>

//             {/* dropdown: hidden by default, shown on group-hover */}
//             <div className="absolute top-full left-0 mt-2 w-64 bg-[#25337C] text-white shadow-lg rounded-md z-50 hidden group-hover:block">
//               <ul className="flex flex-col">
//                 <li className="px-4 py-2 hover:bg-[#F3D805] hover:text-[#25337C] cursor-pointer">About TSUS Ludhiana</li>
//                 <li className="px-4 py-2 hover:bg-[#F3D805] hover:text-[#25337C] cursor-pointer">The Leadership Team</li>
//                 <li className="px-4 py-2 hover:bg-[#F3D805] hover:text-[#25337C] cursor-pointer">Principal’s Message</li>
//                 <li className="px-4 py-2 hover:bg-[#F3D805] hover:text-[#25337C] cursor-pointer">Vision & Mission</li>
//                 <li className="px-4 py-2 hover:bg-[#F3D805] hover:text-[#25337C] cursor-pointer">Core Values</li>
//                 <li className="px-4 py-2 hover:bg-[#F3D805] hover:text-[#25337C] cursor-pointer">What Makes Us Different From Others</li>
//                 <li className="px-4 py-2 hover:bg-[#F3D805] hover:text-[#25337C] cursor-pointer">Blog</li>
//                 <li className="px-4 py-2 hover:bg-[#F3D805] hover:text-[#25337C] cursor-pointer">Mandatory Public Disclosure</li>
//               </ul>

//               <div className="p-4">
//                 <button className="bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-900 w-full">Contact us</button>
//               </div>
//             </div>
//           </li>

//           <li className="hover:text-blue-600 cursor-pointer">The Shri Way</li>
//           <li className="hover:text-blue-600 cursor-pointer">Learning</li>
//           <li className="hover:text-blue-600 cursor-pointer">Facilities</li>
//           <li className="hover:text-blue-600 cursor-pointer">Admission</li>
//           <li className="hover:text-blue-600 cursor-pointer">Gallery</li>
//         </ul>

//         {/* Mobile menu (simple) */}
//         {mobileOpen && (
//           <div className="md:hidden absolute top-full right-4 mt-2 w-64 bg-white shadow-lg rounded-md z-50">
//             <ul className="flex flex-col">
//               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home</li>

//               {/* Mobile About accordion */}
//               <li className="px-4 py-2">
//                 <button
//                   className="w-full flex justify-between items-center"
//                   onClick={() => setMobileAboutOpen((s) => !s)}
//                 >
//                   <span>About Us</span>
//                   <span>{mobileAboutOpen ? "▾" : "▸"}</span>
//                 </button>

//                 {mobileAboutOpen && (
//                   <ul className="mt-2 ml-4 flex flex-col">
//                     <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">About TSUS Ludhiana</li>
//                     <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">The Leadership Team</li>
//                     <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">Principal’s Message</li>
//                     <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">Vision & Mission</li>
//                     <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">Core Values</li>
//                   </ul>
//                 )}
//               </li>

//               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">The Shri Way</li>
//               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Learning</li>
//               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Facilities</li>
//               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Admission</li>
//               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Gallery</li>

//               <li className="p-4">
//                 <button className="bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold w-full">Contact us</button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }
import { useState } from "react";

import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from '../src/assets/home/logo.png';


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  // फ़ंक्शन जो मोबाइल मेनू को बंद करता है और अबाउट अस ड्रॉपडाउन को भी रीसेट करता है
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileAboutOpen(false); // जब मुख्य मेनू बंद हो तो About Us को भी बंद करें
  };

  return (
    <header className="w-full shadow-md bg-white">
      {/* Top bar */}
      <div className="hidden md:flex bg-white text-gray-600 text-sm justify-between items-center px-6 py-2 border-b">
        <div className="flex items-center gap-4">
          <a href="tel:+919878787825" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
            <FaPhoneAlt className="text-blue-600" /> +91-9878787825
          </a>
          <a href="mailto:info@tsusludhiana.com" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
            <MdEmail className="text-blue-600" /> info@tsusludhiana.com
          </a>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="cursor-pointer hover:text-blue-600 transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-3"> {/* लोगो को होम लिंक बनाएं */}
            <img src={Logo} alt="School Logo" className="h-12 w-12 rounded-full" />
            <div>
              <h1 className="text-blue-800 font-bold leading-tight">
                The Shri Ram <br /> Universal School
              </h1>
              <p className="text-xs text-gray-500">Igniting Curiosity, Shaping Creativity</p>
            </div>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMobileMenuOpen((s) => !s)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
          <li><a href="/" className="hover:text-blue-600 transition-colors">Home</a></li>

          {/* About Us Dropdown - desktop uses CSS group hover */}
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 focus:outline-none transition-colors" aria-haspopup="true" aria-expanded="false">
              <span>About Us</span>
              <svg className="w-4 h-4 mt-1 transform group-hover:rotate-180 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* dropdown: hidden by default, shown on group-hover */}
            <div className="absolute top-full left-0 mt-2 w-64 bg-[#25337C] text-white shadow-lg rounded-md z-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out translate-y-2 pointer-events-none group-hover:pointer-events-auto">
              <ul className="flex flex-col py-2">
                <li><a href="/about-tsus-ludhiana" className="px-4 py-2 block hover:bg-[#F3D805] hover:text-[#25337C] transition-colors">About TSUS Ludhiana</a></li>
                <li><a href="/leadership-team" className="px-4 py-2 block hover:bg-[#F3D805] hover:text-[#25337C] transition-colors">The Leadership Team</a></li>
                <li><a href="/principals-message" className="px-4 py-2 block hover:bg-[#F3D805] hover:text-[#25337C] transition-colors">Principal’s Message</a></li>
                <li><a href="/vision-mission" className="px-4 py-2 block hover:bg-[#F3D805] hover:text-[#25337C] transition-colors">Vision & Mission</a></li>
                <li><a href="/core-values" className="px-4 py-2 block hover:bg-[#F3D805] hover:text-[#25337C] transition-colors">Core Values</a></li>
                <li><a href="/what-makes-us-different" className="px-4 py-2 block hover:bg-[#F3D805] hover:text-[#25337C] transition-colors">What Makes Us Different From Others</a></li>
                <li><a href="/blog" className="px-4 py-2 block hover:bg-[#F3D805] hover:text-[#25337C] transition-colors">Blog</a></li>
                <li><a href="/mandatory-public-disclosure" className="px-4 py-2 block hover:bg-[#F3D805] hover:text-[#25337C] transition-colors">Mandatory Public Disclosure</a></li>
              </ul>
              <div className="p-4">
                <a href="/contact" className="bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-900 w-full block text-center transition-colors">Contact us</a>
              </div>
            </div>
          </li>

          <li><a href="/the-shri-way" className="hover:text-blue-600 transition-colors">The Shri Way</a></li>
          <li><a href="/learning" className="hover:text-blue-600 transition-colors">Learning</a></li>
          <li><a href="/facilities" className="hover:text-blue-600 transition-colors">Facilities</a></li>
          <li><a href="/admission" className="hover:text-blue-600 transition-colors">Admission</a></li>
          <li><a href="/gallery" className="hover:text-blue-600 transition-colors">Gallery</a></li>
        </ul>

        {/* Mobile menu (sliding from right) */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[49]" onClick={closeMobileMenu}>
            <div
              className="absolute top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
              onClick={(e) => e.stopPropagation()} // मेनू क्लिक करने पर बंद होने से रोकने के लिए
            >
              <div className="flex justify-between items-center px-4 py-4 border-b">
                <h2 className="text-lg font-bold">Menu</h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Close mobile menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <ul className="flex flex-col py-2">
                <li><a href="/" onClick={closeMobileMenu} className="px-4 py-3 block hover:bg-gray-100 transition-colors">Home</a></li>

                {/* Mobile About accordion */}
                <li className="py-2">
                  <button
                    className="w-full flex justify-between items-center px-4 py-1 hover:bg-gray-100 transition-colors focus:outline-none"
                    onClick={() => setMobileAboutOpen((s) => !s)}
                  >
                    <span className="font-medium">About Us</span>
                    <span>
                      <svg className={`w-4 h-4 transform transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </button>

                  {mobileAboutOpen && (
                    <ul className="mt-2 ml-6 flex flex-col border-l border-gray-200">
                      <li><a href="/about-tsus-ludhiana" onClick={closeMobileMenu} className="px-3 py-2 block text-sm hover:bg-gray-100 transition-colors">About TSUS Ludhiana</a></li>
                      <li><a href="/leadership-team" onClick={closeMobileMenu} className="px-3 py-2 block text-sm hover:bg-gray-100 transition-colors">The Leadership Team</a></li>
                      <li><a href="/principals-message" onClick={closeMobileMenu} className="px-3 py-2 block text-sm hover:bg-gray-100 transition-colors">Principal’s Message</a></li>
                      <li><a href="/vision-mission" onClick={closeMobileMenu} className="px-3 py-2 block text-sm hover:bg-gray-100 transition-colors">Vision & Mission</a></li>
                      <li><a href="/core-values" onClick={closeMobileMenu} className="px-3 py-2 block text-sm hover:bg-gray-100 transition-colors">Core Values</a></li>
                      <li><a href="/what-makes-us-different" onClick={closeMobileMenu} className="px-3 py-2 block text-sm hover:bg-gray-100 transition-colors">What Makes Us Different From Others</a></li>
                      <li><a href="/blog" onClick={closeMobileMenu} className="px-3 py-2 block text-sm hover:bg-gray-100 transition-colors">Blog</a></li>
                      <li><a href="/mandatory-public-disclosure" onClick={closeMobileMenu} className="px-3 py-2 block text-sm hover:bg-gray-100 transition-colors">Mandatory Public Disclosure</a></li>
                    </ul>
                  )}
                </li>

                <li><a href="/the-shri-way" onClick={closeMobileMenu} className="px-4 py-3 block hover:bg-gray-100 transition-colors">The Shri Way</a></li>
                <li><a href="/learning" onClick={closeMobileMenu} className="px-4 py-3 block hover:bg-gray-100 transition-colors">Learning</a></li>
                <li><a href="/facilities" onClick={closeMobileMenu} className="px-4 py-3 block hover:bg-gray-100 transition-colors">Facilities</a></li>
                <li><a href="/admission" onClick={closeMobileMenu} className="px-4 py-3 block hover:bg-gray-100 transition-colors">Admission</a></li>
                <li><a href="/gallery" onClick={closeMobileMenu} className="px-4 py-3 block hover:bg-gray-100 transition-colors">Gallery</a></li>

                <li className="p-4 mt-auto"> {/* 'Contact us' बटन को नीचे पुश करने के लिए mt-auto */}
                  <a href="/contact" onClick={closeMobileMenu} className="bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold w-full block text-center hover:bg-blue-900 transition-colors">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}