import { Component, inject, input } from '@angular/core';
import { SelectorService } from '../../service/selector/selector-service';

@Component({
  selector: 'tabnav',
  templateUrl: './tabnav.html',
  styleUrl: './tabnav.css',
})
export class Tabnav {
  readonly selectorService = inject(SelectorService);
  readonly items = input.required<string[]>();
}