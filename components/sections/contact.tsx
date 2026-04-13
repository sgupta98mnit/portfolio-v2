"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

export function Contact() {
  const { socials } = portfolioData.hero;

  return (
    <section id="contact" className="relative py-40 overflow-hidden">
      {/* big center glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] orb opacity-20"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 65%)" }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-widest gradient-text">
            Get In Touch
          </span>

          <h2 className="mb-6 text-5xl font-black leading-tight md:text-7xl text-white">
            Let's build something{" "}
            <span className="gradient-text">secure & scalable.</span>
          </h2>

          <p className="mb-12 text-lg text-white/40 max-w-xl mx-auto leading-relaxed">
            I'm currently open to new opportunities. Whether you have a project
            in mind or just want to chat — my inbox is always open.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href={socials.email}
              className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-violet-500/30 transition-all duration-300 hover:shadow-violet-500/50 hover:scale-[1.03]"
            >
              <Mail className="h-5 w-5" />
              Say Hello
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              View Resume ↗
            </Link>
          </motion.div>

          {/* socials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-8"
          >
            <Link
              href={socials.linkedin}
              target="_blank"
              className="flex items-center gap-2 text-sm text-white/30 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
            <div className="h-px w-6 bg-white/10" />
            <Link
              href={socials.github}
              target="_blank"
              className="flex items-center gap-2 text-sm text-white/30 hover:text-white transition-colors duration-200"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
