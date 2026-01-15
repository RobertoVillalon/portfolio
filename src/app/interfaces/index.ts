interface Page {
  name: string;
  component: any;
}

interface SidebarItem {
  name: string;
  link: string;
  icon: string;
}

interface ExperienceBody {
  role: string;
  company: string;
  period: string;
  tasks: string[];
}

interface Technology {
  name: string;
  icon: string;
  iconColor: string;
}

interface ProjectItem {
  name: string;
  description: string;
  status?: string;
  creationDate?: string;
  lastUpdateDate?: string;
  images?: string[];
  technologies: Technology[],
  repoLink?: string;
  demoLink?: string;
}

export type {Page, SidebarItem, ExperienceBody, ProjectItem};