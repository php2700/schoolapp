// import Navbar from "../../component/Navbar";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Banner from "../assets/home/Bannerleder.png";
import homevector from "../assets/home/homevector.png";
import ChevronRightIcon from "../assets/home/shriArrow.png";
import icon from "../assets/home/arrowicon.png";
import image from "../assets/home/sportsimage.jpg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Sports() {
  const [sportData, setSportData] = useState();
  const [error, setError] = useState();

  const getSportData = async () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/sport`)
      .then((res) => {
        setSportData(res?.data);
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
    getSportData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_APP_URL}${
            sportData?.banner
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay for text readability */}
        <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">
            Sports
          </h1>
          <div className="flex items-center text-lg mt-2">
            <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
            <a href="/" className="text-[#EDEDED] hover:text-white">
              Home
            </a>

            <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

            <a href="/about-us" className="text-[#EDEDED] hover:text-white">
              Co-curriculum Pursuit
            </a>
            <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

            <span className="text-[#F3D805]">Sports</span>
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
              Co-curriculum Pursuit
            </h3>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center justify-between py-2 px-3 rounded-md   hover:bg-gray-200 text-[#737373]"
                >
                  Art and Visual Art
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3 text-[#737373]"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  TSUS Societies And Clubs
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3 text-[#737373]"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center justify-between py-2 px-3 rounded-md bg-[#25337C] text-white"
                >
                  Sports
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373] "
                >
                  Beyond the Classroom
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  Environment Initiatives
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </a>
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
          <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6">
            Physical Education and Sports
          </h2>

          {/* Hindi Content */}
          <div className="mb-8 text-[#333333]  text-[18px] tracking-normal text-center font-['poppins'] font-medium">
            <p className="mb-12">{sportData?.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {sportData?.images?.length > 0 &&
                sportData?.images?.map((ele, index) => (
                  <img
                    key={index}
                    src={`${import.meta.env.VITE_APP_URL}${ele}`}
                    alt="Basketball"
                    className="w-full h-auto object-cover rounded shadow-md"
                  />
                ))}
            </div>
          </div>
        </main>
      </div>
      <diV className="mt-[200px]">
        <Footer />
      </diV>
    </div>
  );
}
