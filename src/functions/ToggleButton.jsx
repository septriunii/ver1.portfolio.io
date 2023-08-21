import React, { useState, useEffect } from "react";

function ToggleButton({ onClick }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isDisabledTextVisible, setIsDisabledTextVisible] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    let hasReachedContact = false;

    const handleScroll = () => {
      if (!hasReachedContact) {
        const threshold = 100; // pixels

        if (
          window.scrollY >= contactSection.offsetTop - threshold &&
          window.scrollY <=
            contactSection.offsetTop +
              contactSection.clientHeight -
              window.innerHeight / 2
        ) {
          setIsButtonEnabled(true);
          hasReachedContact = true; // Set to true once contact section is reached
        }
      } else {
        setIsButtonEnabled(true); // Keep button enabled after reaching contact
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    if (isButtonEnabled) {
      setIsChecked((prevChecked) => !prevChecked);
    } else {
      setIsDisabledTextVisible(true);
      setTimeout(() => setIsDisabledTextVisible(false), 2000);
    }
  };

  return (
    <div>
      <div className="relative flex w-10 h-6 items-center justify-center">
        <input
          onClick={onClick}
          type="checkbox"
          id="toggleButton"
          className={`absolute w-10 h-full appearance-none rounded-full bg-white cursor-pointer ${
            !isButtonEnabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          checked={isChecked}
          onChange={handleToggle}
          disabled={!isButtonEnabled}
        />
        <label
          htmlFor="toggleButton"
          className={`absolute left-1 w-4 h-4 bg-orange-600 rounded-full transform transition-transform ease-in-out duration-300 ${
            isChecked ? "translate-x-4" : ""
          }`}
        ></label>
        {isDisabledTextVisible && (
          <div className="absolute top-full text-xs text-gray-500 mt-1">
            disabled
          </div>
        )}
        {!isDisabledTextVisible && isButtonEnabled && (
          <div className="absolute top-full text-xs text-gray-500 mt-1">
            {isChecked ? "active" : "inactive"}
          </div>
        )}
      </div>
    </div>
  );
  s;
}

export default ToggleButton;
