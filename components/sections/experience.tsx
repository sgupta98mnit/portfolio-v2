"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12 md:text-4xl text-center md:text-left">
            Experience
          </h2>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative border-l border-border pl-8 ml-4 md:ml-0"
              >
                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{job.company}</h3>
                    <p className="text-lg text-primary font-medium">{job.role}</p>
                  </div>
                  <span className="text-muted-foreground font-mono text-sm mt-1 md:mt-0">
                    {job.period}
                  </span>
                </div>

                <ul className="mb-6 space-y-2 list-disc list-inside text-muted-foreground">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="pl-2">
                       <span className="-ml-2">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
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
