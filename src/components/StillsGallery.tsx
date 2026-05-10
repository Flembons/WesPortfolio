import { useState, useEffect, useCallback, useRef } from "react";

function wsrv(url: string, width = 1200, quality = 80): string {
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=${quality}&output=webp`;
}

interface StillsGalleryProps {
  images: string[];
  interval?: number;
}

export default function StillsGallery({
  images,
  interval = 5000,
}: StillsGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [mobileControls, setMobileControls] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const controlsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showControlsBriefly = () => {
    setMobileControls(true);
    if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current);
    controlsTimerRef.current = setTimeout(() => setMobileControls(false), 2000);
  };

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, interval);
  }, [images.length, interval]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goTo = (index: number) => {
    setCurrent(index);
    startTimer();
  };

  return (
    <div
      className="relative w-full aspect-video overflow-hidden group bg-black rounded-md shadow-md"
      onMouseEnter={() => {
        if (timerRef.current) clearInterval(timerRef.current);
      }}
      onMouseLeave={startTimer}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
          goTo(diff > 0 ? (current + 1) % images.length : (current - 1 + images.length) % images.length);
        } else {
          showControlsBriefly();
        }
        touchStartX.current = null;
      }}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={wsrv(src)}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      <button
        onClick={() => goTo((current - 1 + images.length) % images.length)}
        className={`absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 ${mobileControls ? "opacity-100" : "opacity-0"} md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 text-white bg-black/40 rounded-full w-9 h-9 flex items-center justify-center text-xl`}
      >
        ‹
      </button>
      <button
        onClick={() => goTo((current + 1) % images.length)}
        className={`absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 ${mobileControls ? "opacity-100" : "opacity-0"} md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 text-white bg-black/40 rounded-full w-9 h-9 flex items-center justify-center text-xl`}
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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
