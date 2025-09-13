import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="w-full shadow-md">
      {/* Top bar */}
      <div className="bg-white text-gray-600 text-sm flex justify-between items-center px-6 py-2 border-b">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-600" /> +91-9878787825
          </span>
          <span className="flex items-center gap-2">
            <MdEmail className="text-blue-600" /> info@tsusludhiana.com
          </span>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <FaFacebook className="cursor-pointer hover:text-blue-600" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="School Logo"
            className="h-12 w-12 rounded-full"
          />
          <div>
            <h1 className="text-blue-800 font-bold">
              The Shri Ram <br /> Universal School
            </h1>
            <p className="text-xs text-gray-500">
              Igniting Curiosity, Shaping Creativity
            </p>
          </div>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About Us</li>
          <li className="hover:text-blue-600 cursor-pointer">The Shri Way</li>
          <li className="hover:text-blue-600 cursor-pointer">Learning</li>
          <li className="hover:text-blue-600 cursor-pointer">Facilities</li>
          <li className="hover:text-blue-600 cursor-pointer">Admission</li>
          <li className="hover:text-blue-600 cursor-pointer">Gallery</li>
        </ul>

        {/* CTA Button */}
        <button className="bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-900">
          Contact us
        </button>
      </nav>
    </header>
  );
}
