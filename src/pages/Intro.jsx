import { useState, useEffect, useRef } from "react";
import img from "../assets/IntroIMGbg.png";
import resume from "../assets/resume.pdf";

function Intro() {
  const [showText, setShowText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const fadeRefs = Array.from({ length: 4 }, () => useRef(null)); // Create an array of useRef

  useEffect(() => {
    setIsVisible(true);
    setShowText(true);

    const timer = setTimeout(() => {
      setShowText(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, [fadeRefs]);

  return (
    <div id="intro" className="lg:px-6">
      <div className="w-full h-auto flex flex-col-reverse md:flex-row md:mt-0">
        <div className="h-full w-full p-2 lg:pt-14 md:pt-7 lg:pl-10 md:mt-5 z-40">
          <p
            ref={fadeRefs[0]}
            className={`text-sm md:text-base lg:text-lg font-light font_theme mb-3 text-orange-600 Hi italic z-50 left-fade-in  ${
              isVisible ? "active" : ""
            }`}
          >
            Hi I am
          </p>
          <div>
            <div className="flex flex-row">
              <p
                ref={fadeRefs[1]}
                className="text-4xl mb-2 font-bold md:text-5xl lg:text-7xl z-40  typing-effect"
              >
                Anthony<span className="text-orange-600">Alabado</span>
              </p>
              {showText && (
                <h1 className="md:text-5xl lg:text-6xl text-4xl text cursor-blink ">
                  |
                </h1>
              )}
            </div>

            <p
              ref={fadeRefs[2]}
              className={`text-lg mb-4 md:text-xl lg:mb-8 font-bold lg:text-2xl text-opacity-40 opacity-40 italic above-fade-in flex ${
                isVisible ? "active" : ""
              }`}
            >
              I am a dedicated web developer focusing on frontend development
              specializing in ReactJS and Tailwind CSS.
            </p>
            <p
              ref={fadeRefs[3]}
              className={`md:mt-5 text-xs mb-10 text-justify leading-5 md:leading-7 md:indent-0 md:text-sm lg:text-base font-light opacity-90 font_theme indent-4
            fade-in ${isVisible ? "active" : ""}`}
            >
              My passion lies in crafting visually captivating and user-friendly
              interfaces, skillfully combining graphics design and
              web-responsive design. I am well-versed in{" "}
              <span>web development architecture</span> and have a thorough
              understanding of how to integrate frontend interfaces with{" "}
              <span>backend systems</span>.
            </p>
          </div>
          <button
            className={`w-full md:w-56 text-orange-600 font-semibold place-self-center md:place-self-start left-fade-in lg:text-base md:text-sm text-xs ${
              isVisible ? "active" : ""
            }`}
            onClick={() => window.open(resume, "_blank")}
          >
            Check out my resume
          </button>
        </div>

        <div
          className={`h-52 mt-3 md:mt-0 md:h-auto md:w-[70%] lg:w-[65%] lg:items-center justify-start md:justify-end flex right-fade-in  ${
            isVisible ? "active" : ""
          }`}
        >
          <div className="aspect-square bg-opacity-40 h-full md:h-[70%] lg:h-[90%] md:mt-10 lg:mt-0 flex items-end justify-center relative">
            <img src={img} alt="" className="absolute scale-90 -top-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
