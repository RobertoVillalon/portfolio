import { Injectable } from '@angular/core';
import { TabnavItem } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TabnavService {
    readonly items: TabnavItem[] = [
      {
        name: "Maps App",
        description: "Aplicacion de mapas trabajada con OpenStreetMap que permite interactuar con mapas y marcar ubicaciones",
        status: "Finalizado",
        creationDate: "05-10-2025",
        technologies: [
          {
            name: "Angular",
            icon: "icon-[tabler--brand-angular]",
            iconColor: "text-red-600"
          },
          {
            name: "Leaflet",
            icon: "icon-[tabler--map-pin]",
            iconColor: "text-green-600"
          },
          {
            name: "OpenStreetMap",
            icon: "icon-[tabler--map-pin]",
            iconColor: "text-blue-600"
          },
          {
            name: "Github Pages",
            icon: "icon-[tabler--brand-github]",
            iconColor: "text-gray-800"
          },
        ],
        repoLink: 'https://github.com/RobertoVillalon/MapsApp',
        demoLink: 'https://robertovillalon.github.io/MapsApp'
      },
      {
        name: "Maps App",
        description: "Aplicacion de mapas trabajada con OpenStreetMap que permite interactuar con mapas y marcar ubicaciones",
        status: "Finalizado",
        creationDate: "06-10-2025",
        technologies: [
          {
            name: "Angular",
            icon: "icon-[tabler--brand-angular]",
            iconColor: "text-red-600"
          }
        ],
        repoLink: 'https://github.com/RobertoVillalon/MapsApp',
        demoLink: 'https://robertovillalon.github.io/MapsApp'
      },
    ]
}