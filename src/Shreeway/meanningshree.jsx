import React from "react";
import ChevronRightIcon from "../assets/home/shriArrow.png";
import BannerImage from "../assets/home/Bannershree.png";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import homevector from "../assets/home/homevector.png";

const MeaningOfShriPage = () => {
  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        {/* Banner Section */}
        <section
          className="relative h-100 bg-cover bg-center  rounded-bl-[45px] rounded-br-[45px] overflow-hidden"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Overlay for text readability */}
          <div className=" font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">
              Meaning of "SHRI"
            </h1>
            <div className="flex items-center text-lg mt-2">
              <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
              <a href="/" className="text-[#EDEDED]  hover:text-white">
                Home
              </a>

              <span className="mx-2">/</span>
              <a href="/about-us" className="text-[#EDEDED]  hover:text-white">
                About Us
              </a>
              <span className="mx-2">/</span>
              <span className="text-[#F3D805]">Meaning of "SHRI"</span>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="container mx-auto py-12 px-4 md:flex">
          {/* Left Sidebar */}
          <aside className="w-full md:w-1/4 pr-8 mb-8 md:mb-0">
            <div
              className=" font-['poppins'] bg-white p-10  shadow  rounded-tl-lg rounded-br-lg
                 [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
            >
              <h3 className=" font-['poppins'] text-xl font-semibold text-[#25337C] mb-4">
                The Shri Way
              </h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="/shriWay"
                    className="flex items-center justify-between py-2 px-3 rounded-md bg-[#25337C] text-white"
                  >
                    Meaning of "SHRI"
                    <img
                      src={ChevronRightIcon}
                      alt="chevron right"
                      className="h-6 w-3 text-[#737373]"
                    />
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/shriWay/legacy"
                    className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                  >
                    SHRI Educate Legacy
                    <img
                      src={ChevronRightIcon} // apna icon ka path yaha lagao
                      alt="chevron right"
                      className="h-6 w-3 text-[#737373]"
                    />
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/shriWay/philisophy"
                    className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                  >
                    SHRI Philosophy
                    <img
                      src={ChevronRightIcon} // apna icon ka path yaha lagao
                      alt="chevron right"
                      className="h-6 w-3"
                    />
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/shriWay/differentiators"
                    className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                  >
                    SHRI Differentiators
                    <img
                      src={ChevronRightIcon} // apna icon ka path yaha lagao
                      alt="chevron right"
                      className="h-6 w-3"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="/shriWay/educators"
                    className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                  >
                    SHRI Educators
                    <img
                      src={ChevronRightIcon} // apna icon ka path yaha lagao
                      alt="chevron right"
                      className="h-6 w-3"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Right Content */}
          <main
            className="w-full max-w-6xl mx-auto px-4 py-8 bg-white text-center
                 rounded-tl-lg rounded-br-lg
                 [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]"
          >
            <h2 className="font-['poppins'] font-semibold text-[55px] leading-tight text-[#25337C] mb-6 mt-6">
              Meaning of "SHRI"
            </h2>
            {/* Hindi Content */}
            <div className="mb-8 text-[#333333]  text-[18px] tracking-normal text-center font-['poppins'] font-medium">
              <p className="mb-4">
                “श्री” शब्द के उस छोटे से रूप के अनेकानेक अर्थ हैं। <br />{" "}
                अधिकांशतः मंत्रों के उच्चारण में इस पवित्र शब्द का प्रयोग किया
                जाता है। <br /> “श्री” का शाब्दिक अर्थ है समृद्धि
              </p>
              {/* <p className="mb-4 font-semibold">
            “श्री” का शाब्दिक अर्थ है समृद्धि
        </p> */}
              <p className="mb-4">
                समृद्धि ही - उत्तम विद्यार्थी भवाे की, किसी कार्य की, सफलता की।{" "}
                <br />
                समृद्धि ही - सुनिमत की, कुशलता की, सत्यवाटी व मनलविषस की। <br />
                समृद्धि ही – ऐसे विशस की जो तुम्हाट अन्तट की अनिखयी नवानि
                धनवालिव कर सको <br />
                जिससे आपका दृष्टो तत्व ज्ञान से प्रकधित हो औट <br />
                आप अपने जीवन की लाविश बना सको।
              </p>
            </div>
            <hr className="my-4 border-blue-200 w-3/4 mx-auto border-dotted " />{" "}
            {/* Divider line */}
            {/* English Content */}
            <div className="mb-8 text-[#333333]  text-[18px] tracking-normal text-center font-['poppins'] font-regular">
              <p className="mb-4">
                The word "SHRI" has multiple and expanded connotations.
                <br />
                This auspicious prefix is added to various mantras.Its literal
                meaning is Wealth – of virtue or excellence.
                <br />
                The word is also associated with intellect and understanding.
                <br />
                It stands for ultimate enlightenment.
                <br />
                It also means Prosperity <br />
                Prosperity of thoughts and feelings that spark a unique light
                within you.
                <br />
                Prosperity which guides your soul towards true knowledge and
                makes your life meaningful.
              </p>
              {/* <p className="mb-4">
            The word is also associated with intellect and understanding.<br />
            It stands for ultimate enlightenment.<br />
            It also means Prosperity
        </p> */}
              {/* <p className="mb-4">
            Prosperity of thoughts and feelings that spark a unique light within you.<br />
            Prosperity which guides your soul towards true knowledge and makes your life meaningful.
        </p> */}
            </div>
          </main>
        </div>
      </div>
      <div className="mt-[150px]">
        <Footer />
      </div>
    </>
  );
};

export default MeaningOfShriPage;
