import { Component, inject } from '@angular/core';
import { Divider } from "../../components/divider/divider";
import { ExperienceService } from '../../service/experience/experience-service';

@Component({
  selector: 'app-experience',
  imports: [Divider],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})

export class Experience {
  experienceService = inject(ExperienceService)
}