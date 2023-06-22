import { useState } from "react";

function ToggleButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  return (
    <div className="relative flex w-10 h-6 items-center justify-center">
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
    </div>
  );
}

export default ToggleButton;
