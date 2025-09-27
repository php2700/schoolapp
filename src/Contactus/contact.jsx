import { useEffect, useState } from "react";
import React from "react";
import BannerImage from "../assets/home/Bannershree.png";
import homevector from "../assets/home/homevector.png";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import axios from "axios";

const ContactUsPage = () => {
      const [selected, setSelected] = useState("in");
      const [contactBanner,setContactBanner]=useState();
      const [error,setError]=useState();


      const getContactBanner = () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/contact-banner`)
      .then((res) => {
        setContactBanner(res?.data);
        console.log(res.data)
        // console.log(res.data,"hhh")
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
    getContactBanner();
  }, []);
  
      const countries = [
          { code: "in", name: "India", flag: "https://flagcdn.com/w20/in.png" },
          { code: "us", name: "USA", flag: "https://flagcdn.com/w20/us.png" },
          { code: "gb", name: "UK", flag: "https://flagcdn.com/w20/gb.png" },
          { code: "au", name: "Australia", flag: "https://flagcdn.com/w20/au.png" },
          { code: "jp", name: "Japan", flag: "https://flagcdn.com/w20/jp.png" },
          { code: "de", name: "Germany", flag: "https://flagcdn.com/w20/de.png" },
          { code: "ae", name: "UAE", flag: "https://flagcdn.com/w20/ae.png" },
          { code: "pk", name: "Pakistan", flag: "https://flagcdn.com/w20/pk.png" },
      ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white font-sans">
        <section
          className="relative h-100 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden"
          style={{ backgroundImage: `url(${import.meta.env.VITE_APP_URL}${contactBanner?.banner})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Overlay for text readability */}
          <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">
              Contact Us
            </h1>
            <div className="flex items-center text-lg mt-2">
              <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
              <a href="/" className="text-[#EDEDED] hover:text-white">
                Home
              </a>

              <span className="mx-2">/</span>
              <a href="/about-us" className="text-[#F3D805] hover:text-white">
                About Us
              </a>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-8 mt-4">
          {" "}
          {/* Adjust mt for overlapping */}
          {/* Admission Sidebar */}
          <aside
            className="w-full lg:w-1/4 bg-white  rounded-lg p-6 font-['poppins'] shadow  rounded-tl-lg rounded-br-lg
                 [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
          >
            <h2 className="text-2xl font-bold leading-8 tracking-[0.1px] text-[#25337C] mb-6">
              Admission
            </h2>
            <ul>
              {[
                "Admission Process",
                "Application Form",
                "Schedule a Visit",
                "E-Brochure",
                "FAQs",
              ].map((item, index) => (
                <li key={index} className="mb-4">
                  <a
                    href="#"
                    className="flex justify-between items-center text-lg text-[#737373] hover:text-blue-600 transition duration-300"
                  >
                    {item}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
          {/* Contact Form */}
          <main
            className="w-full lg:w-3/4 bg-white shadow-lg rounded-lg p-8  rounded-tl-lg rounded-br-lg
                 [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#A9A9A9] font-['poppins'] text-[15px]">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full p-3  border border-[#D1D5DB] rounded-md focus:ring-blue-500 focus:border-blue-500 te"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-[#D1D5DB rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
                                      <div className="flex border rounded overflow-hidden">
                            {/* Custom Dropdown */}
                            <select
                                value={selected}
                                onChange={(e) => setSelected(e.target.value)}
                                className="px-2 bg-gray-100 outline-none text-sm"
                            >
                                {countries.map((c) => (
                                    <option key={c.code} value={c.code}>
                                        {c.name}
                                    </option>
                                ))}
                            </select>

                            {/* Show selected flag */}
                            <div className="flex items-center px-2">
                                <img
                                    src={countries.find((c) => c.code === selected)?.flag}
                                    alt="flag"
                                    className="w-6 h-4"
                                />
                            </div>

                            {/* Phone Input */}
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="flex-1 p-3 outline-none"
                            />
                        </div>

              <div>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-3 border border-[#D1D5DBrounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="State"
                  className="w-full p-3 border border-[#D1D5DBrounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="County"
                  className="w-full p-3 border border-[#D1D5DB rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full p-3 border border-[#D1D5DB rounded-md focus:ring-blue-500 focus:border-blue-500 resize-y"
                ></textarea>
              </div>
              <div className="md:col-span-2 flex justify-center items-center font-['poppins']">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#25337C]  text-[16px] text-white font-semibold rounded-md  transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
      <div className="mt-[170px]">
        <Footer />
      </div>
    </>
  );
};

export default ContactUsPage;
