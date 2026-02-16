"use client";

import Link from "next/link";
import { BookOpen, GraduationCap, LayoutDashboard, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Exercices", href: "/exercises", icon: BookOpen },
    { name: "IELTS Prep", href: "/ielts", icon: GraduationCap },
];

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold tracking-tight text-primary">
                            Global<span className="text-accent">Prep</span>
                        </span>
                    </Link>
                    <div className="hidden md:flex md:gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                <item.icon className="h-4 w-4" />
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:bg-muted">
                        <User className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
