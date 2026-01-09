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

export type {Page, SidebarItem, ExperienceBody};