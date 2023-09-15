import Tools from "../components/Tools";
import { useEffect, useRef } from "react";

function Skills() {
  const fadeRefs = Array.from({ length: 9 }, () => useRef(null));
  const observers = useRef([]);

  useEffect(() => {
    observers.current = fadeRefs.map((ref) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("active");
        }
      });

      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.current.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, []);

  return (
    <div id="skills" className="lg:h-auto flex flex-col lg:pl-10 lg:mt-28 z-40">
      <h1 className="font-bold text-2xl mb-8 md:text-3xl lg:text-4xl lg:py-3 text-orange-600 flex justify-center items-center">
        <p className="w-16 italic mr-5 lg:w-20 lg:mr-5">Skills</p>
        <div className="h-0.5 w-full bg-zinc-900"></div>
      </h1>
      <div className="flex h-auto -mt-3">
        <div className="text-xs px-3 h-full md:w-full flex flex-col gap-7 text-justify font-light opacity-90 md:text-sm lg:mr-5 lg:px-5 lg:p-5">
          <div className="flex flex-col md:flex-row w-full gap-3">
            <ul className="flex flex-col gap-3 list-square ml-5 lg:gap-5 ">
              <li
                ref={fadeRefs[0]}
                className="text-orange-600 right-fade-in ease-in-out duration-100 hover:translate-x-2  "
              >
                <span className="text-white">
                  Proficient in frontend web technologies such as
                  <span className="font-semibold"> HTML</span>,{" "}
                  <span className="font-semibold">CSS</span>, and
                  <span className="font-semibold"> JavaScript</span>.
                </span>
              </li>

              <li
                ref={fadeRefs[1]}
                className="text-orange-600 right-fade-in ease-in-out duration-100 hover:translate-x-2 "
              >
                <span className="text-white">
                  Experienced in modern frontend frameworks and libraries
                  including <span className="font-semibold">ReactJS</span> and{" "}
                  <span className="font-semibold">TailwindCSS</span>. Familiar
                  with additional tools and languages like
                  <span className="font-semibold"> TypeScript</span> and{" "}
                  <span className="font-semibold">Sass</span> for enhanced
                  development capabilities.
                </span>
              </li>

              <li
                ref={fadeRefs[2]}
                className="text-orange-600 right-fade-in ease-in-out duration-100 hover:translate-x-2 "
              >
                <span className="text-white">
                  Skilled in{" "}
                  <span className="font-semibold">graphic design</span>,
                  applying fundamental design principles to create visually
                  appealing web experiences, and adept at building{" "}
                  <span className="font-semibold">responsive</span> and
                  <span className="font-semibold"> interactive</span> user
                  interfaces.
                </span>
              </li>

              <li
                ref={fadeRefs[3]}
                className="text-orange-600 right-fade-in ease-in-out duration-100 hover:translate-x-2 "
              >
                <span className="text-white">
                  Knowledgeable in{" "}
                  <span className="font-semibold">backend development</span>,
                  including database management, SQL, and NoSQL.
                </span>
              </li>
              <li
                ref={fadeRefs[4]}
                className="text-orange-600 right-fade-in ease-in-out duration-100 hover:translate-x-2 "
              >
                <span className="text-white">
                  Experienced in utilizing version control systems like
                  <span className="font-semibold"> Git</span> and{" "}
                  <span className="font-semibold">GitHub</span> for efficient
                  collaboration and code management.
                </span>
              </li>
              <li
                ref={fadeRefs[5]}
                className="text-orange-600 right-fade-in ease-in-out duration-100 hover:translate-x-2 "
              >
                <span className="text-white">
                  Proficient in programming languages such as{" "}
                  <span className="font-semibold">C++</span>,
                  <span className="font-semibold"> Python</span>, and
                  <span className="font-semibold"> Java</span>, enabling
                  versatile problem-solving.
                </span>
              </li>
              <li
                ref={fadeRefs[6]}
                className="text-orange-600 right-fade-in ease-in-out duration-100 hover:translate-x-2 "
              >
                <span className="text-white">
                  Experienced in utilizing prompts for{" "}
                  <span className="font-semibold">chatbots</span> and other{" "}
                  <span className="font-semibold">AI tools</span>, including
                  their applications in web development and other areas of
                  software development.
                </span>
              </li>
            </ul>
            <div
              ref={fadeRefs[8]}
              className="md:w-[110%] lg:w-[60%] h-auto bg-opacity-20 bg-zinc-700 fade-in ml-5 pb-7 mt-5 md:mt-0 "
            >
              <Tools />
            </div>
          </div>
          <p ref={fadeRefs[7]} className="leading-7 right-fade-in">
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
  );
}

export default Skills;
