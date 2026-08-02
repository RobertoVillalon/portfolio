import { AfterViewInit, Component, computed, effect, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { SelectorService } from '../../service/selector/selector-service';
import { ProjectService } from '../../service/project/project-service';
import { IconService } from '../../service/icon/icon-service';
import { Select } from "../../components/select/select";
import { Tabs } from '../../components/tabs/tabs';
import { Images } from "./components/images/images";
import { Summary } from "./components/context/context";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  imports: [Tabs, Select, Images, Summary],
})
export class Projects {
  readonly selectorService = inject(SelectorService);
  readonly projectService = inject(ProjectService)
  readonly icons = inject(IconService);

  constructor() {
    this.selectorService.setActive('projects', 1);
    this.selectorService.setActive('menuItems', 1);

    effect(() => this.selectorService.ensureValid('menuItems',this.projectMenuItems().length));
  }

  readonly projectList = computed(() => this.projectService.projects().map(item => item.name));

  readonly projectMenuItems = computed(() => this.projectService.getProjectMenuItems(this.selectedProject() ?? []))
  
  readonly selectedProject = computed(() => {
    const projectItems = this.projectService.projects();
    const projectIndex: number = this.selectorService.selectedIndex().get('projects')! - 1;
    
    return projectItems[projectIndex] ?? null;
  });

  readonly selectedMenuItem = computed(() => {
    const menuItems = this.projectMenuItems();
    const menuIndex = this.selectorService.selectedIndex().get('menuItems') ?? 1;    

    const index = Math.min(menuIndex, menuItems.length) - 1;

    return menuItems[index] ?? null;
  })

}