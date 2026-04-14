"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  // dot — raw motion values, set directly (no spring = instant)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // ring — gentle spring trail behind the dot
  const ringX = useSpring(dotX, { stiffness: 180, damping: 28, mass: 0.4 });
  const ringY = useSpring(dotY, { stiffness: 180, damping: 28, mass: 0.4 });

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // use event delegation instead of querying static DOM
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovering(true);
      }
    };
    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovering(false);
      }
    };

    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [dotX, dotY, visible]);

  return (
    <>
      {/* dot — instant, no spring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full bg-white mix-blend-difference"
        style={{ left: dotX, top: dotY }}
        animate={{
          width: hovering ? 10 : 6,
          height: hovering ? 10 : 6,
          x: hovering ? "-50%" : "-50%",
          y: hovering ? "-50%" : "-50%",
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* ring — trails behind */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full border mix-blend-difference"
        style={{ left: ringX, top: ringY }}
        animate={{
          width: hovering ? 44 : 32,
          height: hovering ? 44 : 32,
          x: "-50%",
          y: "-50%",
          opacity: visible ? 1 : 0,
          borderColor: hovering ? "rgba(167,139,250,0.8)" : "rgba(255,255,255,0.35)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
}
