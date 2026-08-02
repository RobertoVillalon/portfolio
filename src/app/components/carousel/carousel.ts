import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'carousel-component',
  templateUrl: './carousel.html',
})
export class Carousel {
  carouselIndex = signal<number>(0);
  images = input.required<string[]>();

  setCarouselIndex(index: number) {

    if (this.carouselIndex() == this.images().length - 1 && index > this.carouselIndex()) {
      this.carouselIndex.set(0);
      return;
    }

    if (this.carouselIndex() == 0 && index < this.carouselIndex()) {
      this.carouselIndex.set(this.images().length - 1);
      return;
    }
    
    this.carouselIndex.set(index);
  }
}
