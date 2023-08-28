import React, { useState, useEffect } from "react";
import { Link, Link as ScrollLink } from "react-scroll";

import img from "../assets/arrow-up.svg";

function Sidebar2() {
  const [activeSection, setActiveSection] = useState(null);
  const sections = [
    { id: "aboutme", name: "aboutme" },
    { id: "skills", name: "skills" },
    { id: "proj", name: "proj" },
    { id: "exp", name: "exp" },
    { id: "contact", name: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight / 2;

      let newActiveSection = null;

      sections.forEach((section, index) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          if (index === 0 && window.scrollY < sectionTop - triggerPoint) {
            newActiveSection = null;
          } else if (window.scrollY + triggerPoint >= sectionTop) {
            newActiveSection = section.name;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <ul className="flex fixed flex-col gap-8 top-[38%] right-6">
        {sections.map((section) => (
          <li
            key={section.id}
            className={`h-3 w-2 rounded-full border-2  ${
              activeSection === section.name
                ? "bg-orange-600 border-orange-600"
                : "border-orange-500"
            }`}
          ></li>
        ))}
        {activeSection === "contact" && (
          <div
            className={`lg:h-8 lg:w-8 md:w-6 md:h-6 opacity-40 cursor-pointer mx-auto absolute -left-14 -bottom-44 blinking`}
          >
            <ScrollLink to="intro" smooth={true} duration={500} offset={-100}>
              <img src={img} alt="" />
            </ScrollLink>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Sidebar2;
