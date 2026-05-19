"use client";

import { useState } from "react";
import { useLang } from "@/contexts/language-context";

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: "#sobre-mi" },
    { label: t.nav.projects, href: "#proyectos" },
    { label: t.nav.experience, href: "#experiencia" },
    { label: t.nav.education, href: "#formacion" },
    { label: t.nav.skills, href: "#habilidades" },
    { label: t.nav.aiAssistant, href: "#asistente" },
    { label: t.nav.contact, href: "#contacto" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-14">
        {/* Logo */}
        <a
          href="#sobre-mi"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-sm font-bold tracking-wider text-cyan-300 transition-all duration-200 hover:border-cyan-300/60 hover:shadow-[0_0_16px_rgba(34,211,238,0.25)]"
        >
          RS
        </a>

        <div className="flex items-center gap-3">
          {/* Nav links — hidden on mobile */}
          <ul className="hidden items-center gap-4 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-400 transition-colors duration-200 hover:text-zinc-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language selector */}
          <div className="flex items-center rounded-lg border border-zinc-700/60 bg-zinc-900/60 p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLang("es")}
              className={`rounded-md px-2.5 py-1 transition-all duration-200 ${
                lang === "es"
                  ? "bg-cyan-500/20 text-cyan-300"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-md px-2.5 py-1 transition-all duration-200 ${
                lang === "en"
                  ? "bg-cyan-500/20 text-cyan-300"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              EN
            </button>
          </div>

          {/* Hamburger button — visible on mobile only */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:text-zinc-100 sm:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="border-t border-zinc-800/60 bg-zinc-950/95 backdrop-blur-md sm:hidden">
          <ul className="flex flex-col px-5 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm text-zinc-400 transition-colors duration-200 hover:text-zinc-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
