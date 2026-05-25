import { useState, useRef } from "react";

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
          key={i}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${contain ? "object-contain" : "object-cover"} ${i === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      <button
        onClick={() => goTo((current - 1 + images.length) % images.length)}
        className={`absolute cursor-pointer left-2 sm:left-4 top-1/2 -translate-y-1/2 transition-opacity duration-200 text-white bg-black/40 rounded-full w-9 h-9 flex items-center justify-center text-xl ${mobileControls || hovered ? "opacity-100" : "opacity-0"}`}
      >
        ‹
      </button>
      <button
        onClick={() => goTo((current + 1) % images.length)}
        className={`absolute cursor-pointer right-2 sm:right-4 top-1/2 -translate-y-1/2 transition-opacity duration-200 text-white bg-black/40 rounded-full w-9 h-9 flex items-center justify-center text-xl ${mobileControls || hovered ? "opacity-100" : "opacity-0"}`}
      >
        ›
      </button>

    </div>

    <div className="flex justify-center gap-2">
      {images.map((_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          className={`w-2 h-2 rounded-full transition-opacity bg-white cursor-pointer duration-300 ${i === current ? "opacity-100" : "opacity-40"}`}
        />
      ))}
    </div>
    </div>
  );
}
