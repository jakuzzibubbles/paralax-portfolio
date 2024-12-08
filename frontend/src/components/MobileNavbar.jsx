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
      <div className="w-full h-screen flex flex-col items-center justify-center p-4 bg-pink-800/60 border border-pink-900/80">
        <div className="ui-circle absolute top-0 left-0 -ml-20 -mt-10 mb-10" />

        <ul className="flex flex-col items-center space-y-5">
          <li className="mb-3">
            <a
              className="text-black text-6xl font-semibold"
              onClick={() => handleScroll("hero")}
            >
              Home
            </a>
          </li>

          <li className="mb-3">
            <a
              className="text-black text-6xl font-semibold"
              onClick={() => handleScroll("gallery")}
            >
              Gallery
            </a>
          </li>
          <li className="mb-3">
            <a
              className="text-black text-6xl font-semibold"
              onClick={() => handleScroll("skills")}
            >
              Skills
            </a>
          </li>

          <li className="mb-3">
            <a
              className="text-black text-6xl font-semibold"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </a>
          </li>
          <li className="mb-3">
            <a
              className="text-black text-6xl font-semibold"
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
