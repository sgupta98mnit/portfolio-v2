import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { socials } = portfolioData.hero;

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container mx-auto max-w-5xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-0.5">
          <span className="text-sm font-bold gradient-text">Sumit Gupta</span>
          <p className="text-xs text-white/30">Senior Software Engineer · IAM</p>
        </div>

        <div className="flex items-center gap-6 text-xs text-white/30">
          <Link href={socials.github} target="_blank" className="hover:text-white transition-colors">
            GitHub
          </Link>
          <Link href={socials.linkedin} target="_blank" className="hover:text-white transition-colors">
            LinkedIn
          </Link>
          <Link href={socials.email} className="hover:text-white transition-colors">
            Email
          </Link>
        </div>

        <p className="text-xs text-white/20">
          © {new Date().getFullYear()} Sumit Gupta
        </p>
      </div>
    </footer>
  );
}
