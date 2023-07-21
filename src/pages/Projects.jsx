import Proj1 from "../components/Proj1";
import Proj2 from "../components/Proj2";
import Proj3 from "../components/Proj3";
import { useEffect, useRef } from "react";

function Projects() {
  const fadeRefs = [useRef(null), useRef(null), useRef(null)];

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
      <div
        id="proj"
        className="mt-20 w-full md:w-[53rem] lg:h-auto lg:w-[67rem]  flex flex-col shrink lg:mt-[30rem] z-40"
      >
        <h1 className="font-bold text-2xl mb-8 md:text-3xl lg:text-4xl lg:py-3 text-orange-600 flex justify-center items-center">
          <p className="w-52 italic md:mr-5 lg:w-60">My Projects</p>
          <div className="h-0.5 w-full bg-zinc-900"></div>
        </h1>

        <div
          ref={fadeRefs[0]}
          className="hidden md:flex h-full mt-10 mb-10 right-fade-in"
        >
          <Proj1 />
          <div className="lg:h-[80%] w-[100%] md:h-[75%] flex flex-col gap-4  p-2 text-justify font-light ml-5 px-5 bg-zinc-700 bg-opacity-20 mt-10  rounded justify-between">
            <div className="gap-1 flex flex-col ">
              <p className="font-bold md:text-2xl lg:text-3xl text-orange-600">
                SwiftCart
              </p>
              <p className="opacity-60 italic text-sm">e-commerce website</p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-5 opacity-40 text-sm">
                <p className=" ">Frontend</p>
                <p className=" ">ReactJS</p>
                <p className=" ">Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={fadeRefs[1]}
          className="hidden md:flex h-full mt-10 mb-10 left-fade-in"
        >
          <div className="h-[80%] w-[100%] flex flex-col gap-4 items-end  p-2 text-justify font-light mr-5 px-5 bg-opacity-20 mt-10 bg-zinc-700 rounded justify-between">
            <div>
              <p className="font-bold md:text-2xl lg:text-3xl text-orange-600">
                AimRobotics
              </p>
              <p className="opacity-60 italic text-sm">
                company brochure website
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-5 opacity-40 text-sm">
                <p className=" ">Fullstack</p>
                <p className=" ">MongoDB</p>
                <p className=" ">ExpressJS</p>
                <p className=" ">ReactJS</p>
              </div>
            </div>
          </div>
          <Proj2 />
        </div>

        <div
          ref={fadeRefs[2]}
          className="hidden md:flex h-full mt-10 mb-10 right-fade-in"
        >
          <Proj3 />
          <div className="lg:h-[80%] w-[100%] md:h-[75%] flex flex-col gap-4  p-2 text-justify font-light ml-5 px-5 bg-zinc-700 bg-opacity-20 mt-10  rounded justify-between">
            <div className="gap-1 flex flex-col ">
              <p className="font-bold md:text-2xl lg:text-3xl text-orange-600">
                SwiftCart
              </p>
              <p className="opacity-60 italic text-sm">e-commerce website</p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-5 opacity-40 text-sm">
                <p className=" ">Frontend</p>
                <p className=" ">ReactJS</p>
                <p className=" ">Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>

        {/* For small screen */}
        <div className="h-auto w-full flex p-2 flex-col gap-5 md:hidden">
          <div className="p-2 h-auto w-full bg-zinc-700 bg-opacity-20 font-light text-xs flex flex-col gap-2">
            <div className="h-40 w-full bg-black flex flex-col justify-center gap-5 p-2">
              <div className="h-5 w-5 bg-slate-900"></div>
              <div className="h-5 w-5 bg-slate-900"></div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-orange-600 text-lg font-bold">Title</p>
              <p className="bg-zinc-900 p-2">
                Developed a comprehensive e-commerce website, ShopifyPro, that
                offers a seamless online shopping experience. The platform
                allows users to browse a wide range of products, add items to
                their cart, and securely complete transactions.
              </p>
            </div>
            <div className="flex gap-5 opacity-40 ">
              <p className=" ">Frontend</p>
              <p className=" ">ReactJS</p>
              <p className=" ">Tailwind CSS</p>
            </div>
          </div>

          <div className="p-2 h-auto w-full bg-zinc-700 bg-opacity-20 font-light text-xs flex flex-col gap-2">
            <div className="h-40 w-full bg-black flex flex-col justify-center gap-5 p-2">
              <div className="h-5 w-5 bg-slate-900"></div>
              <div className="h-5 w-5 bg-slate-900"></div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-orange-600 text-lg font-bold">Title</p>
              <p className="bg-zinc-900 p-2">
                Developed a comprehensive e-commerce website, ShopifyPro, that
                offers a seamless online shopping experience. The platform
                allows users to browse a wide range of products, add items to
                their cart, and securely complete transactions.
              </p>
            </div>
            <div className="flex gap-5 opacity-40 ">
              <p className=" ">Frontend</p>
              <p className=" ">ReactJS</p>
              <p className=" ">Tailwind CSS</p>
            </div>
          </div>

          <div className="p-2 h-auto w-full bg-zinc-700 bg-opacity-20 font-light text-xs flex flex-col gap-2">
            <div className="h-40 w-full bg-black flex flex-col justify-center gap-5 p-2">
              <div className="h-5 w-5 bg-slate-900"></div>
              <div className="h-5 w-5 bg-slate-900"></div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-orange-600 text-lg font-bold">Title</p>
              <p className="bg-zinc-900 p-2">
                Developed a comprehensive e-commerce website, ShopifyPro, that
                offers a seamless online shopping experience. The platform
                allows users to browse a wide range of products, add items to
                their cart, and securely complete transactions.
              </p>
            </div>
            <div className="flex gap-5 opacity-40 ">
              <p className=" ">Frontend</p>
              <p className=" ">ReactJS</p>
              <p className=" ">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
