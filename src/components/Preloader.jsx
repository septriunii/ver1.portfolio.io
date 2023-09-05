import React, { useState, useEffect } from "react";
import Loading from "./Loading";

function Preloader() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowDiv(true);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="flex h-screen justify-center items-center flex-col gap-5 relative">
      <p className="reveal-text absolute">WELCOME!</p>

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
