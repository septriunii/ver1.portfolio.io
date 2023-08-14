import { useEffect, useRef } from "react";

function Tools() {
  const fadeRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observers = fadeRefs.map((ref) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("active");
        }
      });
    });

    observers.forEach((observer, index) => {
      observer.observe(fadeRefs[index].current);
    });

    return () => {
      observers.forEach((observer, index) => {
        observer.unobserve(fadeRefs[index].current);
      });
    };
  }, []);

  return (
    <>
      <div className=" w-full lg:h-auto lg:w-full h-auto flex flex-col justify-center">
        <div className="lg:h-auto lg:w-full p-2 flex flex-col items-center">
          <p ref={fadeRefs[3]} className="font-bold text-lg fade-in">
            Tools that I use
          </p>
          <div className="flex flex-row justify-center font-ligh w-full mt-5 gap-3">
            <div
              ref={fadeRefs[0]}
              className="p-2 flex lg:h-56 w-full lg:w-48 lg:gap-3 flex-col justify-center items-center text-orange-600 font-bold bg-zinc-700 bg-opacity-20 lg:p-2 fade-in"
            >
              <p className="text-center">Frontend development</p>
              <div className="h-full w-full grid grid-cols-3 place-items-center  items-center justify-center gap-5 p-3">
                <div className="h-10 w-10 lg:h-10 lg:w-10  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/html.svg')] bg-cover bg-center "></div>
                <div className="h-8 w-8 lg:h-10 lg:w-10  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/css.svg')] bg-cover bg-center "></div>
                <div className="h-8 w-8 lg:h-9 lg:w-9  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/javascript.svg')] bg-cover bg-center "></div>
                <div className="h-8 w-8 lg:h-10 lg:w-10  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/reactJS.svg')] bg-cover bg-center "></div>
                <div className="h-8 w-8 lg:h-10 lg:w-10  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/tailwind.svg')] bg-cover bg-center "></div>
                <div className="h-8 w-8 lg:h-10 lg:w-10  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/typescript.svg')] bg-cover bg-center "></div>
                <div className="h-8 w-8 lg:h-9 lg:w-9  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/sass.svg')] bg-cover bg-center "></div>
              </div>
            </div>
            <div
              ref={fadeRefs[1]}
              className="p-2 flex lg:h-56 w-full lg:w-48   lg:gap-3 flex-col justify-center items-center text-orange-600 font-bold bg-zinc-700 bg-opacity-20 lg:p-2 fade-in"
            >
              <p>Development Tools</p>
              <div className="h-full w-full grid grid-cols-2 place-items-center  items-center justify-center gap-2 py-5 px-3">
                <div className="h-8 w-8 lg:h-10 lg:w-10  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/vsc.svg')] bg-cover bg-center "></div>
                <div className="h-8 w-8 lg:h-10 lg:w-10  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/github.svg')] bg-cover bg-center "></div>
                <div className="h-8 w-8 lg:h-9 lg:w-9  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/edge.svg')] bg-cover bg-center "></div>
                <div className="h-8 w-8 lg:h-10 lg:w-10  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/powershell.svg')] bg-cover bg-center "></div>
              </div>
            </div>
            <div
              ref={fadeRefs[2]}
              className="p-2 flex lg:h-56 w-full lg:w-48 lg:gap-3 flex-col justify-center items-center text-orange-600 font-bold bg-zinc-700 bg-opacity-20 lg:p-2 fade-in"
            >
              <p>Graphic Design</p>
              <div className="h-full w-full grid grid-cols-2 place-items-center  items-center justify-center gap-5 p-3 px-4">
                <div className="h-8 w-8 lg:h-10 lg:w-10  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/photoshop.svg')] bg-cover bg-center "></div>
                <div className="h-8 w-8 lg:h-10 lg:w-10  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/figma.svg')] bg-cover bg-center "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
