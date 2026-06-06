import { Component, computed, inject } from '@angular/core';
import { AboutmeService } from '../../service/aboutme/aboutme-service';
import { IconService } from '../../service/icon/icon-service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-about-me',
  imports: [TitleCasePipe],
  templateUrl: './about-me.html',
})
export class AboutMe {
  aboutmeService = inject(AboutmeService)
  iconService = inject(IconService)
  aboutInformation = computed(() => {
      const items = this.aboutmeService.items()

      return items! ?? null;
    }
  )

  linksToArray = computed(() => {
    const items = this.aboutmeService.items()

    return items?.links ? Object.entries(items.links).map(([icon, url]) => ({ icon, url })) : null;
  })
}
