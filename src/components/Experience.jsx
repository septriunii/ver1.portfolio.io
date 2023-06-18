function Experience() {
  return (
    <>
      <div className="h-[30rem] w-[70rem] mt-32 bg-zinc-900 flex">
        <div className="h-full w-[30rem] bg-red-600 flex flex-col gap-7 items-center"></div>
        <div className="h-full w-[40rem] bg-zinc-800 flex flex-col gap-7 justify-center">
          <h1 className="font-bold text-2xl">Experience</h1>
          <h2 className="font-bold text-lg">Lead Engineer @ Upstatement</h2>
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
              Collaborate with designers, project managers, and other engineers
              to transform creative concepts into production realities for
              clients and stakeholders
            </p>
            <p>
              Provide leadership within engineering department through close
              collaboration, knowledge shares, and mentorship
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
