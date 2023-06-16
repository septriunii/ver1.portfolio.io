import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Intro />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
}

export default App;
