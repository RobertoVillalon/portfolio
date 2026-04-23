import { Component, inject } from '@angular/core';
import { ExperienceService } from '../../service/experience/experience-service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
})

export class Experience {
  experienceService = inject(ExperienceService)
}