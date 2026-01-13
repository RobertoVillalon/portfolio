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
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Technology {
  name: string;
  icon: string;
  iconColor: string;
}

interface TabnavItem {
  name: string;
  description: string;
  status?: string;
  creationDate?: string;
  images?: string[];
  technologies: Technology[],
  repoLink?: string;
  demoLink?: string;
}

export type {Page, SidebarItem, ExperienceBody, TabnavItem};