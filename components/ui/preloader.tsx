"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const WORDS = ["BUILD", "SECURE", "SCALE", "SHIP"];

/**
 * Boot sequence: a counter races 0 → 100 while verbs cycle, then the
 * curtain slides up to reveal the page. Skipped entirely for
 * prefers-reduced-motion.
 */
export function Preloader() {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const start = performance.now();
    const DURATION = 1800;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      // ease-out so the counter sprints early and settles into 100
      setCount(Math.round(100 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <AnimatePresence>
      {!done && !reduced && (
        <motion.div
          className="fixed inset-0 z-[400] flex flex-col justify-between bg-ink p-6 md:p-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.3em] text-bone-dim">
            <span>Sumit Gupta</span>
            <span>Portfolio © 2026</span>
          </div>

          <div className="flex items-end justify-between">
            <span className="font-mono text-sm uppercase tracking-[0.3em] text-lime">
              {WORDS[Math.min(WORDS.length - 1, Math.floor(count / 26))]}
            </span>
            <span className="display text-bone text-[clamp(5rem,18vw,14rem)] leading-none tabular-nums">
              {count}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
