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
      repoLink: 'https://github.com/RobertoVillalon/CustomShop',
      demoLink: 'https://robertovillalon.github.io/CustomShop'
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
        },
        {
          name: "PostgreSQL",
          icon: "icon-[devicon-plain--postgresql]",
          iconColor: "text-blue-600"
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
    },
    {
      name: "Recuperación de la Información con Lucene",
      description: "Software de recuperacion de informacion desde TXTs, PPTs, DOCs, XLSx, PDFs utilizando la libreria Apache Lucene y Apache Tika, Proyecto realizado para la asignatura de Diseño y Analisis de Algoritmos",
      status: "Finalizado",
      creationDate: "02-07-2020",
      lastUpdateDate: "21-07-2020",
      technologies: [
        {
          name: "Java",
          icon: "icon-[devicon-plain--java]",
          iconColor: "text-red-600"
        },
        {
          name: "Apache Lucene",
          icon: "icon-[devicon-plain--apache]",
          iconColor: "text-orange-600"
        },
        {
          name: "Apache Tika",
          icon: "icon-[devicon-plain--apache]",
          iconColor: "text-orange-600"
        }
      ],
      repoLink: "https://github.com/RobertoVillalon/Lucene"
    },
    {
      name: "Tienda de Ropa",
      description: "Aplicacion web para la gestion de un tienda de ropa. Proyecto utilizado como primera aproximacion al desarrollo web",
      status: "Finalizado",
      creationDate: "28-08-2020",
      lastUpdateDate: "30-09-2020",
      technologies: [
        {
          name: "HTML",
          icon: "icon-[devicon-plain--html5]",
          iconColor: "text-orange-600"
        },
        {
          name: "CSS",
          icon: "icon-[devicon-plain--css3]",
          iconColor: "text-blue-600"
        },
        {
          name: "JavaScript",
          icon: "icon-[devicon-plain--javascript]",
          iconColor: "text-yellow-300"
        }
      ],
      repoLink: "https://github.com/RobertoVillalon/TiendaDeRopa"
    },
    {
      name: "Poke-Api",
      description: "Aplicacion web que consume la Poke-Api para mostrar informacion sobre los diferentes Pokemon",
      status: "Finalizado",
      creationDate: "24-07-2021",
      lastUpdateDate: "24-06-2022",
      technologies: [
        {
          name: "HTML",
          icon: "icon-[devicon-plain--html5]",
          iconColor: "text-orange-600"
        },
        {
          name: "CSS",
          icon: "icon-[devicon-plain--css3]",
          iconColor: "text-blue-600"
        },
        {
          name: "JavaScript",
          icon: "icon-[devicon-plain--javascript]",
          iconColor: "text-yellow-300"
        },
        {
          name: "Node.js",
          icon: "icon-[devicon-plain--nodejs]",
          iconColor: "text-green-600"
        },
        {
          name: "React.js",
          icon: "icon-[tabler--brand-react]",
          iconColor: "text-blue-400"
        },
                {
          name: "React Router",
          icon: "icon-[devicon-plain--reactrouter]",
          iconColor: "text-blue-400"
        }
      ],
      repoLink: "https://github.com/RobertoVillalon/PokeAPI"
    },
    {
      name: "Aplicacion de Contactos - Frontend",
      description: "Aplicaciion Web para la gestion de contactos e informacion laboral de las personas",
      status: "Finalizado",
      creationDate: "26-04-2022",
      lastUpdateDate: "01-08-2022",
      technologies: [
        {
          name: "HTML",
          icon: "icon-[devicon-plain--html5]",
          iconColor: "text-orange-600"
        },
        {
          name: "CSS",
          icon: "icon-[devicon-plain--css3]",
          iconColor: "text-blue-600"
        },
        {
          name: "JavaScript",
          icon: "icon-[devicon-plain--javascript]",
          iconColor: "text-yellow-300"
        },
        {
          name: "React.js",
          icon: "icon-[tabler--brand-react]",
          iconColor: "text-blue-400"
        },
        {
          name: "React Router",
          icon: "icon-[devicon-plain--reactrouter]",
          iconColor: "text-blue-400"
        }
      ],
      repoLink: "https://github.com/RobertoVillalon/AppContactosFront"
    },
    {
      name: "Aplicacion de Contactos - Backend",
      description: "Backend para la aplicacion de gestion de contactos e informacion laboral de las personas, construido con Spring Boot",
      status: "Finalizado",
      creationDate: "08-05-2022",
      lastUpdateDate: "24-08-2022",
      technologies: [
        {
          name: "Java",
          icon: "icon-[devicon-plain--java]",
          iconColor: "text-red-600"
        },
        {
          name: "Spring",
          icon: "icon-[devicon-plain--spring]",
          iconColor: "text-green-600"
        },
        {
          name: "Spring Boot",
          icon: "icon-[devicon-plain--spring]",
          iconColor: "text-green-600"
        },
        {
          name: "Spring Security",
          icon: "icon-[devicon-plain--spring]",
          iconColor: "text-green-600"
        },
        {
          name: "MySQL",
          icon: "icon-[devicon-plain--mysql]",
          iconColor: "text-blue-600"
        },
        {
          name: "Hibernate",
          icon: "icon-[devicon-plain--hibernate]",
          iconColor: "text-orange-600"
        },
        {
          name: "JWT",
          icon: "icon-[devicon-plain--jwt]",
          iconColor: "text-yellow-600"
        }
      ],
      repoLink: "https://github.com/RobertoVillalon/AppContactosBack/"
    },
    {
      name: "Gestion de Proyectos",
      description: "Aplicacion de escritorio para la gestion de proyectos y tareas utilizando Java EE y JSP",
      status: "Finalizado",
      creationDate: "30-08-2024",
      lastUpdateDate: "01-09-2024",
      technologies: [
        {
          name: "Java",
          icon: "icon-[devicon-plain--java]",
          iconColor: "text-red-600"
        },
        {
          name: "JSP",
          icon: "icon-[devicon-plain--java]",
          iconColor: "text-red-600"
        }
      ],
      repoLink: "https://github.com/RobertoVillalon/gestionDeProyectos"
    },
    {
      name: "Gestion Universitaria",
      description: "Sistema de gestion universitaria para administrar estudiantes, cursos y profesores",
      status: "Finalizado",
      creationDate: "08-09-2024",
      lastUpdateDate: "16-09-2024",
      technologies: [
        {
          name: "Java",
          icon: "icon-[devicon-plain--java]",
          iconColor: "text-red-600"
        },
        {
          name: "JSP",
          icon: "icon-[devicon-plain--java]",
          iconColor: "text-red-600"
        }
      ],
      repoLink: "https://github.com/RobertoVillalon/gestionUniversitaria"
    },
    {
      name: "Aplicacion de Vocabulario",
      description: "Una aplicación móvil desarrollada con Kotlin y Jetpack Compose para ayudar a los usuarios a aprender nuevas palabras en español con sus respectivos significados. Ideal para ampliar tu vocabulario día a día.",
      status: "Finalizado",
      creationDate: "01-04-2025",
      lastUpdateDate: "12-04-2025",
      technologies: [
        {
          name: "Kotlin",
          icon: "icon-[devicon-plain--kotlin]",
          iconColor: "text-purple-600"
        },
        {
          name: "Jetpack Compose",
          icon: "icon-[devicon-plain--jetpackcompose]",
          iconColor: "text-purple-600"
        }
      ],
      repoLink: "https://github.com/RobertoVillalon/diccionarioPalabras"
    },
    {
      name: "SensorApp",
      description: "Aplicación Android desarrollada en Kotlin utilizando Jetpack Compose, que permite visualizar datos en tiempo real de distintos sensores disponibles en el dispositivo.",
      status: "Finalizado",
      creationDate: "01-04-2025",
      lastUpdateDate: "17-04-2025",
      technologies: [
        {
          name: "Kotlin",
          icon: "icon-[devicon-plain--kotlin]",
          iconColor: "text-purple-600"
        },
        {
          name: "Jetpack Compose",
          icon: "icon-[devicon-plain--jetpackcompose]",
          iconColor: "text-purple-600"
        }
      ],
      repoLink: "https://github.com/RobertoVillalon/kotlinConSensores"
    }
  ]
}