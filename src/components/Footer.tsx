import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="sticky top-0 text-xs z-50 flex h-16 justify-between items-start p-4 w-full bg-black">
      <div className="flex gap-2 text-site-text">
        <span>&copy; {new Date().getFullYear()}</span>
        <span>Weston Flemmons</span>
      </div>
      <span className="text-site-muted">New York, New York</span>
      <div className="flex gap-4">
        <a
          href="mailto:info@wesflemmons.com"
          className="text-site-text hover:text-site-accent transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
        <a
          href="https://www.instagram.com/westonflemmons"
          target="_blank"
          rel="noopener noreferrer"
          className="text-site-text hover:text-site-accent transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>
    </footer>
  );
}
