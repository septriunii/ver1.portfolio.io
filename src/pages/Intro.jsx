import "../styles/index.css";

function Intro() {
  return (
    <>
      <div className="h-[30rem] w-[70rem] mt-32 bg-zinc-90 flex shrink">
        <div className="h-full w-[60%] bg-zinc-80 flex flex-col p-3">
          <p className="text-lg font-mono mb-3 text-orange-600">Hi! I am</p>
          <h1 className="font-bold text-7xl mb-4 z-40">
            Anthony <span className="text-orange-600">Alabado</span>
          </h1>
          <p className="mb-8 font-bold text-xl text-opacity-40">
            I am a passionate and dedicated web developer focusing in frontend
            development using <span>ReactJS</span> and <span>Tailwind CSS</span>
            .
          </p>
          <p id="" className="mb-10 text-justify text-base font-mono">
            I have a keen eye for design and am skilled in
            <span> graphics design</span>, applying fundamental design
            principles to create visually appealing and user-friendly
            interfaces. I am well-versed in{" "}
            <span>web development architecture</span> and have a thorough
            understanding of how to integrate frontend interfaces with{" "}
            <span>backend systems</span>.
          </p>
          <button className="w-56 text-orange-600">Check out my resume!</button>
        </div>
        <div className="h-full w-[40%] flex items-center justify-center">
          {/* container */}
          <div
            id="imgbg"
            className="h-[98%] w-[98%] bg-blue-600 flex items-center justify-center bg-contain bg-center"
          >
            {/* image */}
            <div className="h-[90%] w-[90%]  flex items-center border-orange-600 border-2 z-40">
              {/* border  */}
            </div>
          </div>
          <div id="triangle1" className="absolute right-28"></div>
          <div
            id="triangle2"
            className="absolute right-28 opacity-30 bottom-10"
          ></div>
          <div id="triangle3" className="absolute right-28 opacity-30 "></div>
          <div id="triangle4" className="absolute right-28 opacity-30 "></div>
        </div>
      </div>
    </>
  );
}

export default Intro;
