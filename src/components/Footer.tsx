// Icons are inlined from Font Awesome Free 7 (CC BY 4.0, fontawesome.com/license/free)
// rather than pulling in the Font Awesome packages for two icons.
function EnvelopeIcon() {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      aria-hidden="true"
      className="h-[1.25em] w-[1.25em]"
    >
      <path d="M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      aria-hidden="true"
      className="h-[1.25em] w-[1.09em]"
    >
      <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="text-xs flex h-16 justify-between items-start p-4 w-full bg-black">
      <div className="flex gap-2 text-site-text">
        <span>&copy; {new Date().getFullYear()}</span>
        <span>Weston Flemmons</span>
      </div>
      <span className="text-site-muted">New York, New York</span>
      <div className="flex gap-4">
        <a
          href="mailto:info@westonflemmons.com"
          aria-label="Email"
          className="text-site-text hover:text-site-accent transition-colors duration-300"
        >
          <EnvelopeIcon />
        </a>
        <a
          href="https://www.instagram.com/westonflemmons"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="text-site-text hover:text-site-accent transition-colors duration-300"
        >
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}
