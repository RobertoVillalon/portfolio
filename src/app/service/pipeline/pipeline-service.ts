import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PipelineItem } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PipelineService {
  private readonly http = inject(HttpClient);
  readonly pipelines = toSignal(this.http.get<PipelineItem[]>('assets/data/pipelines.json'),{ initialValue: [] })

  getPipelineMenuItems(pipeline: PipelineItem): string[] {
    return pipeline.stages.map(stage => stage.name);
  }
}