import { Component, inject, input } from '@angular/core';
import { ProjectItem } from '../../../../interfaces';
import { IconService } from '../../../../service/icon/icon-service';

@Component({
  selector: 'projectbody',
  imports: [],
  templateUrl: './projectbody.html',
})
export class Projectbody {
  readonly item = input.required<ProjectItem>();
  readonly iconService = inject(IconService);
}