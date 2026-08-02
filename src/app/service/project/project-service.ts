import { inject, Injectable } from '@angular/core';
import { MenuItem, ProjectItem } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly http = inject(HttpClient);
  readonly projects = toSignal(this.http.get<ProjectItem[]>('assets/data/projects.json'),{ initialValue: [] })
  readonly menuItems = toSignal(this.http.get<MenuItem>('assets/config/menuItems.json'))

  public getProjectMenuItems(project: ProjectItem): string[] {
    let localMenuItems = this.menuItems()?.projectMenuItems

    if(!project.images)
      localMenuItems = localMenuItems?.filter(menu => menu != 'Imagenes')

    return localMenuItems ?? [];
  }

}