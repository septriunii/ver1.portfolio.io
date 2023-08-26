import { useState, useEffect } from "react";
import ToggleButton from "./components/ToggleButton";
import {
  Intro,
  AboutMe,
  Skills,
  Projects,
  Experience,
  ContactMe,
} from "./pages";
import { Footer, Body } from "./components";
import SummaryPage from "./components/SummaryPage";
import Preloader from "./components/Preloader";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed
  }, []);

  const toggleMode = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-full h-auto relative ">
      <ToggleButton isActive={isActive} toggleMode={toggleMode} />

      {isLoading ? (
        <Preloader />
      ) : (
        <div
          className={`transition-opacity duration-1000 ${
            isActive ? "opacity-0" : "opacity-100"
          }`}
        >
          <Body>
            {isActive ? (
              <SummaryPage />
            ) : (
              <>
                <Intro />
                <AboutMe />
                <Skills />
                <Projects />
                <Experience />
                <ContactMe />
                <Footer />
              </>
            )}
          </Body>
        </div>
      )}
    </div>
  );
};

export default App;
