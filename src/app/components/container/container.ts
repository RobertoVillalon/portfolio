import { Component, input } from '@angular/core';

@Component({
  selector: 'container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  title = input.required<string>();
  isSidebarOpened = input.required<boolean>();
  id = input.required<string>();

  
}
