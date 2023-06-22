import { useState, useEffect } from "react";
import logo from "../assets/a.png";
import ToggleButton from "./ToggleButton";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(currentScrollPos < prevScrollPos);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      <div
        className={`bg-zinc-900 w-full h-20 fixed top-0 left-0 flex items-center justify-between ${
          visible ? "" : "transform translate-y-[-100%]"
        } transition-transform duration-300 z-50 `}
      >
        <section className="ml-7 cursor-pointer">
          <div className="h-12 w-12 flex bg-center items-center p-3">
            <img src={logo} alt="" href="#" />
          </div>
        </section>
        <section className="flex gap-10 mr-14 font-mono  ">
          <div className="cursor-pointer hover:text-orange-600 transition-colors duration-300">
            About Me
          </div>
          <div className="cursor-pointer hover:text-orange-600 transition-colors duration-300">
            Skills
          </div>
          <div className="cursor-pointer hover:text-orange-600 transition-colors duration-300">
            Projects
          </div>
          <div className="cursor-pointer hover:text-orange-600 transition-colors duration-300">
            Experience
          </div>
          <div className="cursor-pointer hover:text-orange-600 transition-colors duration-300">
            Contact Me
          </div>
          <ToggleButton />
        </section>
      </div>

      {/* sidebar */}
      <div className="bg-zinc- h-[32rem] w-24 fixed left-0 flex flex-col justify-center items-center gap-4 top-32">
        <div className="w-10 h-10 cursor-pointer flex items-center p-1 relative ">
          <div className="bg bg-github-logo w-full h-full object-contain transition-all duration-300 transform hover:scale-110"></div>
        </div>
        <div className="w-10 h-10 cursor-pointer flex items-center p-1 relative">
          <div className="bg bg-facebook-logo w-full h-full object-contain transition-all duration-300 transform hover:scale-110"></div>
        </div>
        <div className="w-10 h-10 cursor-pointer flex items-center p-1 relative">
          <div className="bg bg-gmail-logo w-full h-full object-contain transition-all duration-300 transform hover:scale-110"></div>
        </div>
        <div className="w-10 h-10 cursor-pointer flex items-center p-1 relative">
          <div className="bg bg-linkedin-logo w-full h-full object-contain transition-all duration-300 transform hover:scale-110"></div>
        </div>

        <div className="h-36 w-[3px] bg-[#111010] fixed bottom-[0]"></div>
      </div>

      {/* sidebar 2*/}
      <div className="bg-zinc- h-[32rem] w-24 fixed right-0 flex flex-col justify-center items-center gap-7">
        <div className="h-32 w-[4px] bg-[#111010] absolute top-0"></div>

        <div className="w-3 h-3 cursor-pointer flex items-center relative rounded-full border-orange-600 border-2"></div>
        <div className="w-3 h-3 cursor-pointer flex items-center relative rounded-full border-orange-600 border-2"></div>
        <div className="w-3 h-3 cursor-pointer flex items-center relative  rounded-full border-orange-600 border-2"></div>
        <div className="w-3 h-3 cursor-pointer flex items-center relative rounded-full border-orange-600 border-2"></div>
        <div className="w-3 h-3 cursor-pointer flex items-center relative rounded-full border-orange-600 border-2"></div>

        <div className="h-32 w-[4px] bg-[#111010] absolute bottom-0"></div>
      </div>
    </div>
  );
}

export default Navbar;
