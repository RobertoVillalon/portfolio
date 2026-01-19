import { Injectable } from '@angular/core';
import { SidebarItem } from '../../interfaces';

declare const window: any;

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
}