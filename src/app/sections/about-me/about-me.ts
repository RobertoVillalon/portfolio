import { Component } from '@angular/core';
import { Card } from "../../components/card/card";
import { Divider } from "../../components/divider/divider";

@Component({
  selector: 'app-about-me',
  imports: [Card, Divider],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {

}
