import { wsrvSrcSet } from "../lib/wsrv";

interface ProjectProps {
  title: string;
  images: [string, string, string];
  onClick?: () => void;
}

export default function Project({ title, images, onClick }: ProjectProps) {
  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
      <div className="grid grid-cols-3 w-full gap-2">
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
      </div>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <h3 className="project-title">{title}</h3>
      </div>
    </div>
  );
}
