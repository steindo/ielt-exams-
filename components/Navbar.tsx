"use client";

import { BookOpen, GraduationCap, LayoutDashboard, Crown, FileText } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <div className="mr-8 flex items-center gap-2 font-bold text-xl text-primary">
                    <GraduationCap className="h-6 w-6" />
                    <span>IELTS & TOEFL Prep</span>
                </div>
                <div className="flex gap-6 text-sm font-medium">
                    <a href="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <LayoutDashboard className="h-4 w-4" /> Dashboard
                    </a>
                    <a href="/exercises" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <BookOpen className="h-4 w-4" /> Exercices
                    </a>
                    <a href="/exercises/academic" className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors font-bold">
                        <Crown className="h-4 w-4" /> Premium Harvard/Oxford
                    </a>
                    <a href="/course" className="flex items-center gap-2 text-slate-900 hover:text-slate-700 transition-colors font-bold border-l pl-6 border-slate-300">
                        <BookOpen className="h-4 w-4" /> My Course
                    </a>
                </div>
            </div>
        </nav>
    );
}
