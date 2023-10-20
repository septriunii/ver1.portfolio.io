import { useState } from "react";
import { projects } from "../data/projects";
import ImageDiv from "./ProjIMG";

function ProjectLeftTemp({ id }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleContainerHover = () => {
    setIsHovered(true);
  };

  const handleContainerLeave = () => {
    setIsHovered(false);
  };

  const project = projects[id]; // Get the project based on the 'id' prop

  return (
    <>
      <main className="hidden md:flex h-auto">
        <figure
          className={`transition-all duration-500 ease-in-out ${
            isHovered ? "lg:left-[39rem] md:left-[28rem]" : ""
          }`}
          onMouseEnter={handleContainerHover}
          onMouseLeave={handleContainerLeave}
        >
          <ImageDiv
            image={project.img}
            visit={project.viewsite}
            view={project.viewcode}
          />
        </figure>
        <article className="w-full h-auto flex flex-col justify-between gap-4 p-2 text-justify font-light ml-5 px-5 bg-zinc-700 bg-opacity-20 rounded">
          <section className="gap-1 flex flex-col ">
            <p className="font-bold md:text-2xl lg:text-3xl text-orange-600">
              {project.name}
            </p>

            <p className="opacity-60 italic md:text-xs lg:text-sm">
              {project.class}
            </p>
          </section>
          <section className="w-full h-full relative">
            <div
              className={`bg-green-500 w-full h-auto -left-28 absolute transition-all duration-500 ease-in-out ${
                isHovered ? "lg:left-0 md:left-0" : ""
              }`}
            >
              <div className="bg-zinc-900 rounded-md md:text-xs md:w-full absolute top-[50%] flex lg:text-sm lg:p-5 md:p-3 font-light transition-all duration-500 ease-in-out">
                <p dangerouslySetInnerHTML={{ __html: project.description }} />
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-5">
            <div className="flex gap-5 opacity-40 md:text-xs lg:text-sm">
              {project.composition.map((tech, index) => (
                <p
                  key={index}
                  className="cursor-pointer transition-all duration-300 hover:font-bold"
                >
                  {tech}
                </p>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default ProjectLeftTemp;
