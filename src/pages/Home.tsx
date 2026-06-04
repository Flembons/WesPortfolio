import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";

export default function Home() {
  const sectionRef = useRef<HTMLElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const threshold = sectionRef.current.offsetHeight / 2 - 32;
        setStuck(window.scrollY >= threshold);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden overscroll-x-none h-screen"
    >
      <Header stuck={stuck} />
      <iframe
        src="https://player.vimeo.com/video/1196185449?background=1&autoplay=1&autopause=0"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full border-0 pointer-events-none"
        loading="eager"
        style={{ width: "max(100vw, 177.78vh)" }}
        allow="autoplay; fullscreen; picture-in-picture"
      />
    </section>
  );
}
