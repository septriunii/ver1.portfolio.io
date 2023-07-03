function Skills() {
  return (
    <>
      <div
        id="skills"
        className="lg:h-[30rem] mt-28 lg:w-[70rem] lg:mt-32 flex flex-col lg:pl-10 "
      >
        <h1 className="font-bold text-2xl mb-8 lg:text-4xl lg:py-3 text-orange-600 flex justify-center items-center">
          <p className="w-16 italic mr-5">Skills</p>
          <div className="h-0.5 w-full bg-zinc-900"></div>
        </h1>
        <div className="flex h-full">
          <div className="text-xs px-3 h-full w-[100%] flex flex-col gap-7 text-justify font-light opacity-90 lg:mr-5 lg:px-5 lg:p-5">
            <ul className="flex flex-col gap-3 list-disc ml-5">
              <li className="text-orange-600">
                <span className="text-white">
                  Proficient in frontend web technologies such as
                  <span> HTML</span>, <span>CSS</span>, and
                  <span> JavaScript</span>.
                </span>
              </li>

              <li className="text-orange-600">
                <span className="text-white">
                  Experienced in modern frontend frameworks and libraries
                  including <span>ReactJS</span> and <span>TailwindCSS</span>.
                  Familiar with additional tools and languages like{" "}
                  <span>TypeScript</span> and <span>Sass</span> for enhanced
                  development capabilities.
                </span>
              </li>

              <li className="text-orange-600">
                <span className="text-white">
                  Skilled in <span>graphic design</span>, applying fundamental
                  design principles to create visually appealing web
                  experiences, and adept at building <span>responsive</span> and
                  <span> interactive</span> user interfaces.
                </span>
              </li>

              <li className="text-orange-600">
                <span className="text-white">
                  Knowledgeable in <span>backend development</span>, including
                  database management, SQL, and NoSQL.
                </span>
              </li>
              <li className="text-orange-600">
                <span className="text-white">
                  Experienced in utilizing version control systems like{" "}
                  <span>Git</span> and <span>GitHub</span> for efficient
                  collaboration and code management.
                </span>
              </li>
              <li className="text-orange-600">
                <span className="text-white">
                  Proficient in programming languages such as <span>C++</span>,{" "}
                  <span>Python</span>, and
                  <span>JavaScript</span>, enabling versatile problem-solving.
                </span>
              </li>
              <li className="text-orange-600">
                <span className="text-white">
                  Experienced in utilizing prompts for <span>chatbots</span> and
                  other <span>AI tools</span>, including their applications in
                  web development and other areas of software development.
                </span>
              </li>
            </ul>
            <p>
              With these skills, I am well-equipped to handle various aspects of
              web development, from designing visually captivating interfaces to
              implementing robust backend functionality. I am committed to{" "}
              <span className="border-b border-orange-600 text-white cursor-default">
                staying updated with the latest industry trends
              </span>{" "}
              and{" "}
              <span className="border-b border-orange-600 text-white cursor-default">
                continuously expanding my skill
              </span>{" "}
              set to deliver exceptional web solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
