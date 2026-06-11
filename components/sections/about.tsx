"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionLabel, FadeUp } from "@/components/ui/reveal";

const STATS = [
  { value: "4+", label: "Years engineering" },
  { value: "10+", label: "Cloud apps shipped" },
  { value: "12", label: "Engineers led" },
  { value: "MS", label: "CS — University at Buffalo" },
];

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.3em] inline-block">
      {children}
    </motion.span>
  );
}

export function About() {
  const { description } = portfolioData.about;
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = description.split(" ");

  return (
    <section id="about" className="px-6 py-28 md:px-10 md:py-40">
      <SectionLabel index="01" title="About" />

      <p
        ref={ref}
        className="max-w-5xl text-2xl font-medium leading-snug text-bone md:text-4xl md:leading-snug"
      >
        {words.map((word, i) => (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[i / words.length, Math.min(1, (i + 1) / words.length + 0.05)]}
          >
            {word}
          </Word>
        ))}
      </p>

      <div className="mt-20 grid grid-cols-2 gap-px bg-line md:grid-cols-4">
        {STATS.map((stat, i) => (
          <FadeUp key={stat.label} delay={i * 0.08} className="bg-ink p-6 md:p-8">
            <p className="display text-4xl text-lime md:text-6xl">{stat.value}</p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">
              {stat.label}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
