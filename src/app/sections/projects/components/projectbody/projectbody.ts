import { Component, input } from '@angular/core';
import { TabnavItem } from '../../../../interfaces';

@Component({
  selector: 'projectbody',
  imports: [],
  templateUrl: './projectbody.html',
  styleUrl: './projectbody.css',
})
export class Projectbody {
  readonly item = input.required<TabnavItem>();
}
