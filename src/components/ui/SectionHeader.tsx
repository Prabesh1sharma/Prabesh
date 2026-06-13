"use client";

import { motion } from "framer-motion";
import AccentUnderline from "@/components/ui/AccentUnderline";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-3xl ${alignClass}`}
    >
      <div
        className={`inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[var(--accent-primary)] uppercase ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-[var(--accent-primary)]/60" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl text-[var(--text-primary)]">
        {title}{" "}
        {highlight ? <AccentUnderline>{highlight}</AccentUnderline> : null}
      </h2>
      {description ? (
        <p className="mt-5 text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
