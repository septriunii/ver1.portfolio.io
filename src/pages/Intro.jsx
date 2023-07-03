import "../styles/index.css";

function Intro() {
  return (
    <div className="flex flex-col-reverse sm:w-20  lg:h-[33rem] lg:w-[73rem] mt-2 bg-zinc-90  lg:flex lg:justify-center lg:shrink">
      <div className="p-3 h-full lg:w-[75%] bg-zinc-80 flex flex-col lg:p-3 lg:mr-10 lg:ml-5  shrink">
        <p className="text-lg font-light font_theme mb-3 text-orange-600 Hi italic">
          Hi! I am
        </p>
        <h1 className="text-4xl mb-2 font-bold lg:text-7xl lg:mb-4 z-40 shrink ">
          Anthony <span className="text-orange-600">Alabado</span>
        </h1>
        <p className="place-items-center text-lg mb-4 lg:mb-8 font-bold lg:text-2xl text-opacity-40 opacity-40 italic ">
          I am a passionate and dedicated web developer focusing in frontend
          development.
        </p>
        <p
          id=""
          className="text-xs mb-10 text-justify leading-5 lg:text-base font-light opacity-90 font_theme indent-4"
        >
          I have a keen eye for design and skilled in
          <span> graphics design</span>, applying fundamental design principles
          to create visually appealing and user-friendly interfaces. I am
          well-versed in <span>web development architecture</span> and have a
          thorough understanding of how to integrate frontend interfaces with{" "}
          <span>backend systems</span>.
        </p>
        <button
          className="w-56 text-orange-600 font-semibold place-self-center"
          onClick={() =>
            window.open("/test1.github.io/src/assets/resume.pdf", "_blank")
          }
        >
          Check out my resume
        </button>
      </div>

      <div className="h-[15rem] flex items-center justify-center   lg:flex lg:h-[85%] lg:w-[50%]   lg:mt-3">
        {/* container */}
        <div
          id="imgbg"
          className="h-[98%] w-[98%]  flex items-center justify-center bg-contain bg-center "
        >
          {/* image */}
          <div className="h-[90%] w-[90%]  flex items-center border-orange-600 border-2 z-40">
            {/* border  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
