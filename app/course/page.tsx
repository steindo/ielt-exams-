"use client";

import { Book, Star, Lock, ArrowRight, CheckCircle, Headphones, BookOpen, Keyboard, Brain, Languages } from "lucide-react";
import { useRouter } from "next/navigation";
import { courseUnits } from "@/data/course_content";

export default function CourseMapPage() {
    const router = useRouter();

    // For demo, assume user unlocked up to Unit 3
    const currentUnit = 1;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] pb-20">
            <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-amber-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-amber-200">
                            <Book className="h-6 w-6" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900">Official Course</h1>
                            <p className="text-sm text-slate-500 font-medium">IELTS Integrated Program</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 font-bold border border-slate-200">
                        <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                        <span>0 / {courseUnits.length * 100} XP</span>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-heading font-bold mb-4 text-slate-800 tracking-tight">Your Learning Path</h2>
                    <p className="text-slate-600 text-lg">Master every unit from the textbook with an interactive study plan.</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-20 relative">
                    {/* Sections */}
                    {[
                        { title: "Listening Mastery", icon: Headphones, range: [1, 8], color: "amber" },
                        { title: "Reading Proficiency", icon: BookOpen, range: [9, 16], color: "blue" },
                        { title: "Writing Skills", icon: Keyboard, range: [17, 24], color: "emerald" },
                        { title: "Speaking Confidence", icon: Headphones, range: [25, 32], color: "purple" }
                    ].map((section, sIdx) => {
                        const sectionUnits = courseUnits.filter(u => u.number >= section.range[0] && u.number <= section.range[1]);
                        if (sectionUnits.length === 0) return null;

                        return (
                            <section key={sIdx} className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${sIdx * 150}ms` }}>
                                <div className={`flex items-center gap-4 border-l-4 border-${section.color}-500 pl-6 mb-12`}>
                                    <div className={`p-3 bg-${section.color}-100 text-${section.color}-600 rounded-2xl`}>
                                        <section.icon className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest">{section.title}</h2>
                                        <p className="text-slate-500 font-medium">Textbook Units {section.range[0]} - {section.range[1]}</p>
                                    </div>
                                </div>

                                <div className="space-y-8 relative">
                                    {/* Vertical Line for this section */}
                                    <div className="absolute left-[31px] top-8 bottom-8 w-1 bg-slate-200/50 rounded-full -z-10" />

                                    {sectionUnits.map((unit, index) => {
                                        const isUnlocked = true;
                                        const isCompleted = unit.number < 2;
                                        const isActive = unit.number === 2;

                                        return (
                                            <div
                                                key={unit.id}
                                                className={`relative pl-24 group transition-all duration-500 ${!isUnlocked ? 'opacity-60 grayscale' : 'opacity-100'}`}
                                            >
                                                {/* Node */}
                                                <div className={`absolute left-0 top-4 h-16 w-16 rounded-2xl border-4 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 shadow-xl ${isCompleted ? 'bg-green-500 border-green-200 text-white' :
                                                    isActive ? `bg-${section.color}-500 border-${section.color}-200 text-white animate-pulse ring-8 ring-${section.color}-50` :
                                                        'bg-white border-slate-100 text-slate-300 group-hover:border-slate-300'
                                                    }`}>
                                                    {isCompleted ? <CheckCircle className="h-8 w-8" /> :
                                                        !isUnlocked ? <Lock className="h-6 w-6" /> :
                                                            <span className="text-2xl font-black font-heading">{unit.number}</span>
                                                    }
                                                </div>

                                                {/* Card */}
                                                <div
                                                    onClick={() => isUnlocked && router.push(`/course/${unit.id}`)}
                                                    className={`bg-white p-6 rounded-3xl border-2 transition-all duration-500 cursor-pointer overflow-hidden relative group ${isActive ? `border-${section.color}-500 shadow-2xl shadow-${section.color}-100 transform scale-[1.02]` :
                                                        isCompleted ? 'border-green-500/50 shadow-lg shadow-green-50' :
                                                            'border-slate-50 shadow-sm hover:border-slate-200 hover:shadow-xl'
                                                        }`}
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="z-10">
                                                            <h3 className={`text-2xl font-bold font-heading ${isActive ? `text-${section.color}-900` : 'text-slate-800'}`}>
                                                                {unit.title}
                                                            </h3>
                                                            <p className="text-slate-500 font-medium text-lg mt-1 pr-12">{unit.description}</p>
                                                        </div>
                                                        {isActive && (
                                                            <div className={`px-4 py-1.5 bg-${section.color}-100 text-${section.color}-700 text-xs font-black uppercase rounded-full tracking-widest z-10`}>
                                                                In Progress
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="flex flex-wrap gap-3 mt-6">
                                                        <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg border border-slate-200/50">
                                                            <Brain className="h-3 w-3" /> {unit.topics.grammar}
                                                        </div>
                                                        <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg border border-slate-200/50">
                                                            <Languages className="h-3 w-3" /> {unit.topics.vocabulary}
                                                        </div>
                                                    </div>

                                                    <div className={`absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700`}>
                                                        <section.icon className="h-32 w-32" />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        )
                    })}

                </div>
            </main>
        </div>
    );
}
