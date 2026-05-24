import { useState } from "react";
import FadeIn from "../components/FadeIn";
import Project from "../components/Project";
import PhotoGrid from "../components/PhotoGrid";

type Category = "Selected" | "Narrative" | "Photography";

interface Project {
  title: string;
  images: [string, string, string];
}

const PROJECTS: Record<Category, Project[]> = {
  Selected: [
    {
      title: "NEVERHOME — Perro",
      images: [
        "/images/Neverhome - Perro STILLS/Timeline 1_01_00_12_05.jpg",
        "/images/Neverhome - Perro STILLS/Timeline 1_01_00_48_15.jpg",
        "/images/Neverhome - Perro STILLS/Timeline 1_01_02_17_09.jpg",
      ],
    },
    {
      title: "4th ARQ Wayfinders Campaign",
      images: [
        "/images/Wayfinder STILLS/Still 2026-05-19 220649_1.1.4.jpg",
        "/images/Wayfinder STILLS/Still 2026-05-19 220653_1.1.7.jpg",
        "/images/Wayfinder STILLS/Still 2026-05-19 220656_1.1.6.jpg",
      ],
    },
    {
      title: "Saul 16mm Test Shoot",
      images: [
        "/images/Saul 16mm Test Stills/Still 2026-05-19 214023_1.1.1.jpg",
        "/images/Saul 16mm Test Stills/Still 2026-05-19 214100_1.1.2.jpg",
        "/images/Saul 16mm Test Stills/Still 2026-05-19 214104_1.1.3.jpg",
      ],
    },
    {
      title: 'Slowdown Dry Goods — "Life is a Gift"',
      images: [
        "/images/Slowdown Life is a Gift STILLS/Still 2026-05-19 215505_1.1.5.jpg",
        "/images/Slowdown Life is a Gift STILLS/Still 2026-05-19 215505_1.1.9.jpg",
        "/images/Slowdown Life is a Gift STILLS/Still 2026-05-19 223736_1.1.17.jpg",
      ],
    },
    {
      title: "Dead Dove — Hiding Places",
      images: [
        "/images/Dead Dove STILLS/IMG_3816.JPG",
        "/images/Dead Dove STILLS/Still 2026-05-19 215917_1.2.1.jpg",
        "/images/Dead Dove STILLS/Still 2026-05-19 215939_1.3.1.jpg",
      ],
    },
    {
      title: "JD Airmax Day Reel",
      images: [
        "/images/JD Airmax Stills/Still 2026-05-19 220924_1.1.10.jpg",
        "/images/JD Airmax Stills/Still 2026-05-19 220927_1.1.4.jpg",
        "/images/JD Airmax Stills/Still 2026-05-19 220932_1.1.7.jpg",
      ],
    },
  ],
  Narrative: [
    {
      title: "Bay Ridge to the Bronx",
      images: [
        "/images/BR2TB STILLS/COLOR 02_01_00_17_13.jpg",
        "/images/BR2TB STILLS/COLOR 02_01_04_10_02.jpg",
        "/images/BR2TB STILLS/COLOR 02_01_07_34_12.jpg",
      ],
    },
    {
      title: "BURP",
      images: [
        "/images/BURP stills/Still 2026-05-19 221502_1.1.17.jpg",
        "/images/BURP stills/Still 2026-05-19 221502_1.1.21.jpg",
        "/images/BURP stills/Still 2026-05-19 221502_1.1.25.jpg",
      ],
    },
  ],
  Photography: [],
};

const PHOTOGRAPHY_PHOTOS = [
  "/images/Photography/000050010025.jpg",
  "/images/Photography/000064530016.jpg",
  "/images/Photography/250705000508260018.jpg",
  "/images/Photography/250710050824010013.jpg",
  "/images/Photography/250710050824010025.jpg",
  "/images/Photography/250902054735020007.jpg",
  "/images/Photography/Arkansas Bridge November 2023.jpg",
  "/images/Photography/Cathy Downtown Memphis.jpg",
  "/images/Photography/Cinestill Scans_19.jpg",
  "/images/Photography/Cinestill Scans_29.jpg",
  "/images/Photography/Cinestill Scans_39.jpg",
  "/images/Photography/Jabier Downtown Memphis.jpg",
  "/images/Photography/Rotenfels in Summer Cropped.jpg",
  "/images/Photography/Stuart Street Crossing.jpg",
  "/images/Photography/Techno Lane Skyline.jpg",
  "/images/Photography/Wareham House.jpg",
  "/images/Photography/Wayne Sip 1.jpg",
  "/images/Photography/asher_cn_1.jpg",
  "/images/Photography/asher_cn_2.jpg",
  "/images/Photography/asher_cn_3.jpg",
  "/images/Photography/asher_cn_4.jpg",
];

const CATEGORIES: Category[] = ["Selected", "Narrative", "Photography"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<Category>("Selected");
  const projects = PROJECTS[activeCategory];

  return (
    <div className="">
      <div className="flex gap-8 mb-10 border-b border-site-border">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`cursor-pointer pb-3 text-sm tracking-widest uppercase transition-colors duration-200 ${
              activeCategory === cat
                ? "text-site-text border-b-2 border-site-accent -mb-px"
                : "text-site-muted hover:text-site-text"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {activeCategory === "Photography" ? (
          <PhotoGrid photos={PHOTOGRAPHY_PHOTOS} />
        ) : projects.length === 0 ? (
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
