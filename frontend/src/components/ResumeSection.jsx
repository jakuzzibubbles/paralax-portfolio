import React, { useState } from "react";
import Resume from "/assets/resume.png";

const ResumeSection = () => {
  const [isResumeVisible, setIsResumeVisible] = useState(false);

  const toggleResumeVisibility = () => {
    setIsResumeVisible(!isResumeVisible);
  };

  return (
    <section id="resume" className="p-6 relative mt-10">
      <div className="buttons mb-4 flex flex-col items-center space-y-4">
        {!isResumeVisible ? (
          <button
            onClick={toggleResumeVisibility}
            className="toggle-resume-btn bg-transparent font-bold text-pink-600 px-4 py-2 rounded border border-pink-900 p-5 rounded-lg shadow-lg hover:bg-pink-600 hover:text-white transition-colors duration-200"
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
          <div className="resume-container mt-4 flex justify-center">
            <img
              src={Resume}
              alt="Resume"
              width="100%"
              style={{ border: "none" }}
            />
          </div>
        )}

        {isResumeVisible && (
          <a
            href="/LN-resume.pdf"
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
