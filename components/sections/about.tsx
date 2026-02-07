"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function About() {
  const { title, description } = portfolioData.about;

  return (
    <section id="about" className="py-24 bg-muted/30">
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
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
