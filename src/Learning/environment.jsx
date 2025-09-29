// import Navbar from "../../component/Navbar";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Banner from "../assets/home/Bannerleder.png";
import homevector from "../assets/home/homevector.png";
import ChevronRightIcon from "../assets/home/shriArrow.png";
import icon from "../assets/home/arrowicon.png";
import gujralImage from "../assets/home/leadershipmg.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Environment() {
  const navigate = useNavigate();
  const [environmentData, setEnvironmentData] = useState();
  const [error, setError] = useState();

  const getEnvironmentData = async () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/environment`)
      .then((res) => {
        setEnvironmentData(res?.data?.data);
        // console.log(res.data)
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
    getEnvironmentData();
  }, []);

  const handleUrl = (url) => {
    navigate(url);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_APP_URL}${
            environmentData?.banner
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay for text readability */}
        <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">
            Environment Initiatives
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

            <span className="text-[#F3D805]">Environment Initiatives</span>
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
              Co-curriculum Pursuit
            </h3>
            <ul>
              <li className="mb-2">
                <div
                  onClick={() => handleUrl("/learning/Art")}
                  className="flex items-center justify-between py-2 px-3 rounded-md  hover:bg-gray-200 text-[#737373] "
                >
                  Art and Visual Art
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3 text-[#737373]"
                  />
                </div>
              </li>
              <li className="mb-2">
                <div
                  onClick={() => handleUrl("/learning/Society")}
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  TSUS Societies And Clubs
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3 text-[#737373]"
                  />
                </div>
              </li>
              <li className="mb-2">
                <div
                  onClick={() => handleUrl("/learning/Sports")}
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  Sports
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </div>
              </li>
              <li className="mb-2">
                <div
                  onClick={() => handleUrl("/learning/Classroom")}
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373] "
                >
                  Beyond the Classroom
                  <img
                    src={ChevronRightIcon} // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </div>
              </li>
              <li>
                <div
                  onClick={() => handleUrl("/learning/Environment")}
                  className="flex items-center justify-between py-2 px-3 rounded-md bg-[#25337C] text-white"
                >
                  Environment Initiatives
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
          className="w-full max-w-6xl mx-auto px-4 py-8 bg-white
                   rounded-tl-lg rounded-br-lg
                   [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center text-left mb-8">
            <div className="md:w-1/3 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              {/* Replace with your actual image path */}
              <img
                src={`${import.meta.env.VITE_APP_URL}${
                  environmentData?.profile
                }`}
                alt="Dr. Navneet Kaur"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-[#333333] text-[18px] tracking-normal font-['poppins']  mb-4">
                {environmentData?.message}
              </p>
            </div>
          </div>

          {environmentData?.section?.length > 0 &&
            environmentData?.section?.map((ele) => (
              <>
                <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-center text-[#25337C] mb-3 mt-6">
                  {ele?.title}
                </h2>
                <div className="mb-8 text-[#333333]  text-[18px] tracking-normal text-center font-['poppins'] font-medium">
                  <p className="mb-6">{ele?.description}</p>
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
