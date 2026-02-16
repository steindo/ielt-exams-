import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight sm:text-7xl">
        Master Your <span className="text-primary">IELTS</span> & <span className="text-accent">TOEFL</span> Exams
      </h1>
      <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
        The most comprehensive AI-powered platform for international English exam preparation.
        Personalized insights, adaptive exercises, and real-time feedback.
      </p>
      <div className="mt-10 flex gap-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          Get Started <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
