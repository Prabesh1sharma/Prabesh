"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { personalInfo, socialLinks, type SocialPlatform } from "@/data/data";
import SocialIcon from "@/components/ui/SocialIcon";
import AccentUnderline from "@/components/ui/AccentUnderline";

const featured: SocialPlatform[] = ["Email", "LinkedIn", "GitHub"];

export default function Contact() {
  const featuredLinks = featured
    .map((p) => socialLinks.find((s) => s.platform === p))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px]"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(0,212,255,0.18), transparent 60%), radial-gradient(ellipse 60% 60% at 80% 80%, rgba(123,97,255,0.15), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)]">
            <span className="h-px w-8 bg-[var(--accent-primary)]/60" />
            Let&apos;s talk
            <span className="h-px w-8 bg-[var(--accent-primary)]/60" />
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Let&apos;s build something{" "}
            <span className="whitespace-nowrap">
              <AccentUnderline variant="scribble">extraordinary</AccentUnderline>.
            </span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-[var(--text-secondary)]">
            Whether it&apos;s an agent platform, a custom LLM pipeline, or a
            computer-vision system — if it&apos;s ambitious, I&apos;m
            interested.
          </p>

          <div className="mt-6 inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
            <MapPin size={12} />
            {personalInfo.location}
          </div>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {featuredLinks.map((s, i) => (
            <motion.a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface group relative overflow-hidden rounded-xl p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--border-hover)] bg-gradient-to-br from-[#00d4ff15] to-[#7b61ff15] text-[var(--accent-primary)]">
                  <SocialIcon platform={s.platform} size={22} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-[var(--text-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-primary)]"
                />
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                {s.platform}
              </p>
              <p className="mt-1 break-all text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                {s.handle}
              </p>
              <p className="mt-3 font-mono text-xs text-[var(--text-secondary)]">
                Reach out →
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
