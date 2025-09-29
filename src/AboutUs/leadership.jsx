import React, { useEffect, useState } from "react";
import Banner from "../assets/home/Bannerleder.png";
import homevector from "../assets/home/homevector.png";
import gujralImage from "../assets/home/leadershipmg.png";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import rotation from "../assets/home/rotationVector.png";
import icon from "../assets/home/arrowicon.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LeadershipTeamPage = () => {
  const navigate=useNavigate()
  const [leadershipData, setLeadershipData] = useState([]);
  const [leadershiBanner, setLeadershipBanner] = useState();
  const [error, setError] = useState();

  const getLeadershipData = async () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/leaders`)
      .then((res) => {
        setLeadershipData(res?.data?.data);
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
  const getLeadershipBannerData = async () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/leadership-banner`)
      .then((res) => {
        setLeadershipBanner(res?.data);
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
    getLeadershipData();
  }, []);

  useEffect(() => {
    getLeadershipBannerData();
  }, []);

  const handleUrl=(url)=>{
    navigate(url)
  }
  return (
    <>
      <Header />
      <div className="font-sans bg-white min-h-screen">
        {/* Banner Section */}
        <section
          className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden"
          style={{
            backgroundImage: `url(${import.meta.env.VITE_APP_URL}${
              leadershiBanner?.bannerImage
            })`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Overlay for text readability */}
          <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">
              The Leadership Team
            </h1>
            <div className="flex items-center text-lg mt-2">
              <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
              <a href="/" className="text-[#EDEDED] hover:text-white">
                Home
              </a>

              <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />
              <a href="/about-us" className="text-[#EDEDED] hover:text-white">
                About Us
              </a>
              {/* <span className="mx-2">/</span> */}
              <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />
              <span className="text-[#F3D805]">Learning</span>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
          {/* Left Sidebar - About Us Navigation */}
          <aside className="lg:w-1/4 pr-8 mb-8 lg:mb-0">
            <div
              className=" font-['poppins'] bg-white rounded-lg  p-6  shadow  rounded-tl-lg rounded-br-lg
                 [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
            >
              <h2 className="text-[32px] font-semibold mb-4 text-[#25337C]">
                About Us
              </h2>
              <nav>
                <ul>
                  <li className="mb-2">
                    <div onClick={()=>handleUrl('/about/tsus-ludhiana')}
                      className=" font-['poppins'] flex justify-between items-center py-2 px-3 rounded-md hover:bg-blue-50 text-[#737373] text-[14px] hover:text-blue-600"
                    >
                      <span>About TLMD L. Educational</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </li>
                  <li className="mb-2">
                   <div onClick={()=>handleUrl('/about/leadership-team')}
                      className="flex justify-between items-center py-2 px-3 rounded-md bg-[#25337C] text-white font-medium"
                    >
                      <span>Leadership</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div onClick={()=>handleUrl('/about/principals-message')}
                      className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-blue-50 text-[#737373] text-[14px] hover:text-blue-600"
                    >
                      <span>Chairman Message</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div onClick={()=>handleUrl('/about/vision-mission')}
                      className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-blue-50 text-[#737373] text-[14px] hover:text-blue-600"
                    >
                      <span>Vision & Mission</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </li>
                  <li className="mb-2">
                   <div onClick={()=>handleUrl('/about/core-values')}
                      className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-blue-50 text-[#737373] text-[14px] hover:text-blue-600"
                    >
                      <span>Core Values</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div onClick={()=>handleUrl('/about/what-makes-us-different')}
                      className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-blue-50 text-[#737373] text-[14px] hover:text-blue-600"
                    >
                      <span>What Makes Us Different?</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </li>
                  <li className="mb-2">
                   <div onClick={()=>handleUrl('/about/mandats')}
                      className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-blue-50 text-[#737373] text-[14px] hover:text-blue-600"
                    >
                      <span>Mandatory Public Disclosure</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          {/* Right Content Area - Leadership Team Details */}
          <main className="lg:w-3/4">
            <div
              className="bg-white  shadow p-8 font-['poppins'] rounded-tl-lg rounded-br-lg
                 [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
            >
              <h2 className="text-[55px] leading-[100%] tracking-[0] font-semibold text-[#25337C] text-center mb-4 font-['poppins']">
                Our Leadership Team
              </h2>
              <p className="text-[#333333] text-[18px] mb-8  text-center">
                Meet the dedicated leaders who guide our educational <br />{" "}
                vision and commitment to excellence.
              </p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#25337C]">
  {leadershipData?.length > 0 &&
    leadershipData.map((ele, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
      >
        {/* Image Centered */}
        <div className="relative w-60 h-60 mx-auto">
          <img
            src={`${import.meta.env.VITE_APP_URL}${ele?.profileImage}`}
            alt={ele?.name}
            className="w-60 h-60 object-cover mb-4 p-1 rounded-br-[25px]"
          />
          <img
            src={rotation}
            alt="Rotate Icon"
            className="absolute bottom-1 right-1 w-10 h-10"
            style={{ right: "-12px", bottom: "-12px" }}
          />
        </div>

        {/* Name + Designation Centered */}
        <h4 className="text-[24px] leading-[30px] tracking-[0.1px] font-bold text-[#25337C] font-montserrat mt-4 text-center">
          {ele?.name}
        </h4>
        <p className="text-[22px] leading-[30px] tracking-[0.1px] font-bold text-[#F3D805] font-montserrat mb-3 text-center">
          {ele?.designation}
        </p>

        {/* Message Left-Aligned */}
        <p className="text-[#333333] text-[17px] leading-relaxed text-left">
          {ele?.message}
        </p>
      </div>
    ))}
</div>

            </div>
          </main>
        </div>
      </div>
      <div className="mt-[200px]">
        <Footer />
      </div>
    </>
  );
};

export default LeadershipTeamPage;
