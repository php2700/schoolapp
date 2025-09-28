import React, { useEffect, useState } from "react";
import ChevronRightIcon from "../assets/home/shriArrow.png";
import BannerImage from "../assets/home/Bannershree.png";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import homevector from "../assets/home/homevector.png";
import axios from "axios";
import { toast } from "react-toastify";

const Differentiators = () => {
   const [diffrentiatorData, setDiffrentiatorData] = useState();
  const [error, setError] = useState();

  const getDiffrentiatorData = async () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/shri-differentiator`)
      .then((res) => {
        setDiffrentiatorData(res?.data?.data);
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
    getDiffrentiatorData();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        <section
          className="relative h-100 bg-cover bg-center rounded-bl-[45px] rounded-br-[45px] overflow-hidden"
          style={{ backgroundImage: `url(${import.meta.env.VITE_APP_URL}${diffrentiatorData?.banner})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">
              SHRI Differentiators
            </h1>
            <div className="flex items-center text-lg mt-2">
              <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
              <a href="/" className="text-[#EDEDED] hover:text-white">
                Home
              </a>
              <span className="mx-2">/</span>
              <a href="/about-us" className="text-[#EDEDED] hover:text-white">
                About Us
              </a>
              <span className="mx-2">/</span>
              <span className="text-[#F3D805]">SHRI Differentiators</span>
            </div>
          </div>
        </section>

        <div className="container mx-auto py-12 px-4 md:flex">
          <aside className="w-full md:w-1/4 pr-8 mb-8 md:mb-0">
            <div className="font-['poppins'] bg-white p-10 mt-20 ml-10 shadow rounded-tl-lg rounded-br-lg [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]">
              <h3 className="font-['poppins'] text-xl font-semibold text-[#25337C] mb-4">
                The Shri Way
              </h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="/shriWay"
                    className="flex items-center justify-between py-2 px-3 rounded-md bg-[#25337C] text-white"
                  >
                    Meaning of "SHRI"
                    <img
                      src={ChevronRightIcon}
                      alt="chevron right"
                      className="h-6 w-3 text-[#737373]"
                    />
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/shriWay/legacy"
                    className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                  >
                    SHRI Educate Legacy
                    <img
                      src={ChevronRightIcon}
                      alt="chevron right"
                      className="h-6 w-3 text-[#737373]"
                    />
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/shriWay/philosophy"
                    className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                  >
                    SHRI Philosophy
                    <img
                      src={ChevronRightIcon}
                      alt="chevron right"
                      className="h-6 w-3"
                    />
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/shriWay/differentiators"
                    className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                  >
                    SHRI Differentiators
                    <img
                      src={ChevronRightIcon}
                      alt="chevron right"
                      className="h-6 w-3"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="/shriWay/educators"
                    className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                  >
                    SHRI Educators
                    <img
                      src={ChevronRightIcon}
                      alt="chevron right"
                      className="h-6 w-3"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <main className="w-full md:w-3/4 flex flex-col md:ml-12">
            <h2 className="text-2xl font-bold mb-6">SHRI Differentiators</h2>
            <blockquote className=" mb-4 ml-10 font-bold">
              "If a child cannot learn the way we teach, maybe we should teach
              the way they learn."
              <br />
              <span className="not-italic text-right block">
                - Ignacio Estrada
              </span>
            </blockquote>
            <div className="space-y-6">
              {diffrentiatorData?.section?.length>0 && diffrentiatorData?.section.map((item, index) => (
                <div key={item.id} className="p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-900 mb-4">{item.description}</p>
                  {index !== diffrentiatorData?.section.length - 1 && (
                    <div className="border-b border-gray-300 mt-4"></div>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <div className="mt-[170px]">
        <Footer />
      </div>
    </>
  );
};

export default Differentiators;
