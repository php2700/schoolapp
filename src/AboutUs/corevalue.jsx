// import Navbar from "../../component/Navbar";
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import ChevronRightIcon from '../assets/home/shriArrow.png';
import icon from '../assets/home/arrowicon.png'



// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Corevalue() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Header />

            {/* Hero Section */}
            <section className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
                <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">Core Values</h1>
                    <div className="flex items-center text-lg mt-2">
                        <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
                        <a href="/" className="text-[#EDEDED] hover:text-white">
                            Home</a>

                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <a href="/about-us" className="text-[#EDEDED] hover:text-white">About</a>
                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <span className='text-[#F3D805]'>Core Values</span>
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
                        <h3 className=" font-['poppins'] text-xl font-semibold text-[#25337C] mb-4">About Us</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md  hover:bg-gray-200  text-[#737373]">
                                    About TSUS Ludhiana
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3 text-[#737373]"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]">
                                    Leadership
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3 text-[#737373]"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]">
                                    Principal's Message
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md  hover:bg-gray-200 text-[#737373]">
                                    Vision & Mission
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md bg-[#25337C] text-white">
                                    Core Values
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]">
                                    What makes us different from others
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]">
                                    Mandatory Public Disclosure
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
                    <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6">Integrity</h2>

                    {/* Hindi Content */}
                    <div className="mb-8 text-[#333333]  text-[18px] tracking-normal text-center font-['poppins'] font-medium">
                        <p className="mb-2">
                            To nurture a vibrant, innovative and caring environment that is committed to all round excellence in education.
                        </p>
                        <p className="mb-2">
                            Ensuring a moral and value driven education. Instilling a transparent culture of communication between teachers, students and parents.
                        </p>
                        <p className="mb-2">
                            Adopting an ethos where we practice what we preach and turn out empowered and happy students.
                        </p>
                        <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6">Sensitivity</h2>
                        <p className="mb-2">
                            Nurturing the sensitivity within each child in order to embrace diversity in the environment.
                        </p>
                        <p className="mb-2">
                            Using the progressive practises of 'Circle Time' and 'Dialogue' with students to develop acceptance, tolerance and understanding of human diversity.
                        </p>
                        <p className="mb-2">
                            Adopting 'Inclusive Education' in classrooms and using 'Community Outreach' Programmes to create a culture of service and gratitude.
                        </p>
                        <p className="mb-2">
                            Initiating an 'Environment Programme' from Elementary for sensitization towards natural resources to integrate the ideals of reuse, recycle and reduce.
                        </p>

                        <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6">Pursuit of Excellence</h2>
                        <p className="mb-2">
                            Consistent and constant efforts by a committed and motivated staff to provide individualized attention.
                        </p>
                        <p className="mb-2">
                            A management decision of 1:10 student teacher ratio to sustain individualized Learning.
                        </p>
                        <p className="mb-2">
                            A School Annual Plan that uses the progressive practices of 'Wonder Time', 'Circle Time', 'Music and Movement', 'Puppetry', 'Story Telling', 'DEAR' (Drop Everything And Read ), 'DEED' (Debate, Elocution, Extempore and Drama), 'Form Mornings/Evenings', 'Shri Khel', 'Coffee Mornings', 'Outbound Programmes' to develop an attitude of continuous striving towards excellence in all spheres amongst students.
                        </p>


                        <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6">Pride in One’s Cultural Heritage</h2>
                        <p className="mb-2">
                          A school curriculum that is rich with glimpses of Indian Heritage and Culture, evoking in each student pride in its rich and varied fabric.
                        </p>
                        <p className="mb-2">
                          A School Annual Plan that uses the cultural practices such as Mad About Heritage, Mad About Tales, Mad About Books, Mad About Environment, VIRASSAT Program, to help each student carry in their heart the legacy of our vibrant, beautiful and diverse culture.
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
