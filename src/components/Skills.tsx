// components/Skills.tsx
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiGit, SiNextdotjs } from 'react-icons/si';

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <SiGit /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-8 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center shadow-md transition-transform transform hover:translate-y-[-5px]">
              <div className="text-yellow-500 text-5xl mb-2">{skill.icon}</div>
              <p className="text-lg font-semibold text-gray-800">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
