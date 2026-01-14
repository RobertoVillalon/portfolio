import { Injectable } from '@angular/core';
import { ProjectItem } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  readonly items: ProjectItem[] = [
      {
        name: "Maps App",
        description: "Aplicacion de mapas trabajada con OpenStreetMap que permite interactuar con mapas y marcar ubicaciones",
        status: "Finalizado",
        creationDate: "10-06-2025",
        lastUpdateDate: "19-08-2025",
        technologies: [
          {
            name: "Angular",
            icon: "icon-[tabler--brand-angular]",
            iconColor: "text-red-600"
          },
          {
            name: "TypeScript",
            icon: "icon-[tabler--brand-typescript]",
            iconColor: "text-blue-600"
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
            iconColor: "text-orange-600"
          },
        ],
        repoLink: 'https://github.com/RobertoVillalon/MapsApp',
        demoLink: 'https://robertovillalon.github.io/MapsApp',
        images: [
          '/projects/mapsapp/1.png',
          '/projects/mapsapp/2.png',
          '/projects/mapsapp/3.png',
        ]
      },
      {
        name: "Custom Shop",
        description: "Aplicacion tipo e-commerce para la venta de productos personalizados,",
        status: "Finalizado",
        creationDate: "24-08-2025",
        lastUpdateDate: "14-10-2025",
        technologies: [
          {
            name: "Angular",
            icon: "icon-[tabler--brand-angular]",
            iconColor: "text-red-600"
          },
          {
            name: "TypeScript",
            icon: "icon-[tabler--brand-typescript]",
            iconColor: "text-blue-600"
          },
          {
            name: "Github Pages",
            icon: "icon-[tabler--brand-github]",
            iconColor: "text-orange-600"
          }
        ],
        repoLink: 'https://github.com/RobertoVillalon/MapsApp',
        demoLink: 'https://robertovillalon.github.io/MapsApp'
      },
    ]
}
