"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { useLang } from "@/contexts/language-context";

function SparkleIcon({ className, animated = false }: { className?: string; animated?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {/* Large star */}
      <path
        style={animated ? { animation: "star-twinkle-a 1.4s ease-in-out infinite" } : undefined}
        d="M9 2C9 2 9.5 5 12 7.5 14.5 10 15 10.5 15 10.5 15 10.5 14.5 11 12 13.5 9.5 16 9 19 9 19 9 19 8.5 16 6 13.5 3.5 11 3 10.5 3 10.5 3 10.5 3.5 10 6 7.5 8.5 5 9 2Z"
      />
      {/* Small star */}
      <path
        style={animated ? { animation: "star-twinkle-b 1.4s ease-in-out infinite" } : undefined}
        d="M18.5 1.5C18.5 1.5 18.8 3.2 20 4.5 21.2 5.8 21 5 21 5 21 5 21.2 5.2 20 6.5 18.8 7.8 18.5 9.5 18.5 9.5 18.5 9.5 18.2 7.8 17 6.5 15.8 5.2 16 5 16 5 16 5 15.8 5.8 17 4.5 18.2 3.2 18.5 1.5Z"
      />
    </svg>
  );
}

export function AIAssistant() {
  const { t } = useLang();
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim() || loading) return;

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? t.aiAssistant.errorDefault);
      } else {
        setResponse(data.response);
      }
    } catch {
      setError(t.aiAssistant.errorDefault);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="asistente"
      className="mx-auto mt-20 w-full max-w-6xl scroll-mt-16 px-5 sm:px-8 lg:px-14"
    >
      <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
        <SparkleIcon className="h-3.5 w-3.5 text-cyan-500/70" />
        {t.aiAssistant.label}
      </p>
      <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
        {t.aiAssistant.title}
      </h2>
      <p className="mb-8 max-w-xl text-sm leading-relaxed text-zinc-400">
        {t.aiAssistant.description}
      </p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 backdrop-blur-sm"
      >
        <div
          className="absolute left-0 top-0 h-full w-0.5"
          style={{ background: "linear-gradient(to bottom, #22d3ee, #6366f1)" }}
          aria-hidden="true"
        />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.aiAssistant.placeholder}
            maxLength={500}
            rows={3}
            className="w-full resize-none rounded-xl border border-zinc-700/80 bg-zinc-800/60 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-500 outline-none transition-colors duration-200 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
          />
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-zinc-600">{message.length}/500</span>
            <button
              type="submit"
              disabled={!message.trim() || loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-300/35 bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-indigo-500/20 px-5 py-2 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/60 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              <SparkleIcon className="h-4 w-4" animated={loading} />
              {loading ? t.aiAssistant.loading : t.aiAssistant.sendButton}
            </button>
          </div>
        </form>

        {(response || error) && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={`mt-5 rounded-xl border px-4 py-4 text-sm leading-relaxed ${
              error
                ? "border-red-500/25 bg-red-500/10 text-red-300"
                : "border-zinc-700/60 bg-zinc-800/40 text-zinc-300"
            }`}
          >
            {!error && (
              <div className="mb-3 flex items-center gap-1.5">
                <SparkleIcon className="h-3.5 w-3.5 text-cyan-400" />
                <span className="text-xs font-medium text-cyan-400/80">AI</span>
              </div>
            )}
            {error ? error : (
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                  strong: ({ children }) => <strong className="font-semibold text-zinc-100">{children}</strong>,
                  ul: ({ children }) => <ul className="mb-2 space-y-1 last:mb-0">{children}</ul>,
                  li: ({ children }) => <li className="flex gap-2"><span className="mt-0.5 shrink-0 text-cyan-500">▹</span><span>{children}</span></li>,
                  h1: ({ children }) => <h1 className="mb-2 text-base font-semibold text-zinc-100">{children}</h1>,
                  h2: ({ children }) => <h2 className="mb-2 text-sm font-semibold text-zinc-100">{children}</h2>,
                  h3: ({ children }) => <h3 className="mb-1 text-sm font-medium text-zinc-200">{children}</h3>,
                }}
              >
                {response}
              </ReactMarkdown>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
