import ImageDiv from "../components/AboutImage";

function AboutMe() {
  return (
    <>
      <div
        id="aboutme"
        className="lg:h-[30rem] lg:w-[70rem] lg:pl-10 lg:mt-16 lg:flex lg:flex-col p-3"
      >
        <h1 className="font-bold text-2xl lg:text-4xl lg:py-3 text-orange-600 flex justify-center items-center">
          <p className="w-44 lg:w-56 mr-3 italic">About Me</p>
          <div className="h-0.5 w-full bg-zinc-900"></div>
        </h1>

        {/* image  */}
        <div className="flex flex-col-reverse h-full items-center justify-center">
          <div className="h-56 w-full p-1 lg:h-full lg:w-[40%] flex items-center justify-center lg:pl-16">
            <div className="h-48 w-48 lg:h-[360px] lg:w-[312.89px] flex items-center justify-center absolute">
              <ImageDiv />
            </div>
          </div>
          <div className="h-full w-[100%] gap-3 flex flex-col text-xs lg:gap-4  lg:py-2 lg:px-14 lg:text-justify justify-center lg:ml-5  font-light opacity-90 ">
            <p className="text-gap indent-4 text-justify">
              Hello! I'm{" "}
              <span className="border-b border-orange-600 text-white cursor-default">
                Anthony Alabado
              </span>
              , a dedicated{" "}
              <span className="font-bold text-zinc-900 bg-orange-600 px-1 cursor-default">
                Frontend Web Developer
              </span>{" "}
              with a strong passion for crafting exceptional digital
              experiences. I graduated with a Bachelor's degree in Information
              Technology and my interest in web development was sparked during
              my high school years when I was first exposed to its captivating
              world. Even amidst various school activities, my curiosity led me
              to explore online courses and embark on self-guided projects.
              Since then, I have continuously fueled my enthusiasm for web
              development, eagerly{" "}
              <span className="border-b border-orange-600 text-white cursor-default">
                seeking new challenges and opportunities
              </span>{" "}
              to further grow my skills.
            </p>

            <p className="text-gap2 text-justify indent-4">
              <span className="font-bold text-zinc-900 bg-orange-600 px-0.5 mr-0.5 cursor-default">
                Design
              </span>
              is my core. With an{" "}
              <span className="border-b border-orange-600 text-white cursor-default">
                eye for aesthetics
              </span>{" "}
              and a focus on user-centered principles, I believe that a
              well-designed interface captures attention and enhances usability.
              From concept to final product, I create visually appealing
              interfaces that prioritize user satisfaction. By blending
              creativity with intuitive experiences, I design interfaces that
              delight and make a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
