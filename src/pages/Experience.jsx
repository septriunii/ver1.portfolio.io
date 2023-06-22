function Experience() {
  return (
    <>
      <div className="h-[30rem] w-[70rem] mt-28 flex flex-col">
        <h1 className="font-bold text-3xl p-3 text-orange-600">Experience</h1>
        <div className="flex h-full">
          <div className="h-full w-[100%] flex flex-col gap-4  p-2 text-justify font-mono ml-5 ">
            <h1>Lead Engineer @ Upstatement</h1>
            <p className="bg-slate-900 p-3 rounded-md">May 2018 - Present</p>
            <div className="flex flex-col gap-5">
              <p>
                Deliver high-quality, robust production code for a diverse array
                of projects for clients including Harvard Business School,
                Everytown for Gun Safety, Pratt Institute, Koala Health,
                Vanderbilt University, The 19th News, and more
              </p>
              <p>
                Work alongside creative directors to lead the research,
                development, and architecture of technical solutions to fulfill
                business requirements
              </p>
              <p>
                Collaborate with designers, project managers, and other
                engineers to transform creative concepts into production
                realities for clients and stakeholders
              </p>
              <p>
                Provide leadership within engineering department through close
                collaboration, knowledge shares, and mentorship
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
