import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Sidebar() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const introTop = document.getElementById("intro").offsetTop;
      const aboutmeTop = document.getElementById("aboutme").offsetTop;
      const skillsTop = document.getElementById("skills").offsetTop;
      const projTop = document.getElementById("proj").offsetTop;
      const expTop = document.getElementById("exp").offsetTop;
      const contactTop = document.getElementById("contact").offsetTop;

      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight / 2;

      if (window.scrollY + triggerPoint >= contactTop) {
        setActiveSection("contact");
      } else if (window.scrollY + triggerPoint >= expTop) {
        setActiveSection("exp");
      } else if (window.scrollY + triggerPoint >= projTop) {
        setActiveSection("proj");
      } else if (window.scrollY + triggerPoint >= skillsTop) {
        setActiveSection("skills");
      } else if (window.scrollY + triggerPoint >= aboutmeTop) {
        setActiveSection("aboutme");
      } else if (window.scrollY + triggerPoint >= introTop) {
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <ul className="flex  fixed flex-col gap-8 right-3 top-[38%]">
        <li
          className={`h-3 w-2 rounded-full border-2  ${
            activeSection === "aboutme"
              ? "bg-orange-600 border-orange-600   "
              : "border-orange-500"
          }`}
        ></li>
        <li
          className={`h-3 w-2 rounded-full border-2  ${
            activeSection === "skills"
              ? "bg-orange-600 border-orange-600 "
              : "border-orange-500"
          }`}
        ></li>
        <li
          className={`h-3 w-2 rounded-full border-2  ${
            activeSection === "proj"
              ? "bg-orange-600 border-orange-600"
              : "border-orange-500"
          }`}
        ></li>

        <li
          className={`h-3 w-2 rounded-full border-2  ${
            activeSection === "exp"
              ? "bg-orange-600 border-orange-600"
              : "border-orange-500"
          }`}
        ></li>

        <li
          className={`h-3 w-2 rounded-full border-2  ${
            activeSection === "contact"
              ? "bg-orange-600 border-orange-600"
              : "border-orange-500"
          }`}
        ></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
