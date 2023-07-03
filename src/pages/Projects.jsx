import Proj1 from "../components/Proj1";
import Proj2 from "../components/Proj2";
import Proj3 from "../components/Proj3";

function Projects() {
  return (
    <>
      <div id="proj" className="h-[30rem] w-[70rem] mt-52 flex flex-col">
        <h1 className="font-bold text-4xl py-3 text-orange-600 flex justify-center items-center mb-5 pl-5">
          <p className="w-64 mr-3 italic">My Projects</p>
          <div className="h-0.5 w-full bg-zinc-900"></div>
        </h1>

        <div className="flex h-full mt-10 mb-10">
          {/* image */}
          <Proj1 />

          <div className="h-[80%] w-[100%] flex flex-col gap-4  p-2 text-justify font-light ml-5 px-5 bg-opacity-20 mt-10 bg-zinc-700 rounded justify-between">
            <p className="font-bold text-3xl text-orange-600">DarkHaul</p>
            <div className="flex flex-col gap-5">
              {/* descip */}
              <div className="flex gap-5 opacity-40 text-sm">
                <p className=" ">Frontend</p>
                <p className=" ">ReactJS</p>
                <p className=" ">Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full mt-10 mb-10">
          <div className="h-[80%] w-[100%] flex flex-col gap-4 items-end  p-2 text-justify font-light mr-5 px-5 bg-opacity-20 mt-10 bg-zinc-700 rounded justify-between">
            <p className="font-bold text-3xl text-orange-600">Social Media</p>
            <div className="flex flex-col gap-5">
              {/* descip */}
              <div className="flex gap-5 opacity-40 text-sm">
                <p className=" ">Fullstack</p>
                <p className=" ">MongoDB</p>
                <p className=" ">ExpressJS</p>
                <p className=" ">ReactJS</p>
              </div>
            </div>
          </div>
          {/* image */}
          <Proj2 />
        </div>

        <div className="flex h-full mt-10 mb-10">
          {/* image */}
          <Proj3 />

          <div className="h-[80%] w-[100%] flex flex-col gap-4  p-2 text-justify font-light ml-5 px-5 bg-opacity-20 mt-10 bg-zinc-700 rounded justify-between">
            <p className="font-bold text-3xl text-orange-600">StockExchange</p>
            <div className="flex flex-col gap-5">
              {/* descip */}
              <div className="flex gap-5 opacity-40 text-sm">
                <p className=" ">Frontend</p>
                <p className=" ">ReactJS</p>
                <p className=" ">Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
