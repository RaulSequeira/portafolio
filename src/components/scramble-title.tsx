"use client";

import { type ElementType, useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*";
const DEFAULT_INTERVAL_MS = 10;
const DEFAULT_REVEAL_STEP = 0.9;
const DEFAULT_SCRAMBLING_CLASS =
  "bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-emerald-300 bg-[length:200%_100%] bg-clip-text text-transparent animate-title-shine";

interface ScrambleTextProps {
  text: string;
  trigger: number;
  as?: ElementType;
  className?: string;
  scramblingClassName?: string;
  intervalMs?: number;
  revealStep?: number;
}

const isAlphaNumeric = (char: string) => /[a-z0-9]/i.test(char);
const createMaskedText = (text: string) =>
  text
    .split("")
    .map((char) => (isAlphaNumeric(char) ? glyphs[Math.floor(Math.random() * glyphs.length)] : char))
    .join("");

export function ScrambleText({
  text,
  trigger,
  as = "span",
  className = "",
  scramblingClassName = DEFAULT_SCRAMBLING_CLASS,
  intervalMs = DEFAULT_INTERVAL_MS,
  revealStep = DEFAULT_REVEAL_STEP
}: ScrambleTextProps) {
  const intervalRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const Tag = as;

  const clearScramble = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const buildFrame = useCallback(
    (revealCount: number) =>
      text
        .split("")
        .map((char, index) => {
          if (!isAlphaNumeric(char)) {
            return char;
          }
          if (index < revealCount) {
            return text[index];
          }
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        })
        .join(""),
    [text]
  );

  const startScramble = useCallback(() => {
    if (prefersReducedMotion) {
      setDisplayText(text);
      setIsScrambling(false);
      return;
    }

    clearScramble();
    setIsScrambling(true);
    setDisplayText(createMaskedText(text));

    let reveal = 0;
    intervalRef.current = window.setInterval(() => {
      reveal += revealStep;
      setDisplayText(buildFrame(reveal));

      if (reveal >= text.length) {
        clearScramble();
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, intervalMs);
  }, [buildFrame, clearScramble, intervalMs, prefersReducedMotion, revealStep, text]);

  useEffect(() => {
    if (trigger <= 0) {
      setDisplayText(text);
      setIsScrambling(false);
      return;
    }
    startScramble();
    return () => clearScramble();
  }, [clearScramble, startScramble, text, trigger]);

  return (
    <Tag className={[className, isScrambling ? scramblingClassName : ""].filter(Boolean).join(" ")}>
      {displayText}
    </Tag>
  );
}

interface ScrambleTitleProps {
  text: string;
  trigger: number;
}

export function ScrambleTitle({ text, trigger }: ScrambleTitleProps) {
  return (
    <ScrambleText
      as="h3"
      text={text}
      trigger={trigger}
      className="text-2xl font-semibold leading-tight tracking-tight text-zinc-100 md:text-3xl"
    />
  );
}
