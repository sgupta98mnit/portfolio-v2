"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Marquee } from "@/components/ui/marquee";
import { Magnetic } from "@/components/ui/magnetic";

const EASE = [0.76, 0, 0.24, 1] as const;
// hold animations until the preloader curtain clears
const BOOT = 2.2;

export function Hero() {
  const { role, subheading, tagline, socials, resume } = portfolioData.hero;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-24">
      <motion.div style={{ opacity: fade }} className="flex items-start justify-between px-6 md:px-10">
        <motion.p
          className="max-w-[16rem] font-mono text-[10px] uppercase leading-relaxed tracking-[0.25em] text-bone-dim"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: BOOT + 0.5 }}
        >
          {role} — Full Stack Systems / Identity &amp; Access Management
        </motion.p>

        <motion.div
          className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-dim md:flex"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: BOOT + 0.6 }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-lime" />
          </span>
          Open to opportunities
        </motion.div>
      </motion.div>

      <motion.div style={{ y: nameY }} className="px-4 md:px-8">
        <h1 className="display text-center">
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[clamp(4rem,17.5vw,17rem)] text-bone"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: BOOT }}
            >
              Sumit
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="outline-text block text-[clamp(4rem,17.5vw,17rem)]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: BOOT + 0.12 }}
            >
              Gupta
            </motion.span>
          </span>
        </h1>
      </motion.div>

      <motion.div style={{ opacity: fade }}>
        <div className="flex flex-col gap-8 px-6 pb-8 md:flex-row md:items-end md:justify-between md:px-10">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: BOOT + 0.7 }}
          >
            <ArrowDown className="size-4 text-lime" aria-hidden />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-dim">
              Scroll to explore
            </span>
          </motion.div>

          <motion.p
            className="max-w-md text-sm leading-relaxed text-bone-dim md:text-right"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: BOOT + 0.8 }}
          >
            {subheading}
          </motion.p>

          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: BOOT + 0.9 }}
          >
            {[
              { label: "GitHub", href: socials.github },
              { label: "LinkedIn", href: socials.linkedin },
              { label: "Resume", href: resume },
            ].map((item) => (
              <Magnetic key={item.label} strength={0.25}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.25em] text-bone transition-colors duration-300 hover:text-lime"
                >
                  {item.label}
                  <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Magnetic>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: BOOT + 1 }}
          className="border-y border-line bg-lime"
        >
          <Marquee duration={22} className="py-3">
            {tagline.split(". ").map((part, i) => (
              <span key={i} className="flex items-center">
                <span className="display px-6 text-xl text-ink md:text-2xl">
                  {part.replace(/\.$/, "")}
                </span>
                <span className="text-ink" aria-hidden>✦</span>
              </span>
            ))}
          </Marquee>
        </motion.div>
      </motion.div>
    </section>
  );
}
