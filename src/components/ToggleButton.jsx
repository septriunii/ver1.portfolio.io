import { useState, useEffect } from "react";

function ToggleButton({ isActive, toggleMode }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [hasReachedContact, setHasReachedContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.querySelector("#contact");

      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setIsContactVisible(rect.top <= window.innerHeight && rect.bottom >= 0);

        if (!hasReachedContact && rect.top <= window.innerHeight) {
          setHasReachedContact(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasReachedContact]);

  const handleToggle = () => {
    setIsChecked((prevChecked) => !prevChecked);
    toggleMode();
  };

  // Determine the text to display based on the button's state
  const buttonText = !hasReachedContact
    ? "Reach the bottom first to summarize"
    : isChecked
    ? "Return to main page"
    : "Summarize";

  return (
    <div
      className="hidden md:fixed md:flex w-10 h-6 items-center justify-center z-50 -mt-[4.2rem] md:right-7 lg:right-14"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input
        type="checkbox"
        id="toggleButton"
        className="absolute w-10 h-full appearance-none rounded-full bg-white cursor-pointer"
        checked={isChecked}
        onChange={handleToggle}
        disabled={!hasReachedContact && !isContactVisible}
      />
      <label
        htmlFor="toggleButton"
        className={`absolute left-1 w-4 h-4 bg-orange-600 rounded-full transform transition-transform ease-in-out duration-300 ${
          isChecked ? "translate-x-4" : ""
        }`}
      ></label>
      {isHovered && (
        <div className="absolute top-full text-xs text-gray-500 mt-1 text-center w-32">
          {buttonText}
        </div>
      )}
    </div>
  );
}

export default ToggleButton;
