import { useState } from "react";
import img from "../assets/Project_1.jpg";

function ImageDiv() {
  const [isHovered, setIsHovered] = useState(false);

  const handleContainerHover = () => {
    setIsHovered(true);
  };

  const handleContainerLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="h-full w-auto flex items-center p-5 pl-0 relative">
        {/* image */}

        <div
          id="border"
          className={`lg:w-[570px] lg:h-[360px] md:h-72 md:w-96 border-orange-600 border-2 absolute top-0 right-0 z-0 transition-all duration-300 ease-in-out ${
            isHovered ? "top-5 right-5" : ""
          }`}
        ></div>

        <div className="lg:h-[360px] lg:w-[570px] md:h-72 md:w-96 flex items-center justify-center  bg-slate-950">
          <img src={img} alt="" />
        </div>

        <div
          className={`lg:h-[360px] lg:w-[570px] md:h-72 md:w-96 flex items-center justify-center border-0 border-black absolute transition-all duration-1000 ease-in-out ${
            isHovered ? "bg-black opacity-70 p-5" : ""
          }`}
          onMouseEnter={handleContainerHover}
          onMouseLeave={handleContainerLeave}
        >
          <button
            className={`absolute  opacity-0 transition-all z-40 top-[40%] right-[50%] duration-300 ease-in-out ${
              isHovered ? "opacity-100" : ""
            }`}
          >
            Visit website
          </button>
          <button
            className={`absolute  opacity-0 transition-all z-40 top-[40%] right-[25%] duration-300 ease-in-out ${
              isHovered ? "opacity-100" : ""
            }`}
          >
            View code
          </button>
        </div>

        <p
          className={`bg-zinc-900 rounded-md absolute md:text-sm md:left-[23rem] md:w-96 lg:left-[33rem] lg:w-[27rem] px-8 py-5 font-light transition-all duration-500 ease-in-out ${
            isHovered ? "lg:left-[39rem] md:left-[28rem]" : ""
          }`}
        >
          SwiftCart is an exquisite e-commerce website that{" "}
          <span className="border-b border-orange-600 text-white cursor-default">
            showcases my prowess in JavaScript functions
          </span>
          . With a functioning features like an add to cart, purchasing, and
          page linking, it delivers a captivating and dynamic browsing
          experience. Moreover, each restart surprises you with a fresh array of
          product displays, adding a touch of elegance to your shopping journey.
        </p>
      </div>
    </>
  );
}

export default ImageDiv;
