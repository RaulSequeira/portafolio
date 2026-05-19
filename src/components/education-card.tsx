"use client";

import { motion } from "framer-motion";
import type { EducationItem } from "@/data/education";
import type { Lang } from "@/contexts/language-context";

interface EducationCardProps {
  item: EducationItem;
  index: number;
  lang: Lang;
  statusLabels: { ongoing: string; graduated: string };
}

export function EducationCard({ item, index, lang, statusLabels }: EducationCardProps) {
  const isOngoing = item.status === "ongoing";

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

      {/* Period + status badge */}
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs text-zinc-500">{item.period[lang]}</span>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
            isOngoing
              ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
              : "border-zinc-700/60 bg-zinc-800/70 text-zinc-400"
          }`}
        >
          {isOngoing ? statusLabels.ongoing : statusLabels.graduated}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-base font-semibold leading-snug text-zinc-100 sm:text-lg">
        {item.title[lang]}
      </h3>

      {/* Institution */}
      <p className="mt-1 text-sm font-medium" style={{ color: item.accentColor }}>
        {item.institution}
      </p>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-zinc-400">
        {item.description[lang]}
      </p>
    </motion.div>
  );
}
