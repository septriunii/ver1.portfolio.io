import ImageDiv from "../components/ProjIMG";
import { useEffect, useRef, useState } from "react";
import img1 from "../assets/Project_1.jpg";
import img2 from "../assets/Project_2.jpg";
import img3 from "../assets/Project_3.jpg";
import img4 from "../assets/Project_4.png";
import viewsite from "../assets/viewsite.svg";
import viewcode from "../assets/viewcode.svg";
import { projects } from "../data/projects";

function Projects() {
  const [isHovered, setIsHovered] = useState([false, false, false]);
  const observers = useRef([]);
  const handleContainerHover = (index) => {
    setIsHovered((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleContainerLeave = (index) => {
    setIsHovered((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const fadeRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

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

  return (
    <>
      <div
        id="proj"
        className="w-full h-auto flex flex-col shrink mt-16 md:mt-20 z-40"
      >
        <h1 className="font-bold text-2xl  ml-5 lg:text-4xl lg:py-3 text-orange-600 flex justify-center items-center">
          <p className="w-28 italic mr-5 lg:w-32">Projects</p>
          <div className="h-0.5 w-full bg-zinc-900"></div>
        </h1>
        {/* Project 1 */}
        <div
          ref={fadeRefs[0]}
          className="hidden md:flex h-full mt-10 mb-10 right-fade-in relative"
        >
          <div
            className={`transition-all duration-500 ease-in-out ${
              isHovered[0] ? "lg:left-[39rem] md:left-[28rem]" : ""
            }`}
            onMouseEnter={() => handleContainerHover(0)}
            onMouseLeave={() => handleContainerLeave(0)}
          >
            <ImageDiv
              image={img1}
              visit={"https://septriunii.github.io/proj1.swiftcart.io"}
              view={"https://github.com/Septriunii/proj1.swiftcart.io"}
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-between gap-4 p-2 text-justify font-light ml-5 px-5 bg-zinc-700 bg-opacity-20 rounded">
            <div className="gap-1 flex flex-col ">
              <p className="font-bold md:text-2xl lg:text-3xl text-orange-600">
                {projects[0].name}
              </p>

              <p className="opacity-60 italic md:text-xs lg:text-sm">
                {projects[0].class}
              </p>
            </div>
            <div className="w-full h-full relative">
              <div
                className={`bg-green-500 w-full h-auto -left-28 absolute transition-all duration-500 ease-in-out ${
                  isHovered[0] ? "lg:left-0 md:left-0" : ""
                }`}
              >
                <p className="bg-zinc-900 rounded-md md:text-xs md:w-full absolute top-[50%] flex lg:text-sm lg:p-5 md:p-3 font-light transition-all duration-500 ease-in-out">
                  {projects[0].description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-5 opacity-40 md:text-xs lg:text-sm">
                {projects[0].composition.map((tech, index) => (
                  <p key={index} className=" ">
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div
          ref={fadeRefs[1]}
          className="hidden md:flex h-full mt-10 mb-10 left-fade-in relative"
        >
          <div className="w-full h-auto flex flex-col items-end justify-between gap-4 p-2 text-justify font-light mr-5 px-5 bg-zinc-700 bg-opacity-20 rounded">
            <div className="gap-1 flex flex-col ">
              <p className="font-bold md:text-2xl lg:text-3xl text-orange-600">
                {projects[1].name}
              </p>
              <p className="opacity-60 italic md:text-xs lg:text-sm">
                {projects[1].class}
              </p>
            </div>
            <div className="w-full h-full relative">
              <div
                className={`bg-green-500 w-full h-auto -right-28 absolute z-20 transition-all duration-500 ease-in-out ${
                  isHovered[1] ? "lg:right-0 md:right-0" : ""
                }`}
              >
                <p
                  className="bg-zinc-900 rounded-md md:text-xs md:w-full absolute top-[50%] flex lg:text-sm lg:p-5 md:p-3 font-light transition-all duration-500 ease-in-out 
              "
                >
                  {projects[1].description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-5 opacity-40 md:text-xs lg:text-sm">
                {projects[1].composition.map((tech, index) => (
                  <p key={index} className=" ">
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out ${
              isHovered[1] ? "lg:left-[39rem] md:left-[28rem]" : ""
            }`}
            onMouseEnter={() => handleContainerHover(1)}
            onMouseLeave={() => handleContainerLeave(1)}
          >
            <ImageDiv
              image={img2}
              visit={"https://septriunii.github.io/proj2.aimrobotics.io"}
              view={"https://github.com/Septriunii/proj2.aimrobotics.io"}
            />
          </div>
        </div>

        {/* Project 3 */}
        <div
          ref={fadeRefs[2]}
          className="hidden md:flex h-full mt-10 mb-10 right-fade-in relative"
        >
          <div
            className={`transition-all duration-500 ease-in-out ${
              isHovered[2] ? "lg:left-[39rem] md:left-[28rem]" : ""
            }`}
            onMouseEnter={() => handleContainerHover(2)}
            onMouseLeave={() => handleContainerLeave(2)}
          >
            <ImageDiv
              image={img3}
              visit={"https://septriunii.github.io/proj3.reelquest.io"}
              view={"https://github.com/Septriunii/proj3.reelquest.io"}
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-between gap-4 p-2 text-justify font-light ml-5 px-5 bg-zinc-700 bg-opacity-20 rounded">
            <div className="gap-1 flex flex-col ">
              <p className="font-bold md:text-2xl lg:text-3xl text-orange-600">
                {projects[2].name}
              </p>

              <p className="opacity-60 italic md:text-xs lg:text-sm">
                {projects[2].class}
              </p>
            </div>
            <div className="w-full h-full relative">
              <div
                className={`bg-green-500 w-full h-auto -left-28 absolute transition-all duration-500 ease-in-out ${
                  isHovered[2] ? "lg:left-0 md:left-0" : ""
                }`}
              >
                <p className="bg-zinc-900 rounded-md md:text-xs md:w-full absolute top-[50%] flex lg:text-sm lg:p-5 md:p-3 font-light transition-all duration-500 ease-in-out">
                  {projects[2].description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-5 opacity-40 md:text-xs lg:text-sm">
                {projects[2].composition.map((tech, index) => (
                  <p key={index} className=" ">
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div
          ref={fadeRefs[3]}
          className="hidden md:flex h-full mt-10 mb-10 left-fade-in relative"
        >
          <div className="w-full h-auto flex flex-col items-end justify-between gap-4 p-2 text-justify font-light mr-5 px-5 bg-zinc-700 bg-opacity-20 rounded">
            <div className="gap-1 flex flex-col ">
              <p className="font-bold md:text-2xl lg:text-3xl text-orange-600">
                {projects[3].name}
              </p>
              <p className="opacity-60 italic md:text-xs lg:text-sm">
                {projects[3].class}
              </p>
            </div>
            <div className="w-full h-full relative">
              <div
                className={`bg-green-500 w-full h-auto -right-28 absolute z-20 transition-all duration-500 ease-in-out ${
                  isHovered[3] ? "lg:right-0 md:right-0" : ""
                }`}
              >
                <p
                  className="bg-zinc-900 rounded-md md:text-xs md:w-full absolute top-[50%] flex lg:text-sm lg:p-5 md:p-3 font-light transition-all duration-500 ease-in-out 
              "
                >
                  {projects[3].description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-5 opacity-40 md:text-xs lg:text-sm">
                {projects[3].composition.map((tech, index) => (
                  <p key={index} className=" ">
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out ${
              isHovered[3] ? "lg:left-[39rem] md:left-[28rem]" : ""
            }`}
            onMouseEnter={() => handleContainerHover(3)}
            onMouseLeave={() => handleContainerLeave(3)}
          >
            <ImageDiv
              image={img4}
              visit={"https://septriunii.github.io/proj4.mern-crud.io"}
              view={"https://github.com/Septriunii/proj4.mern-crud.io"}
            />
          </div>
        </div>

        <div className="h-auto w-full flex p-2 flex-col gap-7 md:hidden">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-2 h-auto w-full bg-zinc-700 bg-opacity-20 font-light text-xs flex flex-col gap-2"
            >
              <div className="h-auto w-full bg-slate-950 py-2 flex flex-col justify-center relative ">
                <img src={project.img} alt="" className="" />
                <div className="h-7 w-7 absolute top-[40%] left-3">
                  <a href={project.viewsite} target="_blank" rel="noreferrer">
                    <img src={viewsite} alt="" className="cursor-pointer" />
                  </a>
                </div>
                <div className="h-7 w-7 absolute top-[60%] left-3">
                  <a href={project.viewcode} target="_blank" rel="noreferrer">
                    <img src={viewcode} alt="" className="cursor-pointer" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-orange-600 text-lg font-bold">
                  {project.name}
                </p>
                <p className="opacity-60 italic text-xs"> {project.class}</p>

                <p className="bg-zinc-900 p-2 leading-5 mt-5">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex gap-5 opacity-40 md:text-xs lg:text-sm">
                  {project.composition.map((tech, index) => (
                    <p key={index} className=" ">
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
