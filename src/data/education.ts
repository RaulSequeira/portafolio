export type EducationStatus = "ongoing" | "graduated";

export interface EducationItem {
  period: { es: string; en: string };
  status: EducationStatus;
  title: { es: string; en: string };
  institution: string;
  description: { es: string; en: string };
  accentColor: string;
}

export const educationData: EducationItem[] = [
  {
    period: { es: "2019 — Presente", en: "2019 — Present" },
    status: "ongoing",
    title: {
      es: "Ingeniería en Sistemas de Información",
      en: "Information Systems Engineering",
    },
    institution: "Universidad Tecnológica Nacional — FRBA",
    description: {
      es: "Formación en algoritmos, estructuras de datos, bases de datos relacionales, arquitectura de software, sistemas operativos, redes, programación orientada a objetos y gestión de proyectos de software.",
      en: "Training in algorithms, data structures, relational databases, software architecture, operating systems, networks, object-oriented programming and software project management.",
    },
    accentColor: "#22d3ee",
  },
  {
    period: { es: "2009 — 2015", en: "2009 — 2015" },
    status: "graduated",
    title: {
      es: "Técnico Mecánico Electricista",
      en: "Electromechanical Technician",
    },
    institution: 'Escuela Técnica N°11 DE 6 "Manuel Belgrano"',
    description: {
      es: "Formación técnica en electricidad industrial, electrónica básica, mecánica, instalaciones eléctricas y dibujo técnico con orientación a la resolución de problemas prácticos.",
      en: "Technical training in industrial electricity, basic electronics, mechanics, electrical installations and technical drawing with a focus on practical problem solving.",
    },
    accentColor: "#a855f7",
  },
];
