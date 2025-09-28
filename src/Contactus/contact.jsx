import { useEffect, useState } from "react";
import React from "react";
import BannerImage from "../assets/home/Bannershree.png";
import homevector from "../assets/home/homevector.png";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import axios from "axios";
import { toast } from "react-toastify";

const ContactUsPage = () => {
  const [contactBanner, setContactBanner] = useState();
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    county: "",
    message: "",
  });

  const getContactBanner = () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/contact-banner`)
      .then((res) => {
        setContactBanner(res?.data);
        console.log(res.data);
        // console.log(res.data,"hhh")
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
    getContactBanner();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit Indian mobile number");
      return;
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_APP_URL}api/user/contact-us`,
        formData
      );

      toast.success("Form submitted successfully!");

      setFormData({
        firstName: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        county: "",
        message: "",
      });
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "something went wrong"
      );
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white font-sans">
        <section
          className="relative h-100 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden"
          style={{
            backgroundImage: `url(${import.meta.env.VITE_APP_URL}${
              contactBanner?.banner
            })`,
          }}
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


        <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-8 mt-4">

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
          <main
            className="w-full lg:w-3/4 bg-white shadow-lg rounded-lg p-8  rounded-tl-lg rounded-br-lg
                 [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
          >
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#A9A9A9] font-['poppins'] text-[15px]"
            >
              <div>
                <input
                  required
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="w-full p-3  border border-[#D1D5DB] rounded-md focus:ring-blue-500 focus:border-blue-500 te"
                />
              </div>
              <div>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#D1D5DB rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                maxLength={10}
                className="w-full p-3 border border-[#D1D5DB] rounded-md focus:ring-blue-500 focus:border-blue-500"
              />

              <div>
                <input
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter City"
                  className="w-full p-3 border border-[#D1D5DBrounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  required
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="w-full p-3 border border-[#D1D5DBrounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  required
                  name="county"
                  value={formData.county}
                  onChange={handleChange}
                  type="text"
                  placeholder="County"
                  className="w-full p-3 border border-[#D1D5DB rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
