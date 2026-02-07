"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { name, role, subheading, cta, socials } = portfolioData.hero;

  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center px-4 md:px-6 pt-16 overflow-hidden">
      {/* Background Gradient/Noise could go here */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Open to Opportunities
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            {name}
            <span className="block text-muted-foreground text-4xl md:text-6xl mt-2 font-medium">
              {role}
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            {subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="group" asChild>
              <Link href="#projects">
                {cta.primary}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </Link>
            </Button>
          </div>

          <div className="flex gap-6">
            <Link
              href={socials.github}
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={socials.linkedin}
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={socials.email}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
