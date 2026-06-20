import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { personalInfo, socialLinks } from "@/data/data";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://prabeshsharma.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.name} — AI Engineer, ML Engineer & Software Engineer`,
    template: `%s — ${personalInfo.name}`,
  },
  description: personalInfo.bio.slice(0, 160),
  keywords: [
    "Prabesh Sharma",
    "Prabesh Sharma AI Engineer",
    "Prabesh Sharma ML Engineer",
    "AI Engineer Nepal",
    "ML Engineer",
    "Machine Learning Engineer",
    "Software Engineer",
    "Computer Vision Engineer",
    "LLM Engineer",
    "AI Engineer portfolio",
  ],
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${personalInfo.name} — AI Engineer, ML Engineer & Software Engineer`,
    description: personalInfo.tagline,
    url: siteUrl,
    siteName: personalInfo.name,
    images: [
      {
        url: personalInfo.profileImage,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} — ${personalInfo.title}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — AI Engineer`,
    description: personalInfo.tagline,
    images: [personalInfo.profileImage],
  },
  // verification: { google: "PASTE_SEARCH_CONSOLE_TOKEN_HERE" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  url: siteUrl,
  image: `${siteUrl}${personalInfo.profileImage}`,
  jobTitle: ["AI Engineer", "ML Engineer", "Machine Learning Engineer", "Software Engineer"],
  description: personalInfo.bio,
  email: `mailto:${personalInfo.email}`,
  address: {
    "@type": "PostalAddress",
    addressCountry: personalInfo.location,
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Large Language Models",
    "Computer Vision",
    "Natural Language Processing",
    "MLOps",
    "Software Engineering",
  ],
  sameAs: socialLinks
    .filter((s) => s.platform !== "Email")
    .map((s) => s.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
