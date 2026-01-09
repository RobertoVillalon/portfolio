import { Component } from '@angular/core';
import { Divider } from "../../components/divider/divider";
import { ExperienceBody } from '../../interfaces';

@Component({
  selector: 'app-experience',
  imports: [Divider],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})

export class Experience {
  experience: ExperienceBody[] = [
    {
      title: 'Consultor Devops / Desarrollador',
      company: 'Technology Solutions',
      period: 'Noviembre 2022 - Presente',
      description: [
        "Generación y mantenimiento de servicios virtualizados",
        "Desarrollo de plataforma de gestión de servicios distribuidos de un middleware",
        "Desarrollo / migración de plataforma web monolítica para la gestión de los servicios virtualizados para el cliente hacia una basada en microservicios Gestión y resolución de errores",
        "Gestión y resolución de errores de pipelines en ambientes preproductivos, ambientaciones de procedimientos (creación de tablas sql, subida de aplicaciones en servidores, análisis de vulnerabilidades, etc"
      ]
    },
    {
      title: 'Desarrollador de Software',
      company: 'Renapam', 
      period: 'Septiembre 2024 - Enero 2025', 
      description: [
        "Desarrollo y gestión de sitios web en wordpress, incluyendo personalización de temas y plugins",
        "Análisis de requerimientos y soporte técnico a usuarios finales",
        "Implementación de funcionalidades específicas en php según requerimientos de clientes."
      ]
    }
  ]
}