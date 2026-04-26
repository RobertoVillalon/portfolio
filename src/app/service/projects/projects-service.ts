import { inject, Injectable } from '@angular/core';
import { ProjectItem } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly http = inject(HttpClient);
  readonly items = toSignal(this.http.get<ProjectItem[]>('assets/data/projects.json'),{ initialValue: [] })
}