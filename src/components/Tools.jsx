import { useState } from "react";
import { tools } from "../data/tools";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Tools() {
  const [hoveredTool, setHoveredTool] = useState(null);

  return (
    <>
      <div className="h-full w-full flex flex-col">
        <div className="h-auto w-full  flex justify-center text-base font-bold p-3">
          <p>Technologies I Utillize</p>
        </div>

        <div className="h-full w-full  flex gap-2 font-bold">
          <div className="h-full w-5 p-3  flex flex-col items-center justify-center ml-3 ">
            {hoveredTool
              ? hoveredTool.name
                  .split("")
                  .map((char, index) => <span key={index}>{char}</span>)
              : ""}
          </div>
          <div className="h-full w-full lg:px-1 grid grid-cols-5 md:grid-cols-3 lg:grid-cols-4 gap-3  items-center place-content-center place-items-center">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="h-10 w-full flex justify-center duration-300 ease-in-out hover:scale-105 "
                onMouseEnter={() => setHoveredTool(tool)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                <LazyLoadImage
                  src={tool.img}
                  alt={tool.name}
                  className="lg:scale-100 md:scale-95 scale-90 h-full w-full"
                  effect="blur"
                />
              </div>
            ))}
          </div>
          <div className="h-full w-5  p-3 flex flex-col items-center justify-center vertical-text mr-3">
            {hoveredTool
              ? hoveredTool.class
                  .split("")
                  .map((char, index) => <span key={index}>{char}</span>)
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
