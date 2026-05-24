import { useState } from "react";
import FadeIn from "../components/FadeIn";
import Project from "../components/Project";

type Category = "Commercial" | "Narrative" | "Music Video";

interface Project {
  title: string;
  images: [string, string, string];
}

const PROJECTS: Record<Category, Project[]> = {
  Commercial: [],
  Narrative: [
    {
      title: "Bay Ridge to the Bronx",
      images: [
        "/images/br2tb/still1.jpg",
        "/images/br2tb/still2.jpg",
        "/images/br2tb/still3.jpg",
      ],
    },
    {
      title: "BURP",
      images: [
        "/images/burp/still1.jpg",
        "/images/burp/still2.jpg",
        "/images/burp/still3.jpg",
      ],
    },
  ],
  "Music Video": [],
};

const CATEGORIES: Category[] = ["Commercial", "Narrative", "Music Video"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<Category>("Narrative");
  const projects = PROJECTS[activeCategory];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex gap-8 mb-10 border-b border-site-border">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-3 text-sm tracking-widest uppercase transition-colors duration-200 ${
              activeCategory === cat
                ? "text-site-text border-b-2 border-site-accent -mb-px"
                : "text-site-muted hover:text-site-text"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-12">
        {projects.length === 0 ? (
          <p className="text-site-muted text-sm tracking-wide">Coming soon.</p>
        ) : (
          projects.map((project) => (
            <FadeIn key={project.title}>
              <Project title={project.title} images={project.images} />
            </FadeIn>
          ))
        )}
      </div>
    </div>
  );
}
