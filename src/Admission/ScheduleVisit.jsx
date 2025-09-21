// import Navbar from "../../component/Navbar";
import { useState } from "react";
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import ChevronRightIcon from '../assets/home/shriArrow.png';
import icon from '../assets/home/arrowicon.png'



// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Schedule() {

    const [selected, setSelected] = useState("in");

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
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Header />

            {/* Hero Section */}
            <section className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
                <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">Schedule a Visit</h1>
                    <div className="flex items-center text-lg mt-2">
                        <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
                        <a href="/" className="text-[#EDEDED] hover:text-white">
                            Home</a>

                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <a href="/about-us" className="text-[#EDEDED] hover:text-white">Schedual</a>
                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <span className='text-[#F3D805]'>Schedule a Visit</span>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            {/* <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-600">
        Home <span className="mx-2">›</span>{" "}
        <span className="text-blue-700 font-medium">
          What makes us different from others
        </span>
      </div> */}

            {/* Content Section */}
            <div className=" bg-white container mx-auto py-12 px-4 md:flex">
                {/* Left Sidebar */}
                <aside className="w-full md:w-1/4 pr-8 mb-8 md:mb-0">
                    <div className=" font-['poppins'] bg-white p-10  shadow  rounded-tl-lg rounded-br-lg
                   [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]">
                        <h3 className=" font-['poppins'] text-xl font-semibold text-[#25337C] mb-4">Admission</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md  hover:bg-gray-200  text-[#737373]">
                                    Admission Process
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3 text-[#737373]"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373] ">
                                    Application Form
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3 text-[#737373]"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md bg-[#25337C] text-white">
                                    Schedule a Visit
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3 text-[#737373]"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]">
                                    e-Brochure
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md  hover:bg-gray-200 text-[#737373]">
                                    FAQs
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3"
                                    />
                                </a>
                            </li>



                        </ul>
                    </div>
                </aside>

                {/* Right Content */}
                <main className="w-full max-w-6xl mx-auto px-4 py-8 bg-white text-center
    rounded-tl-lg rounded-br-lg
    [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]">

                    <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6">
                        Schedule a Visit
                    </h2>

                    {/* Intro Text */}
                    <div className="mb-8 text-[#333333] text-[16px] tracking-normal font-['poppins'] text-left">
                        <p className="mb-2">We encourage parents to visit the school campus.</p>
                        <p>
                            Please call: <span className="font-semibold text-[#25337C]">98788-78825</span> to discuss with our Parent Relationship Manager or fill the following form to schedule a visit
                        </p>
                    </div>

                    {/* Form */}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">

                        <input
                            type="text"
                            placeholder="Student name"
                            className="border p-3 rounded w-full"
                        />
                        <input
                            type="text"
                            placeholder="Parent name"
                            className="border p-3 rounded w-full"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="border p-3 rounded w-full"
                        />
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
                        <input
                            type="text"
                            placeholder="Student class"
                            className="border p-3 rounded w-full"
                        />
                        <input
                            type="text"
                            placeholder="Student section"
                            className="border p-3 rounded w-full"
                        />

                        <textarea
                            placeholder="Message"
                            className="border p-3 rounded w-full md:col-span-2 h-28 resize-none"
                        ></textarea>

                        <div className="md:col-span-2 text-center">
                            <button
                                type="submit"
                                className="bg-[#25337C] text-white px-6 py-2 rounded-lg hover:bg-[#1a275e]"
                            >
                                Submit
                            </button>
                        </div>


                    </form>
                </main>

            </div>
            <diV className="mt-[200px]">
                <Footer />

            </diV>
        </div>
    );
}
