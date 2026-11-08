// Sticky header that starts vertically centered over the h-screen Home section
// and pins to the top once scrolled to. The fixed height (h-12 = 3rem) keeps the
// centering math exact: the top margin puts it at 50vh - half its height, and
// the negative bottom margin cancels its whole footprint so Home still starts
// at the top of the page.
export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-12 mt-[calc(50vh-1.5rem)] -mb-[calc(50vh+1.5rem)] w-full flex justify-between items-center bg-transparent px-4 sm:px-6">
      <nav className="flex w-full items-center justify-between text-lg">
        <a href="#work" className="header-btn">
          Work
        </a>
        <h1>
          <a href="#home" className="header-btn text-xl">
            Weston Flemmons
          </a>
        </h1>
        <a href="#info" className="header-btn">
          Info
        </a>
      </nav>
    </header>
  );
}
