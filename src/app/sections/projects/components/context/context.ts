import { Component, inject, input } from '@angular/core';
import { ProjectItem } from '../../../../interfaces';
import { IconService } from '../../../../service/icon/icon-service';

@Component({
  selector: 'context-project-component',
  imports: [],
  templateUrl: './context.html'
})
export class Summary {
  readonly currentProject = input.required<ProjectItem>();
  readonly currentItem = input.required<string>();
  readonly iconService = inject(IconService);
}
