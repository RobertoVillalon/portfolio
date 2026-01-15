import { Injectable, signal } from '@angular/core';
import { AboutInfo } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AboutmeService {
  readonly about: AboutInfo = {
    name: 'Roberto Villalón',
    role: 'Full Stack Developer · Cloud / DevOps',
    summary: [
      'Desarrollador de software full stack con más de 3 años de experiencia, enfocado en la construcción de aplicaciones web modernas, escalables y mantenibles.',
      'Trabajo principalmente con Angular, Spring Boot y arquitecturas basadas en microservicios y cloud.',
      'Me caracterizo por una mentalidad de mejora continua, automatización de procesos y un fuerte enfoque en la calidad técnica de las soluciones.'
    ],
    email: 'robertoantonio3756@gmail.com',
    linkedin: 'https://www.linkedin.com/in/roberto-villalón',
    values: [
      {
        title: 'Compromiso',
        description: 'Responsabilidad y dedicación en cada proyecto, desde la arquitectura hasta el último detalle.',
        icon: 'icon-[tabler--circle-check]'
      },
      {
        title: 'Calidad técnica',
        description: 'Código limpio, escalable y alineado a buenas prácticas y estándares profesionales.',
        icon: 'icon-[tabler--circle-check]'
      },
      {
        title: 'Adaptabilidad',
        description: 'Capacidad para integrarme rápidamente a distintos equipos, tecnologías y contextos.',
        icon: 'icon-[tabler--circle-check]'
      },
      {
        title: 'Agilidad',
        description: 'Experiencia real trabajando con metodologías ágiles y entrega continua de valor.',
        icon: 'icon-[tabler--circle-check]'
      }
    ]
  }
}
