"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "12", label: "Engineers Led" },
  { value: "10+", label: "SaaS Products" },
  { value: "40%", label: "Efficiency Gain" },
];

export function About() {
  const { description } = portfolioData.about;

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* subtle orb */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[400px] w-[400px] orb opacity-10"
        style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }} />

      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest gradient-text">
              About Me
            </span>
            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-white">
              Building systems that{" "}
              <span className="gradient-text">scale and secure.</span>
            </h2>
            <p className="text-base text-white/50 leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="gradient-border glass rounded-2xl p-6 text-center group hover:glow transition-all duration-500"
              >
                <div className="text-4xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-white/40">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
