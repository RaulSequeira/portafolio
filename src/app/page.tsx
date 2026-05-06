"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { ScrambleText } from "@/components/scramble-title";
import { projects } from "@/data/projects";

const SCRAMBLE_STORAGE_KEY = "portfolio-intro-scramble-played-v1";

export default function Home() {
  const [scrambleTrigger, setScrambleTrigger] = useState(0);

  useEffect(() => {
    const alreadyPlayed = window.localStorage.getItem(SCRAMBLE_STORAGE_KEY) === "1";
    if (alreadyPlayed) {
      return;
    }
    setScrambleTrigger(1);
    window.localStorage.setItem(SCRAMBLE_STORAGE_KEY, "1");
  }, []);

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden px-5 pb-20 pt-16 sm:px-8 lg:px-14">
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <div className="wave-layer wave-layer-primary" />
        <div className="wave-layer wave-layer-secondary" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-[-8rem] -z-10 h-[22rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <section className="mx-auto w-full max-w-6xl">
        <p className="mb-4 inline-flex rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-300">
          <ScrambleText as="span" text="Portafolio personal" trigger={scrambleTrigger} />
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
          <ScrambleText as="span" text="RAÚL" trigger={scrambleTrigger} className="block" />
          <ScrambleText as="span" text="SEQUEIRA" trigger={scrambleTrigger} className="block" />
          <ScrambleText
            as="span"
            text="Desarrollador Full Stack"
            trigger={scrambleTrigger}
            className="mt-2 block text-2xl font-medium text-cyan-300 sm:text-3xl"
          />
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          Orientado al desarrollo Full Stack, con foco en React.js y participación en el desarrollo
          de servicios y APIs, actualmente en búsqueda activa de nuevos desafíos donde pueda aportar
          valor al equipo, fortalecer mis habilidades a lo largo de todo el stack y seguir creciendo
          a nivel técnico en entornos de desarrollo dinámicos y colaborativos.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="/api/cv"
            className="group inline-flex items-center justify-center rounded-xl border border-cyan-300/35 bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-indigo-500/20 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)]"
          >
            Descargar CV
            <span className="ml-2 transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-700/90 bg-zinc-900/70 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors duration-300 hover:border-zinc-500 hover:text-zinc-100"
          >
            Ver proyectos
          </a>
        </div>
      </section>

      <section
        id="proyectos"
        className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            scrambleTrigger={scrambleTrigger}
          />
        ))}
      </section>
    </main>
  );
}
