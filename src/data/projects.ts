export type ProjectStatus = "active" | "in-development";

export interface PortfolioProject {
  title: string;
  description: { es: string; en: string };
  stack: string[];
  status: ProjectStatus;
  href?: string;
  previewImage?: string;
  accentFrom: string;
  accentTo: string;
}

export const projects: PortfolioProject[] = [
  {
    title: "MicroFrontend Colors",
    description: {
      es: "App educativa sobre arquitectura MicroFrontend con Module Federation y un Color Picker desacoplado consumido por una app host.",
      en: "Educational app on Micro Frontend architecture with Module Federation and a decoupled Color Picker consumed by a host app.",
    },
    stack: ["Webpack", "Module Federation", "React"],
    status: "active",
    href: "https://host-mf-colors-app.netlify.app/",
    previewImage: "/projects/microfrontend-color.png",
    accentFrom: "#06b6d4",
    accentTo: "#6366f1"
  },
  {
    title: "React Redux Tasks",
    description: {
      es: "CRUD de tareas centrado en reducers sincronicos, acciones limpias y manejo de estado predecible en Redux.",
      en: "Task CRUD focused on synchronous reducers, clean actions and predictable Redux state management.",
    },
    stack: ["React", "Redux", "TypeScript"],
    status: "active",
    href: "https://react-redux-app-v1.netlify.app/",
    previewImage: "/projects/react-redux-tasks.png",
    accentFrom: "#22d3ee",
    accentTo: "#a855f7"
  },
  {
    title: "E-commerce Vanilla",
    description: {
      es: "Tienda online construida con HTML5, CSS3 y JavaScript puro, enfocada en rendimiento y UX ligera.",
      en: "Online store built with HTML5, CSS3 and vanilla JavaScript, focused on performance and lightweight UX.",
    },
    stack: ["HTML5", "CSS3", "JavaScript"],
    status: "active",
    href: "https://fresquito-app.netlify.app/",
    previewImage: "/projects/ecommerce-vanilla.png",
    accentFrom: "#34d399",
    accentTo: "#06b6d4"
  },
  {
    title: "Cocktail Explorer",
    description: {
      es: "Explorador de cocteles con filtros avanzados, busquedas por ingredientes y descubrimiento visual de recetas.",
      en: "Cocktail browser with advanced filters, ingredient search and visual recipe discovery.",
    },
    stack: ["React", "API Integration", "Filters UX"],
    status: "active",
    href: "https://cocktailstudio.netlify.app/",
    previewImage: "/projects/cocktail-explorer.png",
    accentFrom: "#f472b6",
    accentTo: "#f59e0b"
  },
  {
    title: "Product Comparison API",
    description: {
      es: "API RESTful para consulta y comparación de productos con endpoints para recuperar especificaciones, precios y calificaciones.",
      en: "RESTful API for product query and comparison with endpoints for retrieving specifications, prices and ratings.",
    },
    stack: ["Java", "Spring Boot", "JPA/Hibernate", "JWT", "REST API", "OpenAPI"],
    status: "active",
    href: "https://api-productos-1mxs.onrender.com/swagger-ui/index.html#/",
    previewImage: "/projects/Product Comparison API.png",
    accentFrom: "#10b981",
    accentTo: "#3b82f6"
  },
  {
    title: "SaaS-Boilerplate",
    description: {
      es: "Starter kit de producción para aplicaciones SaaS con autenticación JWT completa e integración de pagos con Mercado Pago Argentina.",
      en: "Production starter kit for SaaS applications with complete JWT authentication and Mercado Pago Argentina payment integration.",
    },
    stack: ["Next.js", "Springboot", "JPA/Hibernate", "JWT"],
    status: "in-development",
    accentFrom: "#71717a",
    accentTo: "#3f3f46"
  }
];
