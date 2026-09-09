import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="
        inline-flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-theme-border
        bg-theme-card
        text-theme-foreground
        transition-all
        duration-200
        hover:border-theme-primary
        hover:text-theme-primary
      "
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
