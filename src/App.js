import Navbar from './components/NavBar/Navbar';
import './App.css';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
