import { Component, computed, inject } from '@angular/core';
import { SelectorService } from '../../service/selector/selector-service';
import { ProjectService } from '../../service/project/project-service';
import { IconService } from '../../service/icon/icon-service';
import { Select } from "../../components/select/select";
import { Tabs } from '../../components/tabs/tabs';
import { Summary } from "./components/summary/summary";
import { InfrastructureAndPipelines } from './components/infrastructure-and-pipelines/infrastructure-and-pipelines';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  imports: [Tabs, Select, Summary, InfrastructureAndPipelines],
})
export class Projects {
  readonly selectorService = inject(SelectorService);
  readonly projectService = inject(ProjectService)
  readonly icons = inject(IconService);

  constructor() {
    this.selectorService.setActive('projects', 1);
    this.selectorService.setActive('menuItems', 1);
  }

  readonly projectList = computed(() =>
    this.projectService.projects().map(item => item.name)
  );

  readonly projectMenuItems = computed(() => this.projectService.getProjectMenuItems())
  
  readonly selectedProject = computed(() => {
    const items = this.projectService.projects();
    const index = this.selectorService.selectedIndex().get('projects')! - 1;

    return items[index] ?? null;
  });

  readonly selectedContext = computed(() => {
    const menuItems = this.projectService.getProjectMenuItems();
    const selectedMenu = this.selectorService.selectedIndex().get('menuItems')! - 1;
    
    console.log(menuItems[selectedMenu])

    return menuItems[selectedMenu] ?? null;
  })

}