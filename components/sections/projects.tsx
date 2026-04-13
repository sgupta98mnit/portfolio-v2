"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* orbs */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] orb opacity-10"
        style={{ background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)" }} />

      <div className="container mx-auto max-w-5xl px-4 md:px-6">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest gradient-text">
            Projects
          </span>
          <h2 className="text-4xl font-bold md:text-5xl text-white">
            Things I've built.
          </h2>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={project.link !== "#" ? project.link : "#projects"}
                target={project.link !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group gradient-border glass flex flex-col h-full rounded-2xl p-6 transition-all duration-500 hover:glow hover:-translate-y-1 block"
              >
                {/* top row */}
                <div className="flex items-start justify-between mb-4">
                  {/* category */}
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-violet-400/70">
                    {project.description}
                  </span>
                  {/* arrow */}
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-white/20 transition-all duration-300 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>

                {/* title */}
                <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:gradient-text">
                  {project.title}
                </h3>

                {/* desc */}
                <p className="mb-6 flex-1 text-sm text-white/40 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* tech */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/6 bg-white/4 px-2.5 py-1 text-[11px] font-medium text-white/40 group-hover:border-violet-500/20 group-hover:text-white/60 transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="rounded-lg border border-white/6 bg-white/4 px-2.5 py-1 text-[11px] font-medium text-white/30">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
