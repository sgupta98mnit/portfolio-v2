import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { CustomCursor } from "@/components/ui/cursor";
import { Navbar } from "@/components/layout/navbar";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sumit Gupta — Senior Software Engineer",
  description:
    "Senior Software Engineer building scalable full stack systems, multi-tenant SaaS platforms, and secure Identity & Access Management solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${jetbrains.variable} noise antialiased`}>
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
