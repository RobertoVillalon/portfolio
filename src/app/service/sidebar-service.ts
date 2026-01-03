import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
   readonly isOpened = signal<boolean>(true);

  toggle() {
    this.isOpened.update(v => !v);
  }

  open() {
    this.isOpened.set(true);
  }

  close() {
    this.isOpened.set(false);
  }
}
