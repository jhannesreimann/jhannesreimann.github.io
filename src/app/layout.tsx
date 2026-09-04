import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jhannes Reimann — Security Engineering · HPI",
  description:
    "MSc Computer Science at HPI (Security Engineering). Building DNS, IoT pentest, therapy search & mail security tools. Potsdam — open to security roles.",
  metadataBase: new URL("https://jhannesreimann.dev"),
  openGraph: {
    title: "Jhannes Reimann — Security Engineering · HPI",
    description:
      "MSc Computer Science at HPI. DNS-over-HTTPS, IoT pentest, therapy search, STARTTLS. Potsdam.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
