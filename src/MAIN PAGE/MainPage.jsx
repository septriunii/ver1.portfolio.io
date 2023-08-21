import { useState } from "react";
import {
  Intro,
  AboutMe,
  Skills,
  Projects,
  Experience,
  ContactMe,
} from "../pages";
import { Footer, Body } from "../components";
function App() {
  return (
    <Body>
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <ContactMe />
      <Footer />
    </Body>
  );
}

export default App;
