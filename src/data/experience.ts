export interface ExperienceItem {
  role: { es: string; en: string };
  company: string;
  period: { es: string; en: string };
  responsibilities: { es: string[]; en: string[] };
  softSkills: { es: string; en: string };
  accentColor: string;
}

export const experienceData: ExperienceItem[] = [
  {
    role: {
      es: "Desarrollador Full Stack",
      en: "Full Stack Developer",
    },
    company: "Softtek S.A.",
    period: {
      es: "2024 — Presente",
      en: "2024 — Present",
    },
    responsibilities: {
      es: [
        "Desarrollo Full Stack con Next.js y Express.js en una SPA orientada a la validación facial de usuarios.",
        "Participación en microservicios y desarrollos puntuales en sistemas de validación biométrica.",
        "Integración de SDKs para incorporar componentes de validación documental.",
        "Gestión de versiones con Git y GitLab, utilizando ramas, merge requests y code reviews.",
      ],
      en: [
        "Full Stack development with Next.js and Express.js in a facial recognition SPA.",
        "Participation in microservices and focused developments for biometric validation systems.",
        "SDK integration to incorporate document validation components.",
        "Version control with Git and GitLab using branches, merge requests and code reviews.",
      ],
    },
    softSkills: {
      es: "Adaptabilidad · Proactividad · Colaboración en entornos ágiles",
      en: "Adaptability · Proactiveness · Agile collaboration",
    },
    accentColor: "#22d3ee",
  },
  {
    role: {
      es: "Desarrollador Full Stack",
      en: "Full Stack Developer",
    },
    company: "Capgemini S.A.",
    period: {
      es: "2019 — 2024",
      en: "2019 — 2024",
    },
    responsibilities: {
      es: [
        "Desarrollo de aplicaciones monolíticas en Java con Spring Boot y JPA/Hibernate, aplicando patrones de diseño.",
        "Creación de interfaces dinámicas con React, TypeScript, JavaScript ES6+, HTML5 y CSS3.",
        "Trabajo en equipos multidisciplinarios bajo metodologías ágiles (Scrum/Kanban).",
        "Aseguramiento de calidad mediante code reviews y testing unitario con JUnit.",
      ],
      en: [
        "Monolithic application development in Java with Spring Boot and JPA/Hibernate, applying design patterns.",
        "Dynamic UI creation with React, TypeScript, JavaScript ES6+, HTML5 and CSS3.",
        "Multidisciplinary team collaboration under Scrum/Kanban agile methodologies.",
        "Quality assurance through code reviews and unit testing with JUnit.",
      ],
    },
    softSkills: {
      es: "Trabajo en equipo · Comunicación efectiva · Resolución de problemas",
      en: "Teamwork · Effective communication · Problem solving",
    },
    accentColor: "#a855f7",
  },
];
