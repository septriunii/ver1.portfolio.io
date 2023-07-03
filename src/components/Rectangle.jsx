import { useState, useEffect } from "react";

function Rectangle({ onClose }) {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  const handleAnimationEnd = () => {
    if (!isShowing) {
      onClose();
    }
  };

  return (
    <div
      className={`md:hidden w-80 h-[30rem] bg-red-500 fixed top-20 right-0 z-40 transition-transform duration-300 ease-in-out transform ${
        isShowing ? "translate-x-0" : "translate-x-full"
      }`}
      onAnimationEnd={handleAnimationEnd}
    >
      {/* Content of the rectangle */}
      <button
        className="absolute top-2 right-2 text-white"
        onClick={() => setIsShowing(false)}
      >
        Close
      </button>
    </div>
  );
}

export default Rectangle;
