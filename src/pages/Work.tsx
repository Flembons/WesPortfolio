import { useLayoutEffect, useRef, useState } from "react";
import FadeIn from "../components/FadeIn";
import Modal from "../components/Modal";
import Project from "../components/Project";
import PhotoGrid from "../components/PhotoGrid";
import VideoPlayer from "../components/VideoPlayer";
import StillsGallery from "./components/StillsGallery";
import { PROJECTS, PHOTOGRAPHY_PHOTOS } from "../data";
import type { Category, Project as ProjectData } from "../data";

const CATEGORIES: Category[] = ["Selected", "Narrative", "Photography"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<Category>("Selected");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project: ProjectData) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  // Slide the accent bar under the active tab. Written straight to the DOM so
  // the first placement (and resizes) can skip the transition.
  const tablistRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const tabRefs = useRef<Partial<Record<Category, HTMLButtonElement>>>({});
  const activeTabRef = useRef<HTMLButtonElement | null>(null);
  const hasPlacedRef = useRef(false);

  const placeIndicator = (animate: boolean) => {
    const tablist = tablistRef.current;
    const tab = activeTabRef.current;
    const indicator = indicatorRef.current;
    if (!tablist || !tab || !indicator) return;

    // Unrounded, so the 2px bar lines up exactly with fractional text widths.
    const tabRect = tab.getBoundingClientRect();
    const left = tabRect.left - tablist.getBoundingClientRect().left;
    const width = tabRect.width;
    const transform = `translateX(${left}px)`;
    const widthPx = `${width}px`;
    if (
      indicator.style.transform === transform &&
      indicator.style.width === widthPx
    ) {
      return;
    }

    indicator.style.transition = animate ? "" : "none";
    indicator.style.transform = transform;
    indicator.style.width = widthPx;
    indicator.style.opacity = "1";
    if (!animate) {
      // Force a style flush so the jump lands before the transition comes back.
      // A method call, because the React Compiler drops a bare property read.
      indicator.getBoundingClientRect();
      indicator.style.transition = "";
    }
  };

  useLayoutEffect(() => {
    activeTabRef.current = tabRefs.current[activeCategory] ?? null;
    placeIndicator(hasPlacedRef.current);
    hasPlacedRef.current = true;
  }, [activeCategory]);

  // Tab widths change when the web font swaps in. Only the tabs are observed:
  // they're left-aligned, so the tablist's own width (which shifts when a
  // scrollbar appears mid-switch) never moves them. The initial callback is a
  // no-op unless the font already swapped, in which case it corrects the bar.
  useLayoutEffect(() => {
    const observer = new ResizeObserver(() => placeIndicator(false));
    Object.values(tabRefs.current).forEach((tab) => observer.observe(tab));
    let cancelled = false;
    void document.fonts.ready.then(() => {
      if (!cancelled) placeIndicator(false);
    });
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  return (
    <div className="">
      <div
        ref={tablistRef}
        role="tablist"
        aria-label="Work categories"
        className="relative flex mx-4 gap-8 mb-10 border-b border-site-border"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            ref={(el) => {
              if (el) tabRefs.current[cat] = el;
            }}
            role="tab"
            aria-selected={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            className={`cursor-pointer pb-3 text-sm font-semibold tracking-widest uppercase transition-[color,translate] duration-300 ease-out motion-reduce:transition-none ${
              activeCategory === cat
                ? "text-site-text -translate-y-px"
                : "text-site-muted hover:text-site-text"
            }`}
          >
            {cat}
          </button>
        ))}
        <span
          ref={indicatorRef}
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-px left-0 h-0.5 bg-site-accent opacity-0 transition-[transform,width] duration-300 ease-out motion-reduce:transition-none"
        />
      </div>

      {CATEGORIES.map((cat) => (
        <div
          key={cat}
          className={`flex sm:px-4 flex-col gap-6 ${activeCategory === cat ? "" : "hidden"}`}
        >
          {cat === "Photography" ? (
            <PhotoGrid photos={PHOTOGRAPHY_PHOTOS} />
          ) : (
            PROJECTS[cat].map((project) => (
              <FadeIn key={project.title}>
                <Project
                  title={project.title}
                  images={project.images}
                  onClick={
                    project.allImages || project.videoUrl
                      ? () => openModal(project)
                      : undefined
                  }
                />
              </FadeIn>
            ))
          )}
        </div>
      ))}

      <Modal isOpen={modalOpen} onClose={closeModal}>
        {selectedProject && (
          <>
            {selectedProject.videoUrl ? (
              <VideoPlayer
                key={selectedProject.title}
                videoUrl={selectedProject.videoUrl}
              />
            ) : (
              <StillsGallery
                key={selectedProject.title}
                images={selectedProject.allImages ?? []}
              />
            )}
            <div className="flex flex-col gap-3">
              <h2 className="project-title">{selectedProject.title}</h2>
              {selectedProject.description && (
                <p className="text-site-muted leading-relaxed">
                  {selectedProject.description}
                </p>
              )}
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}
