export type Category = "Selected" | "Narrative" | "Photography";

export interface Project {
  title: string;
  images: [string, string, string];
  description?: string;
  allImages?: string[];
  videoUrl?: string;
}
