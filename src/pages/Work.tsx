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
  const hasPlacedRef = useRef(false);

  const placeIndicator = (animate: boolean) => {
    const tab = tablistRef.current?.querySelector<HTMLElement>(
      '[aria-selected="true"]',
    );
    const indicator = indicatorRef.current;
    if (!tab || !indicator) return;
    indicator.style.transition = animate ? "" : "none";
    indicator.style.transform = `translateX(${tab.offsetLeft}px)`;
    indicator.style.width = `${tab.offsetWidth}px`;
    indicator.style.opacity = "1";
    if (!animate) {
      void indicator.offsetWidth; // flush the jump before re-enabling
      indicator.style.transition = "";
    }
  };

  useLayoutEffect(() => {
    placeIndicator(hasPlacedRef.current);
    hasPlacedRef.current = true;
  }, [activeCategory]);

  // Tab widths change when the web font loads or the viewport resizes.
  useLayoutEffect(() => {
    const tablist = tablistRef.current;
    if (!tablist) return;
    let first = true; // ResizeObserver fires once on observe; skip it
    const observer = new ResizeObserver(() => {
      if (first) first = false;
      else placeIndicator(false);
    });
    observer.observe(tablist);
    tablist
      .querySelectorAll('[role="tab"]')
      .forEach((t) => observer.observe(t));
    return () => observer.disconnect();
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
            role="tab"
            aria-selected={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            className={`cursor-pointer pb-3 text-sm font-semibold tracking-widest uppercase transition-colors duration-200 ${
              activeCategory === cat
                ? "text-site-text"
                : "text-site-muted hover:text-site-text"
            }`}
          >
            {cat}
          </button>
        ))}
        <span
          ref={indicatorRef}
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-px left-0 h-0.5 bg-site-accent opacity-0 transition-[transform,width] duration-300 ease-out"
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
