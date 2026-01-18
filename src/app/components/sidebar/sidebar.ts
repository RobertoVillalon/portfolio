import { Component, inject } from '@angular/core';
import { SidebarService } from '../../service/sidebar/sidebar-service';
import { SidebarItem } from '../../interfaces';
import { DarkmodeSwitch } from "../darkmode-switch/darkmode-switch";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  imports: [DarkmodeSwitch],
})
export class Sidebar {
  private readonly sidebarService = inject(SidebarService);
  readonly items: SidebarItem[] = this.sidebarService.items;

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