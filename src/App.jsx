import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import useLenis from "./hooks/useLenis";

function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-zinc-950 relative">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-zinc-950">
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-teal-500/10 blur-[120px]" />
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
