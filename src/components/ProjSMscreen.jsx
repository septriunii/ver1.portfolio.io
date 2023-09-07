import { projects } from "../data/projects";

function ProjSMscreen({ project }) {
  return (
    <div className="p-2 h-auto w-full bg-zinc-700 bg-opacity-20 font-light text-xs flex flex-col gap-2">
      <div className="h-auto w-full bg-slate-950 py-2 flex flex-col justify-center relative">
        <img src={project.img} alt="" />
      </div>
      <div className="flex flex-col">
        <div className="text-orange-600 text-lg font-bold flex justify-between">
          <p>{project.name}</p>
          <div className="flex gap-2">
            <button className="h-5 justify-center items-center flex px-5 py-4 ">
              <a
                target="_blank"
                rel="noreferrer"
                href={project.viewsite}
                className="opacity-75 text-xs text-gray-400 hover:text-gray-400"
              >
                visit
              </a>
            </button>
            <button className="h-5 justify-center items-center flex px-5 py-4 ">
              <a
                target="_blank"
                rel="noreferrer"
                href={project.viewcode}
                className="opacity-75 text-xs text-gray-400 hover:text-gray-400"
              >
                code
              </a>
            </button>
          </div>
        </div>
        <p className="opacity-60 italic text-xs">{project.class}</p>
        <p className="bg-zinc-900 p-2 leading-5 mt-5">{project.description}</p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 opacity-40 md:text-xs lg:text-sm">
          {project.composition.map((tech, index) => (
            <p
              key={index}
              className="cursor-pointer hover:scale-105 duration-300 ease-in-out"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjSMscreen;
