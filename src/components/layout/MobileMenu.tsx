import { navItems } from "../../config/navigation";
import Button from "../common/Button";

interface MobileMenuProps {
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  activeSection,
  isOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      className={`overflow-hidden border-t border-theme-border bg-theme-background transition-all duration-300 ease-out lg:hidden
            ${isOpen ? "visible translate-x-0 opacity-100" : "invisible translate-x-full opacity-0"}
          `}
    >
      <div className="mx-auto max-w-7xl px-6 py-5">
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href.replace("#", "")
                      ? "bg-theme-card text-theme-primary"
                      : "text-theme-muted hover:bg-theme-card hover:text-theme-primary"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-5 border-t border-theme-border pt-5">
          <Button
            href="/resume.pdf"
            download
            onClick={onClose}
            className="w-full"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
