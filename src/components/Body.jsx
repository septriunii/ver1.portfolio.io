import Navbar from "./Navbar";
import Sidebar1 from "./Sidebar";
import Sidebar2 from "./Sidebar2";

function Body({ children }) {
  return (
    <>
      <div className="h-auto w-full bg-black fixed z-50 top-0">
        <Navbar />
      </div>
      <div className="bg-green-950 w-full h-auto mt-14 md:mt-24 gap-2 flex">
        <div className="bg-blue-950 md:flex md:w-16 h-auto hidden">
          <Sidebar1 />
        </div>
        <div className="bg-red-950 w-full h-auto">{children}</div>

        <div className="bg-blue-950 md:flex md:w-16 h-auto hidden">
          <Sidebar2 />
        </div>
      </div>
    </>
  );
}

export default Body;
