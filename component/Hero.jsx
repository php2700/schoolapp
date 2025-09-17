export default function Hero() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-left px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug">
          Nurturing Bright Minds, Building Strong Futures
        </h1>
        <p className="mt-4 text-gray-200 text-lg">
          At Sriram Universal School, we combine academic excellence with values,
          creativity, and innovation to prepare every child for tomorrow.
        </p>
        <button className="mt-6 bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900">
          Apply for Admission
        </button>
      </div>
    </section>
  );
}


// components/PathwayGrid.jsx
// import React from 'react';
// import PathwayCard from './PathwayCard'; // Make sure the path is correct

// const allPathwayData = [
//   {
//     title: "Grade-wise Pathway",
//     pathways: [
//       { grade: "Foundational (K-II):", description: "Tinker time, simple machines, patterns, storytelling with block coding." },
//       { grade: "Preparatory (III-V):", description: "Robotics starters, circuits, Scratch apps, design thinking mini-challenges." },
//       { grade: "Middle (VI-VIII):", description: "IoT builds, Python, 3D design/printing, drones (simulated), public-speaking projects." },
//       { grade: "Secondary (IX-XII):", description: "Capstone projects integrating AI/ML, data, automation, and digital media portfolios." },
//     ]
//   },
//   {
//     title: "Skill Development Focus", // Example title for a second card
//     pathways: [
//       { grade: "Creative Thinking:", description: "Problem-solving through design, brainstorming, and divergent thinking exercises." },
//       { grade: "Critical Analysis:", description: "Evaluating information, identifying biases, and forming reasoned judgments." },
//       { grade: "Collaboration:", description: "Team projects, peer feedback, and group dynamics workshops." },
//       { grade: "Communication:", description: "Public speaking, presentation skills, and written expression." },
//     ]
//   },
//   {
//     title: "Future Technologies", // Example title for a third card
//     pathways: [
//       { grade: "AI & Machine Learning:", description: "Introduction to algorithms, data science basics, and ethical AI discussions." },
//       { grade: "Robotics & Automation:", description: "Building and programming robots, understanding industrial automation." },
//       { grade: "Cybersecurity Basics:", description: "Understanding digital threats, online safety, and fundamental protections." },
//       { grade: "Sustainable Tech:", description: "Exploring green technologies and their impact on the environment." },
//     ]
//   },
//   {
//     title: "Project-Based Learning", // Example title for a fourth card
//     pathways: [
//       { grade: "Ideation & Planning:", description: "Defining project scope, setting goals, and resource allocation." },
//       { grade: "Execution & Testing:", description: "Implementing solutions, conducting tests, and iterative refinement." },
//       { grade: "Presentation & Showcase:", description: "Communicating project outcomes, demonstrating functionality." },
//       { grade: "Reflection & Improvement:", description: "Analyzing results, learning from failures, and future steps." },
//     ]
//   },
// ];

// const PathwayGrid = () => {
//   return (
//     <section className="bg-gray-50 md:bg-gray-100 py-16 px-4">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
//         {allPathwayData.map((data, index) => (
//           <PathwayCard 
//             key={index}
//             title={data.title}
//             pathways={data.pathways}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PathwayGrid;


//   {
//     title: "Grade-wise Pathway",
//     pathways: [
//       { grade: "Foundational (K-II):", description: "Tinker time, simple machines, patterns, storytelling with block coding." },
//       { grade: "Preparatory (III-V):", description: "Robotics starters, circuits, Scratch apps, design thinking mini-challenges." },
//       { grade: "Middle (VI-VIII):", description: "IoT builds, Python, 3D design/printing, drones (simulated), public-speaking projects." },
//       { grade: "Secondary (IX-XII):", description: "Capstone projects integrating AI/ML, data, automation, and digital media portfolios." },
//     ]
//   },
//   {
//     title: "Skill Development Focus", // Example title for a second card
//     pathways: [
//       { grade: "Creative Thinking:", description: "Problem-solving through design, brainstorming, and divergent thinking exercises." },
//       { grade: "Critical Analysis:", description: "Evaluating information, identifying biases, and forming reasoned judgments." },
//       { grade: "Collaboration:", description: "Team projects, peer feedback, and group dynamics workshops." },
//       { grade: "Communication:", description: "Public speaking, presentation skills, and written expression." },
//     ]
//   },
//   {
//     title: "Future Technologies", // Example title for a third card
//     pathways: [
//       { grade: "AI & Machine Learning:", description: "Introduction to algorithms, data science basics, and ethical AI discussions." },
//       { grade: "Robotics & Automation:", description: "Building and programming robots, understanding industrial automation." },
//       { grade: "Cybersecurity Basics:", description: "Understanding digital threats, online safety, and fundamental protections." },
//       { grade: "Sustainable Tech:", description: "Exploring green technologies and their impact on the environment." },
//     ]
//   },