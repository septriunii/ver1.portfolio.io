import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import bg from "../assets/bg.jpg";

function Preloader() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowDiv(true);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="flex h-screen justify-center items-center flex-col md:gap-4 lg:gap-5 relative bg-zinc-900">
      <p className="reveal-text absolute font-mono z-50">welcome!</p>

      <div
        className={`h-auto w-40 absolute top-[60%] ${
          showDiv
            ? "opacity-100 transition-opacity duration-300 ease-in-out"
            : "opacity-0"
        }`}
      >
        <Loading />
      </div>
    </div>
  );
}

export default Preloader;
