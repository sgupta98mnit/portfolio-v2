"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  "Languages":                  "from-violet-500/20 to-indigo-500/20 border-violet-500/20 text-violet-300",
  "Frontend & Mobile":          "from-blue-500/20 to-cyan-500/20 border-blue-500/20 text-blue-300",
  "Backend & Architecture":     "from-indigo-500/20 to-violet-500/20 border-indigo-500/20 text-indigo-300",
  "Identity & Security (IAM)":  "from-emerald-500/20 to-teal-500/20 border-emerald-500/20 text-emerald-300",
  "Data & Messaging":           "from-pink-500/20 to-rose-500/20 border-pink-500/20 text-pink-300",
  "Cloud & DevOps":             "from-orange-500/20 to-amber-500/20 border-orange-500/20 text-orange-300",
  "Testing & Observability":    "from-teal-500/20 to-emerald-500/20 border-teal-500/20 text-teal-300",
};

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* orb */}
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] orb opacity-10"
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
            Skills
          </span>
          <h2 className="text-4xl font-bold md:text-5xl text-white">
            Technical arsenal.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, catIndex) => {
            const colorClass = categoryColors[category.category] ?? "from-white/10 to-white/5 border-white/10 text-white/60";
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass gradient-border rounded-2xl p-6"
              >
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + i * 0.04 }}
                      className={`inline-flex items-center rounded-xl border bg-gradient-to-r px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:scale-105 hover:brightness-125 ${colorClass}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
