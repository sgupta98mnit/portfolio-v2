"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12 md:text-4xl text-center">
            Technical Arsenal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold border-b border-border pb-2">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
