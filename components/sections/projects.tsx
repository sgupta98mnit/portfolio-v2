"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionLabel } from "@/components/ui/reveal";

const EASE = [0.76, 0, 0.24, 1] as const;

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="px-6 py-28 md:px-10 md:py-40">
      <SectionLabel index="03" title="Selected Work" />

      <ul>
        {projects.map((project, i) => {
          const hasLink = project.link && project.link !== "#";
          const Row = (
            <motion.div
              className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 overflow-hidden border-t border-line py-8 last:border-b md:grid-cols-[6rem_1fr_minmax(0,24rem)_auto] md:gap-8 md:py-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.05 }}
            >
              {/* lime wipe that rises behind the row on hover */}
              <span
                aria-hidden
                className="absolute inset-0 origin-bottom scale-y-0 bg-lime transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100"
              />

              <span className="relative font-mono text-xs tracking-widest text-lime transition-colors duration-300 group-hover:text-ink">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="display relative text-2xl text-bone transition-all duration-500 group-hover:translate-x-3 group-hover:text-ink md:text-5xl">
                {project.title}
              </h3>

              <div className="relative hidden md:block">
                <p className="text-sm text-bone-dim transition-colors duration-300 group-hover:text-ink/70">
                  {project.description}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-mute transition-colors duration-300 group-hover:text-ink/60">
                  {project.tech.join(" · ")}
                </p>
              </div>

              <ArrowUpRight className="relative size-6 text-bone-dim transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink md:size-8" />
            </motion.div>
          );

          return (
            <li key={project.title}>
              {hasLink ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="View"
                  aria-label={`${project.title} — ${project.description}`}
                >
                  {Row}
                </a>
              ) : (
                Row
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
