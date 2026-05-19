"use client";

import Image from "next/image";
import { useLang } from "@/contexts/language-context";

type Tech = {
  name: string;
  color: string;
  icon: React.ReactNode;
};

const techs: Tech[] = [
  {
    name: "React.js",
    color: "#61DAFB",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
        <ellipse cx="50" cy="50" rx="48" ry="18.5" stroke="#61DAFB" strokeWidth="5" fill="none"/>
        <ellipse cx="50" cy="50" rx="48" ry="18.5" stroke="#61DAFB" strokeWidth="5" fill="none" transform="rotate(60 50 50)"/>
        <ellipse cx="50" cy="50" rx="48" ry="18.5" stroke="#61DAFB" strokeWidth="5" fill="none" transform="rotate(120 50 50)"/>
        <circle cx="50" cy="50" r="7" fill="#61DAFB"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#ffffff",
    icon: (
      <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
        <circle cx="90" cy="90" r="90" fill="black"/>
        <path d="M149.508 157.52L69.142 54H54V125.99H66.1V69.3L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white"/>
        <path d="M115 54H127V126H115V54Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Java",
    color: "#E76F00",
    icon: (
      <Image src="/projects/java.png" alt="Java" width={40} height={40} className="h-10 w-10 object-contain" />
    ),
  },
  {
    name: "Spring Boot",
    color: "#6DB33F",
    icon: (
      <Image src="/projects/springboot.png" alt="Spring Boot" width={40} height={40} className="h-10 w-10 object-contain" />
    ),
  },
  {
    name: "Material UI",
    color: "#007FFF",
    icon: (
      <svg viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
        <path d="M0 21V10l9 5v5l9-5V5l9 5v16l-9 5v-5l-9 5L0 21z" fill="#007FFF"/>
        <path d="M9 15v5l9 5 9-5v-5l-9 5-9-5z" fill="#0059B2" opacity="0.5"/>
        <path d="M0 10l9 5 9-5L9 5 0 10z" fill="#007FFF"/>
        <path d="M18 10l9 5 9-5L27 5l-9 5z" fill="#007FFF"/>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    icon: (
      <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
        <rect width="256" height="256" fill="#F7DF1E"/>
        <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.086-21.994" fill="#323330"/>
        <path d="M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.731 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.653-43.819-24.575" fill="#323330"/>
      </svg>
    ),
  },
  {
    name: "MySQL",
    color: "#4479A1",
    icon: (
      <Image src="/projects/mysql.png" alt="MySQL" width={40} height={40} className="h-10 w-10 object-contain" />
    ),
  },
  {
    name: "Redux",
    color: "#764ABC",
    icon: (
      <Image src="/projects/redux.png" alt="Redux" width={40} height={40} className="h-10 w-10 object-contain" />
    ),
  },
  {
    name: "REST API",
    color: "#FF6B35",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
        <rect x="6" y="22" width="88" height="56" rx="12" fill="none" stroke="#FF6B35" strokeWidth="5"/>
        <text x="50" y="60" textAnchor="middle" fill="#FF6B35" fontSize="24" fontFamily="monospace" fontWeight="bold">API</text>
        <circle cx="18" cy="35" r="4" fill="#FF6B35" opacity="0.6"/>
        <circle cx="18" cy="50" r="4" fill="#FF6B35" opacity="0.6"/>
        <circle cx="18" cy="65" r="4" fill="#FF6B35" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: "Hibernate",
    color: "#BCAE79",
    icon: (
      <Image src="/projects/hibernate.png" alt="Hibernate" width={40} height={40} className="h-10 w-10 object-contain" />
    ),
  },
  {
    name: "Docker",
    color: "#2496ED",
    icon: (
      <svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
        <rect x="4" y="28" width="14" height="12" rx="2" fill="#2496ED"/>
        <rect x="20" y="28" width="14" height="12" rx="2" fill="#2496ED"/>
        <rect x="36" y="28" width="14" height="12" rx="2" fill="#2496ED"/>
        <rect x="20" y="14" width="14" height="12" rx="2" fill="#2496ED"/>
        <rect x="36" y="14" width="14" height="12" rx="2" fill="#2496ED"/>
        <rect x="36" y="0" width="14" height="12" rx="2" fill="#2496ED"/>
        <rect x="52" y="28" width="14" height="12" rx="2" fill="#2496ED"/>
        <path d="M96 36c-2-1-7-2-13-1-1-5-5-9-12-11l-2-1-1 2c-2 3-2 8 0 12H6c-1 0-2 1-2 2 0 5 2 10 5 14 4 5 9 7 16 7h40c12 0 21-5 25-15 6 0 9-2 11-5l1-2-6-2z" fill="#2496ED"/>
        <path d="M62 18c0-4-2-7-5-9" stroke="#2496ED" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <circle cx="68" cy="10" r="3" fill="#2496ED"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
        <rect width="100" height="100" rx="8" fill="#3178C6"/>
        <text x="50" y="68" textAnchor="middle" fill="white" fontSize="46" fontFamily="monospace" fontWeight="bold">TS</text>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    icon: (
      <Image src="/projects/postgres.png" alt="PostgreSQL" width={40} height={40} className="h-10 w-10 object-contain" />
    ),
  },
  {
    name: "AWS",
    color: "#FF9900",
    icon: (
      <Image src="/projects/aws.png" alt="AWS" width={40} height={40} className="h-10 w-10 object-contain" />
    ),
  },
  {
    name: "Jenkins",
    color: "#D33833",
    icon: (
      <Image src="/projects/jenkins.png" alt="Jenkins" width={40} height={40} className="h-10 w-10 object-contain" />
    ),
  },
];

const duplicated = [...techs, ...techs];

export function TechStack() {
  const { t } = useLang();
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl">
      <h2 className="mb-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
        {t.techStack.title}
      </h2>

      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24"
          style={{ background: "linear-gradient(to right, #09090b 0%, transparent 100%)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24"
          style={{ background: "linear-gradient(to left, #09090b 0%, transparent 100%)" }}
        />

        <div className="animate-marquee flex gap-10 w-max">
          {duplicated.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex flex-col items-center gap-2 group"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-xl border border-zinc-700/60 bg-zinc-900/80 p-2 transition-all duration-300 group-hover:scale-110 group-hover:border-zinc-500"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 18px 2px ${tech.color}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {tech.icon}
              </div>
              <span className="text-[10px] font-medium tracking-wide text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
