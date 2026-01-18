import { Injectable } from '@angular/core';
import { ExperienceBody } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
    experience: ExperienceBody[] = [
    {
      role: 'Consultor Devops / Desarrollador',
      company: 'Technology Solutions',
      period: 'Noviembre 2022 - Presente',
      tasks: [
        "Generación y mantenimiento de servicios virtualizados",
        "Desarrollo de plataforma de gestión de servicios distribuidos de un middleware",
        "Desarrollo / migración de plataforma web monolítica para la gestión de los servicios virtualizados para el cliente hacia una basada en microservicios Gestión y resolución de errores",
        "Gestión y resolución de errores de pipelines en ambientes preproductivos, ambientaciones de procedimientos (creación de tablas sql, subida de aplicaciones en servidores, análisis de vulnerabilidades, etc"
      ]
    },
    {
      role: 'Desarrollador de Software',
      company: 'Renapam', 
      period: 'Septiembre 2024 - Enero 2025', 
      tasks: [
        "Desarrollo y gestión de sitios web en wordpress, incluyendo personalización de temas y plugins",
        "Análisis de requerimientos y soporte técnico a usuarios finales",
        "Implementación de funcionalidades específicas en php según requerimientos de clientes."
      ]
    }
  ]
}
