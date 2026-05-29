interface ProjectProps {
  title: string;
  images: [string, string, string];
  onClick?: () => void;
}

export default function Project({ title, images, onClick }: ProjectProps) {
  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
      <div className="grid grid-cols-3 w-full gap-2">
        <img
          src={images[0]}
          alt={`${title} still 1`}
          className="w-full aspect-video object-cover"
        />
        <img
          src={images[1]}
          alt={`${title} still 2`}
          className="w-full aspect-video object-cover"
        />
        <img
          src={images[2]}
          alt={`${title} still 3`}
          className="w-full aspect-video object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <h3 className="text-xl italic text-site-text">{title}</h3>
      </div>
    </div>
  );
}
