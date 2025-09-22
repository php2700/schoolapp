import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Footer from "../component/Footer";

import {
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaBook,
  FaRegSmile,
  FaAward,
  FaUsers,
} from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
// import Footer from './assets/home/footer.png';
import "./App.css";
import Vector from "./assets/home/vector.png";
import Hero from "./assets/home/hero.png";
import Logo from "./assets/home/logo.png";
import BottomTop from "./assets/home/bottom_top.png";
import Photo1 from "./assets/home/photo1.png";
import Photo2 from "./assets/home/photo2.png";
import Photo3 from "./assets/home/photo3.png";
import Arrow from "./assets/home/arrow.png";
import Lefticon from "./assets/home/Lefticon.png";
import Righticon from "./assets/home/Righticon.png";
import Shree from "./assets/home/shree.png";
import Leftpipe from "./assets/home/leftpipe.png";
import Curriculum1 from "./assets/home/curriculum1.webp";
import Curriculum2 from "./assets/home/curriculum2.webp";
import Sport from "./assets/home/sport.jpg";
import Learningplatform from "./assets/home/learning_platform.png";
import Facilities from "./assets/home/facilities.png";
import Educator from "./assets/home/educator.png";
import Welcome from "./assets/home/welcome.png";
import Rightpipe from "./assets/home/rightpipe.png";
import Vector1 from "./assets/home/vector1.png";
import aicodding from "./assets/home/expcard1.png";
import expfrontend from "./assets/home/expgroup.png";
import exp from "./assets/home/expgroup2.png";
import vectexp from "./assets/home/vectorexp2.png";
import backimg from "./assets/home/backgroundexp.png";
import backimg2 from "./assets/home/backgroungexp1.png";
// import tring from './assets/home/triangle.png';
import back3 from "./assets/home/vecterback3.jpg";
import experienceAI from "./assets/home/experienceAI.png";
import experienceAI3 from "./assets/home/experienceAI3.png";
import experienceAI4 from "./assets/home/experienceAI4.png";
import experienceAI5 from "./assets/home/experienceAI5.png";
import experienceAI6 from "./assets/home/experienceAI6.png";
import ask1 from "./assets/home/freqimg1.png";
import Arrowdown from "./assets/home/Arrowdown.png";
import aks2 from "./assets/home/freqask2.png";
import aks3 from "./assets/home/freqaks3.png";
import aks4 from "./assets/home/freqask4.png";
import frqVecter from "./assets/home/freqaskvecter.png";
import blue from "./assets/home/blueVecter.png";
import yellow from "./assets/home/yellowVector.png";
import Header from "../component/Header";

function homepage() {
  // const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const pathways = [
    {
      grade: "Foundational (K-II):",
      description:
        "Tinker time, simple machines, patterns, storytelling with block coding.",
    },
    {
      grade: "Preparatory (III-V):",
      description:
        "Robotics starters, circuits, Scratch apps, design thinking mini-challenges.",
    },
    {
      grade: "Middle (VI-VIII):",
      description:
        "IoT builds, Python, 3D design/printing, drones (simulated), public-speaking projects.",
    },
    {
      grade: "Secondary (IX-XII):",
      description:
        "Capstone projects integrating AI/ML, data, automation, and digital media portfolios.",
    },
  ];
  const pathways2 = [
    {
      grade: "Weekly Lab Sessions",
      description:
        " embedded into the timetable; flexible plans for club hours and intensives.",
    },
    {
      grade: "Certified Facilitators",
      description:
        "(Myra Academy) co-teach with TSUS faculty for smooth delivery and classroom integration.",
    },
    {
      grade: "Safety & SOPs",
      description: " for tools, drones, and electronics; age-appropriate kits.",
    },
    {
      grade: "ssessment & Portfolio",
      description:
        "rubrics for creativity, collaboration, problem-solving; each child builds a digital portfolio of projects",
    },
  ];

  const pathways3 = [
    {
      grade: "Conceptual clarity",
      description: "via experiments and models.",
    },
    {
      grade: "Stronger problem-solving & logical reasoning. ",
      description:
        "across grades with 400+ hands-on topics style coverage typical of best-in-class experiential programs.",
    },
    {
      grade: "Tech fluency",
      description: " (AI/Robotics/IoT/3D, AR/VR exposure).",
    },
    {
      grade: "Communication & leadership",
      description: " through demos, pitches and team roles.",
    },
    {
      grade: "C Real-world application ",
      description: " mindset—ideas that move from paper to prototype. ",
    },
  ];

  return (
    <>
      <Header />

      <section className="relative w-full h-[600px] md:h-[650px] lg:h-[700px]">
        <img
          src={Vector1}
          alt="vector"
          className="absolute -top-[72px] left-0 w-full z-20"
        />

        <img
          src={Hero}
          alt="Hero"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-start md:items-start px-4 sm:px-8 md:px-16 z-10 mt-[100px] md:mt-[130px]">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-full md:max-w-2xl leading-snug">
            Nurturing Bright <br /> Minds, Building <br /> Strong Futures
          </h1>
          <p className="text-white mt-4 text-base sm:text-lg md:text-lg lg:text-xl max-w-full md:max-w-xl">
            At Shri Ram Universal School, we combine academics, creativity, and
            innovation to prepare every kid for tomorrow.
          </p>
          <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-[#25337C] text-white font-semibold rounded-lg hover:bg-blue-800 w-fit text-sm sm:text-base md:text-lg">
            Apply for Admission
          </button>
        </div>
      </section>

      <section className="py-12 px-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
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
                Integrity
              </h3>
              <div
                className="w-20 h-1 bg-yellow-400 rounded mt-3 mb-4 opacity-0 
                        group-hover:opacity-100 transition-all duration-300"
              ></div>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-200 transition-all duration-300">
                Developing the value of Integrity through healthy and supportive
                student–teacher relationships.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white rounded-tl-[25px] rounded-br-[25px] shadow-lg p-6 relative overflow-hidden 
                    group cursor-pointer hover:bg-[#25337C] transition-all duration-300"
          >
            <div className="absolute -top-1 -left-1">
              <div
                className="bg-[#25337C] w-14 h-14 rounded-[12px] flex items-center justify-center shadow 
                        group-hover:bg-white transition-all duration-300"
              >
                <FaRegSmile className="text-white text-xl group-hover:text-[#25337C] transition-all duration-300" />
              </div>
            </div>
            <div className="ml-15">
              <h3 className="text-xl font-semibold text-black group-hover:text-white transition-all duration-300">
                Sensitivity
              </h3>
              <div
                className="w-20 h-1 bg-yellow-400 rounded mt-3 mb-4 opacity-0 
                        group-hover:opacity-100 transition-all duration-300"
              ></div>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-200 transition-all duration-300">
                Understanding, respecting, and caring for everyone equally.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white rounded-tl-[25px] rounded-br-[25px] shadow-lg p-6 relative overflow-hidden 
                    group cursor-pointer hover:bg-[#25337C] transition-all duration-300"
          >
            <div className="absolute -top-1 -left-1">
              <div
                className="bg-[#25337C] w-14 h-14 rounded-[12px] flex items-center justify-center shadow 
                        group-hover:bg-white transition-all duration-300"
              >
                <FaAward className="text-white text-xl group-hover:text-[#25337C] transition-all duration-300" />
              </div>
            </div>
            <div className="ml-15">
              <h3 className="text-xl font-semibold text-black group-hover:text-white transition-all duration-300">
                Pursuit of <br /> Excellence
              </h3>
              <div
                className="w-20 h-1 bg-yellow-400 rounded mt-3 mb-4 opacity-0 
                        group-hover:opacity-100 transition-all duration-300"
              ></div>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-200 transition-all duration-300">
                Encouraging children to achieve their best in every field.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="bg-white rounded-tl-[25px] rounded-br-[25px] shadow-lg p-6 relative overflow-hidden 
                    group cursor-pointer hover:bg-[#25337C] transition-all duration-300"
          >
            <div className="absolute -top-1 -left-1">
              <div
                className="bg-[#25337C]  w-14 h-14 rounded-[12px] flex items-center justify-center shadow 
                        group-hover:bg-white transition-all duration-300"
              >
                <FaUsers className="text-white text-xl group-hover:text-[#25337C] transition-all duration-300" />
              </div>
            </div>

            <div className="ml-15">
              <h3 className="text-xl font-semibold text-black group-hover:text-white transition-all duration-300">
                Pride in One’s <br /> Culture
              </h3>
              <div
                className="w-20 h-1 bg-yellow-400 rounded mt-3 mb-4 opacity-0 
                        group-hover:opacity-100 transition-all duration-300"
              ></div>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-200 transition-all duration-300">
                Celebrating traditions while embracing modern learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- WELCOME SECTION ---------------- */}

      <div className="w-full font-sans mt-[100px]">
        <div>
          <section
            className="relative bg-[#1F2B6C] text-white w-full max-w-[1000px] mx-auto rounded-[50px] overflow-visible"
            style={{
              clipPath: "polygon(0px 0%, 254% 387px, 100% 100%, 0px 104%)",
            }}
          >
            <div className="relative flex flex-col md:flex-row items-center px-6 py-12 md:py-20 overflow-visible">
              <div className="flex-1 text-center md:text-left z-10 ml-[50px]">
                <h3 className="uppercase tracking-wide text-sm font-bold">
                  Welcome to
                </h3>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2 text-[#F3D805]">
                  The Shri Ram <br /> Universal School
                </h1>
                <p className="mt-4 text-base md:text-lg max-w-lg mx-auto md:mx-0">
                  We, at one of the top schools in Ludhiana, believe in the
                  individuality and unique identity of each child. Our
                  educational philosophy is emphatic about providing a
                  child-centric education and keeping this in view, one of the
                  best schools in Ludhiana offers learning that is interactive,
                  experiential, innovative and evolving.
                </p>
              </div>
            </div>
          </section>

          <div className="relative w-full flex justify-center md:justify-end -mt-[400px] md:-mt-[500px] overflow-visible z-0 pointer-events-none">
            <img
              src={Welcome}
              alt="Hero"
              className="rounded-2xl w-[350px] md:w-[500px] h-[450px] md:h-[600px] -mt-[99px] mr-[322px]"
            />
          </div>
        </div>

        {/* <section
  className="relative bg-[#1F2B6C] text-white w-full max-w-[1000px] mx-auto rounded-[50px] overflow-visible"
  style={{
    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
  }}
>
  <div className="flex flex-col md:flex-row items-center px-6 md:px-12 py-12 md:py-20 relative z-10">
    <div className="flex-1 text-center md:text-left">
      <h3 className="uppercase tracking-wide text-sm font-bold">
        Welcome to
      </h3>
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2 text-[#F3D805]">
        The Shri Ram <br /> Universal School
      </h1>
      <p className="mt-4 text-base md:text-lg max-w-xl mx-auto md:mx-0">
        We, at one of the top schools in Ludhiana, believe in the individuality and unique identity of each child. Our educational philosophy is emphatic about providing a child-centric education and keeping this in view, one of the best schools in Ludhiana offers learning that is interactive, experiential, innovative and evolving.
      </p>
    </div>
  </div>

  <div className="absolute bottom-0 right-0 w-full flex justify-center md:justify-end pointer-events-none z-0 -mb-20 md:-mb-32">
    <img
      src={Welcome}
      alt="Hero"
      className="rounded-2xl w-[80%] max-w-[500px] h-auto md:h-[600px] object-cover"
    />
  </div>
</section> */}

        {/* ---------------- EVERY CHILD CAN LEARN ---------------- */}
        <section className="text-center py-16 bg-white relative">
          <h2 className="text-3xl font-bold text-[#25337C]">
            Every Child Can Learn
          </h2>
          <p className="text-gray-600 mt-2 text-[21px]">
            Just not on the same day, or in the same way
          </p>
          <button className="mt-4 bg-[#25337C] text-white font-semibold text-sm px-6 py-6 rounded-lg md:w-150 rounded-tr-[38px] rounded-bl-[38px] text-[21px]">
            The Shri Educators
          </button>
          <br />
          <div className="flex justify-center mt-8 px-4">
            <p className="max-w-3xl text-gray-700 text-lg leading-relaxed">
              would act as facilitators and guide the students in their learning
              using activities, audio-visual stimuli, projects and
              presentations. The focus would remain on creating awareness in the
              students and providing them with experiences that they could apply
              to real-life situations
            </p>
          </div>

          {/* Images + Logo */}
          <div className="relative flex justify-center items-center mt-10 w-full h-[200px]">
            {/* Left Side Image (Behind Educator) */}
            <img
              src={Leftpipe}
              alt="Left Image"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-200 h-162 object-contain z-0 -mt-[300px]"
            />

            {/* Right Side Image (Behind Educator) */}
            <img
              src={Rightpipe}
              alt="Right Image"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-161 h-176 object-contain z-0 -mt-[224px]"
            />

            {/* Educator Image (Centered on top) */}
            <img
              src={Educator}
              alt="Educator"
              className="md:w-300 md:h-400 w-[300px] h-[300px] object-contain z-10 md:mt-[300px]"
            />
          </div>
        </section>

        {/* ---------------- ACTIVITIES SECTION ---------------- */}
        <section className="bg-white-50 py-16 mt-[150px]">
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center text-[#1F2B6C] md:mt-10 -mt-0">
              School activities & Inspired Learners
            </h2>
            <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
              A dynamic blend of academics, arts, and sports that spark
              curiosity and inspire every child to excel
            </p>

            {/* Grid Layout */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
              {/* Card 1 */}
              <div
                className="bg-white rounded-2xl shadow-md overflow-hidden relative"
                style={{
                  clipPath:
                    "polygon(0px 0px, 100% 0px, 100% 101%, 50% 100%, 0px 96%)",
                }}
              >
                {/* Background Image */}
                <img
                  src={Curriculum1}
                  alt="Co-curriculum"
                  className="w-full h-114 object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#25337C]/90 to-[#25337C]/0"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-lg font-bold">Co-curriculum</h3>
                  <p className="mt-2 text-sm text-gray-200">
                    Pursuit Beyond the Classroom — Students from each grade have
                    the opportunity to go for educational and fun trips within
                    the city and also outside it.
                  </p>
                  <button className="mt-4 bg-white text-[#25337C] font-semibold text-sm px-4 py-2 rounded-lg float-right">
                    Read More
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#25337C] rounded-2xl shadow-md overflow-hidden relative group p-6 min-h-[400px]">
                {/* Background Image */}
                <img
                  src={Curriculum2}
                  alt="Learning"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#25337C] via-[#25337C]/80 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 p-6 text-white flex flex-col h-full justify-end">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
                      <img src={Learningplatform} alt="" />
                    </span>
                    <h3 className="text-lg font-bold">Learning</h3>
                  </div>

                  <h4 className="text-xl font-semibold text-yellow-400">
                    Shri Philosophy
                  </h4>

                  <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                    We, as one of the best CBSE schools in Ludhiana, believe in
                    the unique individuality of each child and the entire
                    curriculum is woven around the child, to make the learning
                    process challenging and enjoyable.
                  </p>

                  <div className="flex justify-end">
                    <button className="mt-5 bg-white text-[#25337C] font-semibold text-sm px-5 py-2 rounded-lg">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 (Full Height Right, Shri Way) */}
              <div className="bg-[#25337C] rounded-2xl shadow-md overflow-hidden relative group text-center p-6">
                <h3 className="text-white text-[32px] font-bold mb-4 mt-[50px]">
                  The Shri Way <br /> Meaning of "SHRI"
                </h3>
                <p className="text-yellow-400 text-base font-semibold leading-relaxed">
                  न गुरोरधिकं तत्त्वं न गुरोरधिकं तपः। <br />
                  तत्त्वज्ञानात्परं नास्ति तस्मै श्रीगुरवे नमः॥
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white">
                  "Salutation to the noble Guru, beyond whom there is no higher
                  truth, there is no higher penance and there is nothing higher
                  attainable than true knowledge."
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#25337C] rounded-2xl shadow-md overflow-hidden relative group  p-6">
                {/* Background Image */}
                <img
                  src={Sport}
                  alt="Learning"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#25337C] via-[#25337C]/80 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 p-6 text-white flex flex-col h-full justify-end">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
                      <img src={Facilities} alt="" />
                    </span>
                    <h3 className="text-lg font-bold">Facilities</h3>
                  </div>

                  <h4 className="text-xl font-semibold text-yellow-400">
                    Thinking Arcade– ’Think’cade
                  </h4>

                  <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                    At TSUS, utmost care has been taken to make sure that the
                    environment maximizes learning and creativity.
                  </p>

                  <div className="flex justify-end">
                    {" "}
                    {/* Parent div with flex and justify-end */}
                    <button className="mt-5 self-start bg-white text-[#25337C] font-semibold text-sm px-5 py-2 rounded-lg">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-[#25337C] rounded-2xl shadow-md overflow-hidden flex items-center justify-center h-64">
                <div className="w-32 h-32 rounded-full  flex items-center justify-center">
                  <img src={Logo} alt="TSUS Logo" className="w-26 h-26" />
                </div>
              </div>

              {/* Logo Center (Circle Card) */}

              {/* Card 5 (Bottom Right) */}
              <div className="bg-[#25337C] rounded-2xl shadow-md p-6 flex flex-col justify-center">
                {/* Heading + Sub-heading left aligned */}
                <h3 className="text-lg font-bold text-[#F3D805] text-left ml-[38px]">
                  Admission
                </h3>
                <p className="text-[19px] text-[#FFFFFF] font-[600] mt-2 text-left ml-[38px]">
                  Forms For Parents
                </p>

                {/* Buttons center aligned */}
                <div className="flex flex-col mt-3 space-y-2 items-center">
                  <button className="w-full max-w-xs text-sm text-[#1F2B6C] bg-white border rounded-lg px-3 py-2 hover:bg-gray-50">
                    Inquiry form : Fill out form
                  </button>
                  <button className="w-full max-w-xs text-sm text-[#1F2B6C] bg-white border rounded-lg px-3 py-2 hover:bg-gray-50">
                    Take a tour : Schedule
                  </button>
                  <button className="w-full max-w-xs text-sm text-[#1F2B6C] bg-white border rounded-lg px-3 py-2 hover:bg-gray-50">
                    Email us : Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full font-sans bg-white py-16">
        <div className="max-w-[98rem] mx-auto px-6">
          {/* -------- TOP HEADING -------- */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-yellow-400 font-semibold text-[30px]">
                Photo Gallery
              </h3>
              <h2 className="text-2xl md:text-[30px] font-bold text-[#25337C] ">
                Event & Happening
              </h2>
            </div>
            <p className="text-gray-600 mt-4 md:mt-0 max-w-lg">
              Celebrating every smile, every achievement, and every moment that
              makes learning joyful
            </p>
          </div>

          {/* -------- SLIDER IMAGES -------- */}
          <div className="relative mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src={Photo1}
                alt="Event 1"
                className="rounded-lg w-full h-64 object-cover shadow"
              />
              <img
                src={Photo2}
                alt="Event 2"
                className="rounded-lg w-full h-64 object-cover shadow"
              />
              <img
                src={Photo3}
                alt="Event 3"
                className="rounded-lg w-full h-64 object-cover shadow"
              />
            </div>

            {/* Left Gradient + Arrow */}
            <div className="absolute left-0 top-0 h-full w-45 bg-gradient-to-r from-white to-transparent flex items-center justify-start">
              <button className=" rounded-full p-3  hover:bg-gray-100 ml-2">
                <img src={Lefticon} alt="" className="w-[30px]" />
              </button>
            </div>

            {/* Right Gradient + Arrow */}
            <div className="absolute right-0 top-0 h-full w-45 bg-gradient-to-l from-white to-transparent flex items-center justify-end">
              <button className=" rounded-full p-3 hover:bg-gray-100 mr-2">
                <img src={Righticon} alt="" className="w-[30px]" />
              </button>
            </div>
          </div>

          {/* Show More Button */}
          <div className="flex justify-center mt-8">
            <button className="px-6 py-2 bg-[#1F2B6C] text-white font-semibold rounded-lg hover:bg-[#16225a]">
              Show More
            </button>
          </div>

          {/* -------- KIDS IMAGE + TEXT -------- */}
          <div className="md:mt-16 mt-30 flex flex-col items-center text-center">
            <img
              src={BottomTop}
              alt="Kids"
              className="w-full max-w-[72rem] object-contain"
            />
            <h2 className="text-2xl md:text-[36px] font-[700] text-[#25337C] -md:mt-[250px]  z-10">
              TSUS – Amongst Top 5 CBSE <br /> Schools in Ludhiana
            </h2>
            <p className="text-[#383838] mt-4 max-w-[63rem] relative z-10 text-[20px]">
              The Shri Ram Universal School is recognized among the top 5 CBSE
              schools in Ludhiana and is known for its values, teaching
              methodologies, and unique practices that it takes up from the
              legacy established TSUS branches. We acknowledge the uniqueness of
              every child and help them discover their uniqueness. We aim to
              create responsible and caring human beings through our "Happy
              School" initiative. We boast of our environment, which fosters a
              global outlook while still being amongst the top 5 schools in
              Ludhiana.
            </p>
          </div>
        </div>
      </div>
      {/* ---------------- STEAM LAB SECTION ---------------- */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-['Poppins'] font-bold text-[48px] md:text-[36px] leading-[120%] tracking-[0.5px] text-[#25337C] mb-12">
            Why a STEAM Lab at TSUS?
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="relative rounded-xl shadow-lg p-8 text-left hover:shadow-2xl transition overflow-hidden"
              style={{
                backgroundImage: `url(${backimg2})`, // Replace with your actual background image path
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay to dim the background image and show text clearly, similar to the original yellow overlay */}
              <div className="absolute inset-0 bg-[#F3D805] opacity-40 rounded-xl"></div>

              {/* Content wrapper to ensure text and icon are above the overlay */}
              <div className="relative z-10">
                <div className="mb-4">
                  {/* Replace the emoji span with an actual image tag for the icon */}
                  <img
                    src={expfrontend} // Replace with your actual icon image path
                    alt="NEP 2020 Aligned"
                    className="bg-[#25337C] p-3 rounded-lg inline-block w-15 h-15 object-contain" // Adjust w- and h- as needed
                  />
                </div>
                <h3 className=" font-['Poppins'] text-[22px] md:text-[26px] font-semibold text-[#000000] tracking-[0.5px] leading-[100%] mb-3">
                  Hands-on Makerspace
                </h3>
                <p className=" font-['Poppins'] text-[text-[#191919] text-[14px] leading-relaxed">
                  With practical kits, tools, and digital platforms that turn
                  classroom theory into tangible projects.
                </p>
              </div>
            </div>

            {/* Card 1 */}

            {/* Card 2 */}
            <div
              className="relative rounded-xl shadow-lg p-8 text-left hover:shadow-2xl transition overflow-hidden"
              style={{
                backgroundImage: `url(${backimg})`, // Replace with your actual background image path
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay to dim the background image and show text clearly, similar to the original yellow overlay */}
              <div className="absolute inset-0 bg-[#F3D805] opacity-40 rounded-xl"></div>

              {/* Content wrapper to ensure text and icon are above the overlay */}
              <div className="relative z-10">
                <div className="mb-4">
                  {/* Replace the emoji span with an actual image tag for the icon */}
                  <img
                    src={vectexp} // Replace with your actual icon image path
                    alt="NEP 2020 Aligned"
                    className="bg-[#25337C] p-3 rounded-lg inline-block w-15 h-15 object-contain" // Adjust w- and h- as needed
                  />
                </div>
                <h3 className="font-['Poppins']s text-[22px] md:text-[26px] font-semibold text-[#000000] tracking-[0.5px] leading-[100%] mb-3">
                  Three-pillar Learning
                </h3>
                <ol className="font-['Poppins'] text-[text-[#191919] text-[14px] leading-relaxed  list-decimal">
                  <li>
                    <b>Concept Mastery</b>: Clarify tough topics through
                    experiments.
                  </li>
                  <li>
                    <b>Engineering & Application</b>: Apply concepts in
                    real-world settings.
                  </li>
                  <li>
                    <b>Emerging Technologies</b>: AI, AR/VR, 3D printing for
                    future-ready exposure.
                  </li>
                </ol>
              </div>
            </div>

            {/* { Card 3 */}
            {/* <div className="bg-[#F3D805] bg-opacity-40 rounded-xl shadow-lg p-8 text-left hover:shadow-2xl transition">
              <div className="mb-4">
                <span className="bg-[#25337C] text-white p-3 rounded-lg inline-block">
                  🎯
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#25337C] mb-3">
                Aligned with NEP 2020
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Spirit of multidisciplinary, inquiry-driven, project-based learning.
              </p>
            </div> */}
            {/* {Card 3 } */}
            <div
              className="relative rounded-xl shadow-lg p-8 text-left hover:shadow-2xl transition overflow-hidden"
              style={{
                backgroundImage: `url(${back3})`, // Replace with your actual background image path
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay to dim the background image and show text clearly, similar to the original yellow overlay */}
              <div className="absolute inset-0 bg-[#F3D805] opacity-40 rounded-xl"></div>

              {/* Content wrapper to ensure text and icon are above the overlay */}
              <div className="relative z-10">
                <div className="mb-4">
                  {/* Replace the emoji span with an actual image tag for the icon */}
                  <img
                    src={exp} // Replace with your actual icon image path
                    alt="NEP 2020 Aligned"
                    className="bg-[#25337C] p-3 rounded-lg inline-block w-15 h-15 object-contain" // Adjust w- and h- as needed
                  />
                </div>
                <h3 className="ffont-['Poppins'] text-[22px] md:text-[26px] font-semibold text-[#000000] tracking-[0.5px] leading-[100%] mb-3">
                  Aligned with NEP 2020
                </h3>
                <p className="font-['Poppins'] text-[text-[#191919] text-[14px] leading-relaxed">
                  Spirit of multidisciplinary, inquiry-driven, project-based
                  learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- WHAT STUDENTS EXPERIENCE ---------------- */}
      <section className="relative py-20 bg-white">
        <img
          src={yellow}
          alt="yellow decoration"
          className="absolute top-8 left-8 w-4 h-4"
        />
        <img
          src={blue}
          alt="blue decoration"
          className="absolute top-16 left-15 w-9 h-9"
        />

        {/* Right center decorative shapes */}
        <img
          src={blue}
          alt="blue decoration"
          className="absolute top-1/2 right-32 transform -translate-y-1/2 w-9 h-9"
        />
        <img
          src={yellow}
          alt="yellow decoration"
          className="absolute top-[55%] right-20 transform -translate-y-1/2 w-4 h-4"
        />
        <div className="max-w-7xl mx-auto px-6 text-center ">
          <h2 className="font-['Poppins'] font-semibold text-[48px] leading-[100%] tracking-[0.5px] text-center text-[#25337C] mb-12">
            What Students Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - AI & Robotics */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
              <img
                src={aicodding}
                alt="AI & Robotics"
                className="w-full h-40 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="font-['Poppins'] font-semibold text-[22px] leading-[100%] tracking-[0.5px] text-[#000000]">
                  AI & Robotics
                </h3>
                <p className="font-['Poppins'] font-normal text-[14px]  text-[#191919]">
                  Build and program autonomous bots; test sensors; learn simple
                  ML concepts through age-appropriate activities.
                </p>
              </div>
            </div>

            {/* Card 2 - Coding & App Design */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
              <img
                src={experienceAI}
                // src="./assets/home/experienceAI.png"
                alt="Coding & App Design"
                className="w-full h-40 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="font-['Poppins'] font-semibold text-[22px] leading-[100%] tracking-[0.5px] text-[#000000]">
                  Coding & App Design
                </h3>
                <p className="font-['Poppins'] font-normal text-[14px]  text-[#191919]">
                  Block-based coding in early years → Python/JavaScript in
                  middle & senior grades. UI/UX basics; publish simple apps and
                  websites.
                </p>
              </div>
            </div>

            {/* Card 3 - IoT & Automation */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
              <img
                src={experienceAI3}
                alt="IoT & Automation"
                className="w-full h-40 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="font-['Poppins'] font-semibold text-[22px] leading-[100%] tracking-[0.5px] text-[#000000]">
                  IoT & Automation
                </h3>
                <p className="font-['Poppins'] font-normal text-[14px]  text-[#191919]">
                  Wire up microcontrollers; read sensor data; automate everyday
                  tasks.
                </p>
              </div>
            </div>

            {/* Card 4 - Drone Tech & Aerodynamics */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
              <img
                src={experienceAI4}
                alt="Drone Tech & Aerodynamics"
                className="w-full h-40 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="font-['Poppins'] font-semibold text-[22px] leading-[100%] tracking-[0.5px] text-[#000000]">
                  Drone Tech & Aerodynamics
                </h3>
                <p className="font-['Poppins'] font-normal text-[14px]  text-[#191919]">
                  Safety-first flight basics; simulations; components and
                  regulations (awareness sessions).
                </p>
              </div>
            </div>

            {/* Card 5 - AR/VR & Simulations */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
              <img
                src={experienceAI5}
                alt="AR/VR & Simulations"
                className="w-full h-40 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="font-['Poppins'] font-semibold text-[22px] leading-[100%] tracking-[0.5px] text-[#000000]">
                  AR/VR & Simulations
                </h3>
                <p className="font-['Poppins'] font-normal text-[14px]  text-[#191919]">
                  Explore immersive content - virtual field trips, interactive
                  science models — so complex ideas "click”.
                </p>
              </div>
            </div>

            {/* Card 6 - Digital Creation & Communication */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
              <img
                src={experienceAI6}
                alt="Digital Creation & Communication"
                className="w-full h-40 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="font-['Poppins'] font-semibold text-[22px] leading-[100%] tracking-[0.5px] text-[#000000]">
                  Digital Creation & Communication
                </h3>
                <p className="font-['Poppins'] font-normal text-[14px]  text-[#191919]">
                  Content creation, video editing, presentations, elocution &
                  extempore because-ideas matter only when shared clearly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* new section */}
      {/* ---------------- STEAM PROGRAM SECTION ---------------- */}
      <section className="flex justify-center py-2 px-4">
        <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden flex">
          {/* Left Yellow Accent */}
          <div className="w-8 md:w-12 bg-yellow-400"></div>{" "}
          {/* Adjust width as needed */}
          {/* Content Area */}
          <div className="p-6 md:p-10 flex-grow">
            <h2 className="font-['Poppins'] font-semibold text-[40px] leading-[100%] tracking-[0.5px] text-[#25337C] mb-6">
              Grade-wise Pathway
            </h2>

            <ul className="space-y-4">
              {pathways.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#000000] font-semibold mr-2">•</span>{" "}
                  {/* Bullet point */}
                  <p className="font-['Poppins'] text-[#000000] text-[16px] leading-relaxed">
                    <span className="font-semibold text-[#000000]">
                      {item.grade}
                    </span>{" "}
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="flex justify-center py-1 px-4">
        <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden flex">
          {/* Left Yellow Accent */}
          <div className="w-8 md:w-12 bg-yellow-400"></div>{" "}
          {/* Adjust width as needed */}
          {/* Content Area */}
          <div className="p-6 md:p-10 flex-grow">
            <h2 className="font-['Poppins'] font-semibold text-[40px] leading-[100%] tracking-[0.5px] text-[#25337C] mb-6">
              {" "}
              {/* Adjust color and font as per image */}
              How the Program Runs
            </h2>

            <ul className="space-y-4">
              {pathways2.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#000000] font-semibold mr-2">•</span>{" "}
                  {/* Bullet point */}
                  <p className="font-['Poppins'] text-[#000000] text-[16px] leading-relaxed">
                    <span className="font-semibold text-[#000000]">
                      {item.grade}
                    </span>{" "}
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="flex justify-center py-2 px-4">
        <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden flex">
          {/* Left Yellow Accent */}
          <div className="w-8 md:w-12 bg-yellow-400"></div>{" "}
          {/* Adjust width as needed */}
          {/* Content Area */}
          <div className="p-6 md:p-10 flex-grow">
            <h2 className="font-['Poppins'] font-semibold text-[40px] leading-[100%] tracking-[0.5px] text-[#25337C] mb-6">
              {" "}
              {/* Adjust color and font as per image */}
              Outcomes You Can Expect
            </h2>

            <ul className="space-y-4">
              {pathways3.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#000000] font-semibold mr-2">•</span>{" "}
                  {/* Bullet point */}
                  <p className="font-['Poppins'] text-[#000000] text-[16px] leading-relaxed">
                    <span className="font-semibold text-[#000000]">
                      {item.grade}
                    </span>{" "}
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* ---------------- FAQ SECTION ---------------- */}
      <section className="w-full bg-white  flex items-center py-16 px-6 md:px-12 lg:px-20 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center text-left">
            <h2 className="font-poppins font-semibold text-[48px] leading-[48px] tracking-[0.5px] text-[#25337C] mb-4">
              Frequently Asked <br /> Questions
            </h2>
            <p className=" font-poppins text-[#191919] text-[16px]">
              Get answers to common questions about <br />
              our{" "}
              <span className="font-semibold text-[#191919]">
                The Shri Ram Universal School.
              </span>
            </p>
          </div>

          {/* Right FAQ Boxes */}
          <div className="space-y-4">
            {/* Single FAQ */}
            <details className="group bg-white rounded-xl shadow-md p-5 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-gray-800">
                <div className="flex items-center gap-3 font-poppins font-medium text-[20px] leading-[20px] tracking-[0.5px]">
                  <span className="bg-[#F3D805] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center">
                    <img src={ask1} alt="icon" className="h-6 w-6" />
                  </span>
                  Is prior coding experience needed?
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
                No. We start with block coding and gradually progress to
                text-based languages.
              </p>
            </details>

            <details className="group bg-white rounded-xl shadow-md p-5 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-gray-800">
                <div className="flex items-center gap-3 font-poppins font-medium text-[20px] leading-[20px] tracking-[0.5px]">
                  <span className="bg-[#F3D805] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center">
                    <img src={aks2} alt="icon" className="h-6 w-6" />
                  </span>
                  Is it safe?
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
                Yes. All activities follow strict safety SOPs; drone flying is
                simulation-first and age-restricted.
              </p>
            </details>

            <details className="group bg-white rounded-xl shadow-md p-5 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-gray-800">
                <div className="flex items-center gap-3 font-poppins font-medium text-[20px] leading-[20px] tracking-[0.5px]">
                  <span className="bg-[#F3D805] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center">
                    <img src={aks3} alt="icon" className="h-6 w-6" />
                  </span>
                  Will this add pressure?
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
                The lab replaces passive learning with active learning—many
                students find it easier and more engaging.
              </p>
            </details>

            <details className="group bg-white rounded-xl shadow-md p-5 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-gray-800">
                <div className="flex items-center gap-3 font-poppins font-medium text-[20px] leading-[20px] tracking-[0.5px]">
                  <span className="bg-[#F3D805] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center">
                    <img src={aks4} alt="icon" className="h-6 w-6" />
                  </span>
                  How is this different from a computer period?
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
                STEAM integrates science/math + engineering + emerging tech in a
                makerspace with physical builds, not just screens.
              </p>
            </details>
          </div>
        </div>
      </section>
      <div className="mt-[-100px]">
        <img
          src={frqVecter}
          alt="Descriptive Alt Text"
          className="w-40 h-auto"
        />{" "}
        {/* Adjust w-40 as needed */}
      </div>

      {/* ---------------- PROGRAM DETAILS SECTION ---------------- */}
      <section className="py-2 bg-white">
        <div className="py-20 bg-[#F5F5F5]">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-10">
            <h2 className="font-['Poppins'] font-bold text-[48px] leading-[40px] tracking-[0px] text-center text-[#25337C] mb-2">
              Enquire Now
            </h2>
            <p className=" font-['Inter'] text-[#475569] text-center mb-8 font-normal text-[18.33px] leading-[28px] tracking-[0px]">
              Take the first step towards your child’s bright future
            </p>

            <form className="space-y-6">
              {/* Row 1 - First/Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="firstName"
                    className=" font-['Inter'] mb-2 text-[15px] font-bold  leading-[20px] text-[#334155]"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#25337C] outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="lastName"
                    className="font-['Inter'] mb-2 text-[15px] font-bold  leading-[20px] text-[#334155]"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#25337C] outline-none"
                  />
                </div>
              </div>

              {/* Row 2 - Email / Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="font-['Inter'] mb-2 text-[15px] font-bold  leading-[20px] text-[#334155]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#25337C] outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="font-['Inter'] mb-2 text-[15px] font-bold  leading-[20px] text-[#334155]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#25337C] outline-none"
                  />
                </div>
              </div>

              {/* Row 3 - Class */}
              <div className="flex flex-col">
                <label
                  htmlFor="class"
                  className="font-['Inter'] mb-2 text-[15px] font-bold  leading-[20px] text-[#334155]"
                >
                  Class
                </label>
                <input
                  id="class"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#25337C] outline-none"
                />
              </div>

              {/* Row 4 - Message */}
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="font-['Inter'] mb-2 text-[15px] font-bold  leading-[20px] text-[#334155]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell Us about your enquiry"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#25337C] outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className=" font-['Inter'] w-full bg-[#25337C] text-white font-semibold py-3 rounded-lg hover:bg-[#1d295d] transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* ---------------- ENQUIRE NOW SECTION ---------------- */}
      <section className="py-25 bg-white"></section>

      <diV className="mt-[200px]">
        <Footer />
      </diV>
    </>
  );
}

export default homepage;
