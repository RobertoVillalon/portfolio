import { Component } from '@angular/core';
import { Sidebar } from "../components/sidebar/sidebar";
import { Container } from "../components/container/container";
import { AboutMe } from "../sections/about-me/about-me";
import { Experience } from "../sections/experience/experience";
import { Projects } from "../sections/projects/projects";
import { Certification } from "../sections/certification/certification";
import { AcademicInformation } from "../sections/formation/formation";

@Component({
  selector: 'layout',
  imports: [Sidebar, Container, AboutMe, Experience, Projects, Certification, AcademicInformation],
  templateUrl: './layout.html',
})
export class Layout {
}
