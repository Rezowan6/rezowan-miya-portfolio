import Reveal from "./components/animations/Reveal";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/about/About";
import Certificates from "./components/sections/certificates/Certificates";
import Contact from "./components/sections/contact/Contact";
import Experience from "./components/sections/experience/Experience";
import Hero from "./components/sections/hero/Hero";
import Projects from "./components/sections/projects/Projects";
import Services from "./components/sections/services/Services";
import Skills from "./components/sections/skill/Skills";

function App() {
  return (
    <div className="min-h-screen bg-theme-background text-theme-foreground">
      <Navbar />

      <main>
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Experience />
        </Reveal>

        <Reveal>
          <Services />
        </Reveal>

        <Reveal>
          <Certificates />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>
    </div>
  );
}

export default App;
