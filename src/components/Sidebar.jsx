import github from "../assets/github-svgrepo-com.png";
import facebook from "../assets/facebook-svgrepo-com.png";
import gmail from "../assets/gmail-svgrepo-com.png";
import linkedin from "../assets/linkedin-svgrepo-com.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Sidebar1() {
  return (
    <>
      {/* sidebar */}
      <main className="bg-zinc- h-[32rem] w-16 left-0 flex flex-col justify-center items-center gap-6 fixed -right-10">
        <section className="h-36 w-0.5 bg-zinc-900 absolute top-0"></section>

        <figure className="w-9 h-9 cursor-pointer flex items-center p-1 relative">
          <a
            href="https://github.com/Septriunii"
            target="_blank"
            rel="noreferrer"
            className="duration-300 ease-out grayscale hover:grayscale-0 opacity-40 hover:opacity-100"
          >
            <LazyLoadImage loading="eager" effect="blur" src={github} alt="" />
          </a>
        </figure>

        <figure className="w-9 h-9 cursor-pointer flex items-center p-1 relative">
          <a
            href="https://www.facebook.com/anthony.alabado.37/"
            target="_blank"
            rel="noreferrer"
            className="duration-300 ease-out grayscale hover:grayscale-0 opacity-40 hover:opacity-100 "
          >
            <LazyLoadImage
              loading="eager"
              effect="blur"
              src={facebook}
              alt=""
            />
          </a>
        </figure>
        <figure className="w-8 h-8 cursor-pointer flex items-center p-1 relative">
          <a
            href="mailto:anthonyalabado@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="duration-300 ease-out grayscale hover:grayscale-0 opacity-40 hover:opacity-100"
          >
            <LazyLoadImage loading="eager" effect="blur" src={gmail} alt="" />
          </a>
        </figure>
        <figure className="w-9 h-9 cursor-pointer flex items-center p-1 relative">
          <a
            href="https://www.linkedin.com/in/anthony-alabado"
            target="_blank"
            rel="noreferrer"
            className="duration-300 ease-out grayscale hover:grayscale-0 opacity-40 hover:opacity-100"
          >
            <LazyLoadImage
              loading="eager"
              effect="blur"
              src={linkedin}
              alt=""
            />
          </a>
        </figure>
        <section className="h-36 w-0.5 bg-zinc-900 absolute bottom-0"></section>
      </main>
    </>
  );
}

export default Sidebar1;
