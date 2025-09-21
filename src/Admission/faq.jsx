// import Navbar from "../../component/Navbar";
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import ChevronRightIcon from '../assets/home/shriArrow.png';
import icon from '../assets/home/arrowicon.png'
import Arrowdown from '../assets/home/Arrowdown.png'
import aks2 from '../assets/home/freqask2.png'
import aks3 from '../assets/home/freqaks3.png'
import aks4 from '../assets/home/freqask4.png'
import ask1 from '../assets/home/freqimg1.png'




// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Faq() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Header />

            {/* Hero Section */}
            <section className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
                <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">FAQs</h1>
                    <div className="flex items-center text-lg mt-2">
                        <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
                        <a href="/" className="text-[#EDEDED] hover:text-white">
                            Home</a>

                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <a href="/about-us" className="text-[#EDEDED] hover:text-white">Admission</a>
                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <span className='text-[#F3D805]'>FAQs</span>
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
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md  bg-[#25337c] text-white">
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
                    <div className="space-y-4">

                        {/* Single FAQ */}
                        <details className="group bg-white rounded-xl shadow-md p-5 cursor-pointer">
                            <summary className="flex justify-between items-center font-semibold text-gray-800">
                                <div className="flex items-center gap-3 font-poppins font-medium text-[20px] leading-[20px] tracking-[0.5px]">
                                    <span className="bg-[#F3D805] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center">
                                        <img src={ask1} alt="icon" className="h-6 w-6" />
                                    </span>
                                    Is prior coding experience needed?
                                </div>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <img src={Arrowdown} alt="arrow" className="h-5 w-5 text-[#000000]" />
                                </span>
                            </summary>
                            <p className="mt-3 text-gray-600 text-sm">
                                No. We start with block coding and gradually progress to text-based languages.
                            </p>
                        </details>

                        <details className="group bg-white rounded-xl shadow-md p-5 cursor-pointer">
                            <summary className="flex justify-between items-center font-semibold text-gray-800">
                                <div className="flex items-center gap-3 font-poppins font-medium text-[20px] leading-[20px] tracking-[0.5px]">
                                    <span className="bg-[#F3D805] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center">
                                        <img src={aks2} alt="icon" className="h-6 w-6" />
                                    </span>
                                    Is it safe?
                                </div>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <img src={Arrowdown} alt="arrow" className="h-5 w-5 text-[#000000]" />
                                </span>
                            </summary>
                            <p className="mt-3 text-gray-600 text-sm">
                                Yes. All activities follow strict safety SOPs; drone flying is simulation-first and age-restricted.
                            </p>
                        </details>

                        <details className="group bg-white rounded-xl shadow-md p-5 cursor-pointer">
                            <summary className="flex justify-between items-center font-semibold text-gray-800">
                                <div className="flex items-center gap-3 font-poppins font-medium text-[20px] leading-[20px] tracking-[0.5px]">
                                    <span className="bg-[#F3D805] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center">
                                        <img src={aks3} alt="icon" className="h-6 w-6" />
                                    </span>
                                    Will this add pressure?
                                </div>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <img src={Arrowdown} alt="arrow" className="h-5 w-5 text-[#000000]" />
                                </span>
                            </summary>
                            <p className="mt-3 text-gray-600 text-sm">
                                The lab replaces passive learning with active learning—many students find it easier and more engaging.
                            </p>
                        </details>

                        <details className="group bg-white rounded-xl shadow-md p-5 cursor-pointer">
                            <summary className="flex justify-between items-center font-semibold text-gray-800">
                                <div className="flex items-center gap-3 font-poppins font-medium text-[20px] leading-[20px] tracking-[0.5px]">
                                    <span className="bg-[#F3D805] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center">
                                        <img src={aks4} alt="icon" className="h-6 w-6" />
                                    </span>
                                    How is this different from a computer period?
                                </div>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <img src={Arrowdown} alt="arrow" className="h-5 w-5 text-[#000000]" />
                                </span>
                            </summary>
                            <p className="mt-3 text-gray-600 text-sm">
                                STEAM integrates science/math + engineering + emerging tech in a makerspace with physical builds, not just screens.
                            </p>
                        </details>
                        <details className="group bg-white rounded-xl shadow-md p-5 cursor-pointer">
                            <summary className="flex justify-between items-center font-semibold text-gray-800">
                                <div className="flex items-center gap-3 font-poppins font-medium text-[20px] leading-[20px] tracking-[0.5px]">
                                    <span className="bg-[#F3D805] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center">
                                        <img src={aks4} alt="icon" className="h-6 w-6" />
                                    </span>
                                    Where is The Shri Ram Universal School located?
                                </div>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <img src={Arrowdown} alt="arrow" className="h-5 w-5 text-[#000000]" />
                                </span>
                            </summary>
                            <p className="mt-3 text-gray-600 text-sm">
                                Spread across 3 acres of land in the heart of the city at Sarabha Nagar, The Shri Ram Universal School nestles in a building that emanates an aura of positivity and good cheer. With an infrastructure that is designed to provide free and open spaces for learning, the school incorporates BALA (Building as a Learning Aid) to enrich and enhance children’s learning.
                            </p>
                        </details>
                        <details className="group bg-white rounded-xl shadow-md p-5 cursor-pointer">
                            <summary className="flex justify-between items-center font-semibold text-gray-800">
                                <div className="flex items-center gap-3 font-poppins font-medium text-[20px] leading-[20px] tracking-[0.5px]">
                                    <span className="bg-[#F3D805] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center">
                                        <img src={aks4} alt="icon" className="h-6 w-6" />
                                    </span>
                                    What are the timings at school ?
                                </div>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <img src={Arrowdown} alt="arrow" className="h-5 w-5 text-[#000000]" />
                                </span>
                            </summary>
                            <p className="mt-3 text-gray-600 text-sm">
                                Pre primary 8:00 am to 12:30 pm
                                Grades I to V 8:00 am to 2:30 pm.
                            </p>
                        </details>
                        <details className="group bg-white rounded-xl shadow-md p-5 cursor-pointer">
                            <summary className="flex justify-between items-center font-semibold text-gray-800">
                                <div className="flex items-center gap-3 font-poppins font-medium text-[20px] leading-[20px] tracking-[0.5px]">
                                    <span className="bg-[#F3D805] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center">
                                        <img src={aks4} alt="icon" className="h-6 w-6" />
                                    </span>
                                    Is The Shri Ram School Delhi and TSUS same?
                                </div>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <img src={Arrowdown} alt="arrow" className="h-5 w-5 text-[#000000]" />
                                </span>
                            </summary>
                            <p className="mt-3 text-gray-600 text-sm">
                             TSUS adopts the curriculum pedagogy, teaching methodology and the best practices of The Shri Ram School, Delhi, by collaborating with Shri Educare Limited which is a sister concern of The Shri Ram Schools..
                            </p>
                        </details>
                        <details className="group bg-white rounded-xl shadow-md p-5 cursor-pointer">
                            <summary className="flex justify-between items-center font-semibold text-gray-800">
                                <div className="flex items-center gap-3 font-poppins font-medium text-[20px] leading-[20px] tracking-[0.5px]">
                                    <span className="bg-[#F3D805] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center">
                                        <img src={aks4} alt="icon" className="h-6 w-6" />
                                    </span>
                                    Will the school get upgraded each year?
                                </div>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <img src={Arrowdown} alt="arrow" className="h-5 w-5 text-[#000000]" />
                                </span>
                            </summary>
                            <p className="mt-3 text-gray-600 text-sm">
                               Yes, school will certainly upgrade each year, the school can accommodate around 2000 students. It will commence in April 2019 with classes till Grade V and is upgraded by adding one/two grades each year. It will have classes till Grade XII eventually.
                            </p>
                        </details>
                        <details className="group bg-white rounded-xl shadow-md p-5 cursor-pointer">
                            <summary className="flex justify-between items-center font-semibold text-gray-800">
                                <div className="flex items-center gap-3 font-poppins font-medium text-[20px] leading-[20px] tracking-[0.5px]">
                                    <span className="bg-[#F3D805] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center">
                                        <img src={aks4} alt="icon" className="h-6 w-6" />
                                    </span>
                                    Which Curriculum would TSUS follow ?
                                </div>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <img src={Arrowdown} alt="arrow" className="h-5 w-5 text-[#000000]" />
                                </span>
                            </summary>
                            <p className="mt-3 text-gray-600 text-sm">
                                We will follow the CBSE curriculum and incorporate the ‘SHRI’ Way or teaching-learning methodology, which is integrated by Shri Educare Limited.
                            </p>
                        </details>
                        <details className="group bg-white rounded-xl shadow-md p-5 cursor-pointer">
                            <summary className="flex justify-between items-center font-semibold text-gray-800">
                                <div className="flex items-center gap-3 font-poppins font-medium text-[20px] leading-[20px] tracking-[0.5px]">
                                    <span className="bg-[#F3D805] text-[#000000] rounded-full w-9 h-9 flex items-center justify-center">
                                        <img src={aks4} alt="icon" className="h-6 w-6" />
                                    </span>
                                    What type of teaching methodology is followed in the elementary grades ?
                                </div>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <img src={Arrowdown} alt="arrow" className="h-5 w-5 text-[#000000]" />
                                </span>
                            </summary>
                            <p className="mt-3 text-gray-600 text-sm">
                               The methodology at TSUS is an amalgamation of best practices and pedagogy across the globe. Known by us as the ‘Shri Way’, the methodology at school takes care of intellectual, social, physical and emotional wellbeing of the children by facilitating the learning process. All our teachers are trained intensively to understand and bring out the best in each child
                            </p>
                        </details>




                    </div>



                </main>

            </div>
            <diV className="mt-[200px]">
                <Footer />

            </diV>
        </div>
    );
}
