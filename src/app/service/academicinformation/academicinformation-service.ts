import { Injectable } from '@angular/core';
import { CertificationItem, EducationItem } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AcademicinformationService {
    readonly education: EducationItem[] = [
    {
      institution: 'IPCHILE',
      degree: 'Ingeniería Informática',
      period: 'Mar. 2024 – Nov. 2025',
      description:
        'Formación profesional orientada al desarrollo de software, arquitectura de sistemas, bases de datos y gestión de proyectos tecnológicos.'
    },
    {
      institution: 'IPCHILE',
      degree: 'Técnico Analista Programador',
      period: 'Mar. 2021 – May. 2023',
      description:
        'Formación técnica enfocada en programación, lógica computacional, bases de datos y desarrollo de aplicaciones.'
    }
  ];

  readonly certifications: CertificationItem[] = [
    {
      name: 'AWS Cloud Practitioner (Foundational)',
      provider: 'Amazon Web Services (AWS)',
      issueDate: '04 Septiembre 2025'
    }
  ];
}
