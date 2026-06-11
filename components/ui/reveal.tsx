"use client";

import { motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1] as const;

/**
 * Slides a line of text up from behind an overflow mask when it enters view.
 * The viewport observer must sit on the outer (unclipped) wrapper — the inner
 * span starts fully clipped, so observing it directly would never trigger.
 */
export function LineReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      className={`block overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      <motion.span
        className="block"
        variants={{ hidden: { y: "110%" }, visible: { y: 0 } }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

/** Fades content up on first view. */
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Mono-spaced section label: `01 / ABOUT` with a rule line. */
export function SectionLabel({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <FadeUp className="mb-12 flex items-center gap-4 md:mb-20">
      <span className="font-mono text-xs tracking-[0.3em] text-lime">
        {index}
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim">
        {title}
      </span>
      <span className="h-px flex-1 bg-line" />
    </FadeUp>
  );
}
