import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Icon } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private readonly http = inject(HttpClient);
  readonly icons = toSignal(this.http.get<Record<string, Icon>>('assets/config/icons.json'))

  public get(name: string): Icon | Error {
    if(this.icons() != null)
      return this.icons()![name];

    return new Error("You first may to create the icon in the infraestructure repo")
  }

  public getIconClass(icon: string): string {
    let arrayIcon: Icon;

    if(this.icons() != null) {
      arrayIcon = this.icons()![icon];
      return `${arrayIcon.iconClass} ${arrayIcon.colorClass}`;
    }

    return "";
  }
}
