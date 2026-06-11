"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { socials } = portfolioData.hero;
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-line px-6 py-8 md:px-10">
      <div className="flex flex-col items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-mute md:flex-row">
        <span>© {new Date().getFullYear()} Sumit Gupta</span>

        <div className="flex items-center gap-6">
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
            href={socials.email}
            className="transition-colors duration-300 hover:text-lime"
          >
            Email
          </a>
        </div>

        <span className="tabular-nums">
          Local — <span className="text-bone-dim">{time || "00:00:00"}</span>
        </span>
      </div>
    </footer>
  );
}
