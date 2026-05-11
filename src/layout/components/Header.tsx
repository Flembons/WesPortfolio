import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavDropdown from "./NavDropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

interface NavItem {
  to?: string;
  label: string;
  children?: { to: string; label: string }[];
}

const NAV_LINKS: NavItem[] = [
  { to: "/", label: "Home" },
  {
    label: "Film",
    children: [
      { to: "/film/br2tb", label: "Bay Ridge to the Bronx" },
      { to: "/film/burp", label: "BURP" },
    ],
  },
  { to: "/documentary", label: "Documentary" },
  { to: "/promos", label: "Promos" },
  { to: "/contact", label: "Contact" },
];

const OPEN_DELAYS = [60, 120, 180, 240, 300];
const CLOSE_DELAYS = [120, 90, 60, 30, 0];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );

  const openMenu = () => {
    setOpenMobileDropdown(null);
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsClosing(true);
  };
  const toggleMenu = () => (isMenuOpen ? closeMenu() : openMenu());

  const handleOverlayAnimationEnd = (e: React.AnimationEvent<HTMLElement>) => {
    if (isClosing && e.target === e.currentTarget) {
      setIsMenuOpen(false);
      setIsClosing(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsClosing(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex h-16 justify-between items-center p-4 w-full border-b border-site-border bg-site-bg">
      <Link to="/" className="text-xl font-medium">
        Wes Flemmons
      </Link>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center justify-between gap-6 text-lg">
        <Link to="/" className="header-btn">
          Home
        </Link>
        <NavDropdown
          label="Film"
          items={[
            { to: "/film/br2tb", label: "Bay Ridge to the Bronx" },
            { to: "/film/burp", label: "BURP" },
          ]}
        />
        <Link to="/documentary" className="header-btn">
          Documentary
        </Link>
        <Link to="/promos" className="header-btn">
          Promos
        </Link>
        <Link to="/contact" className="header-btn">
          Contact
        </Link>
      </nav>

      {/* Mobile navigation */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className={`flex flex-col cursor-pointer transition-all duration-300 ease-in-out ${isMenuOpen && !isClosing ? "space-y-0" : "space-y-1"}`}
        >
          <div
            className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out origin-center ${isMenuOpen && !isClosing ? "translate-y-0 rotate-45" : ""}`}
          />
          <div
            className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out origin-center ${isMenuOpen && !isClosing ? "-translate-y-0.5 -rotate-45" : ""}`}
          />
        </button>

        {isMenuOpen && (
          <nav
            className={`fixed top-16 inset-0 bg-linear-to-b from-site-bg to-site-border z-50 flex flex-col items-start justify-center gap-3 p-8 ${isClosing ? "mobile-nav-overlay-exit" : "mobile-nav-overlay"}`}
            onAnimationEnd={handleOverlayAnimationEnd}
          >
            {NAV_LINKS.map((item, i) =>
              item.children ? (
                <div
                  key={item.label}
                  className={`${isClosing ? "mobile-nav-link-exit" : "mobile-nav-link"}`}
                  style={{
                    animationDelay: `${isClosing ? CLOSE_DELAYS[i] : OPEN_DELAYS[i]}ms`,
                  }}
                >
                  <button
                    className="header-btn flex items-center gap-1 cursor-pointer"
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === item.label ? null : item.label,
                      )
                    }
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={`w-8 h-8 transition-transform duration-300 ${openMobileDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows,padding] duration-300 ease-in-out ${openMobileDropdown === item.label ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr] pt-0"}`}
                  >
                    <div className="min-h-0 flex flex-col gap-2 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="text-2xl font-medium text-site-text hover:text-site-accent transition-colors duration-300"
                          onClick={closeMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to!}
                  className={`header-btn ${isClosing ? "mobile-nav-link-exit" : "mobile-nav-link"}`}
                  style={{
                    animationDelay: `${isClosing ? CLOSE_DELAYS[i] : OPEN_DELAYS[i]}ms`,
                  }}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
