export default function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden overscroll-x-none h-screen"
    >
      <iframe
        src="https://player.vimeo.com/video/1196185449?background=1&autoplay=1&autopause=0"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full border-0 pointer-events-none"
        title="Showreel"
        loading="eager"
        style={{ width: "max(100vw, 177.78vh)" }}
        allow="autoplay; fullscreen; picture-in-picture"
      />
    </section>
  );
}
