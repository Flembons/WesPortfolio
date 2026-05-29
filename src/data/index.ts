import type { Category, Project } from "./types";
import neverhomePerro from "./projects/neverhome-perro";
import wayfinders from "./projects/wayfinders";
import saul16mm from "./projects/saul-16mm";
import slowdown from "./projects/slowdown";
import deadDove from "./projects/dead-dove";
import jdAirmax from "./projects/jd-airmax";
import lilTecca from "./projects/lil-tecca";
import bayRidgeToBronx from "./projects/bay-ridge-to-bronx";
import burp from "./projects/burp";

export const PROJECTS: Record<Category, Project[]> = {
  Selected: [neverhomePerro, wayfinders, saul16mm, slowdown, deadDove, jdAirmax, lilTecca],
  Narrative: [bayRidgeToBronx, burp],
  Photography: [],
};

export { PHOTOGRAPHY_PHOTOS } from "./photography";
export type { Category, Project } from "./types";
