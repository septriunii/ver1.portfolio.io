import React, { useState, useEffect } from "react";
import githubLogo from "../assets/github-svgrepo-com.svg";
import facebookLogo from "../assets/facebook-svgrepo-com.svg";
import gmailLogo from "../assets/gmail-svgrepo-com.svg";
import linkedinLogo from "../assets/linkedin-svgrepo-com.svg";
import logo from "../assets/a.png";

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
        } transition-transform duration-300 `}
      >
        <section className="ml-7 cursor-pointer">
          <div className="h-12 w-12 flex bg-center items-center p-3">
            <img src={logo} alt="" href="#" />
          </div>
        </section>
        <section className="flex gap-10 mr-14 font-mono">
          <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            About Me
          </div>
          <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            Skills
          </div>
          <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            Projects
          </div>
          <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            Experience
          </div>
          <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            Contact Me
          </div>
        </section>
      </div>

      {/* sidebar */}
      <div className="bg-zinc- h-[32rem] w-24 fixed left-0 flex flex-col justify-center items-center gap-5">
        <div className="h-32 w-[4px] bg-[#111010] absolute top-0"></div>
        <div className="w-10 h-10 cursor-pointer flex items-center p-2 relative">
          <img
            className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-150"
            src={githubLogo}
            alt=""
          />
        </div>
        <div className="w-10 h-10 cursor-pointer flex items-center p-2 relative">
          <img
            className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-150"
            src={facebookLogo}
            alt=""
          />
        </div>
        <div className="w-10 h-10 cursor-pointer flex items-center p-[10px] relative">
          <img
            className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-150"
            src={gmailLogo}
            alt=""
          />
        </div>
        <div className="w-10 h-10 cursor-pointer flex items-center p-2 relative">
          <img
            className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-150"
            src={linkedinLogo}
            alt=""
          />
        </div>
        <div className="h-32 w-[4px] bg-[#111010] absolute bottom-0"></div>
      </div>

      <div className="bg-zinc-900 h-[32rem] w-24 fixed right-0"></div>
    </div>
  );
}

export default Navbar;
