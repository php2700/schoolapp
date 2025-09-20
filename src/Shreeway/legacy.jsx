import React from "react";
import ChevronRightIcon from "../assets/home/shriArrow.png";
import BannerImage from "../assets/home/Bannershree.png";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import homevector from "../assets/home/homevector.png";
import legacyImg1 from "../assets/Legacy/legacy1.jpg";
import legacyImg2 from "../assets/Legacy/legacy2.jpg";
import legacyImg3 from "../assets/legacy/legacy3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";

const Legacy = () => {
  const legacyItems = [
    {
      id: 1,
      year: "1884",
      title:
        "SHRI EDUCARE LEGACY SIR SHRI RAM (APR 27, 1884 – JAN 11, 1963) FOUNDER, THE SHRI RAM GROUP",
      description:
        "Carrying the legacy of its Group Founder Sir Shri Ram (1884 – 1963), who was instrumental in setting up premium educational institutions such as the Shri Ram College of Commerce (SRCC) and Lady Shri Ram College (LSR) for women.",
      bgColor: "#25337C", // blue
      textColor: "#FFFFFF",
      image: legacyImg1,
    },
    {
      id: 2,
      year: "1926",
      title: "SHRI RAM COLLEGE OF COMMERCE (SRCC)",
      description:
        "Shri Ram College of Commerce (Established 1926) SRCC is Ranked 1st in Commerce Colleges in India for more than 12 years running.",
      bgColor: "#6BA542", // green
      textColor: "#FFFFFF",
      image: legacyImg2,
    },
    {
      id: 3,
      year: "1926",
      title: "SHRI RAM COLLEGE OF COMMERCE (SRCC)",
      description:
        "Shri Ram College of Commerce (Established 1926) SRCC is Ranked 1st in Commerce Colleges in India for more than 12 years running.",
      bgColor: "#962291", // purple
      textColor: "#FFFFFF",
      image: legacyImg3,
    },
    {
      id: 4,
      year: "1926",
      title: "SHRI RAM COLLEGE OF COMMERCE (SRCC)",
      description:
        "Shri Ram College of Commerce (Established 1926) SRCC is Ranked 1st in Commerce Colleges in India for more than 12 years running.",
      bgColor: "#A5431E", // brown
      textColor: "#FFFFFF",
      image: legacyImg1,
    },
    {
      id: 5,
      year: "1926",
      title: "SHRI RAM COLLEGE OF COMMERCE (SRCC)",
      description:
        "Shri Ram College of Commerce (Established 1926) SRCC is Ranked 1st in Commerce Colleges in India for more than 12 years running.",
      bgColor: "#224DD6", // blue
      textColor: "#FFFFFF",
      image: legacyImg2,
    },
    {
      id: 6,
      year: "1926",
      title: "SHRI RAM COLLEGE OF COMMERCE (SRCC)",
      description:
        "Shri Ram College of Commerce (Established 1926) SRCC is Ranked 1st in Commerce Colleges in India for more than 12 years running.",
      bgColor: "#B4000C", // red
      textColor: "#FFFFFF",
      image: legacyImg3,
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        {/* Banner Section */}
        <section
          className="relative h-[50vh] sm:h-[60vh] bg-cover bg-center rounded-bl-[30px] sm:rounded-bl-[45px] rounded-br-[30px] sm:rounded-br-[45px] overflow-hidden"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6">
            <h1 className="font-['poppins'] font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight">
              SHRI Educare Legacy
            </h1>
            <div className="flex flex-wrap items-center justify-center text-sm sm:text-base mt-2 gap-2">
              <img
                src={homevector}
                alt="Home Icon"
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
              />
              <a href="/" className="text-[#EDEDED] hover:text-white">
                Home
              </a>
              <span className="mx-1">/</span>
              <a href="/about-us" className="text-[#EDEDED] hover:text-white">
                About Us
              </a>
              <span className="mx-1">/</span>
              <span className="text-[#F3D805]">SHRI Educare Legacy</span>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Left Sidebar */}
            <aside className="w-full md:w-1/4 mb-8 md:mb-0">
              <div
                className="font-['poppins'] bg-white p-4 sm:p-6 md:p-8 mt-6 sm:mt-10 md:mt-16 shadow rounded-tl-lg rounded-br-lg
                  [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[#25337C] mb-4">
                  The Shri Way
                </h3>
                <ul>
                  <li className="mb-2">
                    <a
                      href="/shriWay"
                      className="flex items-center justify-between py-2 px-3 rounded-md bg-[#25337C] text-white text-sm sm:text-base"
                    >
                      Meaning of "SHRI"
                      <img
                        src={ChevronRightIcon}
                        alt="chevron right"
                        className="h-5 w-2 sm:h-6 sm:w-3"
                      />
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/shriWay/legacy"
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373] text-sm sm:text-base"
                    >
                      SHRI Educate Legacy
                      <img
                        src={ChevronRightIcon}
                        alt="chevron right"
                        className="h-5 w-2 sm:h-6 sm:w-3"
                      />
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/shriWay/philisophy"
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373] text-sm sm:text-base"
                    >
                      SHRI Philosophy
                      <img
                        src={ChevronRightIcon}
                        alt="chevron right"
                        className="h-5 w-2 sm:h-6 sm:w-3"
                      />
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/shriWay/differentiators"
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373] text-sm sm:text-base"
                    >
                      SHRI Differentiators
                      <img
                        src={ChevronRightIcon}
                        alt="chevron right"
                        className="h-5 w-2 sm:h-6 sm:w-3"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/shriWay/educators"
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373] text-sm sm:text-base"
                    >
                      SHRI Educators
                      <img
                        src={ChevronRightIcon}
                        alt="chevron right"
                        className="h-5 w-2 sm:h-6 sm:w-3"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Right Content */}
            <main className="w-full md:w-3/4 flex flex-col items-center justify-center">
              {/* Legacy with lines */}
              <div className="w-full flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <h2 className="mx-4 text-sm sm:text-base font-bold text-black">
                  LEGACY
                </h2>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Second Heading */}
              <h3 className="text-lg sm:text-xl font-bold text-center text-black mt-3">
                SHRI EDUCARE LEGACY OF "SHRI"
              </h3>

              {/* Circle structure */}
              <div className="mt-6 sm:mt-8 flex items-center justify-center">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-4 sm:border-5 border-gray-300 bg-white flex items-center justify-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-300"></div>
                </div>
              </div>

              {/* Legacy Section */}
              <div className="w-full py-8 sm:py-12 px-2 sm:px-4">
                {legacyItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="mb-12 sm:mb-16 max-w-full sm:max-w-[900px] mx-auto"
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-4 sm:gap-6">
                      {index % 2 === 0 ? (
                        <>
                          {/* Image Left */}
                          <div className="w-full md:w-5/12 flex justify-center items-center mb-4 sm:mb-6 md:mb-0">
                            <div className="p-4 sm:p-6 flex justify-center items-center w-full h-full">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto max-w-[80%] sm:max-w-[300px] max-h-[200px] sm:max-h-[250px] object-contain"
                              />
                            </div>
                          </div>

                          {/* Description Right */}
                          <div
                            className="w-full md:w-5/12 p-4 sm:p-6 md:p-8 flex flex-col justify-center"
                            style={{
                              backgroundColor: item.bgColor,
                              color: item.textColor,
                            }}
                          >
                            <h2 className="text-xl sm:text-2xl font-bold mb-2">
                              {item.year}
                            </h2>
                            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                              {item.title}
                            </h3>
                            <p className="text-sm sm:text-base font-semibold">
                              {item.description}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Description Left */}
                          <div
                            className="w-full md:w-5/12 p-4 sm:p-6 md:p-8 flex flex-col justify-center order-2 md:order-1"
                            style={{
                              backgroundColor: item.bgColor,
                              color: item.textColor,
                            }}
                          >
                            <h2 className="text-xl sm:text-2xl font-bold mb-2">
                              {item.year}
                            </h2>
                            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                              {item.title}
                            </h3>
                            <p className="text-sm sm:text-base font-semibold">
                              {item.description}
                            </p>
                          </div>

                          {/* Image Right */}
                          <div className="w-full md:w-5/12 flex justify-center items-center mb-4 sm:mb-6 md:mb-0 order-1 md:order-2">
                            <div className="p-4 sm:p-6 flex justify-center items-center w-full h-full">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto max-w-[80%] sm:max-w-[300px] max-h-[200px] sm:max-h-[250px] object-contain"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Divider with bird */}
                    <div className="flex items-center justify-center my-6 sm:my-8">
                      <div className="flex-grow border-t border-gray-300"></div>
                      <FontAwesomeIcon
                        icon={faDove}
                        style={{ color: "#86888c" }}
                        className="mx-4 text-base sm:text-lg"
                      />
                      <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                  </div>
                ))}
                <div className="mt-6 sm:mt-8 flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-4 sm:border-5 border-gray-300 bg-white flex items-center justify-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="mt-8 sm:mt-12">
        <Footer />
      </div>

      {/* Custom CSS for additional responsiveness */}
      <style jsx>{`
        @media (max-width: 640px) {
          .container {
            padding-left: 12px;
            padding-right: 12px;
          }
          img {
            max-width: 100% !important;
            height: auto !important;
          }
          h1,
          h2,
          h3 {
            line-height: 1.2;
          }
        }
        @media (max-width: 768px) {
          .md\\:flex-row {
            flex-direction: column;
          }
          .md\\:w-5/12 {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Legacy;
