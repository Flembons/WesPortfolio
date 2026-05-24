interface ProjectProps {
  title: string;
  images: [string, string, string];
}

export default function Project({ title, images }: ProjectProps) {
  return (
    <div className="relative group cursor-pointer">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${title} still ${i + 1}`}
            className="w-full aspect-video object-cover"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <h3 className="text-xl italic text-site-text">{title}</h3>
      </div>
    </div>
  );
}
