"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

/** Wraps children so they're pulled gently toward the pointer on hover. */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    setOffset({
      x: (e.clientX - left - width / 2) * strength,
      y: (e.clientY - top - height / 2) * strength,
    });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={offset}
      transition={{ type: "spring", stiffness: 180, damping: 14, mass: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
