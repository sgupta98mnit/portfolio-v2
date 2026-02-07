import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-12">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
