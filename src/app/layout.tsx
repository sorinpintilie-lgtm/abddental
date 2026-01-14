import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StickyNote } from "@/components/StickyNote";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ABT Dental Clinic — Excelență în Stomatologie",
  description:
    "ABT Dental Clinic: tratamente stomatologice complete, tehnologie avansată, laborator propriu. București, Sector 2.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <StickyNote />
      </body>
    </html>
  );
}
