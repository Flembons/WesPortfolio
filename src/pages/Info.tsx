import FadeIn from "../components/FadeIn";

export default function Info() {
  return (
    <div className="flex flex-col gap-8 px-3 pb-16">
      <FadeIn delay={0}>
        <section className="flex flex-col gap-2">
          <div>
            <p className="text-sm text-site-muted tracking-widest uppercase mb-3">
              About
            </p>
            <hr className="border-site-border" />
          </div>
          <p className="text-xl leading-relaxed mt-4">
            Weston Flemmons is a New York based cinematographer with over four
            years of experience. He is originally from Memphis, TN — with a
            background in skateboarding and documentary filmmaking.
          </p>
          <p className="text-xl leading-relaxed mt-4">
            Weston earned his Bachelor of Arts in film and video production at
            the University of Memphis and has been working in New York since
            2023 as Director of Photography and First Assistant Camera. He has
            worked with clients such as Nike, Adidas, Resy, Glow Recipe, and
            Schön! Magazine.
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={150}>
        <section className="flex flex-col gap-2">
          <div>
            <p className="text-sm text-site-muted tracking-widest uppercase mb-3">
              Contact
            </p>
            <hr className="border-site-border" />
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <a
              href="mailto:info@westonflemmons.com"
              className="hover:text-site-accent transition-colors duration-300"
            >
              info@westonflemmons.com
            </a>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
