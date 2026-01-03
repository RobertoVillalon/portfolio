interface Page {
  name: string;
  component: any;
}

interface SidebarItem {
  name: string;
  link: string;
  icon: string;
}

export type {Page, SidebarItem};