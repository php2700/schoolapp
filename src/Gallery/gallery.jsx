// import Navbar from "../../component/Navbar";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Banner from "../assets/home/Bannerleder.png";
import homevector from "../assets/home/homevector.png";
import ChevronRightIcon from "../assets/home/shriArrow.png";
import icon from "../assets/home/arrowicon.png";
import gallery from "../assets/home/schoolgallery.jpg";
import gallery2 from "../assets/home/schoolimage2.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [galleryBanner, setGalleryBanner] = useState();
  const [error, setError] = useState();

  const getGalleryData = async () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/gallery-list`)
      .then((res) => {
        setGalleryData(res?.data);
      })
      .catch((error) => {
        setError(
          error?.response?.data?.message ||
            error?.message ||
            "something went wrong"
        );
      });
  };

  const getBanner = () => {
    axios
      .get(`${import.meta.env.VITE_APP_URL}api/user/gallery-banner`)
      .then((res) => {
        setGalleryBanner(res?.data);
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
    getBanner();
  }, []);

  useEffect(() => {
    getGalleryData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_APP_URL}${
            galleryBanner?.banner
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay for text readability */}
        <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">
            Events & Happiness
          </h1>
          <div className="flex items-center text-lg mt-2">
            <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
            <a href="/" className="text-[#EDEDED] hover:text-white">
              Home
            </a>

            <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

            <a href="/about-us" className="text-[#EDEDED] hover:text-white">
              Gallery
            </a>
          </div>
        </div>
      </section>
      <div className=" bg-white container mx-auto py-12 px-4 md:flex">
        <main
          className="w-full max-w-6xl mx-auto px-4 py-12 bg-white text-center rounded-tl-lg rounded-br-lg 
  [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
        >
          <h2 className="font-['poppins'] font-semibold text-[26px] leading-tight text-[#25337C] mb-10">
            Memorable Moments Captured
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryData.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={`${import.meta.env.VITE_APP_URL}${item.image}`}
                  alt="test"
                  className="w-full h-[220px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium text-sm">'xyz'</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <diV className="mt-[200px]">
        <Footer />
      </diV>
    </div>
  );
}
