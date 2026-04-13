"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full flex justify-center pt-5 px-4">
      {/* pill nav */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative flex items-center justify-between gap-2 rounded-2xl px-5 py-3 transition-all duration-500 w-full max-w-3xl",
          isScrolled
            ? "glass border border-white/8 shadow-xl shadow-black/30"
            : "bg-transparent"
        )}
      >
        {/* logo */}
        <Link href="/" className="text-sm font-bold tracking-tight shrink-0">
          <span className="gradient-text">SG</span>
          <span className="text-white/30">.</span>
        </Link>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* resume CTA */}
        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 rounded-xl bg-white/8 hover:bg-white/14 border border-white/10 px-4 py-1.5 text-sm font-medium text-white transition-all duration-200 shrink-0"
        >
          Resume ↗
        </Link>

        {/* mobile toggle */}
        <button
          className="md:hidden p-1.5 text-white/70 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[72px] left-4 right-4 glass border border-white/8 rounded-2xl p-4 shadow-2xl shadow-black/50"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2.5 text-sm text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/resume.pdf"
                target="_blank"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white/8 border border-white/10 px-4 py-2.5 text-sm font-medium text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume ↗
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
