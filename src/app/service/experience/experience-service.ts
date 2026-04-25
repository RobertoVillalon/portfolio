import { inject, Injectable } from '@angular/core';
import { ExperienceBody } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
    readonly http = inject(HttpClient);
    readonly items = toSignal(this.http.get<ExperienceBody[]>('/assets/data/experience.json'),{ initialValue: [] })
}
