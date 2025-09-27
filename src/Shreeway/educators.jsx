import React, { useEffect, useState } from "react";
import ChevronRightIcon from "../assets/home/shriArrow.png";
import BannerImage from "../assets/home/Bannershree.png";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import homevector from "../assets/home/homevector.png";
import axios from "axios";

const Educators = () => {
  const [educatorData, setEducatorData] = useState();
  const [error, setError] = useState();

  const getEducatorData = async () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/shri-educator`)
      .then((res) => {
        setEducatorData(res?.data?.data);
      })
      .catch((error) => {
        setError(
          error?.response?.data?.message ||
            error?.message ||
            "something went wrong"
        );
      });
  };

  useEffect(() => {
    getEducatorData();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        {/* Banner Section */}
        <section
          className="relative h-100 bg-cover bg-center rounded-bl-[45px] rounded-br-[45px] overflow-hidden"
          style={{
            backgroundImage: `url(${import.meta.env.VITE_APP_URL}${
              educatorData?.banner
            })`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">
              SHRI Educators
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
              <span className="text-[#F3D805]">SHRI Educator</span>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="container mx-auto py-12 px-4 md:flex">
          {/* Left Sidebar */}
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
                    href="/shriWay/philisophy"
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
          <main className="w-full md:w-3/4 flex flex-col md:flex-row justify-center">
            <div className="md:w-2/3 md:ml-16">
              {" "}
              <h2 className="text-2xl font-bold mb-4">SHRI Educator</h2>
              <p className="text-center text-lg font-bold">
                न गुरोरधिकं तत्त्वं न गुरोरधिकं तपः ।
                <br />
                तत्त्वज्ञानात्परं नास्ति तस्मै श्रीगुरवे नमः॥
              </p>
              <p className="my-4 font-bold">
                “Salutation to the noble Guru, beyond whom there is no higher
                truth, there is no higher penance and there is nothing higher
                attainable than true knowledge.”
              </p>
              <p>
                {educatorData?.description?.length > 0 &&
                  educatorData?.description?.map((ele) => (
                    <>
                      {ele}
                      <br />
                    </>
                  ))}
              </p>
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

export default Educators;
