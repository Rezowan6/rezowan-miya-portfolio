import Navbar from "./components/layout/Navbar";
import Projects from "./components/projects/Projects";
import About from "./components/sections/about/About";
import Certificates from "./components/sections/certificates/Certificates";
import Experience from "./components/sections/experience/Experience";
import Hero from "./components/sections/hero/Hero";
import Services from "./components/sections/services/Services";
import Skills from "./components/sections/skill/Skills";

function App() {
  return (
    <div className="min-h-screen bg-theme-background text-theme-foreground">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Services />

        <Certificates />

        <section
          id="contact"
          className="flex min-h-[60vh] items-center justify-center border-t border-theme-border"
        >
          <h2 className="text-3xl font-bold">Contact</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
