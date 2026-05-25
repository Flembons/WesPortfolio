import { useState } from "react";
import FadeIn from "./FadeIn";
import Modal from "./Modal";
import StillsGallery from "../pages/components/StillsGallery";

interface PhotoGridProps {
  photos: string[];
}

const MODAL_FADE_MS = 250;

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (i: number) => {
    setSelectedIndex(i);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedIndex(null), MODAL_FADE_MS);
  };

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

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <StillsGallery
          key={selectedIndex ?? 0}
          images={photos}
          initialIndex={selectedIndex ?? 0}
          contain
        />
      </Modal>
    </>
  );
}
