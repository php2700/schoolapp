// import Navbar from "../../component/Navbar";
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import ChevronRightIcon from '../assets/home/shriArrow.png';
import icon from '../assets/home/arrowicon.png'



// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Art() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Header />

            {/* Hero Section */}
            <section className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
                <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">Art and Visual Art</h1>
                    <div className="flex items-center text-lg mt-2">
                        <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
                        <a href="/" className="text-[#EDEDED] hover:text-white">
                            Home</a>

                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <a href="/about-us" className="text-[#EDEDED] hover:text-white">Co-curriculum Pursuit</a>
                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <span className='text-[#F3D805]'>Art and Visual Art</span>
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
                        <h3 className=" font-['poppins'] text-xl font-semibold text-[#25337C] mb-4">Co-curriculum Pursuit</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md   bg-[#25337C] text-white">
                                    Art and Visual Art
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3 text-[#737373]"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]">
                                    TSUS Societies And Clubs
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3 text-[#737373]"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]">
                                    Sports
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373] ">
                                    Beyond the Classroom
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]">
                                    Environment Initiatives
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
                    <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6">Art and Visual Art</h2>

                    {/* Hindi Content */}
                    <div className="mb-8 text-[#333333]  text-[18px] tracking-normal text-center font-['poppins'] font-medium">
                        <p className="mb-12">
                            Blending culture and passion across a diverse creative landscape, The Shri Ram universal schools are home to a vibrant and dedicated community which celebrates and practises art in the form of public speaking, visual arts, music, dance and theatre. DEED (Debating, Elocution, Extempore, Dance/Drama) classes are held throughout the year and the students’ talents are showcased at the various inter – house, intra-school and inter-school events.
                        </p>
                        <p className="mb-6">
                          The school calendar is packed with exciting activities and competitions involving debates, ad-acting, elocution, nukkad nataks, plays, bands, folk songs and dance sculminating in ‘Form Mornings’, ‘Form Evenings’ and Founders’ Day programmes.
                        </p>







                    </div>





                </main>
            </div>
            <diV className="mt-[200px]">
                <Footer />

            </diV>
        </div>
    );
}
