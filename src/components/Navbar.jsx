import { useState, useEffect } from "react";
import logo from "../assets/a.png";
import ToggleButton from "./ToggleButton";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Rectangle from "./Rectangle";

function Navbar() {
  const [isSmScreen, setIsSmScreen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [showRectangle, setShowRectangle] = useState(false);

  const toggleRectangle = () => {
    setShowRectangle(!showRectangle);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
    };

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isScrollingUp || currentScrollPos < 10); // Show navbar when scrolling up or at the top of the page
    };

    handleResize(); // Check initial screen size

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      {isSmScreen ? (
        // Hamburger menu for sm screen
        <div className="bg-zinc-900 w-full h-20 fixed top-0 left-0 flex items-center justify-between z-50">
          <section className="ml-7 cursor-pointer">
            <div className="h-12 w-12 flex bg-center items-center p-3">
              <img src={logo} alt="" href="#" />
            </div>
          </section>

          <div className="sm:hidden mr-7 z-50">
            <div className="hamburger" onClick={toggleRectangle}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
      ) : (
        // Regular navbar for md and lg screens
        <div className="bg-zinc-900 w-full h-20 fixed top-0 left-0 flex justify-between items-center">
          <section className="ml-7 cursor-pointer">
            <div className="h-12 w-12 flex bg-center items-center p-3">
              <img src={logo} alt="" href="#" />
            </div>
          </section>

          {/* Navbar responsive */}
          <section className="hidden sm:flex mr-7 gap-4 md:gap-7 lg:mr-14 lg:gap-12">
            <div className="opacity-80">
              <ScrollLink
                to="aboutme"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-white cursor-pointer hover:text-orange-600 transition-colors duration-300 font-light font_theme text-sm"
              >
                About Me
              </ScrollLink>
            </div>

            <div className="opacity-80">
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-white cursor-pointer hover:text-orange-600 transition-colors duration-300 font-light font_theme text-sm"
              >
                Skills
              </ScrollLink>
            </div>

            <div className="opacity-80">
              <ScrollLink
                to="proj"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-white cursor-pointer hover:text-orange-600 transition-colors duration-300 font-light font_theme text-sm"
              >
                Projects
              </ScrollLink>
            </div>

            <div className="opacity-80">
              <ScrollLink
                to="exp"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-white cursor-pointer hover:text-orange-600 transition-colors duration-300 font-light font_theme text-sm"
              >
                Experience
              </ScrollLink>
            </div>

            <div className="opacity-80">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-white cursor-pointer hover:text-orange-600 transition-colors duration-300 font-light font_theme text-sm"
              >
                Contact Me
              </ScrollLink>
            </div>
            <ToggleButton />
          </section>
        </div>
      )}

      {showRectangle && (
        <div className="sm:hidden">
          <Rectangle onClose={toggleRectangle} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
