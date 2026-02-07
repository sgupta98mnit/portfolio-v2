"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import Link from "next/link";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12 md:text-4xl">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FolderGit2 size={20} />
                  </div>
                  <Link href={project.link} target="_blank" className="text-muted-foreground hover:text-primary">
                    <ArrowUpRight size={20} />
                  </Link>
                </div>

                <h3 className="mb-2 text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground flex-1">
                  {project.description}
                </p>
                <p className="mb-6 text-xs text-muted-foreground/80">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 4).map((t) => (
                    <Badge key={t} variant="outline" className="text-[10px]">
                      {t}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="outline" className="text-[10px]">+{project.tech.length - 4}</Badge>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
