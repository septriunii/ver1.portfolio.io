import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

function Rectangle({ onClose }) {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  const handleAnimationEnd = () => {
    if (!isShowing) {
      onClose();
    }
  };

  return (
    <div
      className={`text-lg flex flex-col items-center justify-around md:hidden w-auto h-auto px-16 py-7 gap-10 bg-zinc-900 fixed top-14 right-0 z-40 transition-transform duration-300 ease-in-out transform ${
        isShowing ? "translate-x-0" : "translate-x-full"
      }`}
      onAnimationEnd={handleAnimationEnd}
    >
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
      <div
        className="absolute bg-transparent h-7 w-10 right-5 -top-10"
        onClick={() => setIsShowing(false)}
      ></div>
    </div>
  );
}

export default Rectangle;
