import './App.css';
import About from './Component/About';
import Contect from './Component/Contact';
import Education from './Component/Education';
import Experience from './Component/Experience';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Project from './Component/Project';
import Skils from './Component/Skils';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skils />
      <Experience />
      <Project />
      <Contect />
    </div>
  );
}

export default App;
