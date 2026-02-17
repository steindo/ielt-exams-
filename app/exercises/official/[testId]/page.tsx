"use client";

import { useState } from "react";
import { officialTests, OfficialTest } from "@/data/official_tests";
import { useParams, useRouter } from "next/navigation";
import { Clock, BookOpen, PenTool, Mic, Headphones, ArrowRight, CheckCircle } from "lucide-react";
import ExerciseEngine from "@/components/ExerciseEngine";

export default function OfficialTestPage() {
    const params = useParams();
    const router = useRouter();
    const testId = params.testId as string;
    const test = officialTests.find((t) => t.id === testId);

    // Define the completion handler explicitly to avoid build errors
    const handleModuleComplete = (score: number) => {
        alert(`Module completed! Score: ${score}`);
    };

    const [activeModule, setActiveModule] = useState<'listening' | 'reading' | 'writing' | 'speaking' | 'intro'>('intro');

    if (!test) {
        return <div className="p-12 text-center">Test not found</div>;
    }

    // Common UI Wrapper for "Paper" feel
    const PaperWrapper = ({ children, title }: { children: React.ReactNode; title: string }) => (
        <div className="max-w-5xl mx-auto bg-white shadow-lg border border-slate-200 min-h-[800px] my-8 relative">
            {/* Paper Header */}
            <div className="bg-slate-50 border-b border-slate-200 p-8 flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900">{title}</h2>
                    <p className="text-slate-500 font-sans mt-2 uppercase tracking-widest text-xs">International English Language Testing System</p>
                </div>
                <div className="font-mono text-xl text-slate-700 bg-white px-4 py-2 border rounded border-slate-300 flex items-center gap-2">
                    <Clock className="h-5 w-5" /> 00:00:00
                </div>
            </div>

            {/* Paper Content */}
            <div className="p-12 font-serif text-lg leading-relaxed text-slate-800">
                {children}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#e5e7eb] font-sans pb-12">
            {/* Test Navigation Bar */}
            <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="font-bold text-lg">{test.title}</div>
                    <div className="flex gap-1">
                        {[
                            { id: 'listening', icon: Headphones, label: 'Listening' },
                            { id: 'reading', icon: BookOpen, label: 'Reading' },
                            { id: 'writing', icon: PenTool, label: 'Writing' },
                            { id: 'speaking', icon: Mic, label: 'Speaking' },
                        ].map((mod) => (
                            <button
                                key={mod.id}
                                onClick={() => setActiveModule(mod.id as any)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${activeModule === mod.id
                                        ? 'bg-amber-600 text-white font-bold'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                    }`}
                            >
                                <mod.icon className="h-4 w-4" /> {mod.label}
                            </button>
                        ))}
                    </div>
                    <button onClick={() => router.push('/exercises/official')} className="text-sm hover:underline opacity-80">Close Test</button>
                </div>
            </nav>

            {/* Intro Screen */}
            {activeModule === 'intro' && (
                <div className="max-w-3xl mx-auto mt-20 bg-white p-12 rounded-xl shadow-xl text-center">
                    <h1 className="text-4xl font-serif font-bold mb-6 text-slate-900">Are you ready?</h1>
                    <p className="text-lg text-slate-600 mb-8">
                        This exam simulation replicates the official IELTS conditions.
                        <br />Make sure you are in a quiet environment.
                    </p>
                    <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-12 text-left">
                        <div className="p-4 bg-slate-50 border rounded flex items-center gap-3">
                            <Headphones className="h-6 w-6 text-amber-600" /> <span>Check Audio</span>
                        </div>
                        <div className="p-4 bg-slate-50 border rounded flex items-center gap-3">
                            <Clock className="h-6 w-6 text-amber-600" /> <span>Clear Schedule</span>
                        </div>
                    </div>
                    <button
                        onClick={() => setActiveModule('listening')}
                        className="bg-amber-600 text-white px-10 py-4 text-xl font-bold rounded shadow-lg hover:bg-amber-700 transition"
                    >
                        Start Examination
                    </button>
                </div>
            )}

            {/* Modules */}
            {activeModule === 'listening' && (
                <PaperWrapper title="Listening Module">
                    <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm font-sans text-blue-900">
                        <strong>Instructions:</strong> Listen to the audio and answer the questions. The audio will only play ONCE.
                    </div>
                    {/* Placeholder for real audio player */}
                    <div className="w-full bg-slate-100 p-4 rounded mb-8 flex items-center justify-center border border-dashed border-slate-300 h-24 text-slate-400">
                        [Audio Player Placeholder]
                    </div>

                    <ExerciseEngine questions={test.modules.listening} onComplete={handleModuleComplete} />
                </PaperWrapper>
            )}

            {activeModule === 'reading' && (
                <PaperWrapper title="Reading Module">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left: Passage */}
                        <div className="prose prose-slate max-w-none border-r border-slate-200 pr-8 h-[700px] overflow-y-auto custom-scrollbar">
                            {/* Rendering MD equivalent of the passage */}
                            {test.modules.reading.map((section, idx) => (
                                <div key={idx} className="mb-12 border-b pb-12">
                                    <div dangerouslySetInnerHTML={{ __html: section.passage.replace(/\n/g, '<br/>') }} />
                                </div>
                            ))}
                        </div>

                        {/* Right: Questions */}
                        <div className="h-[700px] overflow-y-auto pl-4">
                            {test.modules.reading.map((section, idx) => (
                                <div key={idx} className="mb-12">
                                    <h3 className="font-bold text-xl mb-4 bg-slate-100 p-2 inline-block">Section {idx + 1} Questions</h3>
                                    <ExerciseEngine questions={section.questions} onComplete={handleModuleComplete} />
                                </div>
                            ))}
                        </div>
                    </div>
                </PaperWrapper>
            )}

            {activeModule === 'writing' && (
                <PaperWrapper title="Writing Module">
                    <div className="space-y-16">
                        <section>
                            <div className="bg-slate-100 px-4 py-2 font-bold font-sans uppercase text-sm text-slate-600 mb-4 inline-block">Task 1 (20 minutes)</div>
                            <div className="border-l-4 border-slate-900 pl-6 py-2 mb-6 italic text-slate-700 bg-slate-50">
                                {test.modules.writing.task1}
                            </div>
                            <textarea
                                className="w-full h-64 border border-slate-300 p-6 font-mono text-sm leading-relaxed focus:ring-2 focus:ring-amber-500 outline-none resize-none shadow-inner bg-[#fffdf5]"
                                placeholder="Type your response here..."
                            ></textarea>
                            <div className="text-right text-sm text-slate-400 mt-2">Word count: 0</div>
                        </section>

                        <hr className="border-slate-200" />

                        <section>
                            <div className="bg-slate-100 px-4 py-2 font-bold font-sans uppercase text-sm text-slate-600 mb-4 inline-block">Task 2 (40 minutes)</div>
                            <div className="border-l-4 border-slate-900 pl-6 py-2 mb-6 italic text-slate-700 bg-slate-50">
                                {test.modules.writing.task2}
                            </div>
                            <textarea
                                className="w-full h-96 border border-slate-300 p-6 font-mono text-sm leading-relaxed focus:ring-2 focus:ring-amber-500 outline-none resize-none shadow-inner bg-[#fffdf5]"
                                placeholder="Type your essay here..."
                            ></textarea>
                            <div className="text-right text-sm text-slate-400 mt-2">Word count: 0</div>
                        </section>
                    </div>
                </PaperWrapper>
            )}

            {activeModule === 'speaking' && (
                <PaperWrapper title="Speaking Module">
                    <div className="text-center py-12">
                        <Mic className="h-16 w-16 mx-auto text-amber-600 mb-6" />
                        <h3 className="text-2xl font-bold mb-2">Part 1: Interview</h3>
                        <p className="mb-8 text-slate-500">The examiner will ask you general questions about yourself.</p>

                        <div className="bg-slate-50 max-w-lg mx-auto p-8 rounded-lg border border-slate-200 text-left space-y-4 mb-8">
                            {test.modules.speaking.part1.map((q, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="font-bold text-amber-600">Q{i + 1}:</span>
                                    <span>{q}</span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-red-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-red-700 flex items-center gap-2 mx-auto">
                            <Mic className="h-5 w-5" /> click to Start Recording
                        </button>
                    </div>
                </PaperWrapper>
            )}

        </div>
    );
}
