import React from 'react';

const sections = [
  {
    title: 'Grade-wise Pathway',
    content: (
      <>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Foundational (KG-1):</strong> Tinker Time, simple machines, patterns, storytelling with block coding.</li>
          <li><strong>Preparatory (1-5):</strong> Robotics starters, circuits, scratch apps, designing thinking mini-challenges.</li>
          <li><strong>Middle (6-8):</strong> IoT builds, Python, 3D-design/printing, drones (simulated), public-speaking projects.</li>
          <li><strong>Secondary (9-10):</strong> Capstone projects integrating AI/ML, data, automation, and digital media portfolios.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'How the Program Runs',
    content: (
      <>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Weekly Lab Sessions</strong> embedded into the timetable; flexible plans for club hours and intensives.</li>
          <li><strong>Certified Facilitators</strong> (Urdja Academy) co-teach with TSUS faculty for smooth delivery and classroom integration.</li>
          <li><strong>Safety & SOPs</strong> for tools, drones, and electronics; age-appropriate kits.</li>
          <li><strong>Showcases & Hack days</strong> each term—parents invited.</li>
          <li><strong>Assessment & Portfolio:</strong> rubrics for creativity, collaboration, problem-solving; each child builds a <em>digital portfolio</em> of projects.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Outcomes You Can Expect',
    content: (
      <>
        <ul className="list-disc list-inside space-y-1">
          <li>Conceptual clarity via experiments and models.</li>
          <li>Stronger problem-solving & logical reasoning.</li>
          <li>Tech fluency (AI/Robotics/IoT, and m-learning).</li>
          <li>Communication & leadership through demos, pitches and team roles.</li>
          <li>Real-world application mindset—ideas that move from paper to prototype.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'What Makes TSUS STEAM Different',
    content: (
      <>
        <ul className="list-disc list-inside space-y-1">
          <li>End-to-end lab experience—infrastructure, curriculum, facilitators, and teacher upskilling, not just kits.</li>
          <li>Curriculum that scales across grades with 400+ hands-on topics style coverage typical of best-in-class experiential programs.</li>
          <li>Integration with regular lessons so learning isn’t an “extra class” but a better way to learn the same concepts.</li>
        </ul>
      </>
    ),
  },
];

export default function AlternatingSections()  {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-16">
      {sections.map((section, index) => {
        const isRightAligned = index % 2 === 0; // even index = right start, odd index = left start
        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start md:space-x-12 ${
              isRightAligned ? 'md:flex-row-reverse' : ''
            }`}
          >
            
            <div className="bg-[#fff] p-6 rounded-lg shadow-md w-full md:w-2/3 border-l-15 border-[#F3D805]">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">{section.title}</h2>
              <div className="text-gray-700 text-sm">{section.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// export default AlternatingSections;
