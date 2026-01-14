import { Component, input } from '@angular/core';
import { ProjectItem } from '../../../../interfaces';

@Component({
  selector: 'projectbody',
  imports: [],
  templateUrl: './projectbody.html',
  styleUrl: './projectbody.css',
})
export class Projectbody {
  readonly item = input.required<ProjectItem>();
}
