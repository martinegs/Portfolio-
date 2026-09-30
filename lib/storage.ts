import { Project, ExperienceItem, SkillCategory, initialProjects, initialExperiences, initialSkills } from "./initialData";

const STORAGE_KEYS = {
  PROJECTS: "portfolio_mg_projects_v1",
  EXPERIENCE: "portfolio_mg_experience_v1",
  SKILLS: "portfolio_mg_skills_v1",
};

// Memory fallback cache
let memoryProjects: Project[] = [...initialProjects];
let memoryExperience: ExperienceItem[] = [...initialExperiences];
let memorySkills: SkillCategory[] = [...initialSkills];

export function getStoredProjects(): Project[] {
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Error reading projects from localStorage:", e);
    }
  }
  return memoryProjects;
}

export function saveStoredProjects(projects: Project[]): void {
  memoryProjects = [...projects];
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
      window.dispatchEvent(new Event("portfolio_data_updated"));
    } catch (e) {
      console.error("Error saving projects to localStorage:", e);
    }
  }
}

export function getStoredExperiences(): ExperienceItem[] {
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.EXPERIENCE);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Error reading experience from localStorage:", e);
    }
  }
  return memoryExperience;
}

export function saveStoredExperiences(experiences: ExperienceItem[]): void {
  memoryExperience = [...experiences];
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEYS.EXPERIENCE, JSON.stringify(experiences));
      window.dispatchEvent(new Event("portfolio_data_updated"));
    } catch (e) {
      console.error("Error saving experience to localStorage:", e);
    }
  }
}

export function getStoredSkills(): SkillCategory[] {
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SKILLS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Error reading skills from localStorage:", e);
    }
  }
  return memorySkills;
}

export function saveStoredSkills(skills: SkillCategory[]): void {
  memorySkills = [...skills];
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills));
      window.dispatchEvent(new Event("portfolio_data_updated"));
    } catch (e) {
      console.error("Error saving skills to localStorage:", e);
    }
  }
}

export function resetAllToDefault(): void {
  memoryProjects = [...initialProjects];
  memoryExperience = [...initialExperiences];
  memorySkills = [...initialSkills];
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(STORAGE_KEYS.PROJECTS);
      localStorage.removeItem(STORAGE_KEYS.EXPERIENCE);
      localStorage.removeItem(STORAGE_KEYS.SKILLS);
      window.dispatchEvent(new Event("portfolio_data_updated"));
    } catch (e) {
      console.error("Error resetting data in localStorage:", e);
    }
  }
}
