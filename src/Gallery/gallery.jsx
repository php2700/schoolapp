// import Navbar from "../../component/Navbar";
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import ChevronRightIcon from '../assets/home/shriArrow.png';
import icon from '../assets/home/arrowicon.png'
import gallery from '../assets/home/schoolgallery.jpg'
import gallery2 from '../assets/home/schoolimage2.jpg'



// import university from '../../src/assets/home/universityimage.png';
// import {heros} from '../../src/assets/home/hero.png';
export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
        <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">Events & Happiness</h1>
          <div className="flex items-center text-lg mt-2">
            <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
            <a href="/" className="text-[#EDEDED] hover:text-white">
              Home</a>

            <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />

            <a href="/about-us" className="text-[#EDEDED] hover:text-white">Gallery</a>
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
   {/* <main
  className="w-full max-w-6xl mx-auto px-4 py-8 bg-white text-center rounded-tl-lg rounded-br-lg 
  [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
>

  <h2 className="font-['poppins'] font-semibold text-[24px] leading-tight text-[#25337C] mb-8">
    Student Engagement Gallery
  </h2>

 
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

    <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition">
      <img
        src= {gallery} 
        alt="National Mountain Climbing"
        className="w-full h-52 object-cover"
      />
      <div className="p-4 text-[#25337C] font-medium text-[16px]">
        National Mountain Climbing
      </div>
    </div>

 
    <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition">
      <img
       src= {gallery} 
        alt="Telephonic Discussion"
        className="w-full h-52 object-cover"
      />
      <div className="p-4 text-[#25337C] font-medium text-[16px]">
        Telephonic Discussion
      </div>
    </div>


    <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition">
      <img
       src= {gallery} 
        alt="Grandparents Day Celebrations"
        className="w-full h-52 object-cover"
      />
      <div className="p-4 text-[#25337C] font-medium text-[16px]">
        Grandparents’ Day Celebrations
      </div>
    </div>

 
    <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition">
      <img
        src= {gallery} 
        alt="Virtual Exchange Programme"
        className="w-full h-52 object-cover"
      />
      <div className="p-4 text-[#25337C] font-medium text-[16px]">
        Virtual Exchange Programme
      </div>
    </div>


    <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition">
      <img
        src= {gallery} 
        alt="Shri Ehsaas"
        className="w-full h-52 object-cover"
      />
      <div className="p-4 text-[#25337C] font-medium text-[16px]">
        Shri Ehsaas
      </div>
    </div>

  
    <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition">
      <img
       src= {gallery} 
        alt="Visit to India News Channel"
        className="w-full h-52 object-cover"
      />
      <div className="p-4 text-[#25337C] font-medium text-[16px]">
        Visit to India News Channel
      </div>
    </div>
  </div>
</main> */}
<main
  className="w-full max-w-6xl mx-auto px-4 py-12 bg-white text-center rounded-tl-lg rounded-br-lg 
  [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
>
  <h2 className="font-['poppins'] font-semibold text-[26px] leading-tight text-[#25337C] mb-10">
    Memorable Moments Captured
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      {
        title: "National Mountain Climbing",
        img: gallery,
      },
      {
        title: "Telephonic Discussion",
        img: gallery,
      },
      {
        title: "Grandparents’ Day Celebrations",
       img: gallery
      },
      {
        title: "Virtual Exchange Programme",
        img: gallery,
      },
      {
        title: "Shri Ehsaas",
        img: gallery,
      },
      {
        title: "Visit to India News Channel",
        img: gallery,
      },
       {
        title: "National Mountain Climbing",
    img: gallery2,
      },
      {
        title: "Telephonic Discussion",
        img: gallery2,
      },
      {
        title: "Grandparents’ Day Celebrations",
    img: gallery2,
      },
      {
        title: "Virtual Exchange Programme",
      img: gallery2,
      },
      {
        title: "Shri Ehsaas",
        img: gallery2,
      },
      {
        title: "Visit to India News Channel",
        img: gallery2,
      },
    ].map((item, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-[220px] object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-medium text-sm">{item.title}</p>
        </div>
      </div>
    ))}
  </div>
</main>




      </div>
      <diV className="mt-[200px]">
        <Footer />

      </diV>
    </div>
  );
}
