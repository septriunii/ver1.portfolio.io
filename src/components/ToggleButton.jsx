import { useState, useEffect, useRef } from "react";

function ToggleButton({ isActive, toggleMode, contactRef }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleButtonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsHovered(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 1 }
    );

    if (toggleButtonRef.current) {
      observer.observe(toggleButtonRef.current);
    }

    return () => {
      if (toggleButtonRef.current) {
        observer.unobserve(toggleButtonRef.current);
      }
    };
  }, [contactRef]);

  const handleToggle = () => {
    setIsChecked((prevChecked) => !prevChecked);
    toggleMode();
  };

  return (
    <div
      ref={toggleButtonRef}
      className="hidden md:fixed md:flex w-10 h-6 items-center justify-center z-50 -mt-[4.2rem] md:right-7  lg:right-14"
    >
      <input
        type="checkbox"
        id="toggleButton"
        className="absolute w-10 h-full appearance-none rounded-full bg-white cursor-pointer"
        checked={isChecked}
        onChange={handleToggle}
        disabled={!isHovered} // Disable the button when not hovered
      />
      <label
        htmlFor="toggleButton"
        className={`absolute left-1 w-4 h-4 bg-orange-600 rounded-full transform transition-transform ease-in-out duration-300 ${
          isChecked ? "translate-x-4" : ""
        }`}
      ></label>
      {isHovered && (
        <div className="absolute top-full text-xs text-gray-500 mt-1">
          {isActive ? "summarized" : "summarize?"}
        </div>
      )}
    </div>
  );
}

export default ToggleButton;
