import type { Metadata } from "next";
import { Barlow, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simulasi",
  description:
    "Transform your cyber readiness from theoretical planning to measurable capability with our advanced resilience platform.",
  icons: {
    icon: "/images/rpmylogo2.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${barlow.variable}`}>{children}</body>
    </html>
  );
}
