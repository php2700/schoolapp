import React from 'react';
import { FaHome, FaChevronRight } from 'react-icons/fa'; // For icons
import Learbanner from '../assets/home/Bannerlearning.png'
import homevector from '../assets/home/homevector.png'
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import { IoBulbOutline, IoPeopleOutline, IoFlaskOutline, IoHeartOutline, IoSchoolOutline, IoBookOutline, IoCubeOutline } from 'react-icons/io5'; // More icons for methodology

const LearningPage = () => {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-white font-sans">
      {/* Banner Section */}
      <div className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"  style={{ backgroundImage: `url(${Learbanner})` }}>
        {/* Overlay to darken the image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className=" font-['poppins'] relative z-10 text-center p-4">
          <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white mb-4">CBSE School Curriculum & Pedagogy</h1>
          <div className="flex items-center justify-center text-lg">
             <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
            <span className="mr-2 text-[#EDEDED] ">Home</span>
            <FaChevronRight className="mx-2 text-sm" />
            <span className="mr-2  text-[#EDEDED] ">About Us</span>
            <FaChevronRight className="mx-2 text-sm text-[#EDEDED]  " />
            <span className=' text-[#F3D805]'>Learning</span>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="font-['poppins'] font-semibold text-[48px] leading-[100%] tracking-[0.5px] text-[#25337C] text-center">
          "Tell me and I forget, show me and I  <br/> remember, involve me and I understand"
        </h2>
      </div>

      {/* Teaching Methodology Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="font-['poppins'] font-semibold text-[48px] leading-[100%] tracking-[0.5px] text-[#25337C] text-center mb-6">
            Teaching <span className="text-[#F3D805]">Methodology</span>
          </h2>
          <p className="max-w-7xl mx-auto text-center font-['poppins'] font-semibold text-[25px]  mb-12 text-[#4D4D4D] ">
            The Shri Ram Schools are emphatic about providing child-centric education, and keeping this in
            mind, we offer learning that is both interactive and experiential. The focus is on creating <br/>
            awareness in students, providing them with experiences that they could apply to real life  <br/>
            situations and informed decisions about themselves.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Methodology Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Innovative */}
              <div className="bg-blue-700 text-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                <IoBulbOutline className="text-4xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Innovative</h3>
                  <p className="text-sm opacity-90">
                    Creative teaching methods that spark curiosity and engagement
                  </p>
                </div>
              </div>
              {/* Interactive */}
              <div className="bg-blue-700 text-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                <IoPeopleOutline className="text-4xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Interactive</h3>
                  <p className="text-sm opacity-90">
                    Collaborative learning experiences that build social skills
                  </p>
                </div>
              </div>
              {/* Experiential */}
              <div className="bg-blue-700 text-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                <IoFlaskOutline className="text-4xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Experiential</h3>
                  <p className="text-sm opacity-90">
                    Hands-on activities that make learning memorable & practical
                  </p>
                </div>
              </div>
              {/* Child Centric */}
              <div className="bg-blue-700 text-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                <IoHeartOutline className="text-4xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Child Centric</h3>
                  <p className="text-sm opacity-90">
                    Personalized approach focusing on each child's unique potential
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Our Approach */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                Our Shri Shikshayatan acts as facilitators and guides for students in their learning using
                activities, audio-visual stimuli, projects and presentations that are experiential in
                impact. The focus remains on creating awareness in the students and providing them with
                experiences to make informed decisions that they can apply to real-life situations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Stages Section */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Pre-Primary School */}
        <div className="bg-blue-800 text-white p-6 rounded-lg shadow-lg flex flex-col">
          <IoSchoolOutline className="text-5xl mb-4 self-start" />
          <h3 className="text-2xl font-bold mb-2">Pre-Primary School</h3>
          <p className="text-sm opacity-90 mb-4">
            The first experience of the child in a structured setting with children and groups of children.
          </p>
          <p className="text-yellow-300 font-semibold mb-2">Key Highlights:</p>
          <ul className="list-disc list-inside text-sm opacity-90 space-y-1">
            <li>Play-based learning approach</li>
            <li>Language development program</li>
            <li>Cognitive thinking development</li>
            <li>Sensory, Fine & Gross motor training</li>
            <li>Choice time, like Sand, Clay, Water Play</li>
            <li>Art and Discovery hour</li>
          </ul>
          <p className="text-xs opacity-70 mt-4">
            The curriculum for Pre-Primary - Early learning years - recognizes that the child comes to
            school with rich experiences and capabilities. Learning happens all day at Pre-Primary,
            through activities that play with materials and outdoors, and structured time.
          </p>
        </div>

        {/* Primary School */}
        <div className="bg-blue-800 text-white p-6 rounded-lg shadow-lg flex flex-col">
          <IoBookOutline className="text-5xl mb-4 self-start" />
          <h3 className="text-2xl font-bold mb-2">Primary School</h3>
          <p className="text-sm opacity-90 mb-4">
            Building foundational skills in all subjects with focus on language and mathematical concepts.
          </p>
          <p className="text-yellow-300 font-semibold mb-2">Key Highlights:</p>
          <ul className="list-disc list-inside text-sm opacity-90 space-y-1">
            <li>CBSE curriculum framework</li>
            <li>Language & literacy development</li>
            <li>Mathematical concepts clarity</li>
            <li>Science & Social studies</li>
            <li>Drama, storytelling, games</li>
            <li>Music, IT, and artistic activities</li>
          </ul>
          <p className="text-xs opacity-70 mt-4">
            Primary classes from Grade 1 to 5, focusing on independence and acquiring mastery of
            foundational literacy, numeracy, environmental science concepts. Learning is enriched by
            activities such as dramatics, storytelling, games, music, dance, IT and artistic activities and a
            wide range of artistic and hands-on activities.
          </p>
        </div>

        {/* Middle School */}
        <div className="bg-blue-800 text-white p-6 rounded-lg shadow-lg flex flex-col">
          <IoCubeOutline className="text-5xl mb-4 self-start" />
          <h3 className="text-2xl font-bold mb-2">Middle School</h3>
          <p className="text-sm opacity-90 mb-4">
            Developing deeper understanding of concepts and responsibility for learning outcomes.
          </p>
          <p className="text-yellow-300 font-semibold mb-2">Key Highlights:</p>
          <ul className="list-disc list-inside text-sm opacity-90 space-y-1">
            <li>Joy of learning emphasis</li>
            <li>Deeper conceptual understanding</li>
            <li>Research and analytical skills</li>
            <li>Personal and social development</li>
            <li>Critical thinking abilities</li>
            <li>Experiential learning activities</li>
          </ul>
          <p className="text-xs opacity-70 mt-4">
            In the middle school years, students explore the joy of learning and developing understanding of
            concepts in various subjects. They take on more responsibility for learning outcomes and have
            experiential activities.
          </p>
        </div>
      </div>
    </div>
                <div className="mt-[170px]">
                    <Footer />
                </div>
    </>
  );
};

export default LearningPage;