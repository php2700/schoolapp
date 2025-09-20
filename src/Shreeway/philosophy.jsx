import React from "react";
import ChevronRightIcon from "../assets/home/shriArrow.png";
import BannerImage from "../assets/home/Bannershree.png";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import homevector from "../assets/home/homevector.png";

const Philosophy = () => {
  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        {/* Banner Section */}
        <section
          className="relative h-100 bg-cover bg-center rounded-bl-[45px] rounded-br-[45px] overflow-hidden"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">
              SHRI Philosophy
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
              <span className="text-[#F3D805]">SHRI Philosophy</span>
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
          {/* Right Content with Image */}
          <main className="w-full md:w-3/4 flex flex-col md:flex-row justify-center">
            <div className="md:w-2/3 md:ml-16">
              {" "}
              {/* Added left margin to push content right */}
              <h2 className="text-2xl font-bold mb-4">SHRI Philosophy</h2>
              <p>
                The Shri Ram Universal School believes in the unique
                individuality of each child and the entire curriculum is woven
                around the child, to make the learning process challenging and
                enjoyable. The emotional and physical well-being of the child is
                of utmost importance. It is our endeavour to equip every child
                with requisite skills through a comprehensive intermingling of
                the most recent innovations in the field of education and
                tutoring research.The cornerstone of the philosophy of the
                school is the belief in each and every child, manifested in a
                school calendar encompassing the academic and cocurricular
                offering opportunities for fostering diverse interests.
                Fostering creativity, independent thinking, experimentation
                along with the development of sound ethical values will enable
                our students to blossom to their fullest extent.
              </p>
              <p className="mt-4 font-bold">TSUS will enshrine the following</p>
              <ul className="list-none mt-2">
                <li className="flex items-start mb-2">
                  <span className="mr-2 text-[#25337C] font-bold">{">"}</span>
                  Collaborative curricular approach, providing programmes of
                  experiential active learning.
                </li>
                <li className="flex items-start mb-2">
                  <span className="mr-2 text-[#25337C] font-bold">{">"}</span>
                  Pupils will be actively involved in a process of meaning and
                  knowledge construction, building on their previous knowledge.
                </li>
                <li className="flex items-start mb-2">
                  <span className="mr-2 text-[#25337C] font-bold">{">"}</span>
                  The students will apply critical thinking skills and be
                  motivated to be independent learners.
                </li>
                <li className="flex items-start mb-2">
                  <span className="mr-2 text-[#25337C] font-bold">{">"}</span>A
                  diverse range of learning experiences suited to pupils’
                  differing interests and abilities.
                </li>
                <li className="flex items-start mb-2">
                  <span className="mr-2 text-[#25337C] font-bold">{">"}</span>
                  Children will be encouraged to explore and develop their own
                  ideas through games and role-play.
                </li>
                <li className="flex items-start mb-2">
                  <span className="mr-2 text-[#25337C] font-bold">{">"}</span>
                  Students will be motivated to express themselves, to listen to
                  one another and construct their own value system.
                </li>
                <li className="flex items-start mb-2">
                  <span className="mr-2 text-[#25337C] font-bold">{">"}</span>
                  Tackle classroom and playground discipline issues in a
                  collaborative manner allowing socio-emotional development in
                  an atmosphere of democracy and belonging.
                </li>
              </ul>
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

export default Philosophy;
