import { useState } from "react";
import img from "../assets/Project_2.jpg";

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
          className={`md:h-72 md:w-96 lg:w-[570px] lg:h-[360px] border-orange-600 border-2 absolute top-0 right-0 z-0 transition-all duration-300 ease-in-out ${
            isHovered ? "top-5 right-5" : ""
          }`}
        ></div>

        <div className="md:h-72 md:w-96 lg:h-[360px] lg:w-[570px] flex items-center justify-center bg-slate-950">
          <img src={img} alt="" />
        </div>
        <div
          className={`md:h-72 md:w-96 lg:h-[360px] lg:w-[570px] flex items-center justify-center border-0 border-black absolute transition-all duration-1000 ease-in-out ${
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
          className={`bg-zinc-900 rounded-md absolute md:text-sm md:right-[23rem] lg:right-[33rem] w-[25rem] px-8 py-5 font-light transition-all duration-500 ease-in-out ${
            isHovered ? "lg:right-[39rem] md:right-[28rem]" : ""
          }`}
        >
          AimRobotics is a captivating company website that beautifully presents
          their range of products and services. It{" "}
          <span className="border-b border-orange-600 text-white cursor-default">
            demonstrates my skill in designing engaging websites
          </span>{" "}
          specifically tailored for businesses. With easy navigation, striking
          visuals, and compelling content, AimRobotics provides visitors with an
          immersive experience into the world of innovative solutions offered by
          the company.
        </p>
      </div>
    </>
  );
}

export default ImageDiv;
