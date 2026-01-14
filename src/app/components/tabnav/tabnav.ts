import { Component, inject, input } from '@angular/core';
import { TabnavService } from '../../service/tabnav/tabnav-service';

@Component({
  selector: 'tabnav',
  templateUrl: './tabnav.html',
  styleUrl: './tabnav.css',
})
export class Tabnav {
  readonly tabnavService = inject(TabnavService);
  readonly items = input.required<string[]>();
}