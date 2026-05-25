import { useEffect, useState, type ReactNode } from "react";

const FADE_MS = 250;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }
    const raf = requestAnimationFrame(() => setVisible(false));
    const t = setTimeout(() => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
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
      <button
        onClick={onClose}
        className="fixed top-4 right-4 text-white/70 hover:text-white transition-colors duration-200 cursor-pointer text-2xl leading-none z-10"
        aria-label="Close"
      >
        ✕
      </button>
      <div
        className="w-full max-w-4xl flex flex-col gap-6 py-8"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
