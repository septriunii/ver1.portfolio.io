import Intro from "./pages/Intro";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Tools from "./pages/Tools";
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
        <Tools />
        <Footer />
      </div>
    </>
  );
}

export default App;
