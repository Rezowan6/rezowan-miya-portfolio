import { X } from "lucide-react";
import { navItems } from "../../config/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="border-t border-theme-border bg-theme-background lg:hidden">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-medium text-theme-muted">
            Navigation
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="
              rounded-lg
              p-2
              text-theme-muted
              transition-colors
              hover:bg-theme-card
              hover:text-theme-primary
            "
          >
            <X size={20} />
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="
                    block
                    rounded-lg
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-theme-muted
                    transition-all
                    duration-200
                    hover:bg-theme-card
                    hover:text-theme-primary
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-5 border-t border-theme-border pt-5">
          <a
            href="/resume.pdf"
            download
            onClick={onClose}
            className="
              flex
              w-full
              items-center
              justify-center
              rounded-lg
              bg-theme-primary
              px-5
              py-3
              text-sm
              font-semibold
              text-theme-button-text
              transition-all
              duration-200
              hover:bg-theme-primary-hover
            "
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
