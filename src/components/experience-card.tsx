"use client";

import { motion } from "framer-motion";
import type { ExperienceItem } from "@/data/experience";
import type { Lang } from "@/contexts/language-context";

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
  lang: Lang;
  softSkillsLabel: string;
}

export function ExperienceCard({ item, index, lang, softSkillsLabel }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.45, ease: "easeOut" }}
      className="relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 backdrop-blur-sm"
    >
      {/* Left accent strip */}
      <div
        className="absolute left-0 top-0 h-full w-0.5"
        style={{ background: item.accentColor }}
        aria-hidden="true"
      />

      {/* Role */}
      <h3 className="text-base font-semibold text-zinc-100 sm:text-lg">
        {item.role[lang]}
      </h3>

      {/* Company + period */}
      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5">
        <span className="text-sm font-medium" style={{ color: item.accentColor }}>
          {item.company}
        </span>
        <span className="text-zinc-700">·</span>
        <span className="text-xs text-zinc-500">{item.period[lang]}</span>
      </div>

      {/* Responsibilities */}
      <ul className="mt-5 flex flex-col gap-2.5">
        {item.responsibilities[lang].map((resp, i) => (
          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-zinc-400">
            <span className="mt-0.5 shrink-0 text-xs" style={{ color: item.accentColor }}>
              ▹
            </span>
            {resp}
          </li>
        ))}
      </ul>

      {/* Soft skills */}
      <div className="mt-6 border-t border-zinc-800/60 pt-4">
        <p className="text-xs text-zinc-500">
          <span className="font-medium text-zinc-400">{softSkillsLabel}: </span>
          {item.softSkills[lang]}
        </p>
      </div>
    </motion.div>
  );
}
