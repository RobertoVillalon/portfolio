import { Component, inject } from '@angular/core';
import { SidebarService } from '../../service/sidebar/sidebar-service';
import { DarkmodeSwitch } from "../darkmode-switch/darkmode-switch";
import { IconService } from '../../service/icon/icon-service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.html',
  imports: [DarkmodeSwitch],
})
export class Sidebar {
  readonly sidebarService = inject(SidebarService);
  readonly iconService = inject(IconService);
  readonly items = this.sidebarService.getItems();

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