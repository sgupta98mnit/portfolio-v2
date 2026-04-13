"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.3 },
  },
};

const charVariant: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", damping: 14, stiffness: 120 },
  },
};

function SplitText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className ?? ""}`}
      style={{ perspective: "600px" }}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={charVariant} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  const { name, role, subheading, tagline, socials } = portfolioData.hero;
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 md:px-6">

      {/* ── background orbs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-100" />
        <div
          className="orb absolute -top-40 left-1/4 h-[600px] w-[600px]"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
        />
        <div
          className="orb absolute -bottom-20 right-1/4 h-[500px] w-[500px]"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
        />
        {/* dark overlay to keep legibility */}
        <div className="absolute inset-0 bg-[#020209]/60" />
      </div>

      <div className="container mx-auto max-w-5xl">

        {/* availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to opportunities
        </motion.div>

        {/* name — character reveal */}
        <h1 className="mb-4 text-6xl font-black tracking-tight md:text-8xl lg:text-[9rem] leading-none">
          <SplitText text={firstName} />
          {" "}
          <SplitText text={lastName} className="gradient-text" />
        </h1>

        {/* role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-3 text-xl font-medium text-white/50 md:text-2xl"
        >
          {role}
        </motion.p>

        {/* subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-3 max-w-xl text-base text-white/40 leading-relaxed"
        >
          {subheading}
        </motion.p>

        {/* tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-10 text-xs font-semibold uppercase tracking-[0.25em] gradient-text"
        >
          {tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.35 }}
          className="flex flex-wrap items-center gap-4 mb-14"
        >
          <Link
            href="#projects"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-violet-500/40 hover:scale-[1.02]"
          >
            View Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
          >
            Resume ↗
          </Link>
        </motion.div>

        {/* socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex items-center gap-6"
        >
          <Link href={socials.github} target="_blank" aria-label="GitHub"
            className="text-white/30 hover:text-white transition-colors duration-200">
            <Github className="h-5 w-5" />
          </Link>
          <Link href={socials.linkedin} target="_blank" aria-label="LinkedIn"
            className="text-white/30 hover:text-white transition-colors duration-200">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href={socials.email} aria-label="Email"
            className="text-white/30 hover:text-white transition-colors duration-200">
            <Mail className="h-5 w-5" />
          </Link>
          <div className="h-px flex-1 max-w-[60px] bg-white/10" />
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/20">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="h-5 w-px bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
