"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "@/components/ui/magnetic";

const NAV_LINKS = [
  { name: "About", href: "#about", index: "01" },
  { name: "Experience", href: "#experience", index: "02" },
  { name: "Projects", href: "#projects", index: "03" },
  { name: "Skills", href: "#skills", index: "04" },
  { name: "Contact", href: "#contact", index: "05" },
];

const EASE = [0.76, 0, 0.24, 1] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[100] mix-blend-difference"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 2.4 }}
      >
        <nav className="flex items-center justify-between px-6 py-5 md:px-10">
          <Magnetic>
            <a href="#top" className="font-mono text-sm font-bold tracking-widest text-white">
              SG<span className="text-white/50">©</span>
            </a>
          </Magnetic>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative font-mono text-xs uppercase tracking-[0.2em] text-white"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-white transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(true)}
            className="font-mono text-xs uppercase tracking-[0.2em] text-white md:hidden"
            aria-label="Open menu"
          >
            Menu
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[150] flex flex-col bg-lime px-6 py-5"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-bold tracking-widest text-ink">
                SG©
              </span>
              <button
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.2em] text-ink"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            <ul className="flex flex-1 flex-col justify-center gap-2">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="display flex items-baseline gap-4 text-5xl text-ink"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.07 }}
                  >
                    <span className="font-mono text-xs tracking-widest">
                      {link.index}
                    </span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>

            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60">
              Senior Software Engineer — Full Stack / IAM
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
