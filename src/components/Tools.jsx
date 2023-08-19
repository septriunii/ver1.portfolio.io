import React, { useState } from "react";
import { tools } from "../data/tools";

function Tools() {
  const [hoveredTool, setHoveredTool] = useState(null);

  return (
    <>
      <div className="h-full w-full flex flex-col">
        <div className="h-auto w-full  flex justify-center">
          <p>Tools that I use</p>
        </div>

        <div className="h-full w-full  flex gap-2">
          <div className="h-full w-5 p-3  flex flex-col items-center justify-center vertical-text">
            {hoveredTool
              ? hoveredTool.class
                  .split("")
                  .map((char, index) => <span key={index}>{char}</span>)
              : ""}
          </div>
          <div className="h-full w-full  flex gap-3 justify-center items-center">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="h-12 w-12  duration-200 ease-in-out hover:scale-105"
                onMouseEnter={() => setHoveredTool(tool)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                <img src={tool.img} alt={tool.name} />
              </div>
            ))}
          </div>
          <div className="h-full w-5  p-3 flex flex-col items-center justify-center vertical-text">
            {hoveredTool
              ? hoveredTool.name
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
