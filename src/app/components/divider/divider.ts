import { Component, input } from '@angular/core';

@Component({
  selector: 'divider',
  imports: [],
  templateUrl: './divider.html',
  styleUrl: './divider.css',
})
export class Divider {
  isVertical = input.required<boolean>();
}
