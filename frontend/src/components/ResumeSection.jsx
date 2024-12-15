import React, { useState } from "react";
import Resume1 from "/assets/resume1.png";
import Resume2 from "/assets/resume2.png";

const ResumeSection = () => {
  const [isResumeVisible, setIsResumeVisible] = useState(false);

  const toggleResumeVisibility = () => {
    setIsResumeVisible(!isResumeVisible);
  };

  return (
    <section id="resume" className="p-6 relative">
      <div className="buttons flex flex-col items-center space-y-4">
        {!isResumeVisible ? (
          <button
            onClick={toggleResumeVisibility}
            className="toggle-resume-btn bg-transparent font-bold text-6xl text-pink-600 px-4 py-2 rounded border border-pink-900 p-5 rounded-lg shadow-lg hover:bg-pink-600 hover:text-white transition-colors duration-200"
          >
            View Resume
          </button>
        ) : (
          <button
            onClick={toggleResumeVisibility}
            className="toggle-resume-btn bg-transparent text-pink-600 px-4 py-2 rounded hover:bg-pink-600 hover:text-white transition-colors duration-200"
          >
            Hide Resume
          </button>
        )}

        {isResumeVisible && (
          <div className="resume-container mt-4 flex flex-wrap justify-center gap-4">
            <img
              src={Resume1}
              alt="Resume page 1"
              className="resume-page w-full md:w-[48%] lg:w-[48%]"
            />
            <img
              src={Resume2}
              alt="Resume Page 2"
              className="resume-page w-full md:w-[48%] lg:w-[48%]"
            />
          </div>
        )}

        {isResumeVisible && (
          <a
            href="/LinhNguyen.pdf"
            download="LinhNguyen.pdf"
            className="download-btn bg-transparent text-pink-600 px-4 py-2 rounded hover:bg-pink-600 hover:text-white transition-colors duration-200"
          >
            Download Resume
          </a>
        )}
      </div>
    </section>
  );
};

export default ResumeSection;
