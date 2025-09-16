// src/pages/LeadershipTeamPage.js (or wherever you prefer to put your page components)
import React from 'react';
// Assuming you have a Header and Footer component
import Header from '../../component/Header'; // Adjust path as needed
import Footer from '../../component/Footer'; // Adjust path as needed

// Import images for the leadership team members
import gujralImage from '../assets/home/leadershipmg.png'; 
import jayaImage from '../assets/home/leadershipmg.png';
import jyotsanaImage from '../assets/home/leadershipmg.png';
import amritaImage from '../assets/home/leadershipmg.png';
const LeadershipTeamPage = () => {
  // Dummy data for the sidebar navigation (replace with actual links/logic if needed)
  const sidebarLinks = [
    { name: "About TSUS Ludhiana", href: "#" },
    { name: "The Leadership Team", href: "#", current: true },
    { name: "Principal's Message", href: "#" },
    { name: "Vision & Mission", href: "#" },
    { name: "Core Values", href: "#" },
    { name: "What Makes Us Different From Others", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Mandatory Public Disclosure", href: "#" },
  ];

  // Dummy data for leadership team members
  const teamMembers = [
    {
      name: "Gupreet Singh Gujral (Chairman)",
      image: gujralImage,
      description: "You are a child of an era to be inquisitive, to be a world citizen. He is well-equipped and enthusiastic for all kinds of work, to become sensitive to others and the environment. He is dedicated to research and creativity, to learning in all elements of life. He has a vast cultural background that is appreciative to human cultures but not leveraging of their ideas and work. He is an avid reader who is both appreciative and respectful of human cultures and not leverages on people from others' cultures.",
    },
    {
      name: "Jaya Singh (Advisor)",
      image: jayaImage,
      quote: `"Education is the most powerful weapon which you can use to change the world" - Nelson Mandela`,
      description: "Education is the root of all progress. This is especially applicable to IT men and women. They are equal in abilities, talent and purposes. If education is not to be merely a tool for imparting knowledge and skills only, it has to be a foundation stone for values, compassion, integrity and a belonging to a nation.",
    },
    {
      name: "Jyotsana Pawar (Sr. Management)",
      image: jyotsanaImage,
      description: "Jyotsana Pawar is a practicing advocate who specializes in children and women’s rights. She is also a child sexual abuse prevention and awareness consultant. A teacher at The Children and Women’s Foundation in Ludhiana, she gained extensive experience working with children and families. She is passionate about education and believes in it as a pathway to a better tomorrow. A graduate from Lady Shri Ram College for Women, she went on to study law at the reputable Jesus and Mary College at the University of Delhi.",
      additionalInfo: "She works in association with the Ministry of Women and Child Welfare in public advocacy, and other matters. Ludhiana believes she is truly an asset that challenges her in all endeavors. A tough task master, she believes that hard work and perseverance can lead to immense success. ",
    },
    {
      name: "Amrita Kaur (Sr. Management)",
      image: amritaImage,
      description: "Amrita Kaur has graduated from Punjabi University Patiala with a BCA degree. She is a computer science professional. Amrita has experience of working with software firms where she has spent her time in data entry, data analysis and she has also gained experience from schools. Amrita has further gained two years of skills in kindergarten where children are taught. Amrita has been working as a tutor for kids.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Your imported Header component */}

      {/* Hero Section / Banner */}
      <section className="relative w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url()', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">The Leadership Team</h1>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md sticky top-20 h-fit">
          <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">About Us</h2>
          <nav>
            <ul>
              {sidebarLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.href}
                    className={`block p-2 rounded-md transition-colors duration-200
                      ${link.current ? "bg-blue-100 text-blue-800 font-semibold" : "text-gray-700 hover:bg-gray-100"}
                    `}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Leadership Team Details */}
        <section className="w-full md:w-3/4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Our Leaders</h2>

          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-6 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-200">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{member.name}</h3>
                  {member.quote && (
                    <p className="italic text-gray-600 mb-3 border-l-4 border-blue-500 pl-3">
                      {member.quote}
                    </p>
                  )}
                  <p className="text-gray-700 leading-relaxed">{member.description}</p>
                  {member.additionalInfo && (
                    <p className="text-gray-700 leading-relaxed mt-2">{member.additionalInfo}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

           <diV className="mt-[180px]">
           <Footer/>
     
           </diV> {/* Your imported Footer component */}
    </div>
  );
};

export default LeadershipTeamPage;