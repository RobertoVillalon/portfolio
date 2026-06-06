import { Component, computed, inject } from '@angular/core';
import { Tabnav } from "../../components/tabnav/tabnav";
import { Projectbody } from "./components/projectbody/projectbody";
import { SelectorService } from '../../service/selector/selector-service';
import { ProjectService } from '../../service/project/project-service';
import { Carousel } from '../../components/carousel/carousel';
import { Select } from '../../components/select/select';
import { IconService } from '../../service/icon/icon-service';

@Component({
  selector: 'app-projects',
  imports: [Tabnav, Projectbody, Carousel, Select],
  templateUrl: './projects.html',
})
export class Projects {
  readonly selectorService = inject(SelectorService);
  readonly projectService = inject(ProjectService)
  readonly icons = inject(IconService);

  readonly tabNames = computed(() =>
    this.projectService.items().map(item => item.name)
  );
  
  readonly currentItem = computed(() => {
    const items = this.projectService.items();
    const index = this.selectorService.selectedIndex() - 1;

    return items[index] ?? null;
  });
}