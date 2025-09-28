// import Navbar from "../../component/Navbar";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Banner from "../assets/home/Bannerleder.png";
import homevector from "../assets/home/homevector.png";
import ChevronRightIcon from "../assets/home/shriArrow.png";
import icon from "../assets/home/arrowicon.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Mandat() {
  const [mandatoryData, setMandatoryData] = useState();

  const getMandatoryData = async () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/mandatory`)
      .then((res) => {
        setMandatoryData(res?.data);
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
    getMandatoryData();
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
            mandatoryData?.banner
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay for text readability */}
        <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">
            Mandatory Public Disclosure
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

            <span className="text-[#F3D805]">Mandatory Public Disclosure</span>
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
        {/* Right Content */}
        <main
          className="w-full max-w-6xl mx-auto px-6 py-10 bg-white 
    rounded-lg shadow-lg font-['poppins'] text-left"
        >
          {/* A. General Information */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-[#25337C] mb-4 uppercase">
              A.{mandatoryData?.documents1?.heading}
            </h2>
            <div className="divide-y divide-gray-300">
              {mandatoryData?.documents1?.subHeading?.length > 0 &&
                mandatoryData?.documents1?.subHeading?.map((ele) => (
                  <div className="grid grid-cols-2 py-2">
                    <p className="font-medium">{ele?.key}</p>
                    <p>{ele?.value}</p>
                  </div>
                ))}
            </div>
          </section>

          {/* B. Documents/Information */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-[#25337C] mb-4 uppercase">
              B.{mandatoryData?.documents2?.heading}
            </h2>
            <div className="divide-y divide-gray-300">
              {mandatoryData?.documents2?.subHeading?.length > 0 &&
                mandatoryData?.documents2?.subHeading?.map((ele) => (
                  <div className="grid grid-cols-2 py-2">
                    <p>{ele?.key}</p>
                    <a
                      href={`${import.meta.env.VITE_APP_URL}${ele?.image}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      CLICK HERE
                    </a>
                  </div>
                ))}
            </div>
          </section>
          <section className="mb-10">
            <h2 className="text-lg font-bold text-[#25337C] mb-4 uppercase">
              c. {mandatoryData?.documents3?.heading}
            </h2>
            <div className="divide-y divide-gray-300">
              {mandatoryData?.documents3?.subHeading?.length > 0 &&
                mandatoryData?.documents3?.subHeading?.map((ele) => (
                  <div className="grid grid-cols-2 py-2">
                    <p>{ele.key}</p>
                    <a
                      href={`${import.meta.env.VITE_APP_URL}${ele?.image}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      CLICK HERE
                    </a>
                  </div>
                ))}
            </div>
          </section>
          <section className="mb-10">
            <h2 className="text-lg font-bold text-[#25337C] mb-4 uppercase">
              D: {mandatoryData?.documents4?.heading}
            </h2>
            <div className="divide-y divide-gray-300">
              {mandatoryData?.documents4?.subHeading?.length > 0 &&
                mandatoryData?.documents4?.subHeading?.map((ele) => (
                  <div className="grid grid-cols-2 py-2">
                    <p className="font-medium">{ele.key}</p>
                    <p>{ele?.value}</p>
                  </div>
                ))}
            </div>
          </section>
          <section className="mb-10">
            <h2 className="text-lg font-bold text-[#25337C] mb-4 uppercase">
              E:{mandatoryData?.documents5?.heading}
            </h2>
            <div className="divide-y divide-gray-300">
              {mandatoryData?.documents5?.subHeading?.length > 0 &&
                mandatoryData?.documents5?.subHeading?.map((ele) => (
                  <div className="grid grid-cols-2 py-2">
                    <p className="font-medium">{ele?.key}</p>
                    <p>{ele?.value}</p>
                  </div>
                ))}
            </div>
          </section>
        </main>
      </div>
      <diV className="mt-[200px]">
        <Footer />
      </diV>
    </div>
  );
}
