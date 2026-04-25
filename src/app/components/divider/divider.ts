import { Component, input } from '@angular/core';

@Component({
  selector: 'divider',
  templateUrl: './divider.html',
})
export class Divider {
  isVertical = input.required<boolean>();
}
