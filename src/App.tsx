import ThemeToggle from "./components/theme/ThemeToggle";

function App() {
  return (
    <main className="min-h-screen bg-theme-background text-theme-foreground">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-8 px-6">
        <ThemeToggle />

        <div className="text-center">
          <h1 className="text-4xl font-bold text-theme-foreground">
            My Portfolio
          </h1>

          <p className="mt-4 text-theme-muted">
            React • TypeScript • Node.js • MySQL
          </p>
        </div>

        <div className="w-full max-w-md rounded-2xl border border-theme-border bg-theme-card p-6">
          <h2 className="text-xl font-semibold text-theme-foreground">
            Theme System
          </h2>

          <p className="mt-2 text-theme-muted">
            Dark and Light theme are working.
          </p>

          <button
            type="button"
            className="
              mt-6
              rounded-lg
              bg-theme-primary
              px-5
              py-3
              font-medium
              text-theme-button-text
              transition
              hover:bg-theme-primary-hover
            "
          >
            Test Button
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
