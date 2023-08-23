import { useState } from "react";

function ImageDiv({ image, visit, view }) {
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

        <div className="lg:h-[360px] lg:w-[570px] md:h-72 md:w-96 flex items-center justify-center  bg-zinc-900 bg-opacity-70">
          <img src={image} alt="" />
        </div>

        <div
          className={`lg:h-[360px] lg:w-[570px] md:h-72 md:w-96 flex items-center justify-center border-0 border-black absolute transition-all duration-1000 ease-in-out  ${
            isHovered ? "bg-black opacity-70 p-5" : ""
          }`}
          onMouseEnter={handleContainerHover}
          onMouseLeave={handleContainerLeave}
        >
          <button
            className={`absolute  opacity-0 transition-all z-40 md:left-20 lg:left-40 duration-300 ease-in-out md:text-sm lg:text-base md:px-2 ${
              isHovered ? "opacity-100" : ""
            }`}
          >
            <a
              href={visit}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-white"
            >
              Visit Website
            </a>
          </button>
          <button
            className={`absolute  opacity-0 transition-all z-40 md:right-20 lg:right-40  duration-300 ease-in-out md:text-sm lg:text-base lg:px-5 ${
              isHovered ? "opacity-100" : ""
            }`}
          >
            <a
              href={view}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-white"
            >
              View code
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageDiv;
