"use client";

import { motion } from "framer-motion";
import { useId, type ReactNode } from "react";

interface AccentUnderlineProps {
  children: ReactNode;
  className?: string;
  variant?: "wave" | "double" | "scribble";
  delay?: number;
}

const paths: Record<NonNullable<AccentUnderlineProps["variant"]>, string[]> = {
  wave: ["M 3 7 C 60 1, 140 12, 197 6"],
  double: ["M 2 5 L 198 5", "M 2 9 L 198 9"],
  scribble: [
    "M 3 8 C 25 3, 55 11, 90 6 S 150 11, 197 5",
    "M 8 11 C 50 9, 100 12, 195 10",
  ],
};

export default function AccentUnderline({
  children,
  className,
  variant = "wave",
  delay = 0.2,
}: AccentUnderlineProps) {
  const uid = useId().replace(/:/g, "");
  const gradientId = `acc-grad-${uid}`;

  return (
    <span
      className={`relative inline-block whitespace-nowrap ${className ?? ""}`}
    >
      <span className="relative z-10">{children}</span>
      <svg
        className="pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full md:-bottom-2 md:h-3.5"
        viewBox="0 0 200 14"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="55%" stopColor="#5fb7ff" />
            <stop offset="100%" stopColor="#7b61ff" />
          </linearGradient>
        </defs>
        {paths[variant].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke={`url(#${gradientId})`}
            strokeWidth={variant === "double" ? 1.5 : 2.5}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.18,
            }}
          />
        ))}
      </svg>
    </span>
  );
}
