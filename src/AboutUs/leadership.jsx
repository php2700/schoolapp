import React from 'react';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import gujralImage from '../assets/home/leadershipmg.png';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import rotation from '../assets/home/rotationVector.png'
import icon from '../assets/home/arrowicon.png'

const LeadershipTeamPage = () => {
  return (
    <>
      <Header />
      <div className="font-sans bg-white min-h-screen">
        {/* Banner Section */}
        <section className="relative h-120 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden" style={{ backgroundImage: `url(${Banner})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
          <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">The Leadership Team</h1>
            <div className="flex items-center text-lg mt-2">
              <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
              <a href="/" className="text-[#EDEDED] hover:text-white">
                Home</a>

              <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />
              <a href="/about-us" className="text-[#EDEDED] hover:text-white">About Us</a>
              {/* <span className="mx-2">/</span> */}
              <img src={icon} alt="Arrow Icon" className="w-3 h-4 mx-2" />
              <span className='text-[#F3D805]'>Learning</span>
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        {/* Left Sidebar - About Us Navigation */}
        <aside className="lg:w-1/4 pr-8 mb-8 lg:mb-0">
          <div className=" font-['poppins'] bg-white rounded-lg p-6  shadow  rounded-tl-lg rounded-br-lg
=======
        {/* Main Content Area */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
          {/* Left Sidebar - About Us Navigation */}
          <aside className="lg:w-1/4 pr-8 mb-8 lg:mb-0">
            <div className=" font-['poppins'] bg-white rounded-lg shadow p-6  shadow  rounded-tl-lg rounded-br-lg
>>>>>>> a6c1cb0f8490ff576b47bdb60c352b8d7d1e4a98
                 [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]">
              <h2 className="text-[32px] font-semibold mb-4 text-[#25337C]">About Us</h2>
              <nav>
                <ul>
                  <li className="mb-2">
                    <a href="#" className=" font-['poppins'] flex justify-between items-center py-2 px-3 rounded-md hover:bg-blue-50 text-[#737373] text-[14px] hover:text-blue-600">
                      <span>About TLMD L. Educational</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="flex justify-between items-center py-2 px-3 rounded-md bg-[#25337C] text-white font-medium">
                      <span>Leadership</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-blue-50 text-[#737373] text-[14px] hover:text-blue-600">
                      <span>Chairman Message</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-blue-50 text-[#737373] text-[14px] hover:text-blue-600">
                      <span>Vision & Mission</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-blue-50 text-[#737373] text-[14px] hover:text-blue-600">
                      <span>Core Values</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-blue-50 text-[#737373] text-[14px] hover:text-blue-600">
                      <span>What Makes Us Different?</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-blue-50 text-[#737373] text-[14px] hover:text-blue-600">
                      <span>Mandatory Public Disclosure</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          {/* Right Content Area - Leadership Team Details */}
          <main className="lg:w-3/4">
            <div className="bg-white  shadow p-8 font-['poppins'] rounded-tl-lg rounded-br-lg
                 [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]">
              <h2 className="text-[55px] leading-[100%] tracking-[0] font-semibold text-[#25337C] text-center mb-4 font-['poppins']">Our Leadership Team</h2>
              <p className="text-[#333333] text-[18px] mb-8  text-center">
                Meet the dedicated leaders who guide our educational <br /> vision and commitment to excellence.
              </p>

              <div className="flex flex-col md:flex-row items-center md:items-start  mb-4">

                <div className="flex flex-col items-center  md:mr-8 text-center ">
                  <div className="relative w-60 h-60 overflow-visible">
                    <img
                      src={gujralImage}
                      alt="Gurpreet Singh Bansal"
                      className="w-60 h-60 object-cover mb-4 p-1 rounded-br-[25px]"
                    />
                    {/* Rotation Icon as Image */}
                    <img
                      src={rotation} // <-- yaha apna rotation icon ka path dijiye
                      alt="Rotate Icon"
                      className="absolute bottom-1 right-1 w-10 h-10"
                       style={{ right: "-12px", bottom: "-12px" }} 
                    />
                  </div>


                  <h3 className="text-[20px] leading-[26px] font-bold text-[#25337C] font-montserrat mt-4">
                    Gurpreet Singh Bansal
                  </h3>
                  <p className="text-[18px] font-bold text-[#F3D805] font-montserrat mb-4 mt-2 ">
                    Chairman
                  </p>
                </div>


                <div className="max-w-3xl text-[#333333] text-[18px] leading-relaxed">
                  <p>
                    We welcome you to a world of learning in an enjoyable environment, to a
                    world where every child is encouraged and empowered to recognize and reach
                    his or her full potential. Our aim is to equip children to think
                    critically, act with compassion, have courage, develop a deep understanding
                    of their historical and cultural legacy, we inculcate in them an
                    appreciation for their tools and the rich heritage of their nation and also
                    equip them with skills that enable them to appreciate and acknowledge
                    different perspectives and help them to learn and empathise with others
                    around them. We welcome you to a world of learning in an enjoyable
                    environment, to a world where every child is encouraged and empowered to
                    eventually realize his or her true potential. Our aim is to equip children
                    to think
                    {/* fostering an awareness of their historical and cultural legacy, we
                  inculcate in them an appreciation for the rich heritage of our nation and
                  also equip them with skills that enable them to appreciate and acknowledge
                  different perspectives and lead them to support and empathise with others
                  around them. */}
                  </p>
                </div>


              </div>

              <div className="text-left text-[#333333] text-[18px] tracking-normal font-['poppins'] ">
                <p className="mb-1">
                  To ensure the all-round development of our children, we synthesise internationally acclaimed pedagogical practices with India’s rich educational and cultural heritage and offer a platform where our children explore and experiment through a variety of learning experiences. This in turn empowers them to tackle the unexpected and rapidly changing world that they will walk into.I welcome you to be a part of your child’s journey at TSUS, as his/her creativity is nurtured, inquiry and critical reflection are fostered, confidence and self-esteem are built, and values are imbibed. Let us work together to create a future generation that is made up of confident, courageous, conscientious and caring citizens of the world.
                </p>

              </div>


              {/* Other Leaders Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 text-[#25337C] gap-8">
                {/* Jaya Singh */}
                <div className="bg-white p-6 rounded-lg text-center  ">
                      <div className="relative w-60 h-60 overflow-visible">
                    <img
                      src={gujralImage}
                      alt="Gurpreet Singh Bansal"
                      className="w-60 h-60 object-cover mb-4 p-1 rounded-br-[25px]"
                    />
                    {/* Rotation Icon as Image */}
                    <img
                      src={rotation} // <-- yaha apna rotation icon ka path dijiye
                      alt="Rotate Icon"
                      className="absolute bottom-1 right-1 w-10 h-10"
                       style={{ right: "-12px", bottom: "-12px" }} 
                    />
                  </div>
                  <h4 className="text-[24px] leading-[30px] tracking-[0.1px] font-bold text-[#25337C] font-montserrat mt-4 ">Jaya Singh</h4>
                  <p className="text-[22px] leading-[30px] tracking-[0.1px] font-bold text-[#F3D805] font-montserrat mb-3">Advisor</p>
                  <p className="text-[#333333] text-[17px] leading-relaxed">
                    Education is the basis of all progress. This progress is possible only if men and women are equally well educated.The entire purpose of education is not just to impart facts but to impart leadership qualities to inculcate humanitarian values like empathy, compassion, courage , humility & integrity in a student.
                  </p>
                </div>

                {/* Zyotics */}
                <div className="bg-white p-6 rounded-lg  text-center">
           <div className="relative w-60 h-60 overflow-visible">
                    <img
                      src={gujralImage}
                      alt="Gurpreet Singh Bansal"
                      className="w-60 h-60 object-cover mb-4 p-1 rounded-br-[25px]"
                    />
                    {/* Rotation Icon as Image */}
                    <img
                      src={rotation} // <-- yaha apna rotation icon ka path dijiye
                      alt="Rotate Icon"
                      className="absolute bottom-1 right-1 w-10 h-10"
                       style={{ right: "-12px", bottom: "-12px" }} 
                    />
                  </div>
                  <h4 className="text-[24px] leading-[30px] tracking-[0.1px] font-bold text-[#25337C] font-montserrat mt-4 ">Zyotics</h4>
                  <p className="text-[22px] leading-[30px] tracking-[0.1px] font-bold text-[#F3D805] font-montserrat  mb-3">Senior Management</p>
                  <p className="text-[#333333] text-[17px]leading-relaxed">
                    Education is the basis of all progress. This progress is possible only if men and women are equally well educated. The entire purpose of education is not just to impart facts but to impart leadership qualities to inculcate humanitarian values like empathy, compassion, courage , humility & integrity in a student.
                  </p>
                </div>

                {/* Monica Bajaj */}
                <div className="bg-white p-6 rounded-lg  text-center">
              <div className="relative w-60 h-60 overflow-visible">
                    <img
                      src={gujralImage}
                      alt="Gurpreet Singh Bansal"
                      className="w-60 h-60 object-cover mb-4 p-1 rounded-br-[25px]"
                    />
                    {/* Rotation Icon as Image */}
                    <img
                      src={rotation} // <-- yaha apna rotation icon ka path dijiye
                      alt="Rotate Icon"
                      className="absolute bottom-1 right-1 w-10 h-10"
                       style={{ right: "-12px", bottom: "-12px" }} 
                    />
                  </div>
                  <h4 className="text-[24px] leading-[30px] tracking-[0.1px] font-bold text-[#25337C] font-montserrat mt-4 ">Monica Bajaj</h4>
                  <p className="text-[22px] leading-[30px] tracking-[0.1px] font-bold text-[#F3D805] font-montserrat  mb-3">Senior Management</p>
                  <p className="text-[#333333] text-[17px] leading-relaxed">
                    Education is the basis of all progress. This progress is possible only if men and women are equally well educated. The entire purpose of education is not just to impart facts but to impart leadership qualities to inculcate humanitarian values like empathy, compassion, courage , humility & integrity in a student.
                  </p>
                </div>
              </div>
            </div>
          </main>

        </div>
      </div>
      <div className="mt-[200px]">
        <Footer />
      </div>
    </>
  );
};

export default LeadershipTeamPage;