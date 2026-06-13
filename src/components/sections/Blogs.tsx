"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { blogs } from "@/data/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Blogs() {
  if (blogs.length === 0) return null;

  return (
    <section
      id="blog"
      className="section-padding relative bg-[var(--bg-secondary)]/40"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Writing"
          title="Notes from the"
          highlight="lab."
          description="Long-form explanations of the ideas I work with — written to make complex topics actually click."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b, i) => (
            <motion.a
              key={b.id}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-surface group relative flex flex-col rounded-xl p-6"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-[var(--border-hover)] bg-[var(--bg-primary)]/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--accent-primary)]">
                  {b.platform}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-[var(--text-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-primary)]"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-snug text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                {b.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                {b.excerpt}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {b.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-[var(--border)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-secondary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4 border-t border-[var(--border)] pt-4 font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={11} />
                  {b.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={11} />
                  {b.readTime}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
