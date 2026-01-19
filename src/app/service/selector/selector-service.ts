import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectorService {
    private readonly _selectedIndex = signal(1);
    readonly selectedIndex = this._selectedIndex.asReadonly();

    setActive(index: number) {
      this._selectedIndex.set(index);
    }
}