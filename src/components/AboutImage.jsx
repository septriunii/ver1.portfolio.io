import { useState } from "react";
import img from "../assets/AboutMePic.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
      <section
        id="container"
        className={`h-full w-full border-0 border-black absolute z-40 transition-all duration-300 ease-in-out  ${
          isHovered ? "scale-95" : ""
        }`}
        onMouseEnter={handleContainerHover}
        onMouseLeave={handleContainerLeave}
      ></section>
      <section className="flex flex-col items-center justify-center">
        <figure
          className={`h-full w-full absolute transition-all duration-300 ease-in-out   ${
            isHovered ? "h-[90%] w-[90%] scale-90" : "grayscale"
          }`}
        >
          <LazyLoadImage
            src={img}
            alt=""
            className="h-48 w-48 md:h-[14rem] lg:h-[17rem] md:w-full object-cover"
            effect="blur"
          />
        </figure>
        <section
          id="border"
          className={`h-[90%] w-[90%] border-2 border-orange-600 absolute z-30 transition-all duration-300 ease-in-out ${
            isHovered ? "h-[360px] w-[312.89px] scale-110" : ""
          }`}
        ></section>
        <section
          className={`h-full w-full absolute  bg-cover bg-center  opacity-70  transition-all duration-300 ease-in-out ${
            isHovered ? "opacity-[0]" : ""
          }`}
        ></section>
      </section>
    </div>
  );
}

export default ImageDiv;
