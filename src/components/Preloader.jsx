import { useState, useEffect } from "react";
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
    <main className="flex h-screen justify-center items-center flex-col md:gap-4 lg:gap-5 relative bg-zinc-900">
      <p className="reveal-text absolute font-mono z-50">welcome!</p>

      <section
        className={`h-auto w-40 absolute md:top-[60%] top-[55%] ${
          showDiv
            ? "opacity-100 transition-opacity duration-300 ease-in-out"
            : "opacity-0"
        }`}
      >
        <Loading />
      </section>
    </main>
  );
}

export default Preloader;
