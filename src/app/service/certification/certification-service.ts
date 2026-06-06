import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CertificationItem } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {
  private readonly http = inject(HttpClient);
  readonly certifications = toSignal(this.http.get<CertificationItem[]>('assets/data/certifications.json'));

}
