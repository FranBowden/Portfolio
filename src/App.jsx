import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import useLenis from "./hooks/useLenis";

function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-page relative z-0">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-page">
        <div className="absolute inset-0 bg-noise" />
      </div>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;
