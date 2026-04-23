import { Component, inject } from '@angular/core';
import { AcademicinformationService } from '../../service/academicinformation/academicinformation-service';

@Component({
  selector: 'app-academic-information',
  templateUrl: './academic-information.html',
})
export class AcademicInformation {
  readonly academicinformationService = inject(AcademicinformationService);

  readonly education = this.academicinformationService.education;
  readonly certifications = this.academicinformationService.certifications;
}
