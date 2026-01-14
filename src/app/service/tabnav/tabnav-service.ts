import { Injectable, signal } from '@angular/core';
import { ProjectItem } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TabnavService {
    private _selectedIndex = signal(1);
    readonly selectedIndex = this._selectedIndex.asReadonly();

    setActive(index: number) {
      this._selectedIndex.set(index);
    }

    
}