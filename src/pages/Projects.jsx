import React, { useEffect, useRef } from "react";
import { projects } from "../data/projects";
import ProjectLeftTemp from "../components/ProjectLeftTemp";
import ProjectRightTemp from "../components/ProjectRightTemp";
import ProjSMscreen from "../components/ProjSMscreen";

function Projects() {
  const fadeRefs = Array(3)
    .fill(null)
    .map(() => useRef(null));

  useEffect(() => {
    const observers = fadeRefs.map((ref) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("active");
        }
      });

      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div
      id="proj"
      className="w-full h-auto flex flex-col shrink mt-16 md:mt-20 z-40"
    >
      <header className="font-bold text-2xl ml-5 lg:text-4xl lg:py-3 text-orange-600 flex justify-center items-center">
        <p className="w-28 italic mr-5 lg:w-32">Projects</p>
        <div className="h-0.5 w-full bg-zinc-900"></div>
      </header>

      {/* md to lg screen */}
      <main className="flex flex-col gap-10 lg:px-8 mt-10">
        {projects.slice(0, 4).map((project, index) => (
          <section
            key={project.id}
            ref={fadeRefs[index]}
            className={index % 2 === 0 ? "right-fade-in" : "left-fade-in"}
          >
            {index % 2 === 0 ? (
              <ProjectLeftTemp id={index} />
            ) : (
              <ProjectRightTemp id={index} />
            )}
          </section>
        ))}
      </main>
      <main className="h-auto -mt-24 w-full flex p-2 flex-col gap-7 md:hidden">
        {projects.map((project) => (
          <ProjSMscreen key={project.id} project={project} />
        ))}
      </main>
    </div>
  );
}

export default Projects;
