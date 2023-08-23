import { useEffect, useRef } from "react";

function Experience() {
  const fadeRefs = [useRef(null), useRef(null)];
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
        observer.disconnect(); // Disconnect each observer
      });
    };
  }, []);

  return (
    <>
      <div
        id="exp"
        className="mt-10 w-full lg:h-auto flex flex-col lg:mt-28 z-40"
      >
        <h1 className="font-bold text-2xl mb-8 ml-5 lg:text-4xl lg:py-3 text-orange-600 flex justify-center items-center">
          <p className="w-28 italic mr-5 lg:w-52">Experiences</p>
          <div className="h-0.5 w-full bg-zinc-900"></div>
        </h1>

        <div className="flex flex-col md:grid md:grid-cols-2 justify-center items-center gap-5">
          <div className="flex h-full w-full ">
            <div
              ref={fadeRefs[0]}
              className="fade-in h-full w-full flex flex-col gap-3 p-3 lg:gap-5  lg:p-5 text-justify font-light ml-3 bg-zinc-700 bg-opacity-20 rounded-md "
            >
              <div className="flex flex-col gap-2">
                <h1 className="flex justify-center text-lg  font-bold p-2 md:text-xl lg:text-2xl lg:p-3 text-orange-600 bg-zinc-900 w-full gap-2">
                  IT Support Intern
                </h1>
                <p className="text-xs md:text-sm italic ml-3">
                  Zamboanga Sibugay 2nd District House of The Representative
                  Office
                </p>
                <p className="text-xs md:text-sm ml-3 lg:text-sm text-orange-600">
                  January 2023 - April 2023
                </p>
              </div>

              <div className="text-xs md:text-sm flex flex-col gap-5 mt-5 lg:ml-3">
                <ul className="flex flex-col gap-5 list-disc ml-5">
                  <li className="text-orange-600">
                    <span className="text-white">
                      Assisted staff with{" "}
                      <span className="border-b border-orange-600 text-white cursor-default">
                        troubleshooting technical issues
                      </span>
                      , both hardware and software, providing prompt
                      resolutions.{" "}
                    </span>
                  </li>

                  <li className="text-orange-600">
                    <span className="text-white">
                      Supported the{" "}
                      <span className="border-b border-orange-600 text-white cursor-default">
                        setup and configuration
                      </span>{" "}
                      of computer systems, printers, and other peripherals.
                    </span>
                  </li>

                  <li className="text-orange-600">
                    <span className="text-white">
                      Provided{" "}
                      <span className="border-b border-orange-600 text-white cursor-default">
                        guidance to staff members
                      </span>{" "}
                      on the effective use of technology resources.
                    </span>
                  </li>
                  <li className="text-orange-600">
                    <span className="text-white">
                      Assisted in various{" "}
                      <span className="border-b border-orange-600 text-white cursor-default">
                        social work-related tasks
                      </span>
                      , contributing to the support and development of
                      community.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div ref={fadeRefs[1]} className="flex h-full w-full fade-in">
            <div className="h-full w-[100%] flex flex-col gap-3 p-3 lg:gap-5  lg:p-5 text-justify font-light bg-zinc-700 bg-opacity-20 rounded-md ">
              <div className="flex flex-col gap-2">
                <h1 className="justify-center text-lg font-bold p-2 md:text-xl lg:text-2xl lg:p-3 text-orange-600 bg-zinc-900 flex w-full gap-2">
                  Data Entry Clerk Intern
                </h1>

                <p className="text-xs md:text-sm italic ml-3">
                  R.T.Lim Municipal Office - Human Ressources Department
                </p>

                <p className="text-xs md:text-sm ml-3 lg:text-sm text-orange-600">
                  September 2018
                </p>
              </div>

              <div className="text-xs md:text-sm flex flex-col gap-5 mt-5 lg:ml-3">
                <ul className="flex flex-col gap-5 list-disc ml-5">
                  <li className="text-orange-600">
                    <span className="text-white">
                      Assisted in{" "}
                      <span className="border-b border-orange-600 text-white cursor-default">
                        encoding and organizing data
                      </span>{" "}
                      in the office’s database
                    </span>
                  </li>

                  <li className="text-orange-600">
                    <span className="text-white">
                      Provided{" "}
                      <span className="border-b border-orange-600 text-white cursor-default">
                        IT support and troubleshooting
                      </span>{" "}
                      for office staff.
                    </span>
                  </li>

                  <li className="text-orange-600">
                    <span className="text-white">
                      Provided assistance to the office staff in{" "}
                      <span className="border-b border-orange-600 text-white cursor-default">
                        HR-related tasks
                      </span>
                      , supporting their efforts in personnel management.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
