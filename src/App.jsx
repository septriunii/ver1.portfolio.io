import { useState, useEffect, lazy, Suspense } from "react";
import Intro from "./pages/Intro";
import Preloader from "./components/Preloader";
import { Body } from "./components";
import ToggleButton from "./components/ToggleButton";
import AboutMe from "./pages/AboutMe";

const SummaryPage = lazy(() => import("./components/SummaryPage"));
const Footer = lazy(() => import("./components/Footer"));

import { Skills, Projects, Experience, ContactMe } from "./pages/index";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay time as needed
  }, []);

  const toggleMode = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-full h-auto relative duration-300 ease-in-out">
      <ToggleButton isActive={isActive} toggleMode={toggleMode} />

      {isLoading ? (
        <Preloader />
      ) : (
        <div className="duration-300 ease-in-out">
          <Body>
            {isActive ? (
              <Suspense fallback={null}>
                <SummaryPage />
              </Suspense>
            ) : (
              <>
                <Intro />
                <AboutMe />
                <Suspense fallback={null}>
                  <Skills />
                  <Projects />
                  <Experience />
                  <ContactMe />
                  <Footer />
                </Suspense>
              </>
            )}
          </Body>
        </div>
      )}
    </div>
  );
};

export default App;
