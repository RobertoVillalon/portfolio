import { Component, input } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.html',
})
export class Container {
  title = input.required<string>();
  id = input.required<string>();
  
}
