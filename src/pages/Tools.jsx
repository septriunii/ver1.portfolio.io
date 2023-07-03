function GetInTouch() {
  return (
    <>
      <div className="h-[30rem] w-[70rem] mt-32 p-2">
        <div className="h-full w-full  flex flex-col items-center justify-center gap-2 relative">
          <h1 className="font-bold text-4xl py-3 text-orange-600 flex justify-center items-center pl-5 mb-12  w-full">
            <p className="w-96 italic ">Tools that I use</p>
            <div className="h-0.5 w-full bg-zinc-900"></div>
          </h1>
          <div className="flex gap-10 font-light">
            <div className="h-80 w-56  flex gap-3 flex-col justify-center bg-zinc-700 bg-opacity-20 p-2">
              <p className="bg-zinc-900 p-2 flex justify-center">
                Frontend Development
              </p>

              <div className="h-full w-full grid grid-cols-3 place-items-center  items-center justify-center gap-5 p-3">
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/html.svg')] bg-cover bg-center "></div>
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/css.svg')] bg-cover bg-center "></div>
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/javascript.svg')] bg-cover bg-center "></div>
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/reactJS.svg')] bg-cover bg-center "></div>
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/tailwind.svg')] bg-cover bg-center "></div>
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/typescript.svg')] bg-cover bg-center "></div>
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/sass.svg')] bg-cover bg-center "></div>
              </div>
            </div>

            <div className="h-80 w-56  flex gap-3 flex-col justify-center bg-zinc-700 bg-opacity-20 p-2">
              <p className="bg-zinc-900 p-2 flex justify-center">
                Development Tools{" "}
              </p>

              <div className="h-full w-full grid grid-cols-3 place-items-center  items-center justify-center gap-5 p-3">
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/vsc.svg')] bg-cover bg-center "></div>
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/github.svg')] bg-cover bg-center "></div>
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/edge.svg')] bg-cover bg-center "></div>
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/powershell.svg')] bg-cover bg-center "></div>
              </div>
            </div>

            <div className="h-80 w-56  flex gap-3 flex-col justify-center bg-zinc-700 bg-opacity-20 p-2">
              <p className="bg-zinc-900 p-2 flex justify-center">
                Graphics Design
              </p>

              <div className="h-full w-full grid grid-cols-3 place-items-center  items-center justify-center gap-5 p-3">
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/photoshop.svg')] bg-cover bg-center "></div>
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/figma.svg')] bg-cover bg-center "></div>
              </div>
            </div>

            <div className="h-80 w-56  flex gap-3 flex-col justify-center bg-zinc-700 bg-opacity-20 p-2">
              <p className="bg-zinc-900 p-2 flex justify-center">
                Programming Languages
              </p>

              <div className="h-full w-full grid grid-cols-3 place-items-center  items-center justify-center gap-5 p-3">
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/python.svg')] bg-cover bg-center "></div>
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/cpp.svg')] bg-cover bg-center "></div>
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/c.svg')] bg-cover bg-center "></div>
                <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/java.svg')] bg-cover bg-center "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetInTouch;
