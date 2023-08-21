import { useState } from "react";
import ToggleButton from "./components/ToggleButton";
import BlackComponent from "./components/BlackComponent";
import WhiteComponent from "./components/WhiteComponent";
import MainPage from "./MAIN PAGE/MainPage";
import {
  Intro,
  AboutMe,
  Skills,
  Projects,
  Experience,
  ContactMe,
} from "./pages";
import { Footer, Body } from "./components";
const App = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMode = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-full h-auto">
      <ToggleButton isActive={isActive} toggleMode={toggleMode} />
      {isActive ? (
        <BlackComponent />
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
