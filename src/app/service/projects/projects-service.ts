import { inject, Injectable } from '@angular/core';
import { ProjectItem } from '../../interfaces';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly http = inject(HttpClient);
  readonly items = toSignal(this.http.get<ProjectItem[]>('/assets/data/projects.json'),{ initialValue: [] })
}