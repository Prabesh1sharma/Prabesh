"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: { delay: number; y: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: custom.delay,
    },
  }),
};

export default function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={{ delay, y }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
