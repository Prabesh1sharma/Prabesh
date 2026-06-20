import { personalInfo, socialLinks } from "@/data/data";
import SocialIcon from "@/components/ui/SocialIcon";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const initials = `${personalInfo.firstName[0]}${personalInfo.lastName[0]}`;
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-mono">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border-hover)] bg-gradient-to-br from-[#00d4ff22] to-[#7b61ff22] text-[var(--accent-primary)] font-bold">
                {initials}
              </span>
              <span className="text-base text-[var(--text-primary)]">
                {personalInfo.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
              {personalInfo.tagline}
            </p>
            <a
              href={personalInfo.buyMeMomo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff8a00] to-[#ff5a00] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#ff8a0040] transition-shadow hover:shadow-[#ff8a0060]"
            >
              🥟 Buy me a momo
            </a>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)]">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-[var(--text-secondary)]">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-[var(--accent-primary)] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-primary)]">
              Connect
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <SocialIcon platform={s.platform} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
