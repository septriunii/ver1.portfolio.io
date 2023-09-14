import img from "../assets/IntroIMG.png";
import bg from "../assets/IntroIMGbg.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function IntroIMG() {
  return (
    <div className=" h-[90%] w-[90%] relative place-content-center flex">
      <div className="hidden md:flex md:h-4 md:w-4 lg:h-7 lg:w-7 border-orange-600 border-2 absolute top-0 left-20 rotate-6 z-10"></div>
      <div className="hidden md:flex md:h-4 md:w-4 lg:h-7 lg:w-7 bg-orange-600 absolute bottom-0 right-28 rotate-12 z-10"></div>

      <div className=" rounded-full h-full w-full absolute overflow-hidden">
        <LazyLoadImage
          src={bg}
          alt=""
          className=" h-full opacity-20 object-cover"
          effect="blur"
        />
      </div>
      <div className="h-[85%] w-[85%] border-orange-600 border-2 absolute place-self-center z-30  md:-rotate-12"></div>
      <div className="h-full w-full bg-opacity-50 rounded-full overflow-hidden relative">
        <img
          src={img}
          className="top-0 absolute opacity-70 "
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default IntroIMG;
