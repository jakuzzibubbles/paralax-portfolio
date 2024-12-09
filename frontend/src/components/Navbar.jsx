import { useState } from "react";
import { Link } from "react-scroll";
import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import MobileNavbar from "./MobileNavbar";
import Myself from "/assets/myself.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isItemsVisible, setIsItemsVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleItemsVisibility = () => {
    setIsItemsVisible(!isItemsVisible);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsItemsVisible(false);
  };

  return (
    <>
      {isMenuOpen && (
        <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      <div className="w-screen hidden md:flex items-center justify-center py-2 fixed top-0 z-10">
        <nav className="w-full bg-transparent py-3 px-6 absolute left-0 top-0">
          <ul className="flex items-center w-full">
            <li>
              <Link
                to="hero"
                smooth="easeInOutQuint"
                duration={200}
                spy
                offset={-100}
                className="menu-item"
                onClick={closeMenu}
              >
                <div>
                  <span className="block text-4xl font-semibold">LINH</span>
                  <span className="block text-4xl font-semibold">NGUYEN</span>
                </div>
              </Link>
            </li>
            <div className="ml-8 flex items-center justify-center gap-3">
              <img
                src={Myself}
                alt="Profile"
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full transition-transform duration-300 ease-in-out hover:scale-125 border border-pink-800 mr-4"
              />
            </div>

            <div className="realtive p-3 fixed top-6 right-2 z-10">
              <button
                onClick={toggleItemsVisibility}
                className="w-11 h-11 bg-pink-600 border border-pink-900/80 flex items-center justify-center rounded z-50 rounded-full hover:text-white"
              >
                {isItemsVisible ? (
                  <RiCloseFill size={24} className="text-white" />
                ) : (
                  <CgMenuMotion size={24} />
                )}
              </button>
            </div>

            <div className="p-3 fixed top-0 right-0 z-50 md:hidden">
              <button
                onClick={toggleMenu}
                className="w-11 h-11 text-white bg-pink-800/60 border border-pink-900/80 flex items-center justify-center rounded z-50"
              >
                {isMenuOpen ? (
                  <RiCloseFill size={24} />
                ) : (
                  <CgMenuMotion size={24} />
                )}
              </button>
            </div>
          </ul>

          {isItemsVisible && (
            <div className="flex flex-col gap-6 ml-auto px-4 bg-pink-900/80 w-1/3 fixed right-0 top-0 h-full items-center justify-center list-none">
              <div className="ui-circle absolute top-0 left-0 -ml-20 -mt-10 mb-10 transition-opacity duration-300"></div>
              <li>
                <Link
                  to="gallery"
                  smooth="easeInOutQuint"
                  duration={200}
                  spy
                  offset={-100}
                  className="font-semibold text-6xl text-white"
                  onClick={closeMenu}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth="easeInOutQuint"
                  duration={200}
                  spy
                  offset={-100}
                  className="font-semibold text-6xl text-white"
                  onClick={closeMenu}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth="easeInOutQuint"
                  duration={200}
                  spy
                  offset={-100}
                  className="font-semibold text-6xl text-white"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="resume"
                  smooth="easeInOutQuint"
                  duration={200}
                  spy
                  offset={-100}
                  className="font-semibold text-6xl text-white"
                  onClick={closeMenu}
                >
                  Resume
                </Link>
              </li>
            </div>
          )}
        </nav>
      </div>

      <div className="p-3 fixed top-0 right-0 z-50 md:hidden">
        <button
          onClick={toggleMenu}
          className="w-11 h-11 text-white bg-pink-800/60 border border-pink-900/80 flex items-center justify-center rounded z-50"
        >
          {isMenuOpen ? <RiCloseFill size={24} /> : <CgMenuMotion size={24} />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
