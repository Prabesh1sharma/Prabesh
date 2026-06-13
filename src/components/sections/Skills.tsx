"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, currentlyLearning } from "@/data/data";
import SectionHeader from "@/components/ui/SectionHeader";

const tabKeys = Object.keys(skills) as Array<keyof typeof skills>;

export default function Skills() {
  const [active, setActive] = useState<keyof typeof skills>(tabKeys[0]);

  return (
    <section
      id="skills"
      className="section-padding relative bg-[var(--bg-secondary)]/40"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="The Toolkit"
          title="Skills built through"
          highlight="shipping."
          description="Not a list of buzzwords — these are tools I reach for daily, with confidence scaled to actual usage."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col no-scrollbar">
            {tabKeys.map((key) => {
              const isActive = active === key;
              const cat = skills[key];
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`group relative shrink-0 rounded-lg border px-4 py-3 text-left transition-all lg:shrink ${
                    isActive
                      ? "border-[var(--accent-primary)] bg-[var(--bg-card-hover)]"
                      : "border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)]"
                  }`}
                >
                  {isActive ? (
                    <span
                      className="absolute inset-y-2 left-0 w-0.5 rounded-r bg-gradient-accent"
                      aria-hidden
                    />
                  ) : null}
                  <p
                    className={`text-sm font-semibold ${
                      isActive
                        ? "text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {cat.label}
                  </p>
                  <p className="mt-0.5 hidden text-xs text-[var(--text-muted)] lg:block">
                    {cat.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="card-surface rounded-xl p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                      {skills[active].label}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {skills[active].description}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {skills[active].items.length} skills
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {skills[active].items.map((s, i) => (
                    <SkillRow key={s.name} name={s.name} level={s.level} delay={i * 0.06} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-dashed border-[var(--border-hover)] bg-[var(--bg-card)]/40 p-5 md:p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-secondary)]">
            Currently exploring
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {currentlyLearning.map((c) => (
              <span
                key={c}
                className="rounded-full border border-[var(--border)] bg-[var(--bg-primary)]/60 px-3 py-1.5 text-xs text-[var(--text-secondary)]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillRow({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-[var(--text-primary)]">{name}</span>
        <span className="font-mono text-xs text-[var(--accent-primary)]">
          {level}%
        </span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--bg-primary)]/80">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-accent"
        />
      </div>
    </div>
  );
}
