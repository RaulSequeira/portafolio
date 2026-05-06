# Portafolio Full Stack

Portafolio personal moderno construido con **Next.js + React + TypeScript + Tailwind CSS + Framer Motion**.

## Vista general

Este proyecto muestra una grilla de proyectos con foco en diseno, claridad visual y experiencia de usuario:

- Tema oscuro minimalista y responsive.
- Tarjetas de proyectos activos y en desarrollo.
- Efecto "scramble/decrypt" en textos (solo en la primera visita).
- Fondo animado sutil con efecto de ola en paleta azul.
- Boton elegante para descargar CV.

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Como ejecutar en local

```bash
npm install
npm run dev
```

App en desarrollo: `http://localhost:3000`

## Estructura principal

```txt
src/
  app/
    page.tsx
    globals.css
    api/cv/route.ts
  components/
    project-card.tsx
    scramble-title.tsx
  data/
    projects.ts
data/
  CV-Raul-Alejandro-Sequeira.pdf
public/
  projects/   (imagenes de preview)
```

## Personalizacion rapida

1. Editar proyectos: `src/data/projects.ts`
2. Agregar previews: `public/projects/`
3. Reemplazar CV: `data/CV-Raul-Alejandro-Sequeira.pdf`
4. Endpoint de descarga CV: `/api/cv`

## Licencia

Uso personal.
