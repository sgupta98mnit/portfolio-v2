"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "12", label: "Engineers Led" },
  { value: "10+", label: "SaaS Products Shipped" },
  { value: "40%", label: "Deployment Efficiency Gain" },
];

export function About() {
  const { title, description } = portfolioData.about;

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-8 md:text-4xl">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            {description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-lg border border-border bg-card p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
