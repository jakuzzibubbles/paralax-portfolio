import PropTypes from "prop-types";

const MobileNavbar = ({ isOpen, setIsMenuOpen }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) setIsMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  MobileNavbar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsMenuOpen: PropTypes.func.isRequired,
  };
  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-full h-screen flex flex-col items-center justify-center p-4 bg-pink-900/80 border border-pink-900/80">
        {isOpen && (
          <img
            src="/assets/myself.png" // Replace with your image file name
            alt="Decorative"
            className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full"
          />
        )}

        <ul className="flex flex-col items-center space-y-5 mt-38">
          <li className="mb-3">
            <a
              className="text-white text-6xl font-semibold"
              onClick={() => handleScroll("hero")}
            >
              Home
            </a>
          </li>

          <li className="mb-3">
            <a
              className="text-white text-6xl font-semibold"
              onClick={() => handleScroll("gallery")}
            >
              Gallery
            </a>
          </li>
          <li className="mb-3">
            <a
              className="text-white text-6xl font-semibold"
              onClick={() => handleScroll("skills")}
            >
              Skills
            </a>
          </li>

          <li className="mb-3">
            <a
              className="text-white text-6xl font-semibold"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </a>
          </li>
          <li className="mb-3">
            <a
              className="text-white text-6xl font-semibold"
              onClick={() => handleScroll("resume")}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      <div
        onClick={() => {
          setIsMenuOpen(false);
        }}
        className="w-screen h-screen fixed top-0 -z-10"
      ></div>
    </div>
  );
};

export default MobileNavbar;
