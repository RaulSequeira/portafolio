"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

interface Metric {
  value: string;
  label: string;
}

interface Translations {
  nav: {
    about: string;
    experience: string;
    projects: string;
    education: string;
    skills: string;
    aiAssistant: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    downloadCV: string;
    viewProjects: string;
    metrics: {
      experience: Metric;
      projects: Metric;
      technologies: Metric;
    };
  };
  experience: {
    sectionTitle: string;
    softSkillsLabel: string;
  };
  education: {
    sectionTitle: string;
    status: {
      ongoing: string;
      graduated: string;
    };
  };
  projects: {
    sectionLabel: string;
    sectionTitle: string;
    viewDemo: string;
    comingSoon: string;
  };
  techStack: {
    title: string;
  };
  footer: {
    role: string;
    designedBy: string;
    builtWith: string;
  };
  aiAssistant: {
    label: string;
    title: string;
    description: string;
    placeholder: string;
    sendButton: string;
    loading: string;
    errorDefault: string;
  };
  contact: {
    sectionLabel: string;
    title: string;
    description: string;
    buttonText: string;
  };
}

const translations: Record<Lang, Translations> = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Formación",
      skills: "Habilidades",
      aiAssistant: "AI",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador Full Stack",
      description:
        "Especializado en construir aplicaciones escalables con React y Spring Boot, priorizando arquitecturas limpias y código de calidad en entornos colaborativos.",
      downloadCV: "Descargar CV",
      viewProjects: "Ver proyectos",
      metrics: {
        experience: { value: "7+", label: "Años de experiencia" },
        projects: { value: "6+", label: "Proyectos" },
        technologies: { value: "10+", label: "Tecnologías" },
      },
    },
    experience: {
      sectionTitle: "Trayectoria Profesional",
      softSkillsLabel: "Soft skills",
    },
    education: {
      sectionTitle: "Educación Académica",
      status: {
        ongoing: "En curso",
        graduated: "Graduado",
      },
    },
    projects: {
      sectionLabel: "Proyectos",
      sectionTitle: "Lo que construí",
      viewDemo: "Ver demo →",
      comingSoon: "Próximamente",
    },
    techStack: {
      title: "Tecnologías & Herramientas",
    },
    footer: {
      role: "Desarrollador Full Stack",
      designedBy: "Diseñado y desarrollado por",
      builtWith: "Construido con",
    },
    aiAssistant: {
      label: "Asistente de IA",
      title: "Consultá mi perfil",
      description:
        "Hacé preguntas sobre mi experiencia, stack técnico o proyectos. La IA responde en base a mi información real.",
      placeholder: "Ej: ¿Con qué tecnologías trabajaste en Softtek?",
      sendButton: "Enviar",
      loading: "Pensando...",
      errorDefault: "No se pudo obtener la respuesta. Intentá de nuevo.",
    },
    contact: {
      sectionLabel: "Contacto",
      title: "Construyamos algo juntos",
      description:
        "Si tenés una idea, un proyecto o simplemente querés charlar sobre tecnología, escribime. Estoy abierto a nuevas oportunidades y colaboraciones.",
      buttonText: "Enviar Mail",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      skills: "Skills",
      aiAssistant: "AI",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Full Stack Developer",
      description:
        "Specialized in building scalable applications with React and Spring Boot, prioritizing clean architectures and code quality in collaborative environments.",
      downloadCV: "Download CV",
      viewProjects: "View projects",
      metrics: {
        experience: { value: "7+", label: "Years of experience" },
        projects: { value: "6+", label: "Projects" },
        technologies: { value: "10+", label: "Technologies" },
      },
    },
    experience: {
      sectionTitle: "Professional Experience",
      softSkillsLabel: "Soft skills",
    },
    education: {
      sectionTitle: "Academic Education",
      status: {
        ongoing: "In progress",
        graduated: "Graduated",
      },
    },
    projects: {
      sectionLabel: "Projects",
      sectionTitle: "What I've built",
      viewDemo: "View demo →",
      comingSoon: "Coming soon",
    },
    techStack: {
      title: "Technologies & Tools",
    },
    footer: {
      role: "Full Stack Developer",
      designedBy: "Designed and developed by",
      builtWith: "Built with",
    },
    aiAssistant: {
      label: "AI Assistant",
      title: "Ask about my profile",
      description:
        "Ask questions about my experience, tech stack or projects. The AI answers based on my real information.",
      placeholder: "E.g.: What technologies did you use at Softtek?",
      sendButton: "Send",
      loading: "Thinking...",
      errorDefault: "Could not get a response. Please try again.",
    },
    contact: {
      sectionLabel: "Contact",
      title: "Let's build something together",
      description:
        "If you have an idea, a project, or just want to talk about tech, reach out. I'm open to new opportunities and collaborations.",
      buttonText: "Send Email",
    },
  },
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
