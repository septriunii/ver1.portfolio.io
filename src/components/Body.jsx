import React from "react";
import Navbar from "./Navbar";
import Sidebar1 from "./Sidebar";
import Sidebar2 from "./Sidebar2";

function Body({ children }) {
  return (
    <>
      <Navbar />
      <div className=" w-full h-auto mt-24 gap-2 flex">
        <div className="hidden bg-gray-800 md:flex w-16 bg--800 h-auto shrink-0">
          <Sidebar1 />
        </div>
        <div className="sm:flex sm:items-center p-2 w-full h-[70rem] flex flex-col items-center shrink">
          {children}
        </div>
        <div className="hidden md:flex w-16 h-auto  shrink-0">
          <Sidebar2 />
        </div>
      </div>
    </>
  );
}

export default Body;
