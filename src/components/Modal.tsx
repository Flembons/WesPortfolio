import { useEffect, useRef, useState, type ReactNode } from "react";

const FADE_MS = 250;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Accessible name announced by screen readers when the dialog opens.
  label: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, label, children }: ModalProps) {
  const [visible, setVisible] = useState(false);
  // Children stay mounted through the fade-out so they don't vanish
  // mid-transition, then unmount so a closed modal keeps no state or listeners.
  const [mounted, setMounted] = useState(isOpen);
  if (isOpen && !mounted) setMounted(true);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      // Lock <html> only: overflow on <body> makes it a scroll container,
      // which would break the sticky header while the modal is open.
      document.documentElement.style.overflow = "hidden";
      // showModal() puts the dialog in the top layer, makes the rest of the
      // page inert and keeps focus inside; close() hands focus back to
      // whatever had it before.
      if (!dialog.open) dialog.showModal();
      closeRef.current?.focus();
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }
    const raf = requestAnimationFrame(() => setVisible(false));
    const t = setTimeout(() => {
      dialog.close();
      document.documentElement.style.overflow = "";
      setMounted(false);
    }, FADE_MS);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      aria-label={label}
      // Escape: hold the native close so the fade-out can run first. If the
      // browser closes it anyway, onClose keeps the parent in sync.
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClose={onClose}
      className={`fixed inset-0 m-0 size-full max-w-none max-h-none bg-black/90 text-site-text backdrop:bg-transparent open:flex items-center justify-center p-4 transition-opacity ease-in-out ${visible ? "" : "pointer-events-none"}`}
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
        ref={closeRef}
        onClick={onClose}
        className="fixed top-4 right-4 z-10 text-white/70 hover:text-white focus-visible:text-white transition-colors duration-200 cursor-pointer text-2xl leading-none"
        aria-label="Close"
      >
        ✕
      </button>
    </dialog>
  );
}
