import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Education from "./Components/Education";
import Contacts from "./Components/Contacts";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 -z-10 min-h-screen w-full bg-zinc-800"></div>
      <Navbar />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
