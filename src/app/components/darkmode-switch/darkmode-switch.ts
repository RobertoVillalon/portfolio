import { Component, inject } from '@angular/core';
import { ThemeService } from '../../service/theme/theme-service';

@Component({
  selector: 'darkmode-switch',
  imports: [],
  templateUrl: './darkmode-switch.html',
  styleUrl: './darkmode-switch.css',
})
export class DarkmodeSwitch {
  readonly themeService = inject(ThemeService);
}
