import { Component, input } from '@angular/core';
import { ProjectItem } from '../../../../interfaces';
import { Carousel } from "../../../../components/carousel/carousel";

@Component({
  selector: 'images-project-component',
  imports: [Carousel],
  templateUrl: './images.html'
})
export class Images {
  readonly currentProject = input.required<ProjectItem>();
  readonly currentItem = input.required<string>();
}
