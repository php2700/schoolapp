// import Navbar from "../../component/Navbar";
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import ChevronRightIcon from '../assets/home/shriArrow.png';
import icon from '../assets/home/arrowicon.png'



// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Facilities() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
        <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">Facilities</h1>
          <div className="flex items-center text-lg mt-2">
            <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
            <a href="/" className="text-[#EDEDED] hover:text-white">
              Home</a>

            <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

            <a href="/about-us" className="text-[#EDEDED] hover:text-white">Facilities</a>
            {/* <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" /> */}

            {/* <span className='text-[#F3D805]'>Admission Process</span> */}
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
  

        {/* Right Content */}
        <main
          className="w-full max-w-6xl mx-auto px-4 py-8 bg-white text-center rounded-tl-lg rounded-br-lg 
  [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
        >
          {/* Intro Section */}
          <div className="mb-10 text-[#333] text-[18px] font-['poppins'] leading-relaxed text-center">
            <p>
              At TSUS, we are committed to nurturing curiosity, creativity, and critical thinking in every child. Our
              <strong> Thinking Arcade – 'Think’cade</strong> is designed to promote problem-solving through collaborative brainstorming
              and innovation-led activities that prepare students for real-world challenges.
            </p>
          </div>

          {/* Wonder Spaces */}
          <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6">
            Wonder Spaces
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-[#444] text-[16px] font-['poppins'] mb-12">
            <div className="p-5 border rounded-lg bg-[#f7f9fc]">
              <h3 className="text-[#25337C] font-semibold mb-2">Kitchen Garden</h3>
              <p>
                A hands-on green space where students learn to grow their own vegetables. This space blends science learning
                with sustainability, helping students understand the importance of growing and consuming their own food.
              </p>
            </div>
            <div className="p-5 border rounded-lg bg-[#f7f9fc]">
              <h3 className="text-[#25337C] font-semibold mb-2">Tree House</h3>
              <p>
                A calming, creative nook where storytelling, art sessions, and class discussions unfold under the open sky.
                It encourages reflection and imagination, away from the usual classroom setting.
              </p>
            </div>
            <div className="p-5 border rounded-lg bg-[#f7f9fc]">
              <h3 className="text-[#25337C] font-semibold mb-2">Mango Grove</h3>
              <p>
                A serene natural zone where conversations flow freely between students and teachers. The shaded grove provides
                the perfect backdrop for collaboration and connection.
              </p>
            </div>
          </div>

          {/* Facilities Section */}
          <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-6">
            Holistic Facilities & Enriching Programs
          </h2>

          <div className="text-left space-y-8 text-[16px] font-['poppins'] text-[#444]">
            <div>
              <h3 className="text-[#25337C] font-semibold">Play Zone</h3>
              <p>
                Equipped with spaces like a play gym, sand pit, texture garden, and sports courts, our play zones encourage both
                fine and gross motor development. Activities include cricket, basketball, skating, swimming, and more.
              </p>
            </div>

            <div>
              <h3 className="text-[#25337C] font-semibold">Learning Den</h3>
              <p>
                A knowledge hub fostering a lifelong love for reading. The library offers a wide range of resources that spark
                intellectual curiosity and support emotional growth.
              </p>
            </div>

            <div>
              <h3 className="text-[#25337C] font-semibold">Robotics Lab</h3>
              <p>
                A dedicated innovation lab where students engage in coding, physical computing, design thinking, and problem-solving.
                It fuels imagination, adaptive learning, and future-ready skills.
              </p>
            </div>

            <div>
              <h3 className="text-[#25337C] font-semibold">Sports</h3>
              <p>
                Sports like swimming, shooting, lawn tennis, yoga, and chess are offered to enhance physical fitness, discipline, and teamwork.
              </p>
            </div>

            <div>
              <h3 className="text-[#25337C] font-semibold">Cafeteria</h3>
              <p>
                Nutritious meals are served daily, curated by the Food Committee. Menus are thoughtfully designed to include
                balanced nutrients and are shared monthly with parents for transparency.
              </p>
            </div>

            <div>
              <h3 className="text-[#25337C] font-semibold">Transport</h3>
              <p>
                Safe, air-conditioned transport service is available for students residing within a 15 km radius of the school.
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
