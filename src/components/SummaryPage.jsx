import React from "react";
import { Body, Footer } from ".";
import { tools } from "../data/tools";
import { useState } from "react";
import { projects } from "../data/projects";

function SummaryPage() {
  const [hoveredTool, setHoveredTool] = useState(null);

  return (
    <div>
      <Body>
        <div className="h-[33rem] w-full">
          <div className="bg-zinc-700 bg-opacity-20 h-full w-full flex p-3">
            <div className="w-[90%] h-full  flex flex-col border-r-[2px] pr-3 border-zinc-900 ">
              <div className="font-thin w-full h-full flex flex-col">
                <p className="text-3xl font-bold bg-zinc-900 p-2 w-[17rem] flex justify-center">
                  Anthony Alabado
                </p>
                <p className="mb-3 font-bold text-lg mt-1">
                  A frontend web developer focusing in <span> ReactJS</span> and{" "}
                  <span>Tailwind CSS</span>
                </p>
                <ul className="text-sm gap-2 flex flex-col list-disc ml-5 text-orange-600">
                  <li>
                    <span className="text-white">
                      College graduate BSIT, discovered interest in web
                      development during high school.
                    </span>
                  </li>
                  <li>
                    <span className="text-white">
                      Engaged in online courses and personal projects to enhance
                      skills.
                    </span>
                  </li>
                  <li>
                    <span className="text-white">
                      Prioritizes aesthetics and clean code for well-designed
                      interfaces.
                    </span>
                  </li>
                  <li>
                    <span className="text-white">
                      Committed to organized, readable, and maintainable
                      codebase.
                    </span>
                  </li>
                  <li>
                    <span className="text-white">
                      Devoted to staying updated on industry trends and
                      continuously improving my skill{" "}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="w-full h-full flex flex-col  mt-5">
                <div className="text-2xl font-bold text-orange-600 flex items-center">
                  <p>Skills</p>
                  <div className="h-0.5 ml-3 bg-zinc-900 w-full"></div>
                </div>
                <div className="h-full">
                  <div className="flex flex-col ">
                    <div className=" w-full h-7 justify-center flex font-bold text-white">
                      {" "}
                      {hoveredTool
                        ? hoveredTool.name
                            .split("")
                            .map((char, index) => (
                              <span key={index}>{char}</span>
                            ))
                        : ""}
                    </div>
                    <div className="grid grid-cols-5 gap-3">
                      {tools.map((tool) => (
                        <div
                          key={tool.id}
                          className="h-10 w-full flex justify-center   duration-200 ease-in-out hover:scale-105"
                          onMouseEnter={() => setHoveredTool(tool)}
                          onMouseLeave={() => setHoveredTool(null)}
                        >
                          <img src={tool.img} alt={tool.name} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-full flex flex-col pl-3">
              <div className=" w-full h-full flex">
                <div className="w-full h-full p-3">
                  <div className="bg-zinc-900 w-full h-full bg-opacity-50 flex flex-col">
                    <p className="text-xl p-2 font-bold">Experiences</p>
                    <div className="h-full w-full  p-2">
                      <p className="font-bold text-orange-600 text-lg">
                        IT Support Intern
                      </p>
                      <p className="text-sm italic">
                        Zamboanga Sibugay 2nd District House of The
                        Representative Office
                      </p>
                      <p className="text-xs mt-2"> January 2023 - April 2023</p>
                    </div>

                    <div className="h-full w-full  p-2">
                      <p className="font-bold text-orange-600 text-lg">
                        Data Entry Clerk Intern
                      </p>
                      <p className="text-sm italic">
                        R.T.Lim Municipal Office - Human Resources
                      </p>
                      <p className="text-xs mt-2"> September 2018</p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full flex flex-col">
                  <div className="text-2xl font-bold text-orange-600 flex items-center">
                    <p>Projects</p>
                    <div className="h-0.5 ml-3 bg-zinc-900 w-full"></div>
                  </div>
                  <div className=" h-full w-full mt-5 gap-3 flex flex-col ">
                    <div className="bg-zinc-900 p-3 rounded-md bg-opacity-70">
                      <p className="font-bold text-lg">{projects[0].name}</p>
                      <div className="flex gap-3 justify-between items-center">
                        <p className=" text-sm">{projects[0].class}</p>
                        <button className="px-5 py-2 text-sm ">Visit</button>
                      </div>
                    </div>

                    <div className="bg-zinc-900 p-3 bg-opacity-70 rounded-md">
                      <p className="font-bold text-lg">{projects[1].name}</p>
                      <div className="flex gap-3 justify-between items-center">
                        <p className="text-sm">{projects[1].class}</p>
                        <button className="px-5 py-2 text-sm  ">Visit</button>
                      </div>
                    </div>

                    <div className="bg-zinc-900 p-3 bg-opacity-70 rounded-md">
                      <p className="font-bold text-lg">{projects[2].name}</p>
                      <div className="flex gap-3 justify-between items-center">
                        <p className="text-sm">{projects[2].class}</p>
                        <button className="px-5 py-2 text-sm  ">Visit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full h-[40%] flex flex-col">
                <div className=" text-2xl font-bold text-orange-600 flex items-center">
                  <p className="flex w-44">Contact Me</p>
                  <div className="h-0.5 bg-zinc-900 w-full"></div>
                </div>
                <div className="flex w-full h-full">
                  <div className="text-sm h-full w-full items-center flex">
                    {" "}
                    If you're seeking a Frontend Web Developer who is committed
                    to delivering exceptional web experiences, leveraging
                    ReactJS and Tailwind CSS expertise, I would be delighted to
                    connect and explore opportunities to work together. Let's
                    bring your vision to life and create remarkable digital
                    experiences that leave a lasting impact.
                  </div>
                  <div className="h-full w-[35%] gap-2 justify-center  flex flex-col px-3">
                    <button>Resume</button>
                    <button>Message ME</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Body>
    </div>
  );
}

export default SummaryPage;
