"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionLabel } from "@/components/ui/reveal";

type Job = (typeof portfolioData.experience)[number];

function Card({
  job,
  index,
  total,
  progress,
}: {
  job: Job;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // each card shrinks slightly as the next one slides over it
  const scale = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [1, 0.94]
  );

  return (
    <div
      className="sticky"
      style={{ top: `calc(12vh + ${index * 1.5}rem)` }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top rounded-sm border border-line bg-ink-soft p-6 md:p-12"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line pb-6">
          <div className="flex items-baseline gap-4 md:gap-6">
            <span className="font-mono text-xs tracking-widest text-lime">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="display text-3xl text-bone md:text-6xl">
              {job.company}
            </h3>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">
            {job.role} — {job.period}
          </div>
        </div>

        <ul className="mt-6 max-w-3xl space-y-3">
          {job.highlights.slice(0, 3).map((highlight, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-bone-dim"
            >
              <span className="mt-2 size-1 shrink-0 rounded-full bg-lime" aria-hidden />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          {job.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-bone-dim"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.article>
    </div>
  );
}

export function Experience() {
  const experience = portfolioData.experience.filter((job) => !job.hidden);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="experience" className="px-6 py-28 md:px-10 md:py-40">
      <SectionLabel index="02" title="Experience" />

      <div ref={ref} className="flex flex-col gap-10">
        {experience.map((job, i) => (
          <Card
            key={job.company}
            job={job}
            index={i}
            total={experience.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
