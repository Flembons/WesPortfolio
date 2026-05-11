import { wsrv } from "../lib/wsrv";
import FadeIn from "../components/FadeIn";

const CONTACT_IMG =
  "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AAjVG8Gm1_KWfe4jQdDvKJU/CharlieDay1.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=li26do9i&raw=1";

export default function Contact() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center max-w-2xl mx-auto pt-8">
      <FadeIn delay={0}>
        <div className="aspect-video overflow-hidden rounded-md shadow-md">
          <img
            src={wsrv(CONTACT_IMG)}
            alt=""
            className="w-full h-full object-cover object-[center_20%]"
          />
        </div>
      </FadeIn>

      <FadeIn delay={150}>
        <a
          className="w-fit px-8 py-4 border bg-site-bg text-site-accent rounded-md shadow-md hover:text-site-text transition-colors duration-300"
          href="mailto:info@westonflemmons.com"
        >
          Contact Me
        </a>
      </FadeIn>
    </div>
  );
}
