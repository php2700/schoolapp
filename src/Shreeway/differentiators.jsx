import React from "react";
import ChevronRightIcon from "../assets/home/shriArrow.png";
import BannerImage from "../assets/home/Bannershree.png";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import homevector from "../assets/home/homevector.png";

const Differentiators = () => {
  // Object array for differentiators
  const differentiators = [
    {
      id: 1,
      title: "CHOICE TIME ACTIVITIES",
      description:
        "At TSUS, the teaching learning process is designed to ensure that the focus is not just on the “what” of learning but also on the “how” of learning. With the belief and conviction that experiential learning results in creating lifelong learners, the methodology and best practices at school include specially designed and well acclaimed programmes such as the following:",
    },
    {
      id: 2,
      title: "CIRCLE TIME",
      description:
        "is a single or double period per week wherein the Class Teacher uses this time to bond and connect with her students. This is also a time that is used to provide a platform for the issues and problems that arise within the class group. It is a great time to work towards instilling the Core Values of the school.",
    },
    {
      id: 3,
      title: "WONDER TIME",
      description:
        "is an activity that develops one of the most important skills a child would need through his/her learning years, and that is Observation. Children have an innate curiosity to explore things around them. By providing many different materials to touch, observe and manipulate, they will learn to observe, record, infer and arrive at a conclusion.",
    },
    {
      id: 4,
      title: "SHOW ‘N’ TELL",
      description:
        "in the Elementary and Lower Primary grades is a teaching learning strategy used to develop language, confidence and presentation skills in early learners. Moving from structured to unstructured sessions, Show ‘n’ Tell provides children a platform to speak amidst encouragement and positivity. This activity is the child’s first step towards facing an audience and making a presentation, both of which are important skills in the real world.",
    },
    {
      id: 5,
      title: "DEAR (Drop Everything and Read)",
      description:
        "are 4 periods a month slotted in the time table for all grades. The Key Activity Coordinator (KAC) ensures that this activity period is optimized and effectively implemented.",
    },
    {
      id: 6,
      title: "DEED (Debate, Extempore, Elocution and Drama)",
      description:
        "provides the children with an opportunity to explore and discover through research and record their findings. It helps children develop inquiring minds and methods of observation, data gathering, experimentation and presentation. Focussing on one main topic or aspect, R & R is a programme that works towards honing not just the research skills of children but also encourages them to ask out of the box questions in an attempt to get to the root of an issue or a problem. Where research topics are related to people, genres of Literature, Performing or Visual Art, the children channelize their research skills towards arriving at the various facets of the topic under discussion/review. R & R results in a 360° learning by the child as they approach the topic from all perspectives and arrive at their own conclusions based on their findings.",
    },
    {
      id: 7,
      title: "EQUBE",
      description:
        "the Life Education Programme, is a double period once a week for students of Grades V to X. A specially designed curriculum that focuses on reflection and self-empowerment, Eqube works with the children to enable them to carve out a vision for themselves and their lives. With an objective to create sensitive, thinking and caring individuals who work proactively towards bringing about change and making a difference both to their own lives and to society as a whole, Eqube strengthens the child’s decision making skills and emphasizes on the importance of taking responsibility for oneself and one’s actions",
    },
    {
      id: 8,
      title: "WRITER’S WORKSHOP",
      description:
        "provides an individualized curriculum that caters to all types of learners. It is extremely fluid and all curriculum objectives can be met through it. Writer’s Workshop is a method of teaching children to write. Instead of giving children worksheets and essay topics to write on, Writer’s Workshop encourages them to write original and personally meaningful pieces, which are then polished and improved upon, by drafting and redrafting. This programme is an essential part of the Grades IV and V English Curriculum.",
    },
    {
      id: 9,
      title: "THE SHRI READING PROGRAMME",
      description:
        "is a graded comprehensive reading programme from Nursery to Grade V which aims at developing effective readers not by chance but by design. Closure activity is integral to this programme as it informs the teachers about the child’s level of comprehension and gives the child an opportunity to express his/her views, think creatively, dramatize and make connections.",
    },
    {
      id: 10,
      title: "JIG SAW LEARNING",
      description:
        "is a cooperative learning strategy that helps children create their own learning. A strategy used to optimize learning, it enables children to learn according to their individual learning styles and pace. It capitalizes on the strength of each individual child and promotes collaboration. A very effective teaching-learning tool, Jig Saw learning provides the setting and equips the learners to graduate to a Flipped Classroom environment.",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        {/* Banner Section */}
        <section
          className="relative h-100 bg-cover bg-center rounded-bl-[45px] rounded-br-[45px] overflow-hidden"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="font-['poppins'] relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="font-['poppins'] font-semibold text-[55px] leading-tight text-white">
              SHRI Differentiators
            </h1>
            <div className="flex items-center text-lg mt-2">
              <img src={homevector} alt="Home Icon" className="w-5 h-5 mr-4" />
              <a href="/" className="text-[#EDEDED] hover:text-white">
                Home
              </a>
              <span className="mx-2">/</span>
              <a href="/about-us" className="text-[#EDEDED] hover:text-white">
                About Us
              </a>
              <span className="mx-2">/</span>
              <span className="text-[#F3D805]">SHRI Differentiators</span>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="container mx-auto py-12 px-4 md:flex">
          {/* Left Sidebar */}
          <aside className="w-full md:w-1/4 pr-8 mb-8 md:mb-0">
            <div className="font-['poppins'] bg-white p-10 mt-20 ml-10 shadow rounded-tl-lg rounded-br-lg [box-shadow:0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_0_rgba(60,64,67,0.30)]">
              <h3 className="font-['poppins'] text-xl font-semibold text-[#25337C] mb-4">
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
                      src={ChevronRightIcon}
                      alt="chevron right"
                      className="h-6 w-3 text-[#737373]"
                    />
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/shriWay/philosophy"
                    className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-200 text-[#737373]"
                  >
                    SHRI Philosophy
                    <img
                      src={ChevronRightIcon}
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
                      src={ChevronRightIcon}
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
                      src={ChevronRightIcon}
                      alt="chevron right"
                      className="h-6 w-3"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          {/* Right Content */}
          <main className="w-full md:w-3/4 flex flex-col md:ml-12">
            <h2 className="text-2xl font-bold mb-6">SHRI Differentiators</h2>
            <blockquote className=" mb-4 ml-10 font-bold">
              "If a child cannot learn the way we teach, maybe we should teach
              the way they learn."
              <br />
              <span className="not-italic text-right block">
                - Ignacio Estrada
              </span>
            </blockquote>
            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <div key={item.id} className="p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-900 mb-4">{item.description}</p>
                  {/* Grey line after description */}
                  {index !== differentiators.length - 1 && (
                    <div className="border-b border-gray-300 mt-4"></div>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <div className="mt-[170px]">
        <Footer />
      </div>
    </>
  );
};

export default Differentiators;
