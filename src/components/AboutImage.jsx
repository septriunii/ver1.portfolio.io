import { useState } from "react";
import img from "../assets/AboutMePic.jpg";

function ImageDiv() {
  const [isHovered, setIsHovered] = useState(false);

  const handleContainerHover = () => {
    setIsHovered(true);
  };

  const handleContainerLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        id="container"
        className={`h-full w-full border-0 border-black absolute z-40 transition-all duration-300 ease-in-out  ${
          isHovered ? "scale-95" : ""
        }`}
        onMouseEnter={handleContainerHover}
        onMouseLeave={handleContainerLeave}
      ></div>
      <div className="flex flex-col items-center justify-center">
        <div
          className={`h-full w-full absolute transition-all duration-300 ease-in-out   ${
            isHovered ? "h-[90%] w-[90%] scale-90" : "grayscale"
          }`}
        >
          <img src={img} alt="" className="h-full w-full object-cover" />
        </div>
        <div
          id="border"
          className={`h-[90%] w-[90%] border-2 border-orange-600 absolute z-30 transition-all duration-300 ease-in-out ${
            isHovered ? "h-[360px] w-[312.89px] scale-110" : ""
          }`}
        ></div>
        <div
          className={`h-full w-full absolute  bg-cover bg-center  opacity-70  transition-all duration-300 ease-in-out ${
            isHovered ? "opacity-[0]" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}

export default ImageDiv;
