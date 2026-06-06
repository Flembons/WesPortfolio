import { useState } from "react";
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
  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 250);
  };

  return (
    <div className="">
      <div
        role="tablist"
        aria-label="Work categories"
        className="flex mx-4 gap-8 mb-10 border-b border-site-border"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            className={`cursor-pointer pb-3 text-sm font-semibold tracking-widest uppercase transition-colors duration-200 ${
              activeCategory === cat
                ? "text-site-text border-b-2 border-site-accent -mb-px"
                : "text-site-muted hover:text-site-text"
            }`}
          >
            {cat}
          </button>
        ))}
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
        {selectedProject?.videoUrl ? (
          <VideoPlayer videoUrl={selectedProject.videoUrl} />
        ) : (
          <StillsGallery images={selectedProject?.allImages ?? []} />
        )}
        <div className="flex flex-col gap-3">
          <h2 className="project-title">{selectedProject?.title}</h2>
          {selectedProject?.description && (
            <p className="text-site-muted leading-relaxed">
              {selectedProject.description}
            </p>
          )}
        </div>
      </Modal>
    </div>
  );
}
