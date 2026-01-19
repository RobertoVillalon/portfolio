import { Component, computed, inject } from '@angular/core';
import { Tabnav } from "../../components/tabnav/tabnav";
import { Projectbody } from "./components/projectbody/projectbody";
import { SelectorService } from '../../service/selector/selector-service';
import { ProjectsService } from '../../service/projects/projects-service';
import { Carousel } from '../../components/carousel/carousel';
import { Select } from '../../components/select/select';

@Component({
  selector: 'app-projects',
  imports: [Tabnav, Projectbody, Carousel, Select],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly selectorService = inject(SelectorService);
  readonly projectService = inject(ProjectsService)
  readonly tabNames: string[] = this.projectService.items.flatMap(item => item.name ?? [])
  readonly currentItem = computed(() => this.projectService.items[this.selectorService.selectedIndex() - 1]);
}