"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
  const { socials } = portfolioData.hero;

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Let's Build Something Sccure & Scalable
          </h2>
          <p className="text-xl text-muted-foreground">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <Button size="lg" className="h-14 px-8 text-lg" asChild>
            <Link href={socials.email}>
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
            </Link>
          </Button>
          
          <div className="flex justify-center gap-6 mt-12 pt-8 border-t border-border/50">
             <Link href={socials.linkedin} target="_blank" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
               <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
             </Link>
             <Link href={socials.github} target="_blank" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
               <Github className="mr-2 h-5 w-5" /> GitHub
             </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
