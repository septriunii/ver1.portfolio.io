import { useState, useEffect, useRef } from "react";
import logo from "../assets/a.png";
import { Link as ScrollLink } from "react-scroll";
import { navs } from "../data/navs";

function Navbar() {
  const [isSmScreen, setIsSmScreen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const fadeRefs = [useRef(null)];
  const observers = useRef([]);
  const [menuClicked, setMenuClicked] = useState(false);

  const menuOnClick = () => {
    setMenuClicked(!menuClicked);
  };

  useEffect(() => {
    observers.current = fadeRefs.map((ref) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("active");
        }
      });

      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.current.forEach((observer) => {
        observer.disconnect(); // Disconnect each observer
      });
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial screen size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos]);

  return (
    <div className="">
      {isSmScreen ? (
        // Hamburger menu for sm screen
        <div className="h-16 backdrop-blur-md shadow-md w-full flex place-items-center">
          <section className="ml-3 cursor-pointer ">
            <ScrollLink
              to="intro"
              smooth={true}
              duration={500}
              offset={-100}
              className="text-white cursor-pointer hover:text-orange-600 transition-colors duration-300 font-light font_theme text-sm"
            >
              <div className="h-11 w-11 flex bg-center items-center p-3">
                <img src={logo} alt="" href="#" />
              </div>
            </ScrollLink>
          </section>
          <div id="menu">
            <div
              id="menu-bar"
              onClick={menuOnClick}
              className={menuClicked ? "change" : ""}
            >
              <div className="flex flex-col ">
                <div id="bar1" className="bar"></div>
                <div id="bar2" className="bar"></div>
                <div id="bar3" className="bar"></div>
              </div>
            </div>
            <nav className={`nav ${menuClicked ? "change" : ""}`} id="nav">
              {navs.map((nav) => (
                <div key={nav.id} className="opacity-80 text-white">
                  <ScrollLink
                    to={nav.links}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="text-white flex justify-center mb-7 items-center cursor-pointer  hover:text-orange-600"
                  >
                    {nav.name}
                  </ScrollLink>
                </div>
              ))}
            </nav>
          </div>
          <div className={`menu-bg ${menuClicked ? "change-bg" : ""}`}></div>
        </div>
      ) : (
        // Regular navbar for md and lg screens
        <div className="backdrop-blur-md  w-full h-20 fixed top-0 left-0 flex justify-between items-center shadow-lg ">
          <section className="ml-7 cursor-pointer ">
            <ScrollLink
              to="intro"
              smooth={true}
              duration={500}
              offset={-100}
              className="text-white cursor-pointer hover:text-orange-600 transition-colors duration-300 font-light font_theme text-sm"
            >
              <div className="h-12 w-12 flex bg-center items-center p-3">
                <img src={logo} alt="" href="#" />
              </div>
            </ScrollLink>
          </section>

          {/* Navbar responsive */}
          <section
            ref={fadeRefs[0]}
            className="hidden sm:flex mr-7 gap-4 md:gap-7 lg:mr-14 lg:gap-12  nav-fade-in md:opacity-100 "
          >
            {navs.map((nav) => (
              <div key={nav.id} className="opacity-80">
                <ScrollLink
                  to={nav.links}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="text-white cursor-pointer hover:text-orange-600 transition-colors duration-300 font-light font_theme text-sm"
                >
                  {nav.name}
                </ScrollLink>
              </div>
            ))}
            <div className="w-10 hidden md:flex"></div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Navbar;
