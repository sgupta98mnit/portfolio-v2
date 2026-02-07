import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-lg font-bold">Sumit Gupta</span>
          <p className="text-sm text-muted-foreground">
            Senior Software Engineer (IAM)
          </p>
        </div>
        
        <div className="flex gap-6">
          <Link href="https://github.com" target="_blank" className="text-sm text-muted-foreground hover:text-foreground">
            GitHub
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-sm text-muted-foreground hover:text-foreground">
            LinkedIn
          </Link>
          <Link href="mailto:sgupta98mnit@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">
            Email
          </Link>
        </div>
        
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sumit Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
