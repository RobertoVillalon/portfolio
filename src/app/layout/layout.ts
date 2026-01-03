import { Component } from '@angular/core';
import { Sidebar } from "../components/sidebar/sidebar";
import { PrincipalPage } from "../pages/principal-page/principal-page";

@Component({
  selector: 'layout',
  imports: [Sidebar, PrincipalPage],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {


}
