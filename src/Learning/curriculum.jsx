// import Navbar from "../../component/Navbar";
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import ChevronRightIcon from '../assets/home/shriArrow.png';
import icon from '../assets/home/arrowicon.png'



// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Curriculum() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Header />

            {/* Hero Section */}
            <section className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
                <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">Co-Curriculum Pursuit</h1>
                    <div className="flex items-center text-lg mt-2">
                        <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
                        <a href="/" className="text-[#EDEDED] hover:text-white">
                            Home</a>

                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <a href="/about-us" className="text-[#EDEDED] hover:text-white">Learning</a>
                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <span className='text-[#F3D805]'>Co-Curriculum Pursuit</span>
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
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md  hover:bg-gray-200  text-[#737373]">
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
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md  bg-[#25337C] text-white">
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
                    <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6">School Trips</h2>

                    {/* Hindi Content */}
                    <div className="mb-8 text-[#333333]  text-[18px] tracking-normal text-center font-['poppins'] font-medium">
                        <p className="mb-6">
                            We believe that learning is incomplete withoutit being experimental. In line with this thought, the school organises school trips. Every effort is made to ensure that the students explore the natural world around them, seeing what they have learnt in the classroom come alive.
                        </p>
                        <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6 mt-6">A Day in the Life of our Shriite</h2>
                        <p className="mb-12">
                           Shriites thrive in the safe, friendly and stimulating learning environment that the school provides. This helps them to be focused as they have clear routines and meet consistent expectations of positive behaviour. They are caring, articulate, observant and sensitive. Shriites develop in a holistic manner – intellectually, socially, emotionally and physically. A day in the life of Shriites begins with a spring in their step as they enter the lush green campus. Morning assemblies set the tone for a great day of learning. Children are then involved in an array of learning activities that are inspiring and linked to the real world outside the classrooms. Visits to the playground, the dance room and the music room are an integral part of the day of Shriites. Visual arts and yoga are also woven into the curriculum to channelize their energies. All Shriites are given various platforms to explore, experiment, experience and enjoy their learning at school.
                        </p>
                        <p className="mb-2">
                            We endeavour to inculcate in the students not just a love for learning but also an awareness of their responsibility towards themselves and the society. Shri Educators act as facilitators and guide the students in their learning using activities, audio-visual stimuli, projects and presentations. The quest of the educators is to enhance the learning experience for all Shriites and make their learning journey a happy one.
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
