"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Code2,
  FileText,
  Sparkles,
  Calendar,
} from "lucide-react";
import type { Project } from "@/data/data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-end justify-center md:items-center md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
        >
          <motion.button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#020410]/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-h-[92vh] max-w-5xl overflow-hidden rounded-t-2xl border border-[var(--border-hover)] bg-[var(--bg-card)] shadow-[0_40px_120px_-20px_rgba(0,212,255,0.3)] md:rounded-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-hover)] bg-[var(--bg-secondary)]/90 text-[var(--text-secondary)] backdrop-blur transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
            >
              <X size={16} />
            </button>

            <div className="grid max-h-[92vh] md:grid-cols-[5fr_6fr]">
              <div className="relative flex items-center justify-center overflow-hidden bg-[#060a18] md:min-h-[92vh]">
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.10), transparent 60%), radial-gradient(circle at 80% 80%, rgba(123,97,255,0.10), transparent 55%)",
                  }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,212,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    maskImage:
                      "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                  }}
                  aria-hidden
                />

                <div className="relative z-[1] flex w-full items-center justify-center p-5 md:min-h-[92vh] md:p-10">
                  <div className="relative inline-block max-h-full max-w-full">
                    <div
                      className="pointer-events-none absolute -inset-1 rounded-xl opacity-80 blur-md"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(0,212,255,0.75) 0%, rgba(123,97,255,0.55) 50%, rgba(0,212,255,0.75) 100%)",
                      }}
                      aria-hidden
                    />
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1600}
                      height={1000}
                      sizes="(min-width: 768px) 45vw, 100vw"
                      priority
                      className="relative block h-auto w-auto rounded-lg"
                      style={{
                        maxHeight: "min(78vh, 100%)",
                        maxWidth: "100%",
                        border: "1px solid rgba(0,212,255,0.7)",
                        boxShadow:
                          "0 0 0 1px rgba(123,97,255,0.30), 0 0 28px rgba(0,212,255,0.55), 0 0 60px rgba(0,212,255,0.32), 0 0 110px rgba(123,97,255,0.30), 0 18px 40px rgba(0,0,0,0.6)",
                      }}
                    />
                  </div>
                </div>

                <div className="absolute left-5 top-5 z-10 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[var(--accent-primary)]/50 bg-[var(--bg-primary)]/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent-primary)] backdrop-blur">
                    {project.category}
                  </span>
                  {project.featured ? (
                    <span className="rounded-full border border-[var(--accent-secondary)]/50 bg-[var(--bg-primary)]/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent-secondary)] backdrop-blur">
                      Featured
                    </span>
                  ) : null}
                  {project.articleUrl ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/50 bg-amber-400/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-amber-300 backdrop-blur">
                      <FileText size={10} />
                      Paper
                    </span>
                  ) : null}
                </div>

              </div>

              <div className="relative overflow-y-auto max-h-[58vh] md:max-h-[92vh]">
                <div className="p-5 md:p-8">
                  <div>
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.35em]">
                      <span className="text-[var(--accent-primary)]">
                        Case · No. {String(project.id).padStart(2, "0")}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[var(--text-muted)]">
                        <Calendar size={11} />
                        {project.year}
                      </span>
                    </div>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
                      {project.title}
                    </h2>
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] md:mt-5">
                    {project.description}
                  </p>

                  <div className="mt-6 border-t border-[var(--border)] pt-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--accent-secondary)]">
                      The Story
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] md:text-[15px]">
                      {project.longDescription}
                    </p>
                  </div>

                  {project.highlights.length > 0 ? (
                    <div className="mt-6 border-t border-[var(--border)] pt-6">
                      <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--accent-secondary)]">
                        Highlights
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {project.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--text-secondary)]"
                          >
                            <Sparkles
                              size={13}
                              className="mt-1 shrink-0 text-[var(--accent-primary)]"
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <div className="mt-6 border-t border-[var(--border)] pt-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--accent-secondary)]">
                      Stack
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-[var(--border)] bg-[var(--bg-primary)]/60 px-2.5 py-1 font-mono text-[10px] text-[var(--text-secondary)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {(project.githubUrl || project.liveUrl || project.articleUrl) ? (
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-6">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-hover)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-card-hover)]"
                        >
                          <Code2 size={14} />
                          View Code
                        </a>
                      ) : null}
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md bg-gradient-accent px-4 py-2 text-sm font-semibold text-[#050810]"
                        >
                          Live Demo
                          <ArrowUpRight size={14} />
                        </a>
                      ) : null}
                      {project.articleUrl ? (
                        <a
                          href={project.articleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-hover)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-card-hover)]"
                        >
                          <FileText size={14} />
                          Read Paper
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
