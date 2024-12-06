import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import ResumeSection from "./components/ResumeSection";
import SceneInit from "./components/SceneInit";

const App = () => {
  useEffect(() => {
    // Create the custom cursor element
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    // Update the position of the custom cursor based on mouse movement
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
    });

    // Clean up the cursor element when the component unmounts
    return () => {
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <Router>
      <div className="bg-slate-50">
        <SceneInit />
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
