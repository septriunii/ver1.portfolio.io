import { useState } from "react";
import ToggleButton from "./components/ToggleButton";
import BlackComponent from "./components/BlackComponent";
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
const App = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMode = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-full h-auto relative ">
      <ToggleButton isActive={isActive} toggleMode={toggleMode} />
      {isActive ? (
        <SummaryPage />
      ) : (
        <Body>
          <Intro />
          <AboutMe />
          <Skills />
          <Projects />
          <Experience />
          <ContactMe />
          <Footer />
        </Body>
      )}
    </div>
  );
};

export default App;
