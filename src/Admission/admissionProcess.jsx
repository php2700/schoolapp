// import Navbar from "../../component/Navbar";
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import ChevronRightIcon from '../assets/home/shriArrow.png';
import icon from '../assets/home/arrowicon.png'



// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Admissionprocess() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Header />

            {/* Hero Section */}
            <section className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
                <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">Admission Process</h1>
                    <div className="flex items-center text-lg mt-2">
                        <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
                        <a href="/" className="text-[#EDEDED] hover:text-white">
                            Home</a>

                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <a href="/about-us" className="text-[#EDEDED] hover:text-white">Admission</a>
                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <span className='text-[#F3D805]'>Admission Process</span>
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
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md  bg-[#25337c]  text-white">
                                    Addmission Process
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3 text-[#737373]"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md  hover:bg-gray-200  text-[#737373]">
                                    Application Form
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3 text-[#737373]"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]">
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
                <main
                    className="w-full max-w-6xl mx-auto px-4 py-8 bg-white text-center
             rounded-tl-lg rounded-br-lg
             [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
                >
                    <div className="mb-8 text-[#333333] text-[18px] tracking-normal text-center font-['poppins'] font-medium">
                        <p className="mb-6">
                            Admissions are open for academic year 2024-25 from Grade LKG to Grade IX. (Subject to availability)
                        </p>
                    </div>

                    <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6">
                        Age Criteria
                    </h2>

                    <div className="mb-8 text-[#333333] text-[18px] tracking-normal text-center font-['poppins'] font-medium">
                        <p className="mb-6">
                            The admissions process at The Shri Ram Universal School has been designed to make certain that students are appropriately placed at appropriate grade levels while maintaining the integrity and consistency of the school program and policies
                        </p>
                        <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6">
                            We shall follow the following age criteria
                        </h2>
                        <p className="mb-3">Grade - Age as on 31st March of year of Admission</p>
                        <p className="mb-2">Grade LKG - 4 Years</p>
                        <p className="mb-2">Grade UKG - 5 Years</p>
                        <p className="mb-2">Grade I - 6 Years</p>
                    </div>

                    {/* Admission Process Section */}
                    {/* Admission Process Section */}
                    <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6 text-center">
                        Admission Process
                    </h2>
                    <div className="mb-8 text-[#333333] text-[18px] tracking-normal font-['poppins'] font-medium flex justify-center">
                        <ol className="list-decimal space-y-3 text-left inline-block">
                            <li>Filling up of Parent Information form.</li>
                            <li>An interaction with the Parent Relationship Personnel followed by a campus tour.</li>
                            <li>Purchase of application form followed by an interaction with the educator.</li>
                            <li>
                                Submission of the Application Form with the following documents:
                                <ul className="list-disc mt-2 space-y-1 pl-6">
                                    <li>Transfer Certificate signed by the Head of the Institution.</li>
                                    <li>Report card of the previous school attended.</li>
                                    <li>Photocopy of Date of Birth Certificate issued by the Registrar of Birth.</li>
                                    <li>Six passport sized recent photographs of the student, 2 photographs of each parent.</li>
                                    <li>Aadhaar Card of the student and the parents.</li>
                                    <li>Copy of proof of residence.</li>
                                    <li>Immunization record.</li>
                                </ul>
                            </li>
                            <li>Payment of fees on confirmation of admission.</li>
                            <li>An application form may be submitted online in case of application by outstation students.</li>
                        </ol>
                    </div>


                </main>

            </div>
            <diV className="mt-[200px]">
                <Footer />

            </diV>
        </div>
    );
}
