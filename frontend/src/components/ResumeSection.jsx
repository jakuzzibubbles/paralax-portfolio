import React, { useState, useEffect, useRef } from "react";

const ResumeSection = () => {
  const [isResumeVisible, setIsResumeVisible] = useState(false);

  const toggleResumeVisibility = () => {
    setIsResumeVisible(!isResumeVisible);
  };

  return (
    <section id="resume" className="p-6 relative mt-10">
      <div className="buttons mb-4 flex justify-center items-center space-x-4">
        <button
          onClick={toggleResumeVisibility}
          className="toggle-resume-btn bg-transparent text-pink-600 px-4 py-2 rounded hover:underline hover:text-pink-700"
        >
          {isResumeVisible ? "Hide Resume" : "View Resume"}
        </button>

        <a
          href="/LN-resume.pdf"
          download="LinhNguyen.pdf"
          className="download-btn bg-transparent text-pink-600 px-4 py-2 rounded hover:underline hover:text-pink-700"
        >
          Download Resume
        </a>
      </div>

      {isResumeVisible && (
        <div className="resume-container mt-4 bg-white p-4 rounded shadow-lg border border-gray-300">
          <embed
            src="/LN-resume.pdf"
            type="application/pdf"
            width="100%"
            height="500px"
            style={{ border: "none" }}
          />
        </div>
      )}
    </section>
  );
};

export default ResumeSection;
