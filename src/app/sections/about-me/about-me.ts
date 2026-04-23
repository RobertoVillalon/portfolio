import { Component, inject } from '@angular/core';
import { Card } from "../../components/card/card";
import { AboutmeService } from '../../service/aboutme/aboutme-service';

@Component({
  selector: 'app-about-me',
  imports: [Card],
  templateUrl: './about-me.html',
})
export class AboutMe {
  aboutmeService = inject(AboutmeService)
}
