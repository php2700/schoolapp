import React, { useEffect, useState } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa"; // For icons
import Learbanner from "../assets/home/Bannerlearning.png";
import homevector from "../assets/home/homevector.png";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { FaHandshake } from "react-icons/fa";
import {
  IoBulbOutline,
  IoPeopleOutline,
  IoFlaskOutline,
  IoHeartOutline,
  IoSchoolOutline,
  IoBookOutline,
  IoCubeOutline,
} from "react-icons/io5"; // More icons for methodology
import axios from "axios";
import { toast } from "react-toastify";

const LearningPage = () => {
  const [curriculumData, setCurriculumData] = useState();
  const [error, setError] = useState();

  const getLearningPedagogyData = async () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/curriculum`)
      .then((res) => {
        setCurriculumData(res?.data?.data);
      })
      .catch((error) => {
        setError(
          error?.response?.data?.message ||
            error?.message ||
            "something went wrong"
        );
        toast.error(error?.response?.data?.message ||
            error?.message ||
            "something went wrong")
      });
  };

  useEffect(() => {
    getLearningPedagogyData();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white font-sans">
        {/* Banner Section */}
        <div
          className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
          style={{
            backgroundImage: `url(${import.meta.env.VITE_APP_URL}${
              curriculumData?.banner
            })`,
          }}
        >
          {/* Overlay to darken the image */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className=" font-['poppins'] relative z-10 text-center p-4">
            <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white mb-4">
              CBSE School Curriculum & Pedagogy
            </h1>
            <div className="flex items-center justify-center text-lg">
              <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
              <span className="mr-2 text-[#EDEDED] ">Home</span>
              <FaChevronRight className="mx-2 text-sm" />
              <span className="mr-2  text-[#EDEDED] ">About Us</span>
              <FaChevronRight className="mx-2 text-sm text-[#EDEDED]  " />
              <span className=" text-[#F3D805]">Learning</span>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="font-['poppins'] font-semibold text-[48px]  tracking-[0.5px] text-[#25337C] text-center">
            "Tell me and I forget, show me and I <br /> remember, involve me and
            I understand"
          </h2>
        </div>

        {/* Teaching Methodology Section */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="font-['poppins'] font-semibold text-[48px] leading-[100%] tracking-[0.5px] text-[#25337C] text-center mb-6">
              Teaching <span className="text-[#F3D805]">Methodology</span>
            </h2>
            <p className="max-w-7xl mx-auto text-center font-['poppins'] font-semibold text-[25px]  mb-12 text-[#4D4D4D] ">
              {curriculumData?.methodology_description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: Methodology Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className="bg-white rounded-tl-[25px] rounded-br-[25px] shadow-lg p-6 relative overflow-hidden 
                                  group cursor-pointer hover:bg-[#25337C] transition-all duration-300"
                >
                  {/* icon box */}
                  <div className="absolute -top-1 -left-1">
                    <div
                      className="bg-[#25337C] w-14 h-14 rounded-[12px] flex items-center justify-center shadow 
                                      group-hover:bg-white transition-all duration-300"
                    >
                      <FaHandshake className="text-white text-xl group-hover:text-[#25337C] transition-all duration-300" />
                    </div>
                  </div>

                  {/* content */}
                  <div className="ml-15">
                    <h3 className="text-xl font-semibold text-black group-hover:text-white transition-all duration-300">
                      Innovative
                    </h3>
                    <div
                      className="w-20 h-1 bg-yellow-400 rounded mt-3 mb-4 opacity-0 
                                      group-hover:opacity-100 transition-all duration-300"
                    ></div>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-200 transition-all duration-300">
                      Creative teaching methods that spark curiosity  and   engagement
                    </p>
                  </div>
                </div>
                {/* Interactive */}
                <div
                  className="bg-white rounded-tl-[25px] rounded-br-[25px] shadow-lg p-6 relative overflow-hidden 
                                  group cursor-pointer hover:bg-[#25337C] transition-all duration-300"
                >
                  {/* icon box */}
                  <div className="absolute -top-1 -left-1">
                    <div
                      className="bg-[#25337C] w-14 h-14 rounded-[12px] flex items-center justify-center shadow 
                                      group-hover:bg-white transition-all duration-300"
                    >
                      <FaHandshake className="text-white text-xl group-hover:text-[#25337C] transition-all duration-300" />
                    </div>
                  </div>

                  {/* content */}
                  <div className="ml-15">
                    <h3 className="text-xl font-semibold text-black group-hover:text-white transition-all duration-300">
                      Interactive
                    </h3>
                    <div
                      className="w-20 h-1 bg-yellow-400 rounded mt-3 mb-4 opacity-0 
                                      group-hover:opacity-100 transition-all duration-300"
                    ></div>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-200 transition-all duration-300">
                      collabrative learning experiences that build social skills
                    </p>
                  </div>
                </div>
                {/* Experiential */}
                <div
                  className="bg-white rounded-tl-[25px] rounded-br-[25px] shadow-lg p-6 relative overflow-hidden 
                                  group cursor-pointer hover:bg-[#25337C] transition-all duration-300"
                >
                  {/* icon box */}
                  <div className="absolute -top-1 -left-1">
                    <div
                      className="bg-[#25337C] w-14 h-14 rounded-[12px] flex items-center justify-center shadow 
                                      group-hover:bg-white transition-all duration-300"
                    >
                      <FaHandshake className="text-white text-xl group-hover:text-[#25337C] transition-all duration-300" />
                    </div>
                  </div>

                  {/* content */}
                  <div className="ml-15">
                    <h3 className="text-xl font-semibold text-black group-hover:text-white transition-all duration-300">
                      Experiential
                    </h3>
                    <div
                      className="w-20 h-1 bg-yellow-400 rounded mt-3 mb-4 opacity-0 
                                      group-hover:opacity-100 transition-all duration-300"
                    ></div>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-200 transition-all duration-300">
                     hands-on activities that make learning memorable  & practical
                    </p>
                  </div>
                </div>
                {/* Child Centric */}
                <div
                  className="bg-white rounded-tl-[25px] rounded-br-[25px] shadow-lg p-6 relative overflow-hidden 
                                  group cursor-pointer hover:bg-[#25337C] transition-all duration-300"
                >
                  {/* icon box */}
                  <div className="absolute -top-1 -left-1">
                    <div
                      className="bg-[#25337C] w-14 h-14 rounded-[12px] flex items-center justify-center shadow 
                                      group-hover:bg-white transition-all duration-300"
                    >
                      <FaHandshake className="text-white text-xl group-hover:text-[#25337C] transition-all duration-300" />
                    </div>
                  </div>

                  {/* content */}
                  <div className="ml-15">
                    <h3 className="text-xl font-semibold text-black group-hover:text-white transition-all duration-300">
                      Child Centric 
                    </h3>
                    <div
                      className="w-20 h-1 bg-yellow-400 rounded mt-3 mb-4 opacity-0 
                                      group-hover:opacity-100 transition-all duration-300"
                    ></div>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-200 transition-all duration-300">
                      Personalized approach focusing on each child's unique potential
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center">
                <h3 className="font-['poppins'] font-bold text-[24px]  tracking-0.2 text-[#25337C] text-justify mb-4">
                  Our Approach
                </h3>
                <p className="font-['poppins'] font-normal text-18px  tracking-0.2 text-[#737373] text-justify">
                  {curriculumData?.approach_description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum Stages Section */}
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pre-Primary School */}
          <div className=" group bg-white text-black hover:bg-[#25337C] hover:text-white  p-6 rounded-lg shadow-lg flex flex-col transition duration-300">
            <IoSchoolOutline className="text-5xl mb-4 self-start" />
            <h3
              className="text-2xl font-bold mb-2  group-hover:text-white 
        transition duration-300 "
            >
              Pre-Primary School
            </h3>
            <p className="text-sm opacity-90 mb-4">
              The first experience of the child in a structured setting with
              children and groups of children.
            </p>
            <p className="text-yellow-600 font-semibold mb-2">
              Key Highlights:
            </p>
            <ul className="list-disc list-inside text-sm opacity-90 space-y-1 font-['poppins'] font-normal tracking-0.2 text-[#737373] text-justify">
              <li>Play-based learning approach</li>
              <li>Language development program</li>
              <li>Cognitive thinking development</li>
              <li>Sensory, Fine & Gross motor training</li>
              <li>Choice time, like Sand, Clay, Water Play</li>
              <li>Art and Discovery hour</li>
            </ul>
            <p className="text-xs opacity-70 mt-4">
              The curriculum for Pre-Primary - Early learning years - recognizes
              that the child comes to school with rich experiences and
              capabilities.
            </p>
          </div>

          {/* Primary School */}
          <div className="bg-white text-black hover:bg-[#25337C] hover:text-white text-[#25337C] p-6 rounded-lg shadow-lg flex flex-col transition duration-300">
            <IoBookOutline className="text-5xl mb-4 self-start" />
            <h3
              className="text-2xl font-bold mb-2 group-hover:text-white text-[#25337C]
        transition duration-300"
            >
              Primary School
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Building foundational skills in all subjects with focus on
              language and mathematical concepts.
            </p>
            <p className="text-yellow-600 font-semibold mb-2">
              Key Highlights:
            </p>
            <ul className="list-disc list-inside text-sm opacity-90 space-y-1 font-['poppins'] font-normal tracking-0.2 text-[#737373] text-justify">
              <li>CBSE curriculum framework</li>
              <li>Language & literacy development</li>
              <li>Mathematical concepts clarity</li>
              <li>Science & Social studies</li>
              <li>Drama, storytelling, games</li>
              <li>Music, IT, and artistic activities</li>
            </ul>
            <p className="text-xs opacity-70 mt-4">
              Primary classes from Grade 1 to 5, focusing on independence and
              acquiring mastery of foundational literacy.
            </p>
          </div>

          {/* Middle School */}
          <div className="bg-white text-black hover:bg-[#25337C] hover:text-white p-6 rounded-lg shadow-lg flex flex-col transition duration-300">
            <IoCubeOutline className="text-5xl mb-4 self-start" />
            <h3 className="text-2xl font-bold mb-2 ">Middle School</h3>
            <p className="text-sm opacity-90 mb-4">
              Developing deeper understanding of concepts and responsibility for
              learning outcomes.
            </p>
            <p className="text-yellow-600 font-semibold mb-2">
              Key Highlights:
            </p>
            <ul className="list-disc list-inside text-sm opacity-90 space-y-1 font-['poppins'] font-normal tracking-0.2 text-[#737373] text-justify">
              <li>Joy of learning emphasis</li>
              <li>Deeper conceptual understanding</li>
              <li>Research and analytical skills</li>
              <li>Personal and social development</li>
              <li>Critical thinking abilities</li>
              <li>Experiential learning activities</li>
            </ul>
            <p className="text-xs opacity-70 mt-4">
              In the middle school years, students explore the joy of learning
              and developing understanding of concepts in various subjects.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[170px]">
        <Footer />
      </div>
    </>
  );
};

export default LearningPage;
