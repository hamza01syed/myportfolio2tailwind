// components/Projects.tsx
import Link from 'next/link';

const projects = [
  {
    title: "Academy Website",
    description: "A responsive web application built with NextJS and TypeScript that belongs to education website.",
    techStack: ["NextJS", "TypeScript", "Tailwind"],
    liveLink: "https://hometutorsworld.vercel.app/",
    codeLink: "https://github.com/hamza01syed/htwproject",
  },
  {
    title: "Resume Builder",
    description: "A website created with HTML, TypeScript, and CSS. It features that users can create a resume and download easily.",
    techStack: ["Next.js", "Tailwind", "JavaScript"],
    liveLink: "https://dynamic-resume-alpha.vercel.app/",
    codeLink: "https://github.com/hamza01syed/Dynamic_Resume",
  },
  {
    title: "Role Based Access Control Project",
    description: "A RESTful API built using Node.js and Express, designed for managing posts with CRUD operations and authentication.",
    techStack: ["Node.js", "Express", "MongoDB"],
    liveLink: "https://github.com/hamza01syed/RoleBasedAccessController",
    codeLink: "https://github.com/hamza01syed/RoleBasedAccessController",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center px-4">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-gray-200 text-gray-700 text-sm font-medium py-1 px-3 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors hover:bg-yellow-600"
                >
                  Live Demo
                </Link>
                <Link
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors hover:bg-gray-700"
                >
                  GitHub Code
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
