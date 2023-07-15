// import Intro from "./pages/Intro";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import ContactMe from "./pages/ContactMe";
import Intro from "./pages/Intro";

import Body from "./components/Body";

//
//       {/* <AboutMe />

import React from "react";

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
