"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/data";
import Typewriter from "@/components/ui/Typewriter";
import SocialIcon from "@/components/ui/SocialIcon";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
      <div className="absolute inset-0 -z-10 radial-glow" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)]/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-[var(--accent-primary)]"
          >
            {"<"} AI Engineer {"/>"}
            <span className="caret" aria-hidden />
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1.05] tracking-tight"
          >
            Hi, I&apos;m{" "}
            <span className="text-[var(--text-primary)]">
              {personalInfo.firstName}
            </span>{" "}
            <LetterpressName text={personalInfo.lastName} />
            <span
              className="ml-0.5 text-[var(--accent-primary)]"
              style={{
                textShadow:
                  "0 0 14px rgba(0,212,255,0.55), 0 0 32px rgba(0,212,255,0.25)",
              }}
            >
              .
            </span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-5 flex items-center gap-2 text-lg md:text-2xl text-[var(--text-secondary)]"
          >
            <span className="font-mono text-[var(--accent-secondary)]">{">"}</span>
            <Typewriter
              words={personalInfo.roles}
              className="font-mono text-[var(--text-primary)]"
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-[var(--text-secondary)]"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-gradient-accent px-5 py-3 text-sm font-semibold text-[#050810] transition-transform hover:scale-[1.03]"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border-hover)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-card)]"
            >
              <Download size={16} />
              Download CV
            </a>
            {personalInfo.availableForWork ? (
              <div className="ml-1 inline-flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for work
              </div>
            ) : null}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            {socialLinks
              .filter((s) =>
                ["GitHub", "LinkedIn", "Medium", "Email"].includes(s.platform),
              )
              .map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--accent-primary)]"
                >
                  <SocialIcon platform={s.platform} />
                </a>
              ))}
          </motion.div>
        </motion.div>

        <ProfilePortrait />
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)] hover:text-[var(--accent-primary)] md:flex md:items-center md:gap-2"
      >
        <Sparkles size={12} />
        scroll
      </a>
    </section>
  );
}

function ProfilePortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[420px]"
    >
      <div
        className="pointer-events-none absolute -inset-16 -z-10 blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(198, 96, 54, 0.25), rgba(244, 233, 218, 0.05), transparent)",
        }}
        aria-hidden
      />

      <div className="relative grid grid-cols-[28px_1fr] gap-4 md:grid-cols-[36px_1fr] md:gap-5">
        <div
          className="relative flex flex-col items-center justify-between py-2 font-mono"
          aria-hidden
        >
          <span
            className="text-[10px] uppercase tracking-[0.4em] text-[#c66036]"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Portrait · 2025
          </span>
          <span className="h-12 w-px bg-[#c66036]/40" />
          <span
            className="text-[10px] uppercase tracking-[0.4em] text-[var(--text-muted)]"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            no. 001
          </span>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm border border-[#c66036]/30"
              aria-hidden
            />

            <div
              className="relative h-full w-full overflow-hidden rounded-sm bg-[#1a1618] shadow-[0_40px_80px_-30px_rgba(198,96,54,0.35),0_20px_50px_-20px_rgba(0,0,0,0.7)]"
              style={{
                borderTop: "1px solid rgba(244,233,218,0.18)",
                borderLeft: "1px solid rgba(244,233,218,0.12)",
                borderRight: "1px solid rgba(0,0,0,0.4)",
                borderBottom: "1px solid rgba(0,0,0,0.4)",
              }}
            >
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                priority
                sizes="(min-width: 768px) 420px, 90vw"
                className="object-cover"
              />

              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse 90% 70% at 50% 35%, transparent 30%, rgba(20,16,18,0.7) 100%)",
                }}
                aria-hidden
              />

              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-16"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(244,233,218,0.06), transparent)",
                }}
                aria-hidden
              />
            </div>
          </div>

          <div className="mt-5">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.45em]"
              style={{ color: "#c66036" }}
            >
              AI Engineer
            </p>
            <div className="mt-1 flex items-baseline justify-between gap-4">
              <p
                className="font-mono text-[10px] uppercase tracking-[0.3em]"
                style={{ color: "#f4e9da" }}
              >
                {personalInfo.name}
              </p>
              <span className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-300/80">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                shipping
              </span>
            </div>
          </div>

          <div
            className="mt-3 h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(198,96,54,0.6), rgba(244,233,218,0.15), transparent)",
            }}
            aria-hidden
          />
        </div>
      </div>
    </motion.div>
  );
}

const letterOffsets = [0, 0, 0, 0, 0, 0, 0, 0];
const letterRotations = [0, 0, 0, 0, 0, 0, 0, 0];

function LetterpressName({ text }: { text: string }) {
  return (
    <span className="inline-block whitespace-nowrap text-[var(--text-primary)]">
      {Array.from(text).map((char, i) => {
        const offset = letterOffsets[i % letterOffsets.length];
        const rotation = letterRotations[i % letterRotations.length];
        return (
          <motion.span
            key={`${char}-${i}`}
            initial={{ opacity: 0, y: 26, rotate: rotation * 2.4 }}
            animate={{ opacity: 1, y: `${offset}em`, rotate: rotation }}
            transition={{
              delay: 0.5 + i * 0.06,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
            style={{ transformOrigin: "50% 100%" }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
}
