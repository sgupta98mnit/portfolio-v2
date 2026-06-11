"use client";

import { portfolioData } from "@/data/portfolio";
import { SectionLabel, FadeUp } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-28 md:py-40">
      <div className="px-6 md:px-10">
        <SectionLabel index="04" title="Capabilities" />
      </div>

      <FadeUp className="flex flex-col border-y border-line">
        {skills.map((group, i) => (
          <div
            key={group.category}
            className="group/row border-b border-line transition-colors duration-500 last:border-b-0 hover:bg-ink-soft"
          >
            <Marquee
              duration={30 + (i % 3) * 12}
              reverse={i % 2 === 1}
              className="py-5 md:py-7"
            >
              <span className="display mx-6 text-2xl text-lime md:text-4xl">
                {group.category}
              </span>
              {group.items.map((item) => (
                <span key={item} className="flex items-center">
                  <span className="mx-4 text-mute" aria-hidden>✦</span>
                  <span className="display outline-text text-2xl transition-colors duration-500 md:text-4xl">
                    {item}
                  </span>
                </span>
              ))}
              <span className="mx-4 text-mute" aria-hidden>✦</span>
            </Marquee>
          </div>
        ))}
      </FadeUp>
    </section>
  );
}
