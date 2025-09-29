// import Navbar from "../../component/Navbar";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Banner from "../assets/home/Bannerleder.png";
import homevector from "../assets/home/homevector.png";
import ChevronRightIcon from "../assets/home/shriArrow.png";
import icon from "../assets/home/arrowicon.png";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Corevalue() {
  const navigate=useNavigate()
  const [coreData, setCoreData] = useState();
  const [error, setError] = useState();

  const getCoreData = async () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/core`)
      .then((res) => {
        setCoreData(res?.data?.data);
        console.log(res.data);
      })
      .catch((error) => {
        setError(
          error?.response?.data?.message ||
            error?.message ||
            "something went wrong"
        );
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "something went wrong"
        );
      });
  };

  useEffect(() => {
    getCoreData();
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
            coreData?.image
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay for text readability */}
        <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">
            Core Values
          </h1>
          <div className="flex items-center text-lg mt-2">
            <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
            <a href="/" className="text-[#EDEDED] hover:text-white">
              Home
            </a>

            <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

            <a href="/about-us" className="text-[#EDEDED] hover:text-white">
              About
            </a>
            <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

            <span className="text-[#F3D805]">Core Values</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      {/* <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-600">
        Home <span className="mx-2">›</span>{" "}
        <span className="text-blue-700 font-medium">
          What makes us different from others
        </span>
      </div> */}

      {/* Content Section */}
      <div className=" bg-white container mx-auto py-12 px-4 md:flex">
        {/* Left Sidebar */}
        <aside className="w-full md:w-1/4 pr-8 mb-8 md:mb-0">
          <div
            className=" font-['poppins'] bg-white p-10  shadow  rounded-tl-lg rounded-br-lg
                   [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
          >
            <h3 className=" font-['poppins'] text-xl font-semibold text-[#25337C] mb-4">
              About Us
            </h3>
            <ul>
              <li className="mb-2">
                <div onClick={()=>handleUrl('/about/tsus-ludhiana')}
                  className="flex items-center justify-between py-2 px-3 rounded-md  hover:bg-gray-200  text-[#737373]"
                >
                  About TSUS Ludhiana
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3 text-[#737373]"
                  />
                </div>
              </li>
              <li className="mb-2">
              <div onClick={()=>handleUrl('/about/leadership-team')}
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  Leadership
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3 text-[#737373]"
                  />
                </div>
              </li>
              <li className="mb-2">
                <div onClick={()=>handleUrl('/about/principals-message')} 
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  Principal's Message
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </div>
              </li>
              <li className="mb-2">
                <div onClick={()=>handleUrl('/about/vision-mission')}
                  className="flex items-center justify-between py-2 px-3 rounded-md  hover:bg-gray-200 text-[#737373]"
                >
                  Vision & Mission
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </div>
              </li>
              <li>
                <div onClick={()=>handleUrl('/about/core-values')} 
                  className="flex items-center justify-between py-2 px-3 rounded-md bg-[#25337C] text-white"
                >
                  Core Values
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </div>
              </li>
              <li>
                 <div onClick={()=>handleUrl('/about/what-makes-us-different')}
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  What makes us different from others
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </div>
              </li>
              <li>
                 <div onClick={()=>handleUrl('/about/mandats')}
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  Mandatory Public Disclosure
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
          {coreData?.section?.length > 0 &&
            coreData?.section?.map((ele) => (
              <>
                <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6">
                  {ele?.title}
                </h2>
                <div className="mb-8 text-[#333333]  text-[18px] tracking-normal text-center font-['poppins'] font-medium">
                  {ele?.description?.length > 0 &&
                    ele?.description?.map((item) => (
                      <p className="mb-2">{item}</p>
                    ))}
                </div>
              </>
            ))}
          
        </main>
      </div>
      <diV className="mt-[200px]">
        <Footer />
      </diV>
    </div>
  );
}
