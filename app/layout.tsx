import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IELTS & TOEFL Prep | Global English Learning Platform",
  description: "A comprehensive platform to prepare for IELTS and TOEFL exams with AI-powered feedback and adaptive learning.",
};

import Navbar from "@/components/Navbar";

import { AuthProvider } from "@/lib/auth-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen font-sans`}
      >
        <AuthProvider>
          <Navbar />
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
