import Navbar from './components/NavBar/Navbar';
import './App.css';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
