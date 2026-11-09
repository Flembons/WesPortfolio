import { wsrvSrcSet } from "../lib/wsrv";

interface ProjectProps {
  title: string;
  images: [string, string, string];
  onClick?: () => void;
}

export default function Project({ title, images, onClick }: ProjectProps) {
  // Spans rather than divs/headings so the markup stays valid inside <button>.
  const content = (
    <>
      <span className="grid grid-cols-3 w-full gap-2">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            srcSet={wsrvSrcSet(src)}
            sizes="33vw"
            alt={`${title} still ${i + 1}`}
            width={1200}
            height={675}
            loading="lazy"
            decoding="async"
            className="w-full aspect-video object-cover"
          />
        ))}
      </span>
      <span className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="project-title">{title}</span>
      </span>
    </>
  );

  // A visually hidden heading keeps the list navigable by heading for screen
  // readers, since a heading can't sit inside the button.
  return (
    <>
      <h3 className="sr-only">{title}</h3>
      {/* Only projects with a video or stills open the modal, so only those
          are buttons; the rest are plain blocks without a pointer cursor. */}
      {onClick ? (
        <button
          type="button"
          onClick={(e) => {
            // Safari doesn't focus buttons on click; focusing here lets the
            // modal return focus to this project when it closes.
            e.currentTarget.focus();
            onClick();
          }}
          aria-label={title}
          className="relative group block w-full cursor-pointer focus-ring"
        >
          {content}
        </button>
      ) : (
        <div className="relative group">{content}</div>
      )}
    </>
  );
}
