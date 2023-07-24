import ImageDiv from "../components/AboutImage";
import { useEffect, useRef } from "react";

function AboutMe() {
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
    <div
      id="aboutme"
      className="lg:mt-1 lg:flex lg:flex-col p-3 lg:h-auto z-40"
    >
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl lg:py-3 text-orange-600 flex justify-center items-center">
        <p className="w-44 lg:w-52 lg:mr-1 italic">About Me</p>
        <div className="h-0.5 w-full bg-zinc-900"></div>
      </h1>

      {/* image  */}
      <div className="lg:pl-10 flex flex-col-reverse h-full items-center justify-center md:flex-row md:gap-5 lg:mt-7 ">
        <div className=" h-56 w-full md:w-[20rem] lg:h-full lg:w-[40%] flex items-center justify-center ">
          <div
            ref={fadeRefs[2]}
            className="h-48 w-48 md:w-56 md:h-56 lg:h-[20rem] lg:w-[20rem] flex items-center justify-center absolute left-fade-in"
          >
            <ImageDiv />
          </div>
        </div>
        <div className="h-full w-[100%] gap-3 flex flex-col text-xs p-2 md:text-sm  lg:gap-4  lg:py-2 lg:px-14 lg:text-justify justify-center  font-light opacity-90">
          <p
            ref={fadeRefs[0]}
            className="text-gap indent-4 text-justify lg:indent-0 fade-in"
          >
            Hello! I'm{" "}
            <span className="border-b border-orange-600 text-white cursor-default">
              Anthony Alabado
            </span>
            , a dedicated{" "}
            <span className="font-bold text-zinc-900 bg-orange-600 px-1 cursor-default">
              Frontend Web Developer
            </span>{" "}
            with a strong passion for crafting exceptional digital experiences.
            I graduated with a Bachelor's degree in Information Technology and
            my interest in web development was sparked during my high school
            years when I was first exposed to its captivating world. Even amidst
            various school activities, my curiosity led me to explore online
            courses and embark on self-guided projects. Since then, I have
            continuously fueled my enthusiasm for web development, eagerly{" "}
            <span className="border-b border-orange-600 text-white cursor-default">
              seeking new challenges and opportunities
            </span>{" "}
            to further grow my skills.
          </p>

          <p
            ref={fadeRefs[1]}
            className="text-gap indent-4 text-justify lg:indent-0 fade-in"
          >
            <span className="border-b border-orange-600 text-white cursor-default">
              Design and code hygiene{" "}
            </span>
            are at the core of my expertise. With a focus on{" "}
            <span className="border-b border-orange-600 text-white cursor-default">
              aesthetics
            </span>{" "}
            and{" "}
            <span className="border-b border-orange-600 text-white cursor-default">
              clean code
            </span>
            , I believe in the importance of well-designed interfaces and robust
            coding practices. Throughout the development process, I employ
            design thinking principles to create visually appealing interfaces
            that prioritize user satisfaction. Simultaneously, I maintain a
            strong commitment to code hygiene, ensuring the codebase is
            organized, readable, and maintainable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
