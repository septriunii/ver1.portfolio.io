import React from "react";
import Navbar from "./Navbar";
import Sidebar1 from "./Sidebar";
import Sidebar2 from "./Sidebar2";

function Body({ children }) {
  return (
    <>
      <div className="h-auto w-full bg-black fixed z-50 top-0">
        <Navbar />
      </div>
      <div className="w-full h-auto mt-14 md:mt-24 gap-2 flex">
        <div className="hidden md:flex w-16 h-auto shrink-0 ">
          <Sidebar1 />
        </div>
        <div className="sm:flex sm:items-center p-1 w-auto h-auto flex flex-col flex-shrink">
          {children}
        </div>
        <div className="hidden md:flex h-auto  lg:w-16 shrink-0">
          <Sidebar2 />
        </div>
      </div>
    </>
  );
}

export default Body;
