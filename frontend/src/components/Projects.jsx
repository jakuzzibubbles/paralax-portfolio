import { useState } from "react";
import { projects } from "../utils/data";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setExpandedProject(projectId);
  };

  const handleClose = () => {
    setExpandedProject(null);
  };

  return (
    <section id="gallery" className="p-10 mt-16">
      <h2 className="text-3xl text-center mb-5 mt-20">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-pink-900 p-5 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-pink-600/20"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-2xl text-right mt-3">{project.title}</h3>
            {expandedProject === project.id ? (
              <div>
                <p className="mt-2">{project.description}</p>
                <div className="flex justify-between mt-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Code
                  </a>
                </div>
                <button
                  onClick={handleClose}
                  className="mt-3 text-red-500 hover:underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <p className="mt-2 text-ellipsis line-clamp-2">
                  {project.description}
                </p>
                <button
                  onClick={() => handleProjectClick(project.id)}
                  className="mt-2 text-blue-500 hover:underline"
                >
                  View Details
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
