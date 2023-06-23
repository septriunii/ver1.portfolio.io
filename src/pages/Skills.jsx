function Skills() {
  return (
    <>
      <div className="h-[30rem] w-[70rem] mt-36 flex flex-col">
        <h1 className="font-bold text-3xl p-3 mb-5 text-orange-600">
          /Skills/
        </h1>
        <div className="flex h-full">
          <div className="h-full w-[100%] flex flex-col gap-7  p-2 text-justify font-mono mr-5">
            <ul className="flex flex-col gap-3 list-disc ml-5">
              <li className="text-orange-600">
                <span className="text-white">
                  Proficient in frontend web technologies such as
                  <span> HTML</span>, <span>CSS</span>, and
                  <span> JavaScript</span>. Experienced in modern frontend
                  frameworks and libraries including <span>ReactJS</span> and{" "}
                  <span>TailwindCSS</span>. Familiar with additional tools and
                  languages like <span>TypeScript</span> and <span>Sass</span>{" "}
                  for enhanced development capabilities.
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
          <div className="h-full w-[45%] flex items-center">
            {/* container */}
            <div
              id="imgbg"
              className="w-full h-[75%] flex items-center justify-center bg-slate-950"
            >
              {/* image */}
              <div className="h-full w-full relative p-3">
                {/* border */}
                <div className="w-full h-full border-orange-600 border-2 absolut"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
