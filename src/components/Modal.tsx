import { useEffect, useState, type ReactNode } from "react";

const FADE_MS = 250;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [visible, setVisible] = useState(false);
  // Children stay mounted through the fade-out so they don't vanish
  // mid-transition, then unmount so a closed modal keeps no state or listeners.
  const [mounted, setMounted] = useState(isOpen);
  if (isOpen && !mounted) setMounted(true);

  useEffect(() => {
    if (isOpen) {
      // Lock <html> only: overflow on <body> makes it a scroll container,
      // which would break the sticky header while the modal is open.
      document.documentElement.style.overflow = "hidden";
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }
    const raf = requestAnimationFrame(() => setVisible(false));
    const t = setTimeout(() => {
      document.documentElement.style.overflow = "";
      setMounted(false);
    }, FADE_MS);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 transition-opacity ease-in-out ${visible ? "" : "pointer-events-none"}`}
      style={{ opacity: visible ? 1 : 0, transitionDuration: `${FADE_MS}ms` }}
      onClick={onClose}
    >
      {/* isolate confines the content's z-indexes (gallery images, arrows) to
          their own stacking context so they can never cover the close button. */}
      <div
        className="isolate w-full max-w-4xl flex flex-col gap-6 py-8"
        onClick={(e) => e.stopPropagation()}
      >
        {mounted && children}
      </div>
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-10 text-white/70 hover:text-white transition-colors duration-200 cursor-pointer text-2xl leading-none"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}
