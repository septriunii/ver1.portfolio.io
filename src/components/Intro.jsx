import "../index.css";
import intro from "../assets/intro1.jpg";

function Intro() {
  return (
    <>
      <div className="h-[30rem] w-[70rem] mt-32 bg-zinc-90 flex">
        <div className="h-full w-[60%] bg-zinc-80 flex flex-col p-3">
          <p className="text-lg font-mono mb-3 text-orange-500">Hi! I am</p>
          <h1 className="font-bold text-7xl mb-4">
            Anthony <span className="text-orange-500">Alabado</span>
          </h1>
          <p className="mb-8 font-bold text-xl opacity-60">
            I am a passionate and dedicated web developer focusing in frontend
            development using <span className="text-orange-500">ReactJS</span>{" "}
            and <span className="text-orange-500">Tailwind CSS.</span>
          </p>
          <p id="" className="mb-10 text-justify text-base font-mono">
            I have a keen eye for design and am skilled in
            <span className="text-orange-500"> graphics design</span>, applying
            fundamental design principles to create visually appealing and
            user-friendly interfaces. I am well-versed in{" "}
            <span className="text-orange-500">
              web development architecture
            </span>{" "}
            and have a thorough understanding of how to integrate frontend
            interfaces with{" "}
            <span className="text-orange-500">backend systems</span>.
          </p>
          <button className="w-56 text-orange-500">Check out my resume!</button>
        </div>
        <div className="h-full w-[40%] bg-zinc-900 s">
          <div id="triangle1" className="absolute right-28 opacity-20 "></div>
          <div
            id="triangle2"
            className="absolute right-28 opacity-30 bottom-10"
          ></div>
          <div id="triangle3" className="absolute right-28 opacity-30 "></div>
          <div id="triangle4" className="absolute right-28 opacity-30 "></div>
          <div className="h-[100%] flex items-center">
            <img src={intro} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
