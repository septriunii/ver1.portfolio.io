function Experience() {
  return (
    <>
      <div id="exp" className="h-auto w-[70rem] mt-[68rem] flex flex-col ">
        <h1 className="font-bold text-4xl py-3 text-orange-600 flex justify-center items-center pl-5 mb-12">
          <p className="w-60 italic mr-7">Experience</p>
          <div className="h-0.5 w-full bg-zinc-900"></div>
        </h1>

        <div className="flex flex-col justify-center items-center">
          <div className="flex h-full">
            <div className="h-full w-[100%] flex flex-col gap-5  p-5 text-justify font-light ml-3 bg-zinc-700 bg-opacity-20 rounded-md">
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-3xl p-3 text-orange-600 bg-zinc-900 flex w-full gap-2">
                  IT Support Technician
                  <span className="text-white">&middot; </span>Internship
                </h1>
                <p className="italic ml-3">
                  Zamboanga Sibugay 2nd District House of The Representative
                  Office
                </p>
                <p className="ml-3 text-sm text-orange-600">
                  January 2023 - April 2023
                </p>
              </div>

              <div className="flex flex-col gap-5 mt-5 ml-3">
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

          <div className="flex h-full mt-10">
            <div className="h-full w-[100%] flex flex-col gap-5  p-5 text-justify font-light ml-3 bg-zinc-700 bg-opacity-20 rounded-md">
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-3xl p-3 text-orange-600 bg-zinc-900 flex w-full gap-2">
                  Data Entry Clerk
                  <span className="text-white">&middot; </span>Immersion
                </h1>
                <p className="italic ml-3">
                  R.T.Lim Municipal Office - Human Ressources Department
                </p>
                <p className="ml-3 text-sm text-orange-600">September 2018</p>
              </div>
              <div className="flex flex-col gap-5 mt-5 ml-3">
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
