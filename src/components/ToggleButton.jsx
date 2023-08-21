import { useState } from "react";

function ToggleButton({ isActive, toggleMode }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prevChecked) => !prevChecked);
    toggleMode(); // Call the toggleMode function to update the active mode
  };

  return (
    <div className="absolute flex w-10 h-6 items-center justify-center z-50 ">
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
      <div className="absolute top-full text-xs text-gray-500 mt-1">
        {isActive ? "active" : "inactive"}
      </div>
    </div>
  );
}

export default ToggleButton;
