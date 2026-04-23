import { Component, inject, input } from '@angular/core';
import { SelectorService } from '../../service/selector/selector-service';

@Component({
  selector: 'app-select',
  templateUrl: './select.html',
})
export class Select {
  readonly title = input.required<string>();
  readonly items = input.required<string[]>();
  readonly selectorService = inject(SelectorService)
}
