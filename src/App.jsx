import { useState, useEffect, lazy, Suspense } from "react";
import Intro from "./pages/Intro";
import Preloader from "./components/Preloader";
import { Body } from "./components";
import ToggleButton from "./components/ToggleButton";
import AboutMe from "./pages/AboutMe";

const SummaryPage = lazy(() => import("./components/SummaryPage"));
const Footer = lazy(() => import("./components/Footer"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const ContactMe = lazy(() => import("./pages/ContactMe"));

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

      <Suspense fallback={null}>
        {isLoading ? (
          <Preloader />
        ) : (
          <Body>
            {isActive ? (
              <SummaryPage />
            ) : (
              <>
                <Intro loading="eager" />
                <AboutMe />
                <Skills />
                <Projects />
                <Experience />
                <ContactMe />
                <Footer />
              </>
            )}
          </Body>
        )}
      </Suspense>
    </div>
  );
};

export default App;
