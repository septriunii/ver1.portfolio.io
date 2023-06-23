import Proj1 from "../components/Proj1";
import Proj2 from "../components/Proj2";
import Proj3 from "../components/Proj3";

function Projects() {
  return (
    <>
      <div className="h-[30rem] w-[70rem] mt-52 flex flex-col mb-20 ">
        <h1 className="font-bold text-3xl p-3 text-orange-600">My Projects</h1>

        <div className="flex h-full mt-10 mb-24">
          {/* image */}
          <Proj1 />

          <div className="h-[80%] w-[100%] flex flex-col gap-4  p-2 text-justify font-mono ml-5 px-5 bg-opacity-20 mt-10 bg-zinc-700 rounded justify-between">
            <p className="font-bold text-3xl text-orange-600">DarkHaul</p>
            <div className="flex flex-col gap-5">
              {/* descip */}
              <div className="flex gap-5">
                <p className=" p-1 border-orange-600 border-2 ">Frontend</p>
                <p className=" p-1 border-orange-600 border-2">ReactJS</p>
                <p className=" p-1 border-orange-600 border-2">Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full mt-10 mb-24">
          <div className="h-[80%] w-[100%] flex flex-col gap-4 items-end  p-2 text-justify font-mono mr-5 px-5 bg-opacity-20 mt-10 bg-zinc-700 rounded justify-between">
            <p className="font-bold text-3xl text-orange-600">Social Media</p>
            <div className="flex flex-col gap-5">
              {/* descip */}
              <div className="flex gap-5">
                <p className=" p-1 border-orange-600 border-2 ">Fullstack</p>
                <p className=" p-1 border-orange-600 border-2">MongoDB</p>
                <p className=" p-1 border-orange-600 border-2">ExpressJS</p>
                <p className=" p-1 border-orange-600 border-2">ReactJS</p>
              </div>
            </div>
          </div>
          {/* image */}
          <Proj2 />
        </div>

        <div className="flex h-full mt-10 mb-24">
          {/* image */}
          <Proj3 />

          <div className="h-[80%] w-[100%] flex flex-col gap-4  p-2 text-justify font-mono ml-5 px-5 bg-opacity-20 mt-10 bg-zinc-700 rounded justify-between">
            <p className="font-bold text-3xl text-orange-600">StockExchange</p>
            <div className="flex flex-col gap-5">
              {/* descip */}
              <div className="flex gap-5">
                <p className=" p-1 border-orange-600 border-2 ">Frontend</p>
                <p className=" p-1 border-orange-600 border-2">ReactJS</p>
                <p className=" p-1 border-orange-600 border-2">Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
