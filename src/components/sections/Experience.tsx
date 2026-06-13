"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronDown, MapPin, Sparkles } from "lucide-react";
import { experiences } from "@/data/data";
import type { Experience as ExperienceType } from "@/data/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative bg-[var(--bg-secondary)]/40"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Where I've Built"
          title="Experience that"
          highlight="compounds."
          description="From research labs to AI-first startups — every role taught me something I now use to build production systems."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent-primary)] via-[var(--accent-secondary)] to-transparent md:left-1/2"
            aria-hidden
          />

          <div className="space-y-12 md:space-y-20">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: ExperienceType;
  index: number;
}) {
  const isLeft = index % 2 === 0;
  // Every card starts collapsed; users expand the ones they care about.
  const [open, setOpen] = useState(false);

  const preview = exp.achievements.slice(0, 1);
  const hidden = exp.achievements.slice(1);
  const hasMore = hidden.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative grid grid-cols-[28px_1fr] gap-4 md:grid-cols-2 md:gap-12 ${
        isLeft ? "" : "md:[direction:rtl]"
      }`}
    >
      <div
        className="absolute left-3 -translate-x-1/2 top-6 md:left-1/2"
        aria-hidden
      >
        <div className="relative h-4 w-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-primary)] shadow-[0_0_18px_var(--accent-primary)]" />
      </div>

      <div className="hidden md:block">
        {isLeft ? (
          <div className="pl-[calc(50%+24px)] pr-0 [direction:ltr]">
            <YearTag start={exp.startDate} end={exp.endDate} align="left" />
          </div>
        ) : (
          <div className="pr-[calc(50%+24px)] [direction:ltr] text-right">
            <YearTag start={exp.startDate} end={exp.endDate} align="right" />
          </div>
        )}
      </div>

      <div
        className={`card-surface relative col-start-2 rounded-xl p-5 md:col-auto md:p-6 [direction:ltr] ${
          isLeft ? "md:mr-[calc(50%+24px)]" : "md:ml-[calc(50%+24px)]"
        }`}
      >
        <div className="md:hidden">
          <YearTag start={exp.startDate} end={exp.endDate} align="left" />
        </div>

        <div className="mt-3 flex items-start gap-3 md:mt-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--accent-primary)]">
            <Briefcase size={18} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] md:text-xl">
              {exp.role}
            </h3>
            <p className="font-mono text-sm text-[var(--accent-primary)]">
              {exp.company}
              <span className="ml-2 text-[var(--text-muted)]">
                · {exp.type}
              </span>
            </p>
            <div className="mt-1 flex items-center gap-1 text-xs text-[var(--text-secondary)]">
              <MapPin size={11} />
              {exp.location}
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
          {exp.description}
        </p>

        <ul className="mt-4 space-y-2">
          {preview.map((a, j) => (
            <Achievement key={j} text={open ? a : truncateWords(a, 15)} />
          ))}
        </ul>

        <AnimatePresence initial={false}>
          {open && hasMore && (
            <motion.div
              key="more"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="mt-2 space-y-2">
                {hidden.map((a, j) => (
                  <Achievement key={j} text={a} />
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {hasMore && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="group mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-[var(--accent-primary)] transition-colors hover:text-[var(--text-primary)]"
          >
            {open ? "Show less" : `+${hidden.length} more highlights`}
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {exp.technologies.map((t) => (
            <span
              key={t}
              className="rounded-md border border-[var(--border)] bg-[var(--bg-primary)]/60 px-2 py-1 font-mono text-[10px] text-[var(--text-secondary)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function truncateWords(text: string, max: number) {
  const words = text.split(/\s+/);
  if (words.length <= max) return text;
  return words.slice(0, max).join(" ") + "…";
}

function Achievement({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
      <Sparkles
        size={14}
        className="mt-1 shrink-0 text-[var(--accent-primary)]"
      />
      <span className="leading-relaxed">{text}</span>
    </li>
  );
}

function YearTag({
  start,
  end,
  align,
}: {
  start: string;
  end: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={`inline-flex flex-col gap-0.5 font-mono ${
        align === "right" ? "items-end" : "items-start"
      }`}
    >
      <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
        Period
      </span>
      <span className="text-sm text-[var(--accent-primary)]">
        {start} → {end}
      </span>
    </div>
  );
}
