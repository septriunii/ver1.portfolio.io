import { useState, useEffect } from "react";

function Intro() {
  const [showText, setShowText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setShowText(true);
  }, []);

  useEffect(() => {
    setShowText(true);

    const timer = setTimeout(() => {
      setShowText(false);
    }, 5000); // Hide the line after 5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      id="intro"
      className=" flex flex-col-reverse h-auto md:flex-row md:w-full md:h-[23rem]  lg:h-[33rem] lg:w-[74rem] mt-2 bg-zinc-90  lg:flex lg:shrink  z-40"
    >
      <div className=" p-3 h-full md:w-[70%] lg:w-[75%] bg-zinc-80 flex flex-col lg:p-3 lg:mr-10 lg:ml-5  shrink lg:pt-10 lg:pl-7">
        <p
          className={`text-sm md:text-base lg:text-lg font-light font_theme mb-3 text-orange-600 Hi italic left-fade-in ${
            isVisible ? "active" : ""
          }`}
        >
          Hi! I am
        </p>
        <div className="flex">
          <p className="text-4xl mb-2 font-bold md:text-5xl lg:text-7xl  z-40 shrink typing-effect flex flex-row">
            Anthony
            <span className="text-orange-600"> Alabado</span>
          </p>
          {showText && <h1 className="md:text-6xl cursor-blink">|</h1>}
        </div>

        <p
          className={`place-items-center text-lg mb-4 md:text-xl lg:mb-8 font-bold lg:text-2xl text-opacity-40 opacity-40 italic above-fade-in ${
            isVisible ? "active" : ""
          }`}
        >
          I am a passionate and dedicated web developer focusing in frontend
          development.
        </p>
        <p
          id=""
          className={`text-xs mb-10 text-justify leading-5 md:indent-0 md:text-sm lg:text-base font-light opacity-90 font_theme indent-4 fade-in ${
            isVisible ? "active" : ""
          }`}
        >
          I have a keen eye for design and skilled in
          <span> graphics design</span>, applying fundamental design principles
          to create visually appealing and user-friendly interfaces. I am
          well-versed in <span>web development architecture</span> and have a
          thorough understanding of how to integrate frontend interfaces with{" "}
          <span>backend systems</span>.
        </p>
        <button
          className={`w-56 text-orange-600 font-semibold place-self-center md:place-self-start left-fade-in ${
            isVisible ? "active" : ""
          }`}
          onClick={() =>
            window.open("/test1.github.io/src/assets/resume.pdf", "_blank")
          }
        >
          Check out my resume
        </button>
      </div>

      <div
        className={`relative h-[15rem] w-full shrink-0 md:h-[80%] md:w-[30%] md:py-5 md:ml-2 md:mt-7 flex items-center justify-center   lg:flex lg:h-[80%] lg:w-[35%]   lg:mt-3 right-fade-in ${
          isVisible ? "active" : ""
        }`}
      >
        {/* container */}
        <div
          id="imgbg"
          className={`relative h-[25rem] w-[25rem]  flex items-center justify-center bg-contain bg-center shrink-0 rounded-full`}
        >
          <div className="h-20 w-20 bg-orange-700 absolute rounded-full left-1 top-12 -z-40 opacity-90"></div>
          <div className="h-24 w-24 bg-orange-800 absolute rounded-full right-12 -bottom-1 z-40"></div>
          {/* image */}
          <div className="h-[85%] w-[85%]  flex items-center border-orange-600 border-2 z-30">
            {/* border  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;

// function Intro() {

//
//   return (
//
//   );
// }

// export default Intro;
