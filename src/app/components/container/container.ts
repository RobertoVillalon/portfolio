import { Component, input } from '@angular/core';

@Component({
  selector: 'container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  isSidebarOpened = input<boolean>();
  id = input<string>();
}
