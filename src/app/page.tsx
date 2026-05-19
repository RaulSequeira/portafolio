"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { ProjectCard } from "@/components/project-card";
import { ExperienceCard } from "@/components/experience-card";
import { EducationCard } from "@/components/education-card";
import { ScrambleText } from "@/components/scramble-title";
import { TechStack } from "@/components/tech-stack";
import { AIAssistant } from "@/components/ai-assistant";
import { Footer } from "@/components/footer";
import { projects } from "@/data/projects";
import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";
import { useLang } from "@/contexts/language-context";

const SCRAMBLE_STORAGE_KEY = "portfolio-intro-scramble-played-v1";

const OCEAN_BUBBLES: ReadonlyArray<{
  left: string; size: number; blur: number; delay: string; dur: string;
}> = [
  { left: "4%",  size: 70,  blur: 22, delay: "0s",   dur: "38s" },
  { left: "11%", size: 14,  blur: 4,  delay: "5s",   dur: "20s" },
  { left: "19%", size: 45,  blur: 14, delay: "12s",  dur: "32s" },
  { left: "27%", size: 9,   blur: 3,  delay: "2s",   dur: "17s" },
  { left: "38%", size: 85,  blur: 28, delay: "18s",  dur: "44s" },
  { left: "45%", size: 22,  blur: 7,  delay: "7s",   dur: "24s" },
  { left: "53%", size: 35,  blur: 11, delay: "15s",  dur: "28s" },
  { left: "62%", size: 12,  blur: 4,  delay: "3s",   dur: "19s" },
  { left: "70%", size: 60,  blur: 20, delay: "22s",  dur: "36s" },
  { left: "78%", size: 28,  blur: 9,  delay: "9s",   dur: "26s" },
  { left: "86%", size: 16,  blur: 5,  delay: "1s",   dur: "21s" },
  { left: "93%", size: 50,  blur: 16, delay: "25s",  dur: "34s" },
  { left: "33%", size: 18,  blur: 6,  delay: "30s",  dur: "23s" },
  { left: "57%", size: 42,  blur: 13, delay: "20s",  dur: "30s" },
];

export default function Home() {
  const [scrambleTrigger, setScrambleTrigger] = useState(0);
  const { lang, t } = useLang();

  useEffect(() => {
    const alreadyPlayed = window.localStorage.getItem(SCRAMBLE_STORAGE_KEY) === "1";
    if (alreadyPlayed) {
      return;
    }
    setScrambleTrigger(1);
    window.localStorage.setItem(SCRAMBLE_STORAGE_KEY, "1");
  }, []);

  const metrics = [
    t.hero.metrics.experience,
    t.hero.metrics.projects,
    t.hero.metrics.technologies,
  ];

  return (
    <>
      <main className="relative isolate min-h-screen overflow-x-hidden pb-20 pt-20">
        <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden="true">
          {OCEAN_BUBBLES.map((b, i) => (
            <div
              key={i}
              className="ocean-bubble"
              style={{
                left: b.left,
                width: b.size,
                height: b.size,
                bottom: -b.size,
                filter: `blur(${b.blur}px)`,
                animationDelay: b.delay,
                animationDuration: b.dur,
              } as CSSProperties}
            />
          ))}
        </div>

        {/* Hero */}
        <section id="sobre-mi" className="mx-auto w-full max-w-6xl scroll-mt-16 px-5 sm:px-8 lg:px-14">
          {/* Greeting */}
          <p className="mb-3 text-sm font-medium tracking-wide text-zinc-400">
            {t.hero.greeting}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
            <ScrambleText as="span" text="RAÚL" trigger={scrambleTrigger} className="block" />
            <ScrambleText as="span" text="SEQUEIRA" trigger={scrambleTrigger} className="block" />
          </h1>

          <h3 className="mt-3 text-2xl font-medium text-cyan-300 sm:text-3xl">
            {t.hero.role}
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {t.hero.description}
          </p>

          {/* CTAs + social links */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="/api/cv"
              className="group inline-flex items-center justify-center rounded-xl border border-cyan-300/35 bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-indigo-500/20 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)]"
            >
              {t.hero.downloadCV}
              <span className="ml-2 transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-700/90 bg-zinc-900/70 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors duration-300 hover:border-zinc-500 hover:text-zinc-100"
            >
              {t.hero.viewProjects}
            </a>

            {/* Social icon buttons */}
            <div className="ml-1 flex items-center gap-2">
              <a
                href="https://github.com/raulsequeira96"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900/60 text-zinc-400 transition-all duration-200 hover:border-zinc-500 hover:text-zinc-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/raul-alejandro-sequeira/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900/60 text-zinc-400 transition-all duration-200 hover:border-cyan-400/50 hover:text-cyan-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Metrics */}
          <div className="mt-12 flex flex-wrap items-start gap-0">
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`flex flex-col gap-1 ${
                  i < metrics.length - 1
                    ? "mr-8 border-r border-zinc-700/50 pr-8 sm:mr-12 sm:pr-12"
                    : ""
                }`}
              >
                <span className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                  {metric.value}
                </span>
                <span className="text-xs text-zinc-500">{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="proyectos" className="mx-auto mt-20 w-full max-w-6xl scroll-mt-16 px-5 sm:px-8 lg:px-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {t.projects.sectionLabel}
          </p>
          <h2 className="mb-10 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
            {t.projects.sectionTitle}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                scrambleTrigger={scrambleTrigger}
              />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experiencia" className="mx-auto mt-20 w-full max-w-6xl scroll-mt-16 px-5 sm:px-8 lg:px-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {t.nav.experience}
          </p>
          <h2 className="mb-10 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
            {t.experience.sectionTitle}
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {experienceData.map((item, index) => (
              <ExperienceCard
                key={item.company}
                item={item}
                index={index}
                lang={lang}
                softSkillsLabel={t.experience.softSkillsLabel}
              />
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="formacion" className="mx-auto mt-20 w-full max-w-6xl scroll-mt-16 px-5 sm:px-8 lg:px-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {t.nav.education}
          </p>
          <h2 className="mb-10 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
            {t.education.sectionTitle}
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {educationData.map((item, index) => (
              <EducationCard
                key={item.institution}
                item={item}
                index={index}
                lang={lang}
                statusLabels={t.education.status}
              />
            ))}
          </div>
        </section>

        {/* Skills */}
        <div id="habilidades" className="scroll-mt-16">
          <TechStack />
        </div>

        {/* AI Assistant */}
        <AIAssistant />

        {/* Contact */}
        <section id="contacto" className="mx-auto mt-20 w-full max-w-6xl scroll-mt-16 px-5 sm:px-8 lg:px-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {t.contact.sectionLabel}
          </p>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
            {t.contact.title}
          </h2>
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {t.contact.description}
          </p>
          <a
            href={`mailto:raul.sequeira96@gmail.com?subject=${encodeURIComponent("Contacto desde tu Portfolio ✨")}&body=${encodeURIComponent("Hola Raúl,\n\nMe pongo en contacto desde tu portfolio.\n\n")}`}
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/35 bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-indigo-500/20 px-6 py-3 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {t.contact.buttonText}
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
