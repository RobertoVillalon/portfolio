import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectorService {
    private readonly _selectedIndex = signal(new Map<string, number>());
    readonly selectedIndex = this._selectedIndex.asReadonly();

    setActive(key: string, index: number) {
      this._selectedIndex.update(current => {
        const newMap = new Map(current);

        newMap.set(key, index);

        return newMap;
      });
    }
}