import Navbar from "./Navbar";
import Sidebar1 from "./Sidebar";
import Sidebar2 from "./Sidebar2";
import img from "../assets/bg.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Body(props) {
  return (
    <>
      <nav className="h-auto w-full fixed z-[49] top-0 ">
        <Navbar />
      </nav>
      <main className="w-full h-auto mt-14 md:mt-24 gap-2 flex ">
        <LazyLoadImage
          src={img}
          alt=""
          className="fixed top-5 opacity-[0.02] w-full h-full -z-50"
          loading="eager"
        />

        <aside className=" md:flex md:w-16 h-auto hidden">
          <Sidebar1 />
        </aside>
        <main className="w-full h-auto mx-5 md:mx-0">{props.children}</main>
        <aside className="md:flex md:w-16 h-auto hidden ">
          <Sidebar2 />
        </aside>
      </main>
    </>
  );
}

export default Body;
