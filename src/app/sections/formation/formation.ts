import { Component, computed, inject } from '@angular/core';
import { DegreeService } from '../../service/degree/degree-service';
import { IconService } from '../../service/icon/icon-service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.html',
})
export class AcademicInformation {
  readonly degreeService = inject(DegreeService);
  readonly iconService = inject(IconService);

  readonly education = computed(() => {
    const items = this.degreeService.education()

    return items ?? null;
  });


}
