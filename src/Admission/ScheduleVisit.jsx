import { useEffect, useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Banner from "../assets/home/Bannerleder.png";
import homevector from "../assets/home/homevector.png";
import ChevronRightIcon from "../assets/home/shriArrow.png";
import icon from "../assets/home/arrowicon.png";
import { toast } from "react-toastify";
import axios from "axios";

export default function Schedule() {
  const [scheduleBannerData, setScheduleBannerData] = useState();
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    studentClass: "",
    studentSection: "",
    message: "",
  });

  const getScheduleBannerData = async () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/schedule-banner`)
      .then((res) => {
        setScheduleBannerData(res?.data);
        // console.log(res.data)
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "something went wrong"
        );
      });
  };

  useEffect(() => {
    getScheduleBannerData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_APP_URL}api/user/take-tour`,
        formData
      );

      toast.success("Form submitted successfully!");
      setFormData({
        studentName: "",
        parentName: "",
        email: "",
        phone: "",
        studentClass: "",
        studentSection: "",
        message: "",
      });
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-120 bg-cover bg-center rounded-bl-[45px] rounded-br-[45px] overflow-hidden"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_APP_URL}${
            scheduleBannerData?.banner
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">
            Schedule a Visit
          </h1>
          <div className="flex items-center text-lg mt-2">
            <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
            <a href="/" className="text-[#EDEDED] hover:text-white">
              Home
            </a>

            <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

            <a href="/about-us" className="text-[#EDEDED] hover:text-white">
              Schedual
            </a>
            <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

            <span className="text-[#F3D805]">Schedule a Visit</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-white container mx-auto py-12 px-4 md:flex">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 pr-8 mb-8 md:mb-0">
          <div
            className="font-['poppins'] bg-white p-10 shadow rounded-tl-lg rounded-br-lg
                   [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
          >
            <h3 className="font-['poppins'] text-xl font-semibold text-[#25337C] mb-4">
              Admission
            </h3>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  Admission Process
                  <img
                    src={ChevronRightIcon}
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  Application Form
                  <img
                    src={ChevronRightIcon}
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center justify-between py-2 px-3 rounded-md bg-[#25337C] text-white"
                >
                  Schedule a Visit
                  <img
                    src={ChevronRightIcon}
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  e-Brochure
                  <img
                    src={ChevronRightIcon}
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                >
                  FAQs
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

        {/* Right Content */}
        <main
          className="w-full max-w-6xl mx-auto px-4 py-8 bg-white text-center
    rounded-tl-lg rounded-br-lg
    [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
        >
          <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6">
            Schedule a Visit
          </h2>

          <div className="mb-8 text-[#333333] text-[16px] tracking-normal font-['poppins'] text-left">
            <p className="mb-2">
              We encourage parents to visit the school campus.
            </p>
            <p>
              Please call:{" "}
              <span className="font-semibold text-[#25337C]">98788-78825</span>{" "}
              or fill the following form to schedule a visit
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
          >
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Student name"
              required
              className="border p-3 rounded w-full"
            />

            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Parent name"
              required
              className="border p-3 rounded w-full"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="border p-3 rounded w-full"
            />

            {/* Phone field fixed for India */}
            <div className="flex border rounded overflow-hidden">
              <span className="px-3 flex items-center bg-gray-100 text-gray-700">
                +91
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="flex-1 p-3 outline-none"
              />
            </div>

            <input
              type="text"
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              placeholder="Student class"
              required
              className="border p-3 rounded w-full"
            />

            <input
              type="text"
              name="studentSection"
              value={formData.studentSection}
              onChange={handleChange}
              placeholder="Student section"
              required
              className="border p-3 rounded w-full"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="border p-3 rounded w-full md:col-span-2 h-28 resize-none"
            ></textarea>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#25337C] text-white px-6 cursor-pointer py-2 rounded-lg hover:bg-[#1a275e]"
              >
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>

      <div className="mt-[200px]">
        <Footer />
      </div>
    </div>
  );
}
