import { Component, computed, inject } from '@angular/core';
import { CertificationService } from '../../service/certification/certification-service';
import { IconService } from '../../service/icon/icon-service';

@Component({
  selector: 'app-certification',
  imports: [],
  templateUrl: './certification.html',
})
export class Certification {
  readonly certificationService = inject(CertificationService);
  readonly iconService = inject(IconService);


  readonly certifications = computed(() => {
    const items = this.certificationService.certifications()
    
    return items ?? null;
  });
}
