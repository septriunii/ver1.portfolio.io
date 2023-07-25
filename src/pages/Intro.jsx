// import { useState, useEffect } from "react";
// import bgPat from "../assets/bgpattern.png";
import SlideshowImage from "../components/SlideshowImage";

// function Intro() {
//   const [showText, setShowText] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   useEffect(() => {
//     setShowText(true);
//   }, []);

//   useEffect(() => {
//     setShowText(true);

//     const timer = setTimeout(() => {
//       setShowText(false);
//     }, 5000); // Hide the line after 5 seconds

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <div
//       id="intro"
//       className="flex flex-col-reverse md:flex-row md:h-[23rem] lg:h-[33rem] mt-2 bg-zinc-90 md:flex-shrink z-40"
//     >
//       <img
//         src={bgPat}
//         alt=""
//         className="fixed opacity-60 -z-50 top-0 right-0 h-full"
//       />

//       <div className="p-3 md:w- lg:w-[75%] bg-zinc-80 flex flex-col lg:p-3 lg:mr-10 lg:ml-5 lg:pt-10 lg:pl-7">
//         <p
//           className={`text-sm md:text-base lg:text-lg font-light font_theme mb-3 text-orange-600 Hi italic left-fade-in ${
//             isVisible ? "active" : ""
//           }`}
//         >
//           Hi! I am
//         </p>
//         <div className="flex flex-shrink">
//           <p className="text-4xl mb-2 font-bold md:text-5xl lg:text-7xl z-40 shrink typing-effect flex flex-row">
//             Anthony <span className="text-orange-600">Alabado</span>
//           </p>
//           {showText && <h1 className="md:text-6xl cursor-blink">|</h1>}
//         </div>

//         <p
//           className={`place-items-center text-lg mb-4 md:text-xl lg:mb-8 font-bold lg:text-2xl text-opacity-40 opacity-40 italic above-fade-in flex ${
//             isVisible ? "active" : ""
//           }`}
//         >
//           I am a passionate and dedicated web developer focusing on frontend
//           development.
//         </p>
//         <p
//           id=""
//           className={`shrink text-xs mb-10 text-justify leading-5 md:indent-0 md:text-sm lg:text-base font-light opacity-90 font_theme indent-4 fade-in ${
//             isVisible ? "active" : ""
//           }`}
//         >
//           I have a keen eye for design and I'm skilled in{" "}
//           <span>graphics design</span>, applying fundamental design principles
//           to create visually appealing and user-friendly interfaces. I am
//           well-versed in <span>web development architecture</span> and have a
//           thorough understanding of how to integrate frontend interfaces with{" "}
//           <span>backend systems</span>.
//         </p>
//         <button
//           className={`w-full md:w-56 text-orange-600 font-semibold place-self-center md:place-self-start left-fade-in ${
//             isVisible ? "active" : ""
//           }`}
//           onClick={() =>
//             window.open("/test1.github.io/src/assets/resume.pdf", "_blank")
//           }
//         >
//           Check out my resume
//         </button>
//       </div>

//       <div
//         className={`bg-blue-900 relative md:py-5 md:ml-2 md:mt-7 flex items-center justify-center lg:w-full lg:h-full lg:mt-3 right-fade-in ${
//           isVisible ? "active" : ""
//         }`}
//       >
//         <div
//           className={`bg-black relative h-[17rem] w-[17rem] lg:h-[25rem] lg:w-[25rem] flex items-center justify-center bg-contain bg-center shrink rounded-full`}
//         >
//           <div className="">
//             <SlideshowImage />
//           </div>
//           <div className="h-20 w-20 bg-orange-700 absolute rounded-full left-1 top-12 -z-40 opacity-90 "></div>
//           <div className="h-24 w-24 bg-orange-800 absolute rounded-full right-12 -bottom-1 z-40"></div>
//           <div className="h-[85%] w-[85%] flex items-center border-orange-600 border-2 z-30"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Intro;

import React from "react";

function Intro() {
  return (
    <div>
      <div className="w-full h-[33rem] bg-black flex flex-col-reverse md:flex-row mt-10 md:mt-0">
        <div className="bg-blue-950 h-full w-full p-2">
          <p className="text-sm md:text-base lg:text-lg font-light font_theme mb-3 text-orange-600 Hi italic">
            Hi I am
          </p>
          <div>
            <p className="text-4xl mb-2 font-bold md:text-5xl lg:text-7xl z-40 shrink ">
              Anthony<span className="text-orange-600">Alabado</span>
            </p>
            <p className="text-lg mb-4 md:text-xl lg:mb-8 font-bold lg:text-2xl text-opacity-40 opacity-40 italic ">
              I am a passionate and dedicated web developer focusing on frontend
              development.
            </p>
            <p className="md:mt-10 text-xs mb-10 text-justify leading-5 md:leading-7 md:indent-0 md:text-sm lg:text-base font-light opacity-90 font_theme indent-4">
              I have a keen eye for design and I'm skilled in{" "}
              <span>graphics design</span>, applying fundamental design
              principles to create visually appealing and user-friendly
              interfaces. I am well-versed in{" "}
              <span>web development architecture</span> and have a thorough
              understanding of how to integrate frontend interfaces with{" "}
              <span>backend systems</span>.
            </p>
          </div>
          <button
            className="w-full md:w-56 text-orange-600 font-semibold place-self-center md:place-self-start"
            onClick={() =>
              window.open("/test1.github.io/src/assets/resume.pdf", "_blank")
            }
          >
            Check out my resume
          </button>
        </div>

        <div className="bg-slate-950 h-56 w-full justify-center  md:h-full  lg:w-[35%] md:w-[40%] p-1 shrink-0 flex mt-32 md:mt-0">
          <div className="w-56 md:w-full lg:h-96 md:h-[60%] bg-orange-800 md:items-start  md:justify-end flex md:mt-10">
            <div className="h-full w-full md:place-items-end lg:w-[23rem] lg:h-[23rem] bg-red-950 ">
              <div className="flex justify-center items-center w-full h-full relative ">
                <SlideshowImage />
                {/* <div className="h-20 w-20 bg-orange-700 absolute rounded-full left-1 top-12 -z-40 opacity-90 "></div>
                <div className="h-24 w-24 bg-orange-800 absolute rounded-full right-12 -bottom-1 z-40"></div>
                <div className="h-[85%] w-[85%] flex items-center border-orange-600 border-2 z-30"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
