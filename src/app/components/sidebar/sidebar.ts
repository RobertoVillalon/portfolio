import { Component, inject } from '@angular/core';
import { SidebarService } from '../../service/sidebar-service';
import { SidebarItem } from '../../interfaces';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  private readonly sidebarService = inject(SidebarService);
  readonly items: SidebarItem[] = [
    { name: 'About', link: 'aboutme', icon: 'icon-[tabler--user]' },
    { name: 'Experience', link: 'experience', icon: 'icon-[tabler--book]' },
    { name: 'Projects', link: 'projects', icon: 'icon-[tabler--checklist]' },
    { name: 'Technologies', link: 'technologies', icon: 'icon-[tabler--brand-tabler]' },
  ]

  toggleSidebar() {
    this.sidebarService.toggle();
  }


  scrollTo(id: string) {
    const el = document.getElementById(id);

    if (!el) {
      console.warn(`No existe el elemento con id: ${id}`);
      return;
    }

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}