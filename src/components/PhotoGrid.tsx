import { useState } from "react";
import FadeIn from "./FadeIn";
import Modal from "./Modal";
import StillsGallery from "../pages/components/StillsGallery";

interface Photo {
  src: string;
  width: number;
  height: number;
}

interface PhotoGridProps {
  photos: Photo[];
}

const MODAL_FADE_MS = 250;

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loadedSrcs, setLoadedSrcs] = useState<Set<string>>(new Set());

  const openModal = (i: number) => {
    setSelectedIndex(i);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedIndex(null), MODAL_FADE_MS);
  };

  const markLoaded = (src: string) => {
    setLoadedSrcs((prev) => new Set(prev).add(src));
  };

  return (
    <>
      <div className="columns-2 md:columns-3 gap-2">
        {photos.map((photo, i) => {
          const isLoaded = loadedSrcs.has(photo.src);
          return (
            <FadeIn key={photo.src} className="mb-2 break-inside-avoid">
              <div
                className="relative overflow-hidden bg-site-border cursor-pointer"
                style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                onClick={() => openModal(i)}
              >
                {!isLoaded && (
                  <div className="absolute inset-0 animate-pulse bg-site-border" />
                )}
                <img
                  src={photo.src}
                  alt={`Photograph ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => markLoaded(photo.src)}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </FadeIn>
          );
        })}
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <StillsGallery
          key={selectedIndex ?? 0}
          images={photos.map((photo) => photo.src)}
          initialIndex={selectedIndex ?? 0}
          contain
        />
      </Modal>
    </>
  );
}
