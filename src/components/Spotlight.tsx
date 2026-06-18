"use client";

import { useMotionValue, motion, useSpring, useMotionTemplate } from "framer-motion";
import { useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export const Spotlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { theme } = useTheme();

  const springConfig = { damping: 25, stiffness: 200 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    function updateMousePosition(e: MouseEvent) {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    }

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={
          {
            background: `radial-gradient(600px circle at var(--x) var(--y), var(--accent-glow), transparent 40%)`,
            "--x": useMotionTemplate`${mouseXSpring}px`,
            "--y": useMotionTemplate`${mouseYSpring}px`,
          } as React.CSSProperties & Record<string, unknown>
        }
      />
    </div>
  );
};
