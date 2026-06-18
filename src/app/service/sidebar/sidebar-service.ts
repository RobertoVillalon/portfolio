import { inject, Injectable } from '@angular/core';
import { MenuItem, NavBarItem } from '../../interfaces';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private readonly http = inject(HttpClient);
  readonly items = toSignal(this.http.get<MenuItem>('assets/config/menuItems.json'))

  public getNavbarItems(): NavBarItem[] {
    return this.items()?.navbarItems ??  [];
  }
}