import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Utkarsh Tripathi — Data Engineer & SDE",
  description:
    "Portfolio of Utkarsh Tripathi — B.E. Computer Science Graduate (Chandigarh University), data engineer, IEEE co-author, and singer. Building software and data systems that don't suck.",
  keywords: [
    "Utkarsh Tripathi",
    "Data Engineer",
    "SDE",
    "Chandigarh University",
    "Portfolio",
    "ETL",
    "Azure",
  ],
  authors: [{ name: "Utkarsh Tripathi" }],
  openGraph: {
    title: "Utkarsh Tripathi — Data Engineer & SDE",
    description:
      "Building software and data systems that don't suck. B.E. Computer Science Graduate, data engineer, IEEE co-author.",
    url: "https://utkarsh.dev",
    siteName: "Utkarsh Tripathi",
    locale: "en_US",
    type: "website",
    },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Tripathi — Data Engineer & SDE",
    description:
      "Building software and data systems that don't suck. B.E. Computer Science Graduate, data engineer, IEEE co-author.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${jetbrainsMono.variable} ${inter.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-text-hi font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-canvas focus:rounded-md focus:text-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
