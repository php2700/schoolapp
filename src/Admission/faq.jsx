// import Navbar from "../../component/Navbar";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Banner from "../assets/home/Bannerleder.png";
import homevector from "../assets/home/homevector.png";
import ChevronRightIcon from "../assets/home/shriArrow.png";
import icon from "../assets/home/arrowicon.png";
import Arrowdown from "../assets/home/Arrowdown.png";
import aks2 from "../assets/home/freqask2.png";
import aks3 from "../assets/home/freqaks3.png";
import aks4 from "../assets/home/freqask4.png";
import ask1 from "../assets/home/freqimg1.png";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Faq() {
const navigate=useNavigate()

  const [faqBannerData, setFaqBannerData] = useState();
  const [faqData, setFaqData] = useState([]);
  const getFaqBannerData = async () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/faq-banner`)
      .then((res) => {
        setFaqBannerData(res?.data);
        console.log(res.data);
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "something went wrong"
        );
      });
  };

  useEffect(() => {
    getFaqBannerData();
  }, []);

  const getFaqData = async () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/faq-list`)
      .then((res) => {
        setFaqData(res?.data);
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "something went wrong"
        );
      });
  };

  useEffect(() => {
    getFaqData();
  }, []);

   const handleUrl=(url)=>{
    navigate(url)
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_APP_URL}${
            faqBannerData?.banner
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay for text readability */}
        <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">
            FAQs
          </h1>
          <div className="flex items-center text-lg mt-2">
            <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
            <a href="/" className="text-[#EDEDED] hover:text-white">
              Home
            </a>

            <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

            <a href="/about-us" className="text-[#EDEDED] hover:text-white">
              Admission
            </a>
            <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

            <span className="text-[#F3D805]">FAQs</span>
          </div>
        </div>
      </section>


      {/* Content Section */}
      <div className=" bg-white container mx-auto py-12 px-4 md:flex">
        {/* Left Sidebar */}
        <aside className="w-full md:w-1/4 pr-8 mb-8 md:mb-0">
          <div
            className=" font-['poppins'] bg-white p-10  shadow  rounded-tl-lg rounded-br-lg
                   [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
          >
            <h3 className=" font-['poppins'] text-xl font-semibold text-[#25337C] mb-4">
              Admission
            </h3>
            <ul>
              <li className="mb-2">
                <div onClick={()=>handleUrl("/admission/form")}
                  className="flex items-center justify-between py-2 px-3 rounded-md  hover:bg-gray-200  text-[#737373]"
                >
                  Application Form
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3 text-[#737373]"
                  />
                </div>
              </li>
              <li className="mb-2">
                <div onClick={()=>handleUrl("/admission/visit")}
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  Schedule a Visit
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3 text-[#737373]"
                  />
                </div>
              </li>
              <li className="mb-2">
                <div onClick={()=>handleUrl("/admission/Faq")}
                  className="flex items-center justify-between py-2 px-3 rounded-md  bg-[#25337c] text-white"
                >
                  FAQs
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </div>
              </li>
            </ul>
          </div>
        </aside>

        {/* Right Content */}
        <main
          className="w-full max-w-6xl mx-auto px-4 py-8 bg-white text-center
             rounded-tl-lg rounded-br-lg
             [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
        >
          <div className="space-y-4">
            {faqData?.length > 0 &&
              faqData?.map((ele) => (
                <details className="group bg-white rounded-xl shadow-md p-5 cursor-pointer">
                  <summary className="flex justify-between items-center font-semibold text-gray-800">
                    <div className="flex items-center gap-3 font-poppins font-medium text-[20px] leading-[20px] tracking-[0.5px]">
                      <span className="bg-[#F3D805] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center">
                        <img src={ask1} alt="icon" className="h-6 w-6" />
                      </span>
                      {ele?.title}
                    </div>
                    <span className="transition-transform duration-300 group-open:rotate-180">
                      <img
                        src={Arrowdown}
                        alt="arrow"
                        className="h-5 w-5 text-[#000000]"
                      />
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm">
                    {ele?.description}
                  </p>
                </details>
              ))}
          </div>
        </main>
      </div>
      <diV className="mt-[200px]">
        <Footer />
      </diV>
    </div>
  );
}
