import Navbar from './components/NavBar/Navbar';
import './App.css';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Hamburger from './components/Hamburger/Hamburger';

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <Home />
      <AboutMe />
      <Skills />
      <Hamburger/>
      <Contact />
     


    </div>
  );
}

export default App;
