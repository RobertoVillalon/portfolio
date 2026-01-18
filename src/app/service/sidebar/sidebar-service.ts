import { computed, HostListener, Injectable, signal } from '@angular/core';
import { SidebarItem } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  readonly items: SidebarItem[] = [
    { name: 'Acerca de Mi', link: 'aboutme', icon: 'icon-[tabler--user]' },
    { name: 'Experiencia', link: 'experience', icon: 'icon-[tabler--book]' },
    { name: 'Proyectos', link: 'projects', icon: 'icon-[tabler--checklist]' },
    { name: 'Formación', link: 'academicinformation', icon: 'icon-[tabler--certificate]' },
  ]
  readonly isOpened = signal<boolean>(true);
  isDesktop = signal(window.innerWidth >= 1024);
  mobileSidebarOpened = signal(false);

  toggle() {
    this.isOpened.update(v => !v);
  }

  open() {
    this.isOpened.set(true);
  }

  close() {
    this.isOpened.set(false);
  }

  isSidebarOpened = computed(() => {
    if (this.isDesktop()) return true;
    return this.mobileSidebarOpened();
  });

  @HostListener('window:resize')
  onResize() {
    this.isDesktop.set(window.innerWidth >= 1024);
  }
}
