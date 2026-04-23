import { Component, input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.html',
})
export class Card {
  title = input.required<string>();
  description= input.required<string>();
  icon = input.required<string>();
}
