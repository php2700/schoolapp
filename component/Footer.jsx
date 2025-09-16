import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Vector from "../src/assets/home/vector.png"; // Corrected import
import FooterImg from "../src/assets/home/footer.png"; // Corrected import
import Logo from "../src/assets/home/logo.png"; // Corrected import

  // ... आपका बाकी कोड

 // kids wali image ka path

export default function Footer() {
  return (
    <footer className=" relative bg-[#25337C] text-white">
      {/* Wave Top Shape */}
      <div className="absolute -top-[194px] left-14 w-full overflow-hidden leading-[0]">
        <img src={Vector} alt="" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-40 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-start space-y-4">
          <img
            src={Logo}
            alt="The Shri Ram Universal School"
            className="w-20 h-20 bg-white rounded-full p-2"
          />
          <p className="font-semibold text-lg leading-tight">
            The Shri Ram Universal School
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold mb-3">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>About TSUS Ludhiana</li>
            <li>Leadership</li>
            <li>Vision & Mission</li>
            <li>Our Core Values</li>
            <li>Shri Educare Legacy</li>
            <li>What Makes Us Different</li>
          </ul>
        </div>

        {/* Admission */}
        <div>
          <h3 className="font-bold mb-3">Admission</h3>
          <ul className="space-y-2 text-sm">
            <li>Admission Process</li>
            <li>Application Form</li>
            <li>Schedule a Visit</li>
            <li>Brochure</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Gallery</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-3">GET IN TOUCH</h3>
          <p className="text-sm">
            The Shri Ram Universal School, Block 39, Southcity Enclave, Barewal
            Main Road, Ludhiana-141012
          </p>
          <p className="mt-2 text-sm">📞 +91-98765-76543</p>
          <p className="text-sm">✉️ info@tsusludhiana.com</p>
          <div className="flex space-x-4 mt-3">
            <FaInstagram className="w-5 h-5 cursor-pointer hover:text-pink-400" />
            <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-blue-400" />
            <FaTwitter className="w-5 h-5 cursor-pointer hover:text-sky-400" />
          </div>
        </div>
      </div>

      {/* Kids Image */}
      <div className="absolute bottom-0 right-4 hidden md:block">
        <img
          src={FooterImg}
          alt="Kids"
          className="h-65 object-contain"
        />
      </div>
    </footer>
  );
}
