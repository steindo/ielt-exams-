"use client";

import { Home, LineChart, BookOpen, Crown, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <div className="mr-8 flex items-center gap-2 font-bold text-xl text-primary">
                    <GraduationCap className="h-6 w-6" />
                    <span>IELTS & TOEFL Prep</span>
                </div>
                <div className="flex gap-1 h-full items-center">
                    <Link href="/dashboard" className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors">
                        <Home className="h-4 w-4" /> Dashboard
                    </Link>
                    <Link href="/exercises" className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors">
                        <LineChart className="h-4 w-4" /> Exercises
                    </Link>
                    <Link href="/exercises/academic" className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors font-bold">
                        <Crown className="h-4 w-4" /> Premium Harvard/Oxford
                    </Link>
                    <Link href="/course" className="flex items-center gap-2 text-slate-900 hover:text-slate-700 transition-colors font-bold border-l pl-6 border-slate-300">
                        <BookOpen className="h-4 w-4" /> My Course
                    </Link>
                </div>
            </div>
        </nav>
    );
}
