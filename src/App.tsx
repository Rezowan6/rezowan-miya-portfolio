import Navbar from "./components/layout/Navbar";
import About from "./components/sections/about/About";
import Hero from "./components/sections/hero/Hero";
import Skills from "./components/sections/skill/Skills";

function App() {
  return (
    <div className="min-h-screen bg-theme-background text-theme-foreground">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <section
          id="projects"
          className="flex min-h-[60vh] items-center justify-center border-t border-theme-border"
        >
          <h2 className="text-3xl font-bold">Projects</h2>
        </section>

        <section
          id="experience"
          className="flex min-h-[60vh] items-center justify-center border-t border-theme-border"
        >
          <h2 className="text-3xl font-bold">Experience</h2>
        </section>

        <section
          id="services"
          className="flex min-h-[60vh] items-center justify-center border-t border-theme-border"
        >
          <h2 className="text-3xl font-bold">Services</h2>
        </section>

        <section
          id="certificates"
          className="flex min-h-[60vh] items-center justify-center border-t border-theme-border"
        >
          <h2 className="text-3xl font-bold">Certificates</h2>
        </section>

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
