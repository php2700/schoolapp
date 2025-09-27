import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Vector from "../src/assets/home/vector.png";
import FooterImg from "../src/assets/home/footer.png";
import Logo from "../src/assets/home/logo.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate=useNavigate();

  const handleAbout=()=>{
navigate('/about/tsus-ludhiana')
  }

  const handleLeadership=()=>{
    navigate('/about/leadership-team')
  }
  const handlevision=()=>{
    navigate('/about/vision-mission')
  }
  const handleCore=()=>{
    navigate('/about/core-values')
  }
  const handleEducare=()=>{
    navigate('/shriWay/legacy')
  }
  const handleDiffrent=()=>{
    navigate('/shriWay/differentiators')
  }
  const handleAdmissionProcess=()=>{
    navigate('/admission/process')
  }
  const handleApplication=()=>{
    navigate('/admission/form')
  }
  const handleSchedule=()=>{
    navigate('/admission/visit')
  }
  const handleFaq=()=>{
    navigate('/admission/Faq')
  }
  const handleHome=()=>{
    navigate('/')
  }
  const handleGallery=()=>{
    navigate('/gallery')
  }
  const handleContact=()=>{
    navigate('/contact-us')
  }
 
  return (
    <footer className=" relative bg-[#25337C] text-white">
      
      <div className="absolute -top-[194px] inset-x-0 overflow-hidden leading-[0]">
        <img src={Vector} alt="" className="w-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-40 grid grid-cols-1 md:grid-cols-5 gap-8">
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

        <div>
          <h3 className="font-bold mb-3">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer" onClick={handleAbout}  >About TSUS Ludhiana</li>
            <li className="cursor-pointer" onClick={handleLeadership}>Leadership</li>
            <li className="cursor-pointer" onClick={handlevision}>Vision & Mission</li>
            <li className="cursor-pointer" onClick={handleCore}>Our Core Values</li>
            <li className="cursor-pointer" onClick={handleEducare}>Shri Educare Legacy</li>
            <li className="cursor-pointer" onClick={handleDiffrent}>What Makes Us Different</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Admission</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer" onClick={handleAdmissionProcess}>Admission Process</li>
            <li className="cursor-pointer" onClick={handleApplication}>Application Form</li>
            <li className="cursor-pointer" onClick={handleSchedule}>Schedule a Visit</li>
            <li className="cursor-pointer" onClick={handleFaq}>FAQs</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer" onClick={handleHome}>Home</li>
            <li className="cursor-pointer" onClick={handleGallery}>Gallery</li>
            <li className="cursor-pointer" onClick={handleContact}>Contact Us</li>
          </ul>
        </div>

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

      <div className="absolute bottom-0 right-4 hidden md:block">
        <img src={FooterImg} alt="Kids" className="h-65 object-contain" />
      </div>
    </footer>
  );
}
