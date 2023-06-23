import ImageDiv from "../components/AboutImage";

function AboutMe() {
  return (
    <>
      <div className="h-[30rem] w-[70rem] mt-28 flex flex-col">
        <h1 className="font-bold text-4xl p-3 text-orange-600">About Me</h1>
        <div className="flex h-full">
          <div className="h-full w-[40%] flex items-center justify-center">
            <div className="h-[360px] w-[312.89px] flex items-center justify-center absolute">
              <ImageDiv />
            </div>
          </div>
          <div className="h-full w-[100%] flex flex-col gap-4  p-2 text-justify font-mono ml-5 ">
            <p>
              Hello! I'm{" "}
              <span className="font-bold text-zinc-900 bg-orange-600 px-1 cursor-default">
                Anthony Alabado
              </span>
              , a dedicated Frontend Web Developer with a{" "}
              <span className="border-b border-orange-600 text-white cursor-default">
                strong passion
              </span>{" "}
              for crafting exceptional digital experiences. I graduated with a
              Bachelor's degree in Information Technology and my interest in web
              development was sparked during my high school years when I was
              first exposed to its captivating world. Even amidst various school
              activities, my curiosity led me to explore online courses and
              embark on self-guided projects. Since then, I have continuously
              fueled my enthusiasm for web development, eagerly{" "}
              <span className="border-b border-orange-600 text-white cursor-default">
                seeking new challenges and opportunities
              </span>{" "}
              to further grow my skills.
            </p>

            <p>
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
            <p>
              If you're seeking a
              <span className="font-bold text-zinc-900 bg-orange-600 px-0.5 mx-0.5 cursor-default">
                Frontend Web Developer
              </span>
              who is committed to delivering exceptional web experiences,
              leveraging ReactJS and Tailwind CSS expertise, I would be
              delighted to{" "}
              <span className="border-b border-orange-600 text-white cursor-default">
                connect and explore opportunities
              </span>{" "}
              to work together. Let's bring your vision to life and create
              remarkable digital experiences that leave a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
