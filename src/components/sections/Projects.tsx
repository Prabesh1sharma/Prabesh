"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project, type ProjectCategory } from "@/data/data";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import AccentUnderline from "@/components/ui/AccentUnderline";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", "AI/ML", "NLP", "Computer Vision", "Web"];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);
  const rest = useMemo(
    () =>
      projects
        .filter((p) => !p.featured)
        .filter((p) => (filter === "All" ? true : p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects with"
          highlight="real impact."
          description="A mix of research, production systems, and weekend builds. Tap any card to read the full case."
        />

        <div className="mt-12 grid gap-5 md:gap-6 lg:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} featured onOpen={setActive} />
          ))}
        </div>

        <div className="mt-16">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
              More <AccentUnderline variant="double">projects</AccentUnderline>
            </h3>

            <div className="-mx-1 flex w-full flex-wrap gap-1.5 overflow-x-auto md:w-auto">
              {filters.map((f) => {
                const activeFilter = filter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                      activeFilter
                        ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                        : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            layout
            className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {rest.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={p} onOpen={setActive} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {rest.length === 0 ? (
            <p className="mt-12 text-center font-mono text-sm text-[var(--text-muted)]">
              No projects in this category yet — check back soon.
            </p>
          ) : null}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
