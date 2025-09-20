// import Navbar from "../../component/Navbar";
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import ChevronRightIcon from '../assets/home/shriArrow.png';
import gujralImage from '../assets/home/principalimage.png';
import icon from '../assets/home/arrowicon.png'


// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Principal() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
        <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">Founder Principal's Messages</h1>
          <div className="flex items-center text-lg mt-2">
            <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
            <a href="/" className="text-[#EDEDED] hover:text-white">
              Home</a>

             <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />
            <a href="/about-us" className="text-[#EDEDED] hover:text-white">About</a>
            <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />
            <span className='text-[#F3D805]'>Founding Principals Message</span>
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
                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]">
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
                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md h bg-[#25337C] text-white">
                  Principal's Message
                  <img
                    src={ChevronRightIcon}   // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]">
                  Vision & Mission
                  <img
                    src={ChevronRightIcon}   // apna icon ka path yaha lagao
                    alt="chevron right"
                    className="h-6 w-3"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]">
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
    <main className="w-full max-w-6xl mx-auto px-4 py-8 bg-white
                   rounded-tl-lg rounded-br-lg
                   [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]">

      <div className="flex flex-col md:flex-row items-start md:items-center text-left mb-8">
        <div className="md:w-1/3 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          {/* Replace with your actual image path */}
          <img src={gujralImage} alt="Dr. Navneet Kaur" className="w-full h-auto rounded-md" />
        </div>
        <div className="md:w-2/3">
          <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-4">Dr. Navneet Kaur</h2>
          <p className=" text-[#333333]] text-[18px] tracking-normal font-['poppins'] font-medium mb-4">
            The Shri Ram Universal School, Ludhiana is an heir to the rich Shri legacy: this
            ascertains our potential and commitment to raise an institution matchless not only
            in infrastructure, but also in academic delivery, governed by the healthy motive of
            nurturing the future of our country and the world at large. The Shri Ram Universal
            School is here with a promise to be a thorough preparatory for life. We aim at
            nurturing skills essential to live a full life. Envisaging this, we are all set to surge
            ahead and create a learning space that nurtures every child's inherent ability to
            learn and create.
          </p>
        </div>
      </div>

      <div className="text-left text-[#333333] text-[18px] tracking-normal font-['poppins'] font-medium">
        <p className="mb-4">
          The Shri Ram Universal School offers a perfect blend of learning facilitated by technology and led by the personal
          connect of the teacher in the classroom. To ensure active learning for all learners with varied learning levels and needs,
          we amalgamate academics with activities and thus make learning more meaningful for our students. The state-of-the-
          art infrastructure facilitates et al. A gamut of sports activities in addition to performing arts sessions lends an
          endearing joy to school day. The Shri Educators are professionally qualified to deliver the curriculum, create happy
          classrooms, connect with families and community to contribute to a world that is empathetic and creative enough to
          seek problems and solutions well in time. We are governed by a positive belief to offer equal as well as equitable
          learning opportunities to our students. We begin our journey with a commitment to provide our children with the best
          learning experiences they can ever receive.
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
