"use client";

import { FileText, Clock, AlertCircle } from "lucide-react";
import Link from "next/link";
import { officialTests } from "@/data/official_tests";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OfficialPracticeHub() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#f3f4f6] font-serif text-slate-900">
            {/* Official Header Bar */}
            <header className="bg-white border-b border-slate-300 py-4 shadow-sm">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ielts-logo.svg/1200px-Ielts-logo.svg.png"
                            alt="IELTS Logo" className="h-10 opacity-80 grayscale hover:grayscale-0 transition-all" />
                        <div className="h-8 w-px bg-slate-300"></div>
                        <h1 className="text-xl font-bold tracking-tight text-slate-800">Official Practice Library</h1>
                    </div>
                    <button
                        onClick={() => router.push('/dashboard')}
                        className="text-sm font-sans font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1"
                    >
                        <ArrowLeft className="h-4 w-4" /> Exit Exam Mode
                    </button>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto">

                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-8 flex gap-3 text-yellow-800 font-sans text-sm">
                        <AlertCircle className="h-5 w-5 shrink-0" />
                        <p>These tests are formatted to simulate the real exam experience. Please ensure you have at least 2 hours and 45 minutes of uninterrupted time if attempting a full test.</p>
                    </div>

                    <div className="space-y-6">
                        {officialTests.map((test) => (
                            <div key={test.id} className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 rounded-lg p-6 group">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                                            {test.title}
                                        </h2>
                                        <p className="text-slate-600 mt-2 leading-relaxed font-sans">
                                            {test.description}
                                        </p>

                                        <div className="flex items-center gap-6 mt-6 text-sm text-slate-500 font-sans font-medium">
                                            <div className="flex items-center gap-2">
                                                <FileText className="h-4 w-4" /> 4 Components
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4" /> 2h 45m
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/exercises/official/${test.id}`}
                                        className="mt-2 bg-slate-900 text-white px-6 py-3 rounded-md font-sans font-bold hover:bg-amber-700 transition-colors shadow-sm"
                                    >
                                        Start Test
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
}
