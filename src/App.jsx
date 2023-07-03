import Intro from "./pages/Intro";

import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Tools from "./pages/Tools";
import Footer from "./components/Footer";
import ContactMe from "./pages/ContactMe";

import Sidebar1 from "./components/Sidebar";
import Sidebar2 from "./components/Sidebar2";
import Body from "./components/Body";

function App() {
  return (
    <>
      {/* <Navbar />
      <div className="bg-red-800 h-auto w-full flex">
      </div>

      <Projects />
      <Experience />
      <Tools />
      <ContactMe />
      <Footer /> */}
      <Body>
        <Intro />
        <AboutMe />
        <Skills />
      </Body>
    </>
  );
}

export default App;
