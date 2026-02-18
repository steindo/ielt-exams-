"use client";

import { useParams, useRouter } from "next/navigation";
import { courseUnits } from "@/data/course_content";
import ExerciseEngine from "@/components/ExerciseEngine";
import TextToSpeech from "@/components/TextToSpeech";
import { useState } from "react";
import { ArrowLeft, BookOpen, Brain, PenTool, Headphones, Mic, Keyboard, ArrowRight, Star } from "lucide-react";

export default function UnitPage() {
    const params = useParams();
    const router = useRouter();
    const unitId = params.unitId as string;
    const unit = courseUnits.find(u => u.id === unitId);

    const [activeSection, setActiveSection] = useState(0);

    if (!unit) return <div className="p-10 text-center text-xl font-bold">Unit not found</div>;

    const scrollToSection = (index: number) => {
        setActiveSection(index);
        const element = document.getElementById(`section-${index}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-[#fcfcfc] flex flex-col h-screen overflow-hidden">
            {/* Minimal Header */}
            <header className="bg-white border-b h-16 flex items-center justify-between px-6 shrink-0 z-50 shadow-sm">
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => router.push('/course')}
                        className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-500 hover:text-slate-900"
                    >
                        <ArrowLeft className="h-6 w-6" />
                    </button>
                    <div className="h-6 w-px bg-slate-200" />
                    <div className="flex flex-col">
                        <h1 className="text-lg font-black text-slate-900 leading-tight">
                            {typeof unit.number === 'number' ? `Unit ${unit.number}` : unit.title}
                        </h1>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                            Page {unit.pageRange}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="px-4 py-1.5 bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-amber-200">
                        Digital Twin v1.0
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar Navigation */}
                <aside className="w-80 bg-slate-50 border-r overflow-y-auto shrink-0 hidden md:block">
                    <div className="p-8">
                        <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] mb-8">On this page</h3>
                        <div className="space-y-2">
                            {unit.lessons?.map((lesson, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => scrollToSection(idx)}
                                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 group flex gap-4 ${activeSection === idx
                                        ? 'bg-white shadow-xl shadow-slate-200/50 border border-slate-100'
                                        : 'hover:bg-slate-200/50'
                                        }`}
                                >
                                    <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black ${activeSection === idx ? 'bg-amber-500 text-white shadow-lg shadow-amber-200' : 'bg-slate-200 text-slate-500'
                                        }`}>
                                        {idx + 1}
                                    </span>
                                    <span className={`text-sm font-bold leading-tight ${activeSection === idx ? 'text-slate-900' : 'text-slate-500'}`}>
                                        {lesson.title}
                                    </span>
                                </button>
                            ))}

                            {/* Exercises Section Link */}
                            <div className="pt-8 mt-8 border-t border-slate-200">
                                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] mb-4">Practice</h3>
                                <button
                                    onClick={() => scrollToSection(99)}
                                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 ${activeSection === 99 ? 'bg-white shadow-xl shadow-slate-200/50 border border-slate-100' : 'hover:bg-slate-200/50'
                                        }`}
                                >
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                                        <PenTool className="h-4 w-4" />
                                    </div>
                                    <span className={`text-sm font-bold ${activeSection === 99 ? 'text-slate-900' : 'text-slate-500'}`}>Action Exercises</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Content Stream */}
                <main className="flex-1 overflow-y-auto bg-white scroll-smooth relative">
                    <div className="max-w-4xl mx-auto px-12 py-20 pb-40">
                        {/* Unit Intro Header */}
                        <div className="mb-24">
                            <h2 className="text-6xl font-black text-slate-900 tracking-tighter mb-6">{unit.title}</h2>
                            <p className="text-2xl font-medium text-slate-400 max-w-2xl leading-relaxed mb-10">{unit.description}</p>

                            {unit.objectives && unit.objectives.length > 0 && (
                                <div className="bg-slate-50 rounded-[2.5rem] p-10 border-2 border-slate-100 flex flex-col gap-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-slate-900 rounded-xl text-white">
                                            <Star className="h-5 w-5 fill-current" />
                                        </div>
                                        <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-900">Unit Objectives</span>
                                    </div>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {unit.objectives.map((obj, i) => (
                                            <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                                {obj}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Lessons / Sections */}
                        <div className="space-y-32">
                            {unit.lessons?.map((lesson, idx) => (
                                <section key={idx} id={`section-${idx}`} className="scroll-mt-24">
                                    <div className="flex items-center gap-4 mb-10 group">
                                        <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl font-black shadow-2xl group-hover:scale-110 transition-transform">
                                            {idx + 1}
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{lesson.title}</h3>
                                    </div>

                                    <div className="space-y-10 pl-16">
                                        {lesson.content.map((block, bIdx) => {
                                            if (block.type === 'header') return (
                                                <h4 key={bIdx} className="text-2xl font-black text-slate-800 pt-6">{block.text}</h4>
                                            );
                                            if (block.type === 'text') return (
                                                <p key={bIdx} className="text-xl leading-relaxed text-slate-600 font-medium">{block.text}</p>
                                            );
                                            if (block.type === 'bullet') return (
                                                <div key={bIdx} className="flex gap-4 items-start group">
                                                    <div className="w-2 h-2 rounded-full bg-slate-300 mt-3 group-hover:bg-amber-400 transition-colors" />
                                                    <p className="text-xl text-slate-600 font-medium leading-relaxed">{block.text}</p>
                                                </div>
                                            );
                                            if (block.type === 'tip') return (
                                                <div key={bIdx} className="my-14 bg-gradient-to-br from-[#1a2b4b] to-[#0d172a] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                                                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                                                        <Brain className="h-40 w-40" />
                                                    </div>
                                                    <div className="flex items-center gap-3 mb-6">
                                                        <div className="p-2 bg-amber-400 rounded-xl text-slate-900">
                                                            <Star className="h-6 w-6 fill-current" />
                                                        </div>
                                                        <span className="text-sm font-black uppercase tracking-[0.3em] text-amber-400">Test Tip</span>
                                                    </div>
                                                    <p className="text-2xl font-bold leading-relaxed text-slate-100 relative z-10">{block.text}</p>
                                                </div>
                                            );
                                            if (block.type === 'audio_script') return (
                                                <div key={bIdx} className="bg-amber-50 rounded-[2rem] p-8 border-2 border-amber-100/50 flex justify-between items-start gap-6 group">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-4">
                                                            <div className="p-1.5 bg-amber-500 rounded-lg text-white">
                                                                <Headphones className="h-4 w-4" />
                                                            </div>
                                                            <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">Audio Script</span>
                                                        </div>
                                                        <p className="text-xl text-slate-700 font-medium italic leading-relaxed">"{block.text}"</p>
                                                    </div>
                                                    <div className="shrink-0 pt-1">
                                                        <TextToSpeech text={block.text || ""} />
                                                    </div>
                                                </div>
                                            );
                                            if (block.type === 'table') return (
                                                <div key={bIdx} className="overflow-hidden rounded-[2rem] border-2 border-slate-100 shadow-sm my-10 bg-white">
                                                    <table className="w-full text-left border-collapse">
                                                        <thead>
                                                            <tr className="bg-slate-50 border-b-2 border-slate-100">
                                                                {block.headers?.map((header, hIdx) => (
                                                                    <th key={hIdx} className="p-6 text-sm font-black text-slate-900 uppercase tracking-widest">{header}</th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {block.rows?.map((row, rIdx) => (
                                                                <tr key={rIdx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                                                                    {row.map((cell, cIdx) => (
                                                                        <td key={cIdx} className="p-6 text-lg font-medium text-slate-600">{cell}</td>
                                                                    ))}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            );
                                            return null;
                                        })}
                                    </div>
                                </section>
                            ))}

                            {/* Exercises Section */}
                            <section id="section-99" className="scroll-mt-24 pt-20 border-t-4 border-slate-100">
                                <div className="flex items-center gap-4 mb-16">
                                    <div className="h-14 w-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-200">
                                        <PenTool className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-4xl font-black text-slate-900 tracking-tight">Theory in Action</h3>
                                </div>

                                <div className="space-y-12">
                                    {unit.exercises.listening && unit.exercises.listening.questions.length > 0 && (
                                        <div className="bg-slate-50 rounded-[3rem] p-12 border-2 border-slate-100">
                                            <div className="flex justify-between items-center mb-10">
                                                <div>
                                                    <h4 className="text-2xl font-black text-slate-900 mb-2">Listening Component</h4>
                                                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Unit Transcription Study</p>
                                                </div>
                                                <TextToSpeech text={unit.exercises.listening.transcript} />
                                            </div>
                                            <ExerciseEngine questions={unit.exercises.listening.questions} onComplete={() => { }} />
                                        </div>
                                    )}

                                    {unit.exercises.vocabulary.length > 0 && (
                                        <div className="bg-white rounded-[3rem] p-12 border-2 border-slate-50 shadow-sm">
                                            <h4 className="text-2xl font-black text-slate-900 mb-10">Vocabulary Mastery</h4>
                                            <ExerciseEngine questions={unit.exercises.vocabulary} onComplete={() => { }} />
                                        </div>
                                    )}
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
