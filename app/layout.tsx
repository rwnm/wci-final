import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WIPA Chemicals | ECOSYN Synthetic Lubricants",
  description: "WIPA Chemicals International (WCI) specializes in high-performance ECOSYN synthetic lubricants. Advanced ester and PAO technology for compressors, engines, and industrial applications.",
  keywords: ["synthetic lubricants", "ECOSYN", "ester oil", "PAO oil", "compressor oil", "engine oil", "WIPA chemicals", "WCI", "industrial lubricants"],
  authors: [{ name: "WIPA Chemicals International" }],
  openGraph: {
    title: "WIPA Chemicals | ECOSYN Synthetic Lubricants",
    description: "High-performance synthetic lubricants engineered for superior protection and efficiency. Discover our ECOSYN range for compressors, engines, and hydraulics.",
    type: "website",
    locale: "en_US",
    siteName: "WIPA Chemicals",
  },
  twitter: {
    card: "summary_large_image",
    title: "WIPA Chemicals | ECOSYN Synthetic Lubricants",
    description: "High-performance synthetic lubricants engineered for superior protection and efficiency.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
