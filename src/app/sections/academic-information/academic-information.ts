import { Component, computed, inject } from '@angular/core';
import { AcademicinformationService } from '../../service/academicinformation/academicinformation-service';
import { IconService } from '../../service/icon/icon-service';

@Component({
  selector: 'app-academic-information',
  templateUrl: './academic-information.html',
})
export class AcademicInformation {
  readonly academicinformationService = inject(AcademicinformationService);
  readonly iconService = inject(IconService);

  readonly education = computed(() => {
    const items = this.academicinformationService.education()

    return items! ?? null;
  });

  readonly certifications = computed(() => {
    const items = this.academicinformationService.certifications()
    
    return items! ?? null;
  });
}
