import { useState, useRef, useEffect } from "react";

interface StillsGalleryProps {
  images: string[];
  initialIndex?: number;
  contain?: boolean;
}

export default function StillsGallery({
  images,
  initialIndex = 0,
  contain = false,
}: StillsGalleryProps) {
  const [current, setCurrent] = useState(initialIndex);
  const [hovered, setHovered] = useState(false);
  const [mobileControls, setMobileControls] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const controlsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showControlsBriefly = () => {
    setMobileControls(true);
    if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current);
    controlsTimerRef.current = setTimeout(() => setMobileControls(false), 2000);
  };

  const goTo = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")
        setCurrent((c) => (c - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length]);

  return (
    <div className="flex flex-col gap-3 w-full">
      <div
        className={`relative w-full overflow-hidden rounded-md shadow-md ${contain ? "h-[80vh]" : "aspect-video bg-black"}`}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const diff = touchStartX.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 40) {
            goTo(
              diff > 0
                ? (current + 1) % images.length
                : (current - 1 + images.length) % images.length,
            );
          } else {
            showControlsBriefly();
          }
          touchStartX.current = null;
        }}
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Still ${i + 1} of ${images.length}`}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${contain ? "object-contain" : "object-cover"} ${i === current ? "opacity-100 z-10" : "opacity-0"}`}
          />
        ))}

        <button
          onClick={() => goTo((current - 1 + images.length) % images.length)}
          aria-label="Previous image"
          className={`absolute z-20 cursor-pointer left-2 sm:left-4 top-1/2 -translate-y-1/2 transition-opacity duration-200 text-white bg-black/40 rounded-full w-9 h-9 flex items-center justify-center ${mobileControls || hovered ? "opacity-100" : "opacity-0"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={() => goTo((current + 1) % images.length)}
          aria-label="Next image"
          className={`absolute z-20 cursor-pointer right-2 sm:right-4 top-1/2 -translate-y-1/2 transition-opacity duration-200 text-white bg-black/40 rounded-full w-9 h-9 flex items-center justify-center ${mobileControls || hovered ? "opacity-100" : "opacity-0"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center gap-2">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => goTo(i)}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === current}
            className={`w-2 h-2 rounded-full transition-opacity bg-white cursor-pointer duration-400 ease-in-out ${i === current ? "opacity-100" : "opacity-40"}`}
          />
        ))}
      </div>
    </div>
  );
}
