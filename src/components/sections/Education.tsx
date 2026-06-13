"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { education } from "@/data/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Foundations"
          title="Education &"
          highlight="curiosity."
          description="Formal training that planted the roots — combined with a relentless habit of building beyond the syllabus."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface rounded-xl p-6 md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[var(--border-hover)] bg-gradient-to-br from-[#00d4ff15] to-[#7b61ff15]">
                  <GraduationCap size={22} className="text-[var(--accent-primary)]" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)]">
                    {edu.startYear} → {edu.endYear}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)] md:text-xl">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {edu.institution}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                {edu.description}
              </p>

              <div className="mt-5 border-t border-[var(--border)] pt-5">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-secondary)]">
                  <BookOpen size={12} />
                  Coursework
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {edu.coursework.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-[var(--border)] bg-[var(--bg-primary)]/60 px-2 py-1 font-mono text-[10px] text-[var(--text-secondary)]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-surface relative overflow-hidden rounded-xl p-6 md:p-7"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(123,97,255,0.35), transparent)",
              }}
              aria-hidden
            />
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)]">
              Self-directed
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)] md:text-xl">
              Beyond the classroom
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]" />
                Published research on real-time anomaly detection using fine-tuned Vision Transformers.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]" />
                Active writer on Medium — explaining transformers, ML fundamentals, and SQL for data science.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]" />
                Mentoring AI interns building reinforcement-learning agents that learn from human feedback.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]" />
                Open-source contributor across LLM tooling, RAG pipelines, and computer-vision projects.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
