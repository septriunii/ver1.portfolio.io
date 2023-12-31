/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";

function ContactMe() {
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
    <div
      id="contact"
      className=" mt-16 w-full h-auto lg:h-[30rem] lg:mt-32 p-2 z-40 mb-14"
    >
      <main className="h-full w-full ">
        <header className="w-full font-bold text-2xl mb-8 lg:ml-5 lg:text-4xl lg:py-3 text-orange-600 flex justify-center items-center">
          <div className="hidden md:flex h-0.5 w-full bg-zinc-900"></div>

          <p className="flex w-64 md:w-[30rem] lg:w-[35rem] justify-center italic">
            Contact Me
          </p>
          <div className="h-0.5 w-full bg-zinc-900"></div>
        </header>

        <div
          ref={fadeRefs[0]}
          className="flex  w-full h-full mt-8 justify-center fade-in"
        >
          <main className="lg:h-[22rem]  p-2 md:w-[75%] lg:w-[65%] flex flex-col lg:gap-5  lg:p-5 text-justify font-light bg-zinc-700 bg-opacity-20 rounded-lg relative">
            <section className="text-xs md:text-sm  flex flex-col justify-center items-center lg:gap-2">
              <article className="leading-6 bg-zinc-900 p-2 lg:p-3 indent-5 lg:indent-0 lg:leading-7">
                If you're seeking a Front-End Web Developer who is committed to
                delivering exceptional web experiences, leveraging ReactJS and
                Tailwind CSS expertise, I would be delighted to connect and
                explore opportunities to work together. Let's bring your vision
                to life and create remarkable digital experiences that leave a
                lasting impact.
              </article>
            </section>
            <section className="flex flex-col gap-5 mt-5 w-full items-center justify-center">
              <div className="h-full w-auto flex justify-center  lg:gap-10 mt-10 italic flex-col lg:flex-row  text-xs gap-3  mb-10  lg:mb-0">
                <a
                  ref={fadeRefs[1]}
                  href="mailto:anthonyalabado@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-orange-600 hover:text-orange-600 right-fade-in"
                >
                  <button className="text-xs md:text-sm lg:text-base py-3 px-5">
                    Message Me
                  </button>
                </a>
              </div>
            </section>
          </main>
        </div>
      </main>
    </div>
  );
}

export default ContactMe;
