import React from "react";
import ChevronRightIcon from "../assets/home/shriArrow.png";
import BannerImage from "../assets/home/Bannershree.png";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import homevector from "../assets/home/homevector.png";

const Educators = () => {
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
          {/* Right Content with Image */}
          <main className="w-full md:w-3/4 flex flex-col md:flex-row justify-center">
            <div className="md:w-2/3 md:ml-16">
              {" "}
              {/* Added left margin to push content right */}
              <h2 className="text-2xl font-bold mb-4">SHRI Educator</h2>
              <p className="text-center text-lg font-bold">
                न गुरोरधिकं तत्त्वं न गुरोरधिकं तपः ।
                <br />
                तत्त्वज्ञानात्परं नास्ति तस्मै श्रीगुरवे नमः॥
              </p>
              <p className="mt-4 font-bold">
                “Salutation to the noble Guru, beyond whom there is no higher
                truth, there is no higher penance and there is nothing higher
                attainable than true knowledge.”
              </p>
              <p>
                <br />
                The Shri Educator or Shri Shikshak is a facilitator who draws
                forth the potential that already exists in a child, waiting to
                be recognized – and who teaches children to use their higher
                order thinking skills. Under the guidance of the Shri Educator
                the classroom becomes a think tank where innovative pedagogy is
                used to engage the learner. The Shri Educator is a leader in
                his/her field of expertise, is intrinsically self – motivated
                and an intuitive team player working for the welfare of the
                children. Shri Educators comprise the finest teachers who will
                provide individual attention to each child. A Shri Educator is
                always keen to be abreast of the latest teaching methodologies
                and professional development is an important part of the TSUS
                culture. A mentor, a guide and a friend the Shri Educator will
                always strive to bring the best into and outside the classroom
                to align with children’s intellectual and emotional needs.
                <br />
                <br />
                Constantly striving to better his/her best, a Shri Educator
                seeks feedback and guidance unhesitatingly. With a deep
                conviction about the Core values of the school, he/she leads by
                example to ensure that the children imbibe them too.
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
