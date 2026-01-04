import { Component, input } from '@angular/core';

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  title = input.required<string>();
  description= input.required<string>();
  icon = input.required<string>();
}
