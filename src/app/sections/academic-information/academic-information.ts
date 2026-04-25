import { Component, computed, inject } from '@angular/core';
import { AcademicinformationService } from '../../service/academicinformation/academicinformation-service';

@Component({
  selector: 'app-academic-information',
  templateUrl: './academic-information.html',
})
export class AcademicInformation {
  readonly academicinformationService = inject(AcademicinformationService);
  readonly education = computed(() => {
    const items = this.academicinformationService.education()

    return items! ?? null;
  });

  readonly certifications = computed(() => {
    const items = this.academicinformationService.certifications()
    
    return items! ?? null;
  });
}
