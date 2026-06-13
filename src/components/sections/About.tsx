"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Layers,
  Bot,
  Microscope,
  type LucideIcon,
} from "lucide-react";
import {
  personalInfo,
  stats,
  whatIBring,
  philosophy,
} from "@/data/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Counter from "@/components/ui/Counter";

const bringIcons: LucideIcon[] = [BrainCircuit, Layers, Bot, Microscope];

function parseStat(value: string): number {
  const n = parseInt(value.replace(/\D/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
}

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="About"
          title="Engineering AI that"
          highlight="ships."
          description={personalInfo.longBio}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="card-surface relative overflow-hidden rounded-xl p-6 md:p-8"
          >
            <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3 font-mono text-xs text-[var(--text-secondary)]">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-3">~/portfolio/stats.sh</span>
            </div>
            <div className="mt-5 space-y-3 font-mono text-sm">
              <p>
                <span className="text-[var(--accent-primary)]">$</span>{" "}
                <span className="text-[var(--text-secondary)]">cat</span>{" "}
                impact.json
              </p>
              <div className="rounded-lg border border-[var(--border)] bg-black/30 p-4">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                        <Counter to={parseStat(s.value)} suffix={s.suffix} />
                      </div>
                      <p className="mt-1 text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <p>
                <span className="text-[var(--accent-primary)]">$</span>{" "}
                <span className="text-[var(--text-secondary)]">echo</span>{" "}
                &quot;philosophy&quot;
              </p>
              <p className="rounded-lg border border-[var(--border)] bg-black/30 p-4 text-[var(--text-secondary)] leading-relaxed">
                <span className="text-[var(--accent-secondary)]">// </span>
                {philosophy}
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whatIBring.map((b, i) => {
              const Icon = bringIcons[i % bringIcons.length];
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-surface group rounded-xl p-5"
                >
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-md"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,97,255,0.15))",
                    }}
                  >
                    <Icon size={20} className="text-[var(--accent-primary)]" />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {b.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
