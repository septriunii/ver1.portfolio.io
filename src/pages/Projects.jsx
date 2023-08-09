import Proj1 from "../components/Proj1";
import Proj2 from "../components/Proj2";
import Proj3 from "../components/Proj3";
import { useEffect, useRef, useState } from "react";
import img1 from "../assets/Project_1.jpg";
import img2 from "../assets/Project_2.jpg";
import img3 from "../assets/Project_3.jpg";
import { Project } from "../data/projects";
import viewsite from "../assets/viewsite.svg";
import viewcode from "../assets/viewcode.svg";

function Projects() {
  const [isHovered, setIsHovered] = useState([false, false, false]);

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

  const fadeRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observers = fadeRefs.map((ref) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("active");
        }
      });
    });

    observers.forEach((observer, index) => {
      observer.observe(fadeRefs[index].current);
    });

    return () => {
      observers.forEach((observer, index) => {
        observer.unobserve(fadeRefs[index].current);
      });
    };
  }, []);

  return (
    <>
      <div
        id="proj"
        className="mt-20 w-full lg:h-auto flex flex-col shrink lg:mt-[30rem] z-40"
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
            <Proj1 />
          </div>
          <div className="w-full h-auto flex flex-col justify-between gap-4 p-2 text-justify font-light ml-5 px-5 bg-zinc-700 bg-opacity-20 rounded">
            <div className="gap-1 flex flex-col ">
              {Project.map((project) => (
                <p className="font-bold md:text-2xl lg:text-3xl text-orange-600">
                  {project.name}
                </p>
              ))}

              <p className="opacity-60 italic md:text-xs lg:text-sm">
                e-commerce website
              </p>
            </div>
            <div className="w-full h-full relative">
              <div
                className={`bg-green-500 w-full h-auto -left-28 absolute transition-all duration-500 ease-in-out ${
                  isHovered[0] ? "lg:left-0 md:left-0" : ""
                }`}
              >
                <p
                  className="bg-zinc-900 rounded-md md:text-xs md:w-full absolute top-[50%] flex lg:text-sm lg:p-5 md:p-3 font-light transition-all duration-500 ease-in-out 
              "
                >
                  SwiftCart is an exquisite e-commerce website that showcases my
                  prowess in JavaScript functions . With a functioning features
                  like an add to cart, purchasing, and page linking, it delivers
                  a captivating and dynamic browsing experience. Moreover,
                  restart surprises you with a fresh array of product displays,
                  adding a touch of elegance to your shopping journey.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 ">
              <div className="flex gap-5 opacity-40 md:text-xs lg:text-sm">
                <p className=" ">HTML</p>
                <p className=" ">CSS</p>
                <p className=" ">ReactJS</p>
                <p className=" ">TailwindCSS</p>
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
                AimRobotics
              </p>
              <p className="opacity-60 italic md:text-xs lg:text-sm">
                company brochure website
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
                  Highlighting my skill in website design, this project
                  demonstrates my expertise in creating digital experiences.
                  Prioritizing user-friendly navigation, engaging content, and
                  an artfully designed layout, it effectively shows my ability
                  to build impactful and visually pleasing online platforms that
                  enhance businesses' digital presence.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 ">
              <div className="flex gap-5 opacity-40 md:text-xs lg:text-sm">
                <p className=" ">HTML</p>
                <p className=" ">CSS</p>
                <p className=" ">ReactJS</p>
                <p className=" ">TailwindCSS</p>
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
            <Proj2 />
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
            <Proj3 />
          </div>
          <div className="w-full h-auto flex flex-col justify-between gap-4 p-2 text-justify font-light ml-5 px-5 bg-zinc-700 bg-opacity-20 rounded">
            <div className="gap-1 flex flex-col ">
              <p className="font-bold md:text-2xl lg:text-3xl text-orange-600">
                ReelQuest
              </p>

              <p className="opacity-60 italic md:text-xs lg:text-sm">
                movie search database
              </p>
            </div>
            <div className="w-full h-full relative">
              <div
                className={`bg-green-500 w-full h-auto -left-28 absolute transition-all duration-500 ease-in-out ${
                  isHovered[2] ? "lg:left-0 md:left-0" : ""
                }`}
              >
                <p
                  className="bg-zinc-900 rounded-md md:text-xs md:w-full absolute top-[50%] flex lg:text-sm lg:p-5 md:p-3 font-light transition-all duration-500 ease-in-out 
              "
                >
                  SwiftCart is an exquisite e-commerce website that showcases my
                  prowess in JavaScript functions . With a functioning features
                  like an add to cart, purchasing, and page linking, it delivers
                  a captivating and dynamic browsing experience. Moreover,
                  restart surprises you with a fresh array of product displays,
                  adding a touch of elegance to your shopping journey.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 ">
              <div className="flex gap-5 opacity-40 md:text-xs lg:text-sm">
                <p className=" ">HTML</p>
                <p className=" ">CSS</p>
                <p className=" ">ReactJS</p>
                <p className=" ">TailwindCSS</p>
              </div>
            </div>
          </div>
        </div>

        {/* For small screen */}
        <div className="h-auto w-full flex p-2 flex-col gap-7 md:hidden">
          <div className="p-2 h-auto w-full bg-zinc-700 bg-opacity-20 font-light text-xs flex flex-col gap-2">
            <div className="h-auto w-full bg-slate-950 py-2 flex flex-col justify-center relative ">
              <img src={img1} alt="" />
              <div className="h-7 w-7 absolute top-[40%] left-3">
                <img src={viewsite} alt="" />
              </div>
              <div className="h-7 w-7 absolute top-[60%] left-3">
                <img src={viewcode} alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-orange-600 text-lg font-bold"> SwiftCart</p>
              <p className="opacity-60 italic text-xs">e-commerce website</p>

              <p className="bg-zinc-900 p-2 leading-5 mt-5">
                SwiftCart is an exquisite e-commerce website that{" "}
                <span className="border-b border-orange-600 text-white cursor-default">
                  showcases my prowess in JavaScript functions
                </span>
                . With a functioning features like an add to cart, purchasing,
                and page linking, it delivers a captivating and dynamic browsing
                experience. Moreover, each restart surprises you with a fresh
                array of product displays, adding a touch of elegance to your
                shopping journey.
              </p>
            </div>
            <div className="flex gap-5 opacity-40 ">
              <p className=" ">Frontend</p>
              <p className=" ">ReactJS</p>
              <p className=" ">Tailwind CSS</p>
            </div>
          </div>

          <div className="p-2 h-auto w-full bg-zinc-700 bg-opacity-20 font-light text-xs flex flex-col gap-2">
            <div className="h-auto w-full bg-slate-950 py-2 flex flex-col justify-center relative ">
              <img src={img2} alt="" />
              <div className="h-7 w-7 absolute top-[40%] left-3">
                <img src={viewsite} alt="" />
              </div>
              <div className="h-7 w-7 absolute top-[60%] left-3">
                <img src={viewcode} alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-orange-600 text-lg font-bold"> AimRobotics</p>
              <p className="opacity-60 italic text-xs">
                company brochure websites
              </p>
              <p className="bg-zinc-900 p-2 leading-5 mt-5">
                AimRobotics is a captivating company website that beautifully
                presents their range of products and services. It{" "}
                <span className="border-b border-orange-600 text-white cursor-default">
                  demonstrates my skill in designing engaging websites
                </span>{" "}
                specifically tailored for businesses. With easy navigation,
                striking visuals, and compelling content, AimRobotics provides
                visitors with an immersive experience into the world of
                innovative solutions offered by the company.
              </p>
            </div>
            <div className="flex gap-5 opacity-40 ">
              <p className=" ">Frontend</p>
              <p className=" ">ReactJS</p>
              <p className=" ">Tailwind CSS</p>
            </div>
          </div>

          <div className="p-2 h-auto w-full bg-zinc-700 bg-opacity-20 font-light text-xs flex flex-col gap-2">
            <div className="h-auto w-full bg-slate-950 py-2 flex flex-col justify-center relative ">
              <img src={img3} alt="" />
              <div className="h-7 w-7 absolute top-[40%] left-3">
                <img src={viewsite} alt="" />
              </div>
              <div className="h-7 w-7 absolute top-[60%] left-3">
                <img src={viewcode} alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-orange-600 text-lg font-bold"> SwiftCart</p>
              <p className="opacity-60 italic text-xs">e-commerce website</p>

              <p className="bg-zinc-900 p-2 leading-5 mt-5">
                SwiftCart is an exquisite e-commerce website that{" "}
                <span className="border-b border-orange-600 text-white cursor-default">
                  showcases my prowess in JavaScript functions
                </span>
                . With a functioning features like an add to cart, purchasing,
                and page linking, it delivers a captivating and dynamic browsing
                experience. Moreover, each restart surprises you with a fresh
                array of product displays, adding a touch of elegance to your
                shopping journey.
              </p>
            </div>
            <div className="flex gap-5 opacity-40 ">
              <p className=" ">Frontend</p>
              <p className=" ">ReactJS</p>
              <p className=" ">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
