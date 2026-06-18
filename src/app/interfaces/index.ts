interface Page {
  name: string;
  component: any;
}

interface MenuItem {
  navbarItems: NavBarItem[];
  projectMenuItems: string[];
}

interface NavBarItem {
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

interface AboutInfo {
  cellphone:         string;
  city:              string;
  country:           string;
  developmentSkills: string[];
  devopsSkills:      string[];
  links:             Links;
  name:              string;
  role:              string;
  softSkills:        string[];
  summary:           string;
}

interface Links {
  email:    string;
  github:   string;
  linkedin: string;
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
  icon: string;
}

export type { Page,Icon, MenuItem, NavBarItem, ExperienceBody, ProjectItem, AboutInfo, EducationItem, CertificationItem };