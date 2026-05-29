interface Page {
  name: string;
  component: any;
}

interface MenuItem {
  name: string;
  link: string;
  icon: Icon;
}

interface AboutInfo {
  name: string;
  role: string;
  summary: string[];
  email: string;
  linkedin: string;
  attitudes: {
    title: string;
    description: string;
    icon: Icon;
  }[];
}

interface ExperienceBody {
  role: string;
  company: string;
  period: string;
  tasks: string[];
}

interface Icon {
  iconClass: string;
  colorClass: string;
}

interface ProjectItem {
  name: string;
  description: string;
  status?: string;
  creationDate?: string;
  lastUpdateDate?: string;
  images?: string[];
  technologies: string[],
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
  icon: Icon;
}

export type {Page,Icon, MenuItem, ExperienceBody, ProjectItem, AboutInfo, EducationItem, CertificationItem};