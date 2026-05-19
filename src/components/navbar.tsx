"use client";

import { useLang } from "@/contexts/language-context";

export function Navbar() {
  const { lang, setLang, t } = useLang();

  const navLinks = [
    { label: t.nav.about, href: "#sobre-mi" },
    { label: t.nav.experience, href: "#experiencia" },
    { label: t.nav.projects, href: "#proyectos" },
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

        <div className="flex items-center gap-6">
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
        </div>
      </nav>
    </header>
  );
}
