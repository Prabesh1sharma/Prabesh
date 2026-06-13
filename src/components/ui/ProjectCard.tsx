"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import type { Project } from "@/data/data";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({
  project,
  featured = false,
  onOpen,
}: ProjectCardProps) {
  if (featured) return <FeaturedCard project={project} onOpen={onOpen} />;
  return <StandardCard project={project} onOpen={onOpen} />;
}

function stopAndOpen(e: MouseEvent<HTMLAnchorElement>, url: string) {
  e.stopPropagation();
  e.preventDefault();
  window.open(url, "_blank", "noopener,noreferrer");
}

function FeaturedCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="card-surface group relative w-full overflow-hidden rounded-xl text-left"
      aria-label={`Open ${project.title} case study`}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#070b1a]">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,212,255,0.10), transparent 70%)",
          }}
          aria-hidden
        />

        <div className="absolute inset-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
          <div className="relative inline-block max-h-full max-w-full">
            <div
              className="pointer-events-none absolute -inset-1 rounded-lg opacity-70 blur-md"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.55) 0%, rgba(123,97,255,0.40) 50%, rgba(0,212,255,0.55) 100%)",
              }}
              aria-hidden
            />
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={750}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="relative block h-auto max-h-full w-auto max-w-full rounded-md"
              style={{
                filter: "saturate(1.12) contrast(1.05)",
                border: "1px solid rgba(0,212,255,0.45)",
                boxShadow:
                  "0 0 0 1px rgba(123,97,255,0.20), 0 0 20px rgba(0,212,255,0.40), 0 0 44px rgba(123,97,255,0.22), 0 10px 26px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,212,255,0.16), transparent 75%)",
          }}
          aria-hidden
        />
        <div className="absolute left-3 top-3 flex items-center gap-1.5">
          <span className="rounded-full border border-[var(--accent-primary)]/40 bg-[var(--bg-primary)]/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[var(--accent-primary)] backdrop-blur">
            Featured
          </span>
          <span className="rounded-full border border-[var(--border)] bg-[var(--bg-primary)]/80 px-2 py-0.5 font-mono text-[10px] text-[var(--text-secondary)] backdrop-blur">
            {project.year}
          </span>
        </div>
        <div className="absolute right-3 top-3 flex items-center gap-1.5">
          {project.articleUrl ? (
            <a
              href={project.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => stopAndOpen(e, project.articleUrl!)}
              className="inline-flex items-center gap-1 rounded-full border border-amber-400/50 bg-amber-400/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-amber-300 backdrop-blur transition-colors hover:bg-amber-400/25"
            >
              <FileText size={10} />
              Paper
            </a>
          ) : null}
          <span className="rounded-full border border-[var(--border)] bg-[var(--bg-primary)]/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--accent-secondary)] backdrop-blur">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-primary)] md:text-xl">
            {project.title}
          </h3>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-[var(--text-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-primary)]"
          />
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-md border border-[var(--border)] bg-[var(--bg-primary)]/60 px-2 py-0.5 font-mono text-[10px] text-[var(--text-secondary)]"
            >
              {t}
            </span>
          ))}
          {project.tags.length > 3 ? (
            <span className="font-mono text-[10px] text-[var(--text-muted)]">
              +{project.tags.length - 3}
            </span>
          ) : null}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-3">
          {project.articleUrl ? (
            <a
              href={project.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => stopAndOpen(e, project.articleUrl!)}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-amber-300 transition-colors hover:text-amber-200"
            >
              <FileText size={12} />
              Read Paper
            </a>
          ) : (
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Case study
            </span>
          )}
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent-primary)]">
            View case →
          </span>
        </div>
      </div>
    </motion.button>
  );
}

function StandardCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="card-surface group relative w-full overflow-hidden rounded-xl text-left"
      aria-label={`Open ${project.title} case study`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#070b1a]">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse at center, black 35%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 35%, transparent 85%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,212,255,0.08), transparent 70%)",
          }}
          aria-hidden
        />

        <div className="absolute inset-3.5 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
          <div className="relative inline-block max-h-full max-w-full">
            <div
              className="pointer-events-none absolute -inset-1 rounded-lg opacity-60 blur-md"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.45) 0%, rgba(123,97,255,0.32) 50%, rgba(0,212,255,0.45) 100%)",
              }}
              aria-hidden
            />
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={625}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              className="relative block h-auto max-h-full w-auto max-w-full rounded-md"
              style={{
                filter: "saturate(1.1) contrast(1.04)",
                border: "1px solid rgba(0,212,255,0.40)",
                boxShadow:
                  "0 0 0 1px rgba(123,97,255,0.18), 0 0 16px rgba(0,212,255,0.32), 0 0 36px rgba(123,97,255,0.18), 0 8px 20px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </div>
        <span className="absolute left-2.5 top-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-primary)]/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--accent-secondary)] backdrop-blur">
          {project.category}
        </span>
        {project.articleUrl ? (
          <a
            href={project.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => stopAndOpen(e, project.articleUrl!)}
            className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full border border-amber-400/50 bg-amber-400/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-amber-300 backdrop-blur transition-colors hover:bg-amber-400/25"
          >
            <FileText size={10} />
            Paper
          </a>
        ) : null}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-primary)]">
            {project.title}
          </h3>
          <ArrowUpRight
            size={16}
            className="mt-0.5 shrink-0 text-[var(--text-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-primary)]"
          />
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.description}
        </p>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-md border border-[var(--border)] bg-[var(--bg-primary)]/60 px-2 py-0.5 font-mono text-[10px] text-[var(--text-secondary)]"
              >
                {t}
              </span>
            ))}
            {project.tags.length > 3 ? (
              <span className="font-mono text-[10px] text-[var(--text-muted)]">
                +{project.tags.length - 3}
              </span>
            ) : null}
          </div>
          {project.articleUrl ? (
            <a
              href={project.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => stopAndOpen(e, project.articleUrl!)}
              className="shrink-0 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-300 transition-colors hover:text-amber-200"
            >
              <FileText size={10} />
              Paper
            </a>
          ) : null}
        </div>
      </div>
    </motion.button>
  );
}
