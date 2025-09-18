// // src/pages/LeadershipTeamPage.js (or wherever you prefer to put your page components)
// import React from 'react';
// // Assuming you have a Header and Footer component
// import Header from '../../component/Header'; // Adjust path as needed
// import Footer from '../../component/Footer'; // Adjust path as needed

// // Import images for the leadership team members
// import gujralImage from '../assets/home/leadershipmg.png'; 
// import jayaImage from '../assets/home/leadershipmg.png';
// import jyotsanaImage from '../assets/home/leadershipmg.png';
// import amritaImage from '../assets/home/leadershipmg.png';
// const LeadershipTeamPage = () => {
//   // Dummy data for the sidebar navigation (replace with actual links/logic if needed)
//   const sidebarLinks = [
//     { name: "About TSUS Ludhiana", href: "#" },
//     { name: "The Leadership Team", href: "#", current: true },
//     { name: "Principal's Message", href: "#" },
//     { name: "Vision & Mission", href: "#" },
//     { name: "Core Values", href: "#" },
//     { name: "What Makes Us Different From Others", href: "#" },
//     { name: "Blog", href: "#" },
//     { name: "Mandatory Public Disclosure", href: "#" },
//   ];

//   // Dummy data for leadership team members
//   const teamMembers = [
//     {
//       name: "Gupreet Singh Gujral (Chairman)",
//       image: gujralImage,
//       description: "You are a child of an era to be inquisitive, to be a world citizen. He is well-equipped and enthusiastic for all kinds of work, to become sensitive to others and the environment. He is dedicated to research and creativity, to learning in all elements of life. He has a vast cultural background that is appreciative to human cultures but not leveraging of their ideas and work. He is an avid reader who is both appreciative and respectful of human cultures and not leverages on people from others' cultures.",
//     },
//     {
//       name: "Jaya Singh (Advisor)",
//       image: jayaImage,
//       quote: `"Education is the most powerful weapon which you can use to change the world" - Nelson Mandela`,
//       description: "Education is the root of all progress. This is especially applicable to IT men and women. They are equal in abilities, talent and purposes. If education is not to be merely a tool for imparting knowledge and skills only, it has to be a foundation stone for values, compassion, integrity and a belonging to a nation.",
//     },
//     {
//       name: "Jyotsana Pawar (Sr. Management)",
//       image: jyotsanaImage,
//       description: "Jyotsana Pawar is a practicing advocate who specializes in children and women’s rights. She is also a child sexual abuse prevention and awareness consultant. A teacher at The Children and Women’s Foundation in Ludhiana, she gained extensive experience working with children and families. She is passionate about education and believes in it as a pathway to a better tomorrow. A graduate from Lady Shri Ram College for Women, she went on to study law at the reputable Jesus and Mary College at the University of Delhi.",
//       additionalInfo: "She works in association with the Ministry of Women and Child Welfare in public advocacy, and other matters. Ludhiana believes she is truly an asset that challenges her in all endeavors. A tough task master, she believes that hard work and perseverance can lead to immense success. ",
//     },
//     {
//       name: "Amrita Kaur (Sr. Management)",
//       image: amritaImage,
//       description: "Amrita Kaur has graduated from Punjabi University Patiala with a BCA degree. She is a computer science professional. Amrita has experience of working with software firms where she has spent her time in data entry, data analysis and she has also gained experience from schools. Amrita has further gained two years of skills in kindergarten where children are taught. Amrita has been working as a tutor for kids.",
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header /> {/* Your imported Header component */}

//       {/* Hero Section / Banner */}
//       <section className="relative w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url()', backgroundSize: 'cover', backgroundPosition: 'center' }}>
//         <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
//           <h1 className="text-white text-3xl md:text-5xl font-bold">The Leadership Team</h1>
//         </div>
//       </section>

//       {/* Main Content Area */}
//       <main className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
//         {/* Sidebar Navigation */}
//         <aside className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md sticky top-20 h-fit">
//           <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">About Us</h2>
//           <nav>
//             <ul>
//               {sidebarLinks.map((link, index) => (
//                 <li key={index} className="mb-2">
//                   <a
//                     href={link.href}
//                     className={`block p-2 rounded-md transition-colors duration-200
//                       ${link.current ? "bg-blue-100 text-blue-800 font-semibold" : "text-gray-700 hover:bg-gray-100"}
//                     `}
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </aside>

//         {/* Leadership Team Details */}
//         <section className="w-full md:w-3/4">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Our Leaders</h2>

//           <div className="space-y-12">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="flex flex-col md:flex-row items-start gap-6 bg-white p-6 rounded-lg shadow-md">
//                 <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-200">
//                   <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-blue-800 mb-2">{member.name}</h3>
//                   {member.quote && (
//                     <p className="italic text-gray-600 mb-3 border-l-4 border-blue-500 pl-3">
//                       {member.quote}
//                     </p>
//                   )}
//                   <p className="text-gray-700 leading-relaxed">{member.description}</p>
//                   {member.additionalInfo && (
//                     <p className="text-gray-700 leading-relaxed mt-2">{member.additionalInfo}</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//            <diV className="mt-[180px]">
//            <Footer/>

//            </diV> {/* Your imported Footer component */}
//     </div>
//   );
// };

// export default LeadershipTeamPage;



// import React from 'react';
// import Header from '../../component/Header';
// import Footer from '../../component/Footer';
// import gujralImage from '../assets/home/leadershipmg.png';
// import banner from '../assets/home/leadershipmg.png';


// const LeadershipTeamPage = () => {
//   return (
//     <>
//       <div className="bg-gray-100 min-h-screen">
//         <Header />
//         <section
//           className="relative h-64 flex items-center justify-center text-white"
//           style={{
//             backgroundImage: `url(${banner})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//           {/* Content */}
//           <div className="relative z-10 text-center">
//             <h1 className="text-4xl md:text-5xl font-bold">
//               The Leadership Team
//             </h1>
//             <nav className="mt-3 text-sm md:text-lg">
//               <a href="#" className="hover:underline">
//                 Home
//               </a>{" "}
//               &gt;
//               <a href="#" className="hover:underline ml-2">
//                 About Us
//               </a>{" "}
//               &gt;
//               <span className="ml-2">Leadership</span>
//             </nav>
//           </div>
//         </section>
//         {/* Hero Section - Assuming header is above this */}


//         <div className=" bg-white container mx-auto px-4 py-8 flex flex-col lg:flex-row">
//           {/* Left Sidebar */}
//           <aside className="w-full lg:w-1/4 mb-8 lg:mb-0 lg:mr-8">
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-semibold mb-4 border-b pb-2">About Us</h2>
//               <ul>
//                 <li className="mb-2">
//                   <a href="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
//                     <span>About TSDC Leadership</span>
//                     <span>&gt;</span>
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="flex justify-between items-center text-blue-600 font-semibold">
//                     <span>Leadership</span>
//                     <span>&gt;</span>
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
//                     <span>Principal's Message</span>
//                     <span>&gt;</span>
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
//                     <span>Vision & Mission</span>
//                     <span>&gt;</span>
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
//                     <span>Core Values</span>
//                     <span>&gt;</span>
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
//                     <span>What makes us different? (Our USPs)</span>
//                     <span>&gt;</span>
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
//                     <span>Mandatory Public Disclosure</span>
//                     <span>&gt;</span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </aside>

//           {/* Main Content */}
//           <main className="w-full lg:w-3/4 bg-white rounded-lg shadow-md p-8">
//             <section className="mb-8">
//               <h2 className="text-3xl font-bold text-blue-800 mb-4 ">Our Leadership Team</h2>
//               <p className="text-gray-600 mb-6">Meet the dedicated leaders who guide our educational vision and commitment to excellence</p>

//               {/* Gurpreet Singh Bansal */}
//               <div className="flex flex-col md:flex-row items-center md:items-start mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
//                 <div className="w-48 h-48 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
//                   <img
//                     src={gujralImage} // Replace with actual image URL
//                     alt="Gurpreet Singh Bansal"
//                     className="rounded-lg object-cover w-full h-full"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-semibold text-gray-800">Gurpreet Singh Bansal</h3>
//                   <p className="text-blue-600 font-medium mb-3">Chairman</p>
//                   <p className="text-gray-700 leading-relaxed">
//                     We welcome you to a world of learning in an enjoyable environment, to a world where every child is encouraged and nurtured to achieve his/her true potential. Our aim is to equip children to think critically, act with sensitivity and express their creativity, by fostering an awareness of their historical and cultural legacy, we inculcate in them an appreciation for their roots and the rich heritage of their native land. We equip them and ensure that enable them to appreciate and acknowledge different perspectives and lead them to support and empathise with others around them. We welcome you to a world of learning in an enjoyable environment, to a world where every child is encouraged and nurtured to eventually realise his or her true potential. Our aim is to equip children to think critically, act with sensitivity and respond with creativity, by fostering an awareness of their historical and cultural legacy, we inculcate in them an appreciation for their roots and the rich heritage of their native land. We equip them with skills that enable them to acknowledge different perspectives and lead them to support and empathise with others around them.
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* Other Leaders */}
//             <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {/* Jaya Singh */}
//               <div className="bg-gray-50 rounded-lg shadow-sm p-6 text-center">
//                 <div className="w-36 h-36 mx-auto mb-4">
//                   <img
//                     src={gujralImage} // Replace with actual image URL
//                     alt="Jaya Singh"
//                     className="rounded-lg object-cover w-full h-full"
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">Jaya Singh</h3>
//                 <p className="text-blue-600 font-medium mb-3">Advisor</p>
//                 <p className="text-gray-700 text-sm leading-relaxed">
//                   Education is the basis of all progress. This progress is possible when men and women are equally well educated. The entire purpose of education is not to make itself to importing bookish knowledge only, but to inculcate humanization values like wisdom, compassion, courage, humility & integrity in a student.
//                 </p>
//               </div>

//               {/* Jyotica */}
//               <div className="bg-gray-50 rounded-lg shadow-sm p-6 text-center">
//                 <div className="w-36 h-36 mx-auto mb-4">
//                   <img
//                     src={gujralImage} // Replace with actual image URL
//                     alt="Jyotica"
//                     className="rounded-lg object-cover w-full h-full"
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">Jyotica</h3>
//                 <p className="text-blue-600 font-medium mb-3">Senior Management</p>
//                 <p className="text-gray-700 text-sm leading-relaxed">
//                   Education is the basis of all progress. This progress is possible when men and women are equally well educated. The entire purpose of education is not to make itself to importing bookish knowledge only, but to inculcate humanization values like wisdom, compassion, courage, humility & integrity in a student.
//                 </p>
//               </div>

//               {/* Monica Bajaj */}
//               <div className="bg-gray-50 rounded-lg shadow-sm p-6 text-center">
//                 <div className="w-36 h-36 mx-auto mb-4">
//                   <img
//                     src={gujralImage}// Replace with actual image URL
//                     alt="Monica Bajaj"
//                     className="rounded-lg object-cover w-full h-full"
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">Monica Bajaj</h3>
//                 <p className="text-blue-600 font-medium mb-3">Senior Management</p>
//                 <p className="text-gray-700 text-sm leading-relaxed">
//                   Education is the basis of all progress. This progress is possible when men and women are equally well educated. The entire purpose of education is not to make itself to importing bookish knowledge only, but to inculcate humanization values like wisdom, compassion, courage, humility & integrity in a student.
//                 </p>
//               </div>
//             </section>
//           </main>
//         </div>

//       </div>

//       <diV className="mt-[200px]">
//         <Footer />

//       </diV>
//     </>

//   );
// };

// export default LeadershipTeamPage;

import React from 'react';
import Banner from '../assets/home/Bannerleder.png'
import homevector from '../assets/home/homevector.png'
import gujralImage from '../assets/home/leadershipmg.png';
import Header from '../../component/Header';
import Footer from '../../component/Footer';

const LeadershipTeamPage = () => {
  return (
    <>
    <Header/>
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

            <span className="mx-2">/</span>
            <a href="/about-us" className="text-[#EDEDED] hover:text-white">About Us</a>
            <span className="mx-2">/</span>
            <span className='text-[#F3D805]'>Learning</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        {/* Left Sidebar - About Us Navigation */}
        <aside className="lg:w-1/4 pr-8 mb-8 lg:mb-0">
          <div className=" font-['poppins'] bg-white rounded-lg shadow p-6  shadow  rounded-tl-lg rounded-br-lg
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

            <div className="flex flex-col md:flex-row items-center md:items-start  mb-12">

              <div className="flex flex-col items-center  md:mr-8 text-center ">
                <img
                  src={gujralImage}
                  alt="Gurpreet Singh Bansal"
                  className="w-60 h-60 object-cover mb-4 p-1"
                />
                <h3 className="text-[20px] leading-[26px] font-bold text-[#25337C] font-montserrat">
                  Gurpreet Singh Bansal
                </h3>
                <p className="text-[18px] font-bold text-[#F3D805] font-montserrat mb-4 ">
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
                  to think critically, act with compassion and respond with creativity, by
                  fostering an awareness of their historical and cultural legacy, we
                  inculcate in them an appreciation for the rich heritage of our nation and
                  also equip them with skills that enable them to appreciate and acknowledge
                  different perspectives and lead them to support and empathise with others
                  around them.
                </p>
              </div>
            </div>


            {/* Other Leaders Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 text-[#25337C] gap-8">
              {/* Jaya Singh */}
              <div className="bg-white p-6 rounded-lg text-center  ">
                <img
                  src={gujralImage} // Replace with Jaya Singh's image
                  alt="Jaya Singh"
                  className="w-60 h-60 object-cover mx-auto mb-4  " // `rounded-full` removed
                />
                <h4 className="text-[24px] leading-[30px] tracking-[0.1px] font-bold text-[#25337C] font-montserrat ">Jaya Singh</h4>
                <p className="text-[22px] leading-[30px] tracking-[0.1px] font-bold text-[#F3D805] font-montserrat mb-3">Advisor</p>
                <p className="text-[#333333] text-[17px] leading-relaxed">
                  Education is the basis of all progress. This progress is possible only if men and women are equally well educated.The entire purpose of education is not just to impart facts but to impart leadership qualities to inculcate humanitarian values like empathy, compassion, courage , humility & integrity in a student.
                </p>
              </div>

              {/* Zyotics */}
              <div className="bg-white p-6 rounded-lg  text-center">
                <img
                  src={gujralImage} // Replace with Zyotics' image
                  alt="Zyotics"
                  className="w-60 h-60 object-cover mx-auto mb-4 " // `rounded-full` removed
                />
                <h4 className="text-[24px] leading-[30px] tracking-[0.1px] font-bold text-[#25337C] font-montserrat ">Zyotics</h4>
                <p className="text-[22px] leading-[30px] tracking-[0.1px] font-bold text-[#F3D805] font-montserrat  mb-3">Senior Management</p>
                <p className="text-[#333333] text-[17px]leading-relaxed">
                  Education is the basis of all progress. This progress is possible only if men and women are equally well educated. The entire purpose of education is not just to impart facts but to impart leadership qualities to inculcate humanitarian values like empathy, compassion, courage , humility & integrity in a student.
                </p>
              </div>

              {/* Monica Bajaj */}
              <div className="bg-white p-6 rounded-lg  text-center">
                <img
                  src={gujralImage} // Replace with Monica Bajaj's image
                  alt="Monica Bajaj"
                  className="w-60 h-60 object-cover mx-auto mb-4 " // `rounded-full` removed
                />
                <h4 className="text-[24px] leading-[30px] tracking-[0.1px] font-bold text-[#25337C] font-montserrat ">Monica Bajaj</h4>
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