"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/data";

export default function BuyMeMomo() {
  return (
    <section id="buy-me-momo" className="relative pb-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-5"
        >
          <p className="text-sm text-[var(--text-secondary)]">
            Liked what you saw? Fuel the next build.
          </p>
          <a
            href={personalInfo.buyMeMomo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff8a00] to-[#ff5a00] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#ff8a0040] transition-shadow hover:shadow-[#ff8a0066]"
          >
            🥟 Buy me a momo
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
