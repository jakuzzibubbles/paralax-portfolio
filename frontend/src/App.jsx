import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import ResumeSection from "./components/ResumeSection";
import SceneInit from "./components/SceneInit";
import { RiCameraAiFill, RiCameraOffFill } from "react-icons/ri";


const App = () => {
  const [showBackground, setShowBackground] = useState(true);

  const toggleBackground = () => {
    setShowBackground(!showBackground);
  };
  return (
    <Router>
      <div className="bg-slate-50">
        <button
          onClick={toggleBackground}
          className="fixed right-14 z-50 mt-9 mr-4 w-11 h-11 bg-pink-600 border border-pink-900/80 flex items-center justify-center rounded-full hover:text-white hidden lg:flex"
        >
          {showBackground ? (
            <RiCameraAiFill size={24} />
          ) : (
            <RiCameraOffFill size={24} />
          )}
        </button>
        {showBackground && <SceneInit />}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <Skills />
                <Contact />
                <ResumeSection />
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
