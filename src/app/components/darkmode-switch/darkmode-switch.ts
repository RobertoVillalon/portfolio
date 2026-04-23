import { Component, inject } from '@angular/core';
import { ThemeService } from '../../service/theme/theme-service';

@Component({
  selector: 'darkmode-switch',
  templateUrl: './darkmode-switch.html',
})

export class DarkmodeSwitch {
  readonly themeService = inject(ThemeService);
}
