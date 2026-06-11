"use client";

import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { LineReveal, FadeUp } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";

export function Contact() {
  const { socials, resume } = portfolioData.hero;
  const email = socials.email.replace("mailto:", "");

  return (
    <section
      id="contact"
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-6 py-28 md:px-10"
    >
      <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-lime">
        05 / Contact
      </p>

      <h2 className="display text-[clamp(3rem,11vw,11rem)]">
        <LineReveal>
          <span className="text-bone">Let&apos;s build</span>
        </LineReveal>
        <LineReveal delay={0.1}>
          <span className="outline-text">something</span>
        </LineReveal>
        <LineReveal delay={0.2}>
          <span className="text-bone">
            solid<span className="text-lime">.</span>
          </span>
        </LineReveal>
      </h2>

      <FadeUp delay={0.3} className="mt-14 flex flex-col gap-8 md:flex-row md:items-center">
        <Magnetic>
          <a
            href={socials.email}
            data-cursor-text="Say hi"
            className="inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink transition-transform duration-300 hover:scale-105"
          >
            {email}
            <ArrowUpRight className="size-4" />
          </a>
        </Magnetic>

        <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-dim">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-lime"
          >
            GitHub
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-lime"
          >
            LinkedIn
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-lime"
          >
            Resume ↓
          </a>
        </div>
      </FadeUp>

      <p
        aria-hidden
        className="display pointer-events-none absolute -bottom-6 right-0 select-none text-[clamp(6rem,20vw,20rem)] leading-none text-bone/[0.03]"
      >
        SG©
      </p>
    </section>
  );
}
