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
          icon: "icon-[devicon-plain--angular]",
          iconColor: "text-red-600"
        },
        {
          name: "TypeScript",
          icon: "icon-[devicon-plain--typescript]",
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
          name: "CSS",
          icon: "icon-[devicon-plain--css3]",
          iconColor: "text-blue-600"
        },
        {
          name: "Github Actions",
          icon: "icon-[devicon-plain--githubactions]",
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
          icon: "icon-[devicon-plain--angular]",
          iconColor: "text-red-600"
        },
        {
          name: "TypeScript",
          icon: "icon-[devicon-plain--typescript]",
          iconColor: "text-blue-600"
        },
        {
          name: "Github Actions",
          icon: "icon-[devicon-plain--githubactions]",
          iconColor: "text-orange-600"
        }
      ],
      repoLink: 'https://github.com/RobertoVillalon/MapsApp',
      demoLink: 'https://robertovillalon.github.io/MapsApp'
    },
    {
      name: "Laboratorios de estructura de datos",
      description: "Conjunto de laboratorios realizados para la asignatura de Estructura de Datos en la universidad",
      status: "Finalizado",
      creationDate: "05-05-2019",
      lastUpdateDate: "29-07-2019",
      technologies: [
        {
          name: "C",
          icon: "icon-[devicon-plain--cplusplus]",
          iconColor: "text-blue-600"
        }
      ],
      repoLink: 'https://github.com/RobertoVillalon/EstructuraDeDatos'
    },
    {
      name: "Gestion de Citas y Fichas Clinicas",
      description: "Proyecto de gestion de citas y fichas clinicas realizado para la asignatura de Programacion Orientada a Objetos",
      status: "Finalizado",
      creationDate: "10-03-2020",
      lastUpdateDate: "15-04-2020",
      technologies: [
        {
          name: "Java",
          icon: "icon-[devicon-plain--java]",
          iconColor: "text-red-600"
        }
      ],
      repoLink: "https://github.com/RobertoVillalon/ProyectoPOO"
    },
    {
      name: "Comparacion y Visualizacion de Algoritmos",
      description: "Aplicacion para comparar y visualizar el funcionamiento de diferentes algoritmos de ordenamiento y busqueda, Proyecto realizado para la asignatura de Diseño y Analisis de Algoritmos",
      status: "Finalizado",
      creationDate: "02-06-2020",
      lastUpdateDate: "30-06-2020",
      technologies: [
        {
          name: "Java",
          icon: "icon-[devicon-plain--java]",
          iconColor: "text-red-600"
        }
      ],
      repoLink: "https://github.com/RobertoVillalon/Comparacion-Visualizacion-de-Algoritmos"
    }
  ]
}
