import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { personalInfo } from "@/data/data";
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

export const metadata: Metadata = {
  title: `${personalInfo.name} — AI Engineer & ML Researcher`,
  description: personalInfo.bio.slice(0, 160),
  openGraph: {
    title: `${personalInfo.name} — AI Engineer`,
    description: personalInfo.tagline,
    images: [personalInfo.profileImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — AI Engineer`,
    description: personalInfo.tagline,
    images: [personalInfo.profileImage],
  },
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
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
