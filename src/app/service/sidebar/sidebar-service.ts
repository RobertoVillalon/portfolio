import { Injectable, signal } from '@angular/core';
import { SidebarItem } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
    readonly items: SidebarItem[] = [
      { name: 'Acerca de Mi', link: 'aboutme', icon: 'icon-[tabler--user]' },
      { name: 'Experiencia', link: 'experience', icon: 'icon-[tabler--book]' },
      { name: 'Proyectos', link: 'projects', icon: 'icon-[tabler--checklist]' },
      { name: 'Tecnologias', link: 'technologies', icon: 'icon-[tabler--brand-tabler]' },
    ]
   readonly isOpened = signal<boolean>(true);

  toggle() {
    this.isOpened.update(v => !v);
  }

  open() {
    this.isOpened.set(true);
  }

  close() {
    this.isOpened.set(false);
  }
}
