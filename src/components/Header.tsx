export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 justify-between items-center p-4 w-full bg-transparent">
      <nav className="flex w-full items-center justify-between text-lg">
        <a href="#work" className="header-btn">
          Work
        </a>
        <a
          href="#home"
          className="text-xl font-medium text-site-text hover:text-site-accent transition-colors duration-300"
        >
          Wes Flemmons
        </a>
        <a href="#info" className="header-btn">
          Info
        </a>
      </nav>
    </header>
  );
}
