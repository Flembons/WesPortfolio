import { useState, useEffect } from "react";
import FadeIn from "./FadeIn";
import StillsGallery from "../pages/components/StillsGallery";

interface PhotoGridProps {
  photos: string[];
}

const FADE_MS = 250;

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  const openModal = (i: number) => {
    setSelectedIndex(i);
    requestAnimationFrame(() => setVisible(true));
  };

  const closeModal = () => {
    setVisible(false);
    setTimeout(() => setSelectedIndex(null), FADE_MS);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedIndex]);

  return (
    <>
      <FadeIn>
        <div className="columns-2 md:columns-3 gap-2">
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              onClick={() => openModal(i)}
              className="w-full mb-2 cursor-pointer"
            />
          ))}
        </div>
      </FadeIn>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 transition-opacity ease-in-out"
          style={{ opacity: visible ? 1 : 0, transitionDuration: `${FADE_MS}ms` }}
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200 cursor-pointer text-2xl leading-none"
            aria-label="Close"
          >
            ✕
          </button>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <StillsGallery
              images={photos}
              initialIndex={selectedIndex}
              interval={999999}
              contain
            />
          </div>
        </div>
      )}
    </>
  );
}
