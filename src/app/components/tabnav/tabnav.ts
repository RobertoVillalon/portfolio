import { Component, inject, signal } from '@angular/core';
import { TabnavService } from '../../service/tabnav/tabnav-service';
import { TabnavItem } from '../../interfaces';
import { Projectbody } from "../../sections/projects/components/projectbody/projectbody";

@Component({
  selector: 'tabnav',
  templateUrl: './tabnav.html',
  styleUrl: './tabnav.css',
  imports: [Projectbody],
})
export class Tabnav {
  private readonly tabnavService = inject(TabnavService);
  readonly items: TabnavItem[] = this.tabnavService.items;
  tabActiveIndex = signal(1)

  setActiveTab(index: number): void {
    this.tabActiveIndex.set(index);
  }
}