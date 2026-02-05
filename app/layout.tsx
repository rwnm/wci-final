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
  title: "WCI Global | Water, Power, Infrastructure",
  description: "WCI Global is a leading provider of sustainable solutions in water management, power generation, and critical infrastructure development worldwide. Engineering excellence for a sustainable future.",
  keywords: ["infrastructure", "water management", "power generation", "sustainable engineering", "global infrastructure"],
  authors: [{ name: "WCI Global" }],
  openGraph: {
    title: "WCI Global | Water, Power, Infrastructure",
    description: "Engineering excellence for a sustainable future. Leading provider of water, power, and infrastructure solutions worldwide.",
    type: "website",
    locale: "en_US",
    siteName: "WCI Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "WCI Global | Water, Power, Infrastructure",
    description: "Engineering excellence for a sustainable future.",
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
