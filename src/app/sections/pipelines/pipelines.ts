import { Component, computed, inject } from '@angular/core';
import { SelectorService } from '../../service/selector/selector-service';
import { IconService } from '../../service/icon/icon-service';
import { Tabs } from "../../components/tabs/tabs";
import { Select } from "../../components/select/select";
import { PipelineService } from '../../service/pipeline/pipeline-service';

@Component({
  selector: 'app-pipelines',
  imports: [Tabs, Select],
  templateUrl: './pipelines.html'
})
export class Pipelines {
  readonly selectorService = inject(SelectorService);
  readonly pipelineService = inject(PipelineService);
  readonly iconService = inject(IconService);

  constructor() {
    this.selectorService.setActive('pipelines', 1);
  }

  readonly projectMenuItems = computed(() => this.pipelineService.getPipelineMenuItems(this.selectedPipeline() ?? []))

  readonly pipelineList = computed(() => this.pipelineService.pipelines().map(item => item.name));

  readonly selectedPipeline = computed(() => {
    const projectItems = this.pipelineService.pipelines();
    const projectIndex: number = this.selectorService.selectedIndex().get('pipelines')! - 1;
    
    return projectItems[projectIndex] ?? null;
  });
}
