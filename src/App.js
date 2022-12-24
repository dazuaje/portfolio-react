import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

function App() {

  return (
    <div className="App">
      <Navbar  />
      <Home />
      <AboutMe/>
      <Skills />
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
