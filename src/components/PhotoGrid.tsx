import { useState } from "react";
import FadeIn from "./FadeIn";
import Modal from "./Modal";
import StillsGallery from "../pages/components/StillsGallery";
import { wsrvSrcSet } from "../lib/wsrv";

interface Photo {
  src: string;
  width: number;
  height: number;
}

interface PhotoGridProps {
  photos: Photo[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (i: number) => {
    setSelectedIndex(i);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="columns-2 md:columns-3 gap-2">
        {photos.map((photo, i) => (
          <FadeIn key={photo.src} className="mb-2 break-inside-avoid">
            <GridPhoto
              photo={photo}
              alt={`Photograph ${i + 1}`}
              onClick={() => openModal(i)}
            />
          </FadeIn>
        ))}
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <StillsGallery
          key={selectedIndex ?? 0}
          images={photos.map((photo) => photo.src)}
          dimensions={photos}
          initialIndex={selectedIndex ?? 0}
          contain
        />
      </Modal>
    </>
  );
}

interface GridPhotoProps {
  photo: Photo;
  alt: string;
  onClick: () => void;
}

// Each photo tracks its own load state so one image finishing doesn't
// re-render the whole grid.
function GridPhoto({ photo, alt, onClick }: GridPhotoProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative overflow-hidden bg-site-border cursor-pointer"
      style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
      onClick={onClick}
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-site-border" />
      )}
      <img
        src={photo.src}
        srcSet={wsrvSrcSet(photo.src)}
        sizes="(min-width: 768px) 33vw, 50vw"
        alt={alt}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
