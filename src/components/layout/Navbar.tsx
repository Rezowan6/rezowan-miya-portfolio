import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navItems } from "../../config/navigation";
import useScrolled from "../../hooks/useScrolled";
import useScrollSpy from "../../hooks/useScrollSpy";
import Logo from "../common/Logo";
import ThemeToggle from "../theme/ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrolled = useScrolled();

  const sectionIds = navItems.map((item) => item.href.replace("#", ""));

  const activeSection = useScrollSpy(sectionIds);

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-theme-primary/30 bg-theme-background shadow-lg shadow-theme-primary/10 backdrop-blur-xl"
          : "border-theme-border bg-theme-background/90 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Logo onClick={handleCloseMenu} />

        {/* Desktop Navigation */}
        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-theme-primary"
                      : "text-theme-muted hover:text-theme-primary"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <a
            href="/resume.pdf"
            download
            className="rounded-lg bg-theme-primary px-4 py-2.5 text-sm font-semibold text-theme-button-text shadow-lg shadow-theme-primary/10 transition-all duration-200 hover:bg-theme-primary-hover hover:shadow-theme-primary/20"
          >
            Resume
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            className="rounded-lg p-2 text-theme-muted transition-colors hover:bg-theme-card hover:text-theme-primary"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        activeSection={activeSection}
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMenu}
      />
    </header>
  );
}
