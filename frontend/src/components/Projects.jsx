import React, { useState, useEffect } from "react";
import { projects } from "../utils/data";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    if (expandedProject !== null) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.classList.remove("scroll-lock");
    };
  }, [expandedProject]);

  const handleProjectClick = (projectId) => {
    setExpandedProject(projectId);
  };

  const handleClose = () => {
    setExpandedProject(null);
  };

  // Render description with HTML elements (e.g., paragraphs, lists, bold text)
  const renderDescription = (description) => {
    const formattedDescription = description
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/-\s*(.*?)\n/g, "<ul><li>$1</li></ul>")
      .replace(/\n\n/g, "<p></p>");

    return { __html: formattedDescription };
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
            <p className="mt-2 text-ellipsis line-clamp-2">{project.intro}</p>
            <button
              onClick={() => handleProjectClick(project.id)}
              className="mt-2 text-pink-950 font-semibold hover:underline"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {expandedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 max-h-screen overflow-y-auto p-6 rounded-lg shadow-lg relative">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-2xl text-pink-600 ">
                {
                  projects.find((project) => project.id === expandedProject)
                    ?.title
                }
              </h3>

              <button
                onClick={handleClose}
                className="text-pink-500 hover:text-pink-700 text-4xl"
              >
                &times;
              </button>
            </div>

            {projects.find((project) => project.id === expandedProject)
              ?.intro && (
              <p className="text-lg text-gray-700 mb-4">
                {
                  projects.find((project) => project.id === expandedProject)
                    ?.intro
                }
              </p>
            )}

            <div className="mt-4">
              <img
                src={
                  projects.find((project) => project.id === expandedProject)
                    ?.image
                }
                alt={
                  projects.find((project) => project.id === expandedProject)
                    ?.title
                }
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <div
                className="mb-4"
                dangerouslySetInnerHTML={renderDescription(
                  projects.find((project) => project.id === expandedProject)
                    ?.description
                )}
              />
            </div>
            <div className="flex flex-col">
              {projects.find((project) => project.id === expandedProject)
                ?.demo && (
                <a
                  href={
                    projects.find((project) => project.id === expandedProject)
                      ?.demo
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="bg-pink-400/50 text-center text-pink-800 text-xl py-2 px-14 rounded hover:bg-pink-600 hover:text-white transition-colors duration-200"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
