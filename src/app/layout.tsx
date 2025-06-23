import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Glooper - Design & Development for Neurodivergent Minds",
  description: "Professional consultancy helping companies build software that works for ADHD and autistic users. Expert neurodivergent-friendly design systems and development.",
  keywords: ["neurodivergent design", "ADHD-friendly UX", "autism accessible design", "cognitive accessibility", "inclusive design", "UX consultancy"],
  authors: [{ name: "Glooper" }],
  creator: "Glooper",
  publisher: "Glooper",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#60a5fa" }
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glooper.ai",
    title: "Glooper - Design & Development for Neurodivergent Minds",
    description: "Professional consultancy helping companies build software that works for ADHD and autistic users.",
    siteName: "Glooper",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glooper - Design & Development for Neurodivergent Minds",
    description: "Professional consultancy helping companies build software that works for ADHD and autistic users.",
    creator: "@glooper_ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
      </head>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[var(--font-primary)]">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}