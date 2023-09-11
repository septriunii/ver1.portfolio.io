import { useState, useEffect, lazy, Suspense } from "react";
import ToggleButton from "./components/ToggleButton";
import Preloader from "./components/Preloader";
import { Body } from "./components";
import SummaryPage from "./components/SummaryPage";

// Lazy load your custom components
const LazyIntro = lazy(() => import("./pages/Intro"));
const LazyAboutMe = lazy(() => import("./pages/AboutMe"));
const LazySkills = lazy(() => import("./pages/Skills"));
const LazyProjects = lazy(() => import("./pages/Projects"));
const LazyExperience = lazy(() => import("./pages/Experience"));
const LazyContactMe = lazy(() => import("./pages/ContactMe"));
const LazyFooter = lazy(() => import("./components/Footer"));

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2400); // Adjust the delay time as needed
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
        <div className="transition-opacity duration-1000 ">
          <Body>
            {isActive ? (
              <SummaryPage />
            ) : (
              <>
                {/* Use Suspense to render the lazy-loaded components */}
                <Suspense fallback={<div></div>}>
                  <LazyIntro />
                  <LazyAboutMe />
                  <LazySkills />
                  <LazyProjects />
                  <LazyExperience />
                  <LazyContactMe />
                  <LazyFooter />
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
