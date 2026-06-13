"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const initials = `${personalInfo.firstName[0]}${personalInfo.lastName[0]}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a
          href="#home"
          className="group flex items-center gap-2 font-mono text-sm"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border-hover)] bg-gradient-to-br from-[#00d4ff22] to-[#7b61ff22] text-[var(--accent-primary)] font-bold">
            {initials}
          </span>
          <span className="hidden text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors sm:inline">
            {personalInfo.firstName}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 rounded-md px-4 py-2 font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] transition-transform hover:scale-[1.03]"
            style={{
              background:
                "linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box, var(--gradient-accent) border-box",
              border: "1px solid transparent",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-primary)]" />
            Hire Me
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="rounded-md border border-[var(--border)] p-2 text-[var(--text-primary)] md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-[var(--border)] bg-[var(--bg-secondary)]/95 backdrop-blur"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 font-mono text-sm uppercase tracking-wider text-[var(--text-secondary)] hover:bg-[var(--bg-card)] hover:text-[var(--accent-primary)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-md bg-gradient-accent px-3 py-3 text-center font-mono text-sm uppercase tracking-wider text-[#050810]"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
