interface HeaderProps {
  stuck: boolean;
}

export default function Header({ stuck }: HeaderProps) {
  return (
    <header
      className={`left-0 w-full z-50 flex justify-between items-center bg-transparent  py-2 px-4 sm:px-6 transition-colors duration-300 ${
        stuck ? "fixed top-0" : "absolute top-1/2 -translate-y-1/2"
      }`}
    >
      <nav className="flex w-full items-center justify-between text-lg">
        <a href="#work" className="header-btn">
          Work
        </a>
        <a href="#home" className="header-btn text-xl">
          Weston Flemmons
        </a>
        <a href="#info" className="header-btn">
          Info
        </a>
      </nav>
    </header>
  );
}
