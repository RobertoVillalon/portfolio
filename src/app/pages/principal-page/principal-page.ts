import { Component, inject } from '@angular/core';
import { AboutMe } from "../about-me/about-me";
import { Experience } from '../experience/experience';
import { Projects } from "../projects/projects";
import { Technologies } from "../technologies/technologies";
import { Container } from "../../components/container/container";
import { SidebarService } from '../../service/sidebar-service';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.html',
  styleUrl: './principal-page.css',
  imports: [AboutMe, Experience, Projects, Technologies, Container],
})
export class PrincipalPage {
  private readonly sidebarService = inject(SidebarService);
  isSidebarOpened = this.sidebarService.isOpened;
}