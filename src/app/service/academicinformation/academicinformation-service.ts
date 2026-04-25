import { inject, Injectable } from '@angular/core';
import { CertificationItem, EducationItem } from '../../interfaces';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AcademicinformationService {
  private readonly http = inject(HttpClient);
  readonly education = toSignal(this.http.get<EducationItem[]>('/assets/data/degrees.json'));
  readonly certifications = toSignal(this.http.get<CertificationItem[]>('/assets/data/certifications.json'));
}