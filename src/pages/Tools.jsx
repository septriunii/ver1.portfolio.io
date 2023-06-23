function GetInTouch() {
  return (
    <>
      <div className="h-[30rem] w-[70rem] mt-32 bg-zinc-900 p-2">
        <div className="h-full w-full bg-slate-600 flex flex-col items-center justify-center gap-2">
          <p>Tools that i use</p>
          <div className="flex gap-5">
            <div className="h-52 w-52 bg-slate-900 flex gap-5 flex-wrap">
              <p>Frontend Development:</p>
              <div className="h-10 w-10 bg-slate-800 ">HTML</div>
              <div className="h-10 w-10 bg-slate-800 ">CSS</div>
              <div className="h-10 w-10 bg-slate-800 ">Javascript</div>
              <div className="h-10 w-10 bg-slate-800 ">ReactJS</div>
              <div className="h-10 w-10 bg-slate-800 ">Tailwind CSS</div>
              <div className="h-10 w-10 bg-slate-800 ">Typescript</div>
              <div className="h-10 w-10 bg-slate-800 ">Sass</div>
            </div>
            <div className="h-52 w-52 bg-slate-900">
              <p>Development Tools and Version Control:</p>
              <div>VS Code</div>
              <div>Github</div>
            </div>
            <div className="h-52 w-52 bg-slate-900">
              <p>Graphics Design and Editing:</p>
              <div className="h-10 w-10 bg-slate-800 ">Figma </div>
              <div className="h-10 w-10 bg-slate-800 ">Adobe Photoshop</div>
            </div>
            <div className="h-52 w-52 bg-slate-900">
              <p>Programming Languages</p>
              <div className="h-10 w-10 bg-slate-800 ">Python </div>
              <div className="h-10 w-10 bg-slate-800 ">C++</div>
              <div className="h-10 w-10 bg-slate-800 ">C</div>
              <div className="h-10 w-10 bg-slate-800 ">Java</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetInTouch;
