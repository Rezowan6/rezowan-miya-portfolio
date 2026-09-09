import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-theme-background text-theme-foreground">
      <Navbar />

      <main>
        <section
          id="home"
          className="flex min-h-[calc(100vh-72px)] items-center justify-center px-6"
        >
          <div className="text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-theme-primary">
              Welcome to my portfolio
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hello, I&apos;m Rezowan
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-theme-muted sm:text-lg">
              Full Stack Developer building modern,
              scalable and professional web applications.
            </p>
          </div>
        </section>

        <section
          id="about"
          className="flex min-h-[60vh] items-center justify-center border-t border-theme-border"
        >
          <h2 className="text-3xl font-bold">About</h2>
        </section>

        <section
          id="skills"
          className="flex min-h-[60vh] items-center justify-center border-t border-theme-border"
        >
          <h2 className="text-3xl font-bold">Skills</h2>
        </section>

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