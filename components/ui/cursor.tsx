"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/**
 * Dual cursor: a solid lime dot that tracks 1:1 and a trailing ring that
 * springs behind it. The ring expands over interactive targets and fills
 * with a label over elements carrying [data-cursor-text].
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");
  const reduced = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      setEnabled(true);
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement).closest(
        "a, button, [data-cursor-text]"
      ) as HTMLElement | null;
      setHovering(!!target);
      setLabel(target?.dataset.cursorText ?? "");
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [reduced, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[300] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime"
        style={{ x, y }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[299] flex items-center justify-center rounded-full border"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: label ? 80 : hovering ? 56 : 32,
          height: label ? 80 : hovering ? 56 : 32,
          backgroundColor: label ? "#c6f24e" : "rgba(198, 242, 78, 0)",
          borderColor: label
            ? "rgba(198, 242, 78, 0)"
            : "rgba(234, 234, 226, 0.5)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        initial={false}
      >
        {label && (
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink">
            {label}
          </span>
        )}
      </motion.div>
    </>
  );
}
