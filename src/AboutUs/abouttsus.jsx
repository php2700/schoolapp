// import Navbar from "../../component/Navbar";
import Header from '../../component/Header';
import Footer from '../../component/Footer';
// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-72">
        <img
        //   src={} 
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            What makes us different from others
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-600">
        Home <span className="mx-2">›</span>{" "}
        <span className="text-blue-700 font-medium">
          What makes us different from others
        </span>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="bg-[#f7f5eb] p-6 rounded-lg shadow-md">
          <h2 className="font-bold text-xl mb-4">About Us</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-700">
              ✔ About TSUS Ludhiana
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-700">
              ✔ Leadership
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-700">
              ✔ Principal’s Message
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-700">
              ✔ Vision & Mission
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-700">
              ✔ Core Values
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-700">
              ✔ What makes us different from others
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-700">
              ✔ Mandatory Public Disclosure
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Welcome to The Shri Ram Universal School, Ludhiana (TSUS Ludhiana)
          </h2>
          <p className="text-gray-700 mb-4">
            The Shri Ram Universal School, Ludhiana in collaboration with Shri
            Educare Limited (SEL) adapts the value system, teaching methodologies
            and best practices of The Shri Ram School Ludhiana, Delhi and Gurgaon.
          </p>
          <p className="text-gray-700 mb-4">
            We at TSUS Ludhiana believe that every child is unique and hence
            strive to offer a platform that lets our children discover their own
            special talents at their own pace. Our prime focus is on creating
            awareness in students and providing them with the experiences that they
            could apply to real-life situations.
          </p>
          <p className="text-gray-700 mb-4">
            A ‘Happy School’ can contribute significantly to create responsible and
            caring human beings. We have created an environment that fosters a
            global outlook yet retains the rich Indian cultural heritage and values.
          </p>
          <p className="text-gray-700">
            We are open for admissions in Ludhiana from L.K.G to Grade IX. We invite
            you to become a part of your child’s exciting and enriching journey at
            TSUS, Ludhiana which is poised to be one of the top ranked schools in
            the area.
          </p>
        </div>
      </div>
      <diV className="mt-[200px]">
      <Footer/>

      </diV>
    </div>
  );
}
