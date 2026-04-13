"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* orb */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] orb opacity-10"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }} />

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
            Experience
          </span>
          <h2 className="text-4xl font-bold md:text-5xl text-white">
            Where I've worked.
          </h2>
        </motion.div>

        {/* timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-blue-500/30 to-transparent" />

          <div className="space-y-16 pl-10">
            {experience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* timeline dot */}
                <div className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center">
                  <div className="h-4 w-4 rounded-full border-2 border-violet-500 bg-[#020209] animate-pulse-glow" />
                </div>

                {/* card */}
                <div className="glass gradient-border rounded-2xl p-6 md:p-8 transition-all duration-500 hover:glow">
                  {/* header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{job.company}</h3>
                      <p className="gradient-text font-semibold text-sm mt-0.5">{job.role}</p>
                    </div>
                    <span className="shrink-0 rounded-lg border border-white/8 bg-white/5 px-3 py-1 font-mono text-xs text-white/40">
                      {job.period}
                    </span>
                  </div>

                  {/* highlights */}
                  <ul className="mb-6 space-y-2">
                    {job.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/50 leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/6 bg-white/4 px-3 py-1 text-xs font-medium text-white/50 transition-colors hover:border-violet-500/40 hover:text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
