import { inject, Injectable } from '@angular/core';
import { AboutInfo } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class AboutmeService {
  private readonly http = inject(HttpClient);
  readonly items = toSignal(this.http.get<AboutInfo>('/assets/data/personal.json'))
}
