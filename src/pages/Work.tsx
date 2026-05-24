import { useState } from "react";
import FadeIn from "../components/FadeIn";

type Category = "Commercial" | "Narrative" | "Music Video";

interface Project {
  title: string;
  images: [string, string, string];
  description?: string;
}

const PROJECTS: Record<Category, Project[]> = {
  Commercial: [],
  Narrative: [
    {
      title: "Bay Ridge to the Bronx",
      images: [
        "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AHoqTlxc6EpBgzYGUen21oQ/BR2TB%20STILLS/COLOR%2002_01_00_17_13.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=aahzlxb7&raw=1",
        "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AIr-_6DjizOWJjEnYDgGcCo/BR2TB%20STILLS/COLOR%2002_01_00_57_19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=i94cq173&raw=1",
        "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AN8NO8sYQ8lWojFUOjyHKB8/BR2TB%20STILLS/COLOR%2002_01_01_48_01.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=3jnfs2yf&raw=1",
      ],
      description:
        "This short film follows Tony, a young man from Bay Ridge whose parents are away. After attending confession at his local church, he receives a call from his father with difficult news: Tony's grandfather is gravely ill and nearing the end of his life. Tasked with representing his family, Tony must travel to the Bronx to witness his grandfather's final moments.",
    },
    {
      title: "BURP",
      images: [
        "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AG9JtUNBcJGgUWiaEXTYz6Q/BURP%20stills/Screenshot%202026-04-20%20at%205.29.38%E2%80%AFPM%20(2).png?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ihxd7inq&raw=1",
        "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AG7KirTJd4QB1s5RzmbNAI8/BURP%20stills/Screenshot%202026-04-20%20at%205.37.26%E2%80%AFPM%20(2).png?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ikq2jelo&raw=1",
        "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADg-e7NQWY8FEsMMlCCQNGg/BURP%20stills/Screenshot%202026-04-20%20at%205.34.11%E2%80%AFPM%20(2).png?rlkey=jbpnq43atuaism6bl3se8k0uy&st=8753tc9e&raw=1",
      ],
      description:
        "When a young woman hesitates on the day of her abortion, she's pulled into the surreal underworld of Manhattan's Chinatown — where an opera singer, two bumbling thugs, and a cat-Xanax ring fronting as a dumpling shop blur the lines between grief and absurdity.",
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
              <div className="flex flex-col gap-3">
                <h3 className="text-lg italic">{project.title}</h3>
                <div className="grid grid-cols-3 gap-2">
                  {project.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.title} still ${i + 1}`}
                      className="w-full aspect-video object-cover"
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))
        )}
      </div>
    </div>
  );
}
