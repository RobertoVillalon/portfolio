interface Page {
  name: string;
  component: any;
}

interface SidebarItem {
  name: string;
  link: string;
  icon: string;
}

interface AboutInfo {
  name: string;
  role: string;
  summary: string[];
  email: string;
  linkedin: string;
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
}

interface ExperienceBody {
  role: string;
  company: string;
  period: string;
  tasks: string[];
}

interface Technology {
  name: string;
  icon: Icon;
}

interface Icon {
  name: string;
  color: string;
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

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

interface CertificationItem {
  name: string;
  provider: string;
  issueDate: string;
  icon: Icon
}

export type {Page, SidebarItem, ExperienceBody, ProjectItem, AboutInfo, EducationItem, CertificationItem};