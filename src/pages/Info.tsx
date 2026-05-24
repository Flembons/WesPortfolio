import FadeIn from "../components/FadeIn";

export default function Info() {
  return (
    <div className="flex flex-col gap-8 px-3">
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
              href="mailto:hello@westonflemmons.com"
              className="hover:text-site-accent transition-colors duration-300"
            >
              hello@westonflemmons.com
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/westonflemmons"
                className="hover:text-site-accent transition-colors duration-300"
              >
                Instagram
              </a>
              <span className="text-site-muted">·</span>
              <a
                href="https://vimeo.com/westonflemmons"
                className="hover:text-site-accent transition-colors duration-300"
              >
                Vimeo
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={300}>
        <section className="flex flex-col gap-2">
          <div>
            <p className="text-sm text-site-muted tracking-widest uppercase mb-3">
              Equipment
            </p>
            <hr className="border-site-border" />
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 mt-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Camera</h3>
              <p className="text-site-muted">—</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Lenses</h3>
              <p className="text-site-muted">—</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Monitoring</h3>
              <p className="text-site-muted">—</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Support</h3>
              <p className="text-site-muted">—</p>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
