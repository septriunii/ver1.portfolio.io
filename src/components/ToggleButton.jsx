import { useState } from "react";

function ToggleButton({ isActive, toggleMode }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setIsChecked((prevChecked) => !prevChecked);
    toggleMode(); // Call the toggleMode function to update the active mode
  };

  return (
    <div
      className="hidden md:fixed md:flex w-10 h-6 items-center justify-center z-50 -mt-[4.2rem] md:right-7  lg:right-14"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input
        type="checkbox"
        id="toggleButton"
        className="absolute w-10 h-full appearance-none rounded-full bg-white cursor-pointer"
        checked={isChecked}
        onChange={handleToggle}
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
