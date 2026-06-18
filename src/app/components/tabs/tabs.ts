import { Component, inject, input } from '@angular/core';
import { SelectorService } from '../../service/selector/selector-service';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {
  readonly tabListKey = input.required<string>();
  readonly items = input.required<string[]>();
  readonly isVertical = input.required<boolean>();
  readonly selectorService = inject(SelectorService);
}