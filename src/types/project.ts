export type ProjectCategory =
  | "fullstack"
  | "frontend"
  | "backend"
  | "ai"
  | "freelance";

export interface CaseStudy {
  problem: string;
  solution: string;
  results: string;
  highlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  imageWebp: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  featured: boolean;
  order: number;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: CaseStudy;
  year: string;
  role?: string;
}

export const PROJECT_CATEGORIES: Record<ProjectCategory, string> = {
  fullstack: "Full Stack",
  frontend: "Frontend",
  backend: "Backend",
  ai: "AI / ML",
  freelance: "Freelance",
};
