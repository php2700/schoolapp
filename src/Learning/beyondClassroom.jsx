// import Navbar from "../../component/Navbar";
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import ChevronRightIcon from '../assets/home/shriArrow.png';
import icon from '../assets/home/arrowicon.png'
import image from '../assets/home/kidsimage.png'
import image2 from '../assets/home/kidimage2.jpg'



// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Classroom() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Header />

            {/* Hero Section */}
            <section className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
                <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">Beyond the Classroom</h1>
                    <div className="flex items-center text-lg mt-2">
                        <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
                        <a href="/" className="text-[#EDEDED] hover:text-white">
                            Home</a>

                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <a href="/about-us" className="text-[#EDEDED] hover:text-white">Co-curriculum Pursuit</a>
                        <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

                        <span className='text-[#F3D805]'>Beyond the Classroom</span>
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
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md   hover:bg-gray-200 text-[#737373]">
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
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373">
                                    Sports
                                    <img
                                        src={ChevronRightIcon}   // apna icon ka path yaha lagao
                                        alt="chevron right"
                                        className="h-6 w-3"
                                    />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md bg-[#25337C] text-white ">
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


    <div className="mb-8 text-[#333333] text-[18px] tracking-normal text-center font-['poppins'] font-medium">
        {/* You can add any intro paragraph here if needed */}
    </div>

    {/* Grid Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left font-['poppins'] text-[#333] text-[16px] px-4">
        {/* Card 1 */}
        <div>
            <img src={image} alt="School Trips" className="w-full h-auto rounded mb-4 transition-transform duration-300 hover:scale-105" />
            <h3 className="font-semibold text-lg mb-2">School Trips</h3>
            <p>
                Students from each grade have the opportunity to go for educational and fun trips within the city and also outside it.
                Students from Grade IV onwards undertake outstation trips every year. Besides the huge learning that students carry back
                from the great outdoors, they develop a close bond with teachers and friends.
            </p>
        </div>

        {/* Card 2 */}
        <div>
            <img src={image} alt="Circle Time" className="w-full h-auto rounded mb-4 transition-transform duration-300 hover:scale-105" />
            <h3 className="font-semibold text-lg mb-2">Circle Time</h3>
            <p>
                Circle Time activities act as team building exercises that enhance the self esteem of the children.
                The teacher acts as the facilitator during the class. Each child is encouraged to speak and voice his/her views
                while the others learn the importance of listening.
            </p>
        </div>

        {/* Card 3 */}
        <div>
            <img src={image2} alt="Discovery Hour" className="w-full h-auto rounded mb-4 transition-transform duration-300 hover:scale-105" />
            <h3 className="font-semibold text-lg mb-2">Discovery Hour</h3>
            <p>
                An hour of observing, experimenting and learning through, as the name suggests—discovering!
                Activities that promote these skills with an element of fun are incorporated into the time table.
                Activities develop logical thinking, reasoning, and motor/analytical skills.
            </p>
        </div>

        {/* Card 4 */}
        <div>
            <img src={image2} alt="Writer's Workshop" className="w-full h-auto rounded mb-4 transition-transform duration-300 hover:scale-105" />
            <h3 className="font-semibold text-lg mb-2">Writer’s Workshop</h3>
            <p>
                From October to December, students of Grades IV and V participate in Writers’ Workshop. A life-changing experience for students,
                it enhances writing, creativity, and thinking.
            </p>
        </div>

        {/* Card 5 */}
        <div>
            <img src={image} alt="Reading Club" className="w-full h-auto rounded mb-4 transition-transform duration-300 hover:scale-105" />
            <h3 className="font-semibold text-lg mb-2">Reading Club</h3>
            <p>
                To ensure every child takes interest in reading, a Reading Club has been set up. Teachers identify books, encourage vocabulary discussions,
                and build reading habits.
            </p>
        </div>
    </div>
</main>

            </div>
            <diV className="mt-[200px]">
                <Footer />

            </diV>
        </div>
    );
}
