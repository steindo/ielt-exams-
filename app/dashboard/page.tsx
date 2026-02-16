"use client";

import Link from "next/link";
import {
    TrendingUp,
    CheckCircle2,
    Clock,
    ArrowRight,
    BookOpen,
    Mic2,
    PenTool,
    Headphones
} from "lucide-react";
import Card from "@/components/Card";
import { useAuth } from "@/lib/auth-context";

const stats = [
    { label: "Overall Progress", value: "68%", icon: TrendingUp, color: "text-blue-600" },
    { label: "Completed Lessons", value: "24", icon: CheckCircle2, color: "text-green-600" },
    { label: "Practice Time", value: "12.5h", icon: Clock, color: "text-orange-600" },
];

const modules = [
    { name: "Reading", icon: BookOpen, count: "12 exercises", href: "/ielts/reading" },
    { name: "Listening", icon: Headphones, count: "8 exercises", href: "/ielts/listening" },
    { name: "Writing", icon: PenTool, count: "5 exercises", href: "/ielts/writing" },
    { name: "Speaking", icon: Mic2, count: "Mock simulations", href: "/ielts/speaking" },
];

export default function Dashboard() {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div className="flex min-h-screen items-center justify-center">Loading your progress...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 text-foreground">
            <header className="mb-8 overflow-hidden rounded-2xl bg-primary px-8 py-12 text-primary-foreground shadow-lg">
                <h1 className="mb-2 text-4xl font-bold tracking-tight">Welcome back, {user?.name || "Student"}!</h1>
                <p className="text-lg opacity-90">Your {user?.targetExam} exam is in 14 days. Keep up the great work!</p>
            </header>

            <div className="mb-12 grid gap-6 md:grid-cols-3">
                {stats.map((stat) => (
                    <Card key={stat.label} title={stat.label} icon={stat.icon} className="border-none shadow-md">
                        <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                    </Card>
                ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <h2 className="mb-6 text-2xl font-bold">Your Learning Modules</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {modules.map((mod) => (
                            <Card key={mod.name} title={mod.name} subtitle={mod.count} icon={mod.icon} className="hover:border-primary/50 transition-colors cursor-pointer group">
                                <Link href={mod.href} className="mt-4 flex items-center font-medium text-primary group-hover:underline">
                                    Continue learning <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="mb-6 text-2xl font-bold">Recent Achievements</h2>
                    <Card title="Mock Test Score" subtitle="3 days ago" className="mb-4">
                        <div className="flex items-end gap-2">
                            <span className="text-4xl font-bold text-accent">7.5</span>
                            <span className="mb-1 text-sm text-muted-foreground font-medium">Bands</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">Top 5% of all students this week.</p>
                    </Card>
                    <Card title="Upcoming Deadlines">
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm">
                                <div className="h-2 w-2 rounded-full bg-accent" />
                                <span>Practice Speaking Part 2</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className="h-2 w-2 rounded-full bg-muted" />
                                <span>Reading Mock Exam</span>
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
}
