import { Component, computed, inject } from '@angular/core';
import { Tabnav } from "../../components/tabnav/tabnav";
import { Projectbody } from "./components/projectbody/projectbody";
import { TabnavService } from '../../service/tabnav/tabnav-service';
import { ProjectsService } from '../../service/projects/projects-service';
import { Carousel } from '../../components/carousel/carousel';

@Component({
  selector: 'app-projects',
  imports: [Tabnav, Projectbody, Carousel],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly tabnavService = inject(TabnavService);
  readonly projectService = inject(ProjectsService)
  readonly tabNames: string[] = this.projectService.items.flatMap(item => item.name ?? [])
  readonly currentItem = computed(() => this.projectService.items[this.tabnavService.selectedIndex() - 1]);
}