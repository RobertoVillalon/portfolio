import { Component, inject } from '@angular/core';
import { Sidebar } from "../components/sidebar/sidebar";
import { Container } from "../components/container/container";
import { AboutMe } from "../sections/about-me/about-me";
import { Experience } from "../sections/experience/experience";
import { Projects } from "../sections/projects/projects";
import { SidebarService } from '../service/sidebar/sidebar-service';
import { AcademicInformation } from "../sections/academic-information/academic-information";

@Component({
  selector: 'layout',
  imports: [Sidebar, Container, AboutMe, Experience, Projects, AcademicInformation],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  private readonly sidebarService = inject(SidebarService);
  isSidebarOpened = this.sidebarService.isOpened;
}
